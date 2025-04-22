import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
export interface JWTPayload {
    sub: string;
    role: string;
    iat: number;
    exp: number;
}

export default async function getJwtPayload(): Promise<JWTPayload | null> {
    const cookiesStorage = await cookies();
    const token = cookiesStorage.get("accessToken")?.value || null;

    if (!token) {
        return null;
    } else {
        const decodedToken = jwtDecode<JWTPayload>(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp < currentTime) {
            sessionStorage.removeItem("accessToken");
            return null;
        } else {
            return decodedToken;
        }
    }
}