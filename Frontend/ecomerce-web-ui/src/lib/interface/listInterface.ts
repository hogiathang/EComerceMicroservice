interface Tokens {
    accessToken: string,
    refreshToken: string
}

interface User {
    roles: string[],
    userId: string,
    username: string
}

interface ResponseData<T> {
    status: string,
    message: string,
    data?: T
}

interface Items {
    id: string,
    name: string,
    price: number,
    brand: string,
    image: string,
    description: string,
    discount?: number,
    quantity: number,
}

interface ItemsComponentProps {
    title: string;
    description: string;
    sortOrder?: string;
    sortBy?: string;
    items: Items[]
}