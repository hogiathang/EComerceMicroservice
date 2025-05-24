interface ResponseData<T> {
    success: boolean;
    data?: T;
    message?: string;
}

export async function sendRequest<T>(
    url: string,
    method: string,
    body?: object,
    headers?: HeadersInit
): Promise<ResponseData<T>> {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                ...headers
            },
            body: JSON.stringify(body),
            credentials: "include",
        });
        if (!response.ok) {
            const errorData = await response.json();
            return {
                success: false,
                message: errorData.message || "An error occurred",
            }
        } else {
            const data = await response.json();
            console.log(data)
            return {
                success: true,
                data: data,
            }
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            message: "Server not responding",
        }
    }
}