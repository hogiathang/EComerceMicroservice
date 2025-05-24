import dotenv from "dotenv";
dotenv.config();

const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
export const backendApiPath = {
    customerRegister: `${backendApiUrl}/customer/register`,
    login: `${backendApiUrl}/auth/login`,
    logout: `${backendApiUrl}/logout`,
    userInfoHeader: `${backendApiUrl}/account/user-base-info`,
}