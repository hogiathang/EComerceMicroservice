import dotenv from "dotenv";
dotenv.config();

const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
export const backendApiPath = {
    register: `${backendApiUrl}/register`,
    login: `${backendApiUrl}/login`,
}