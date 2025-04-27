export async function sendRequest(
    url: string,
    method: string,
    body?: object,
    headers?: HeadersInit,
    isLoginOrRegister?: boolean,
): Promise<any> {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
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
            if (isLoginOrRegister) {
                let accessToken = response.headers.get("Authorization");
                if (accessToken) {
                    accessToken = accessToken.split(" ")[1];
                    sessionStorage.setItem("accessToken", accessToken);
                }
            }
            return {
                success: true,
                data: data,
            }
        }
    } catch (error) {
        return {
            success: false,
            message: "Server not responding",
        }
    }
}