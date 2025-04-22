'use client';
import { useState } from "react";
import Field from "./input/field";
import HandleFieldChange from "@/lib/handleOnChangeField";
import { sendRequest } from "@/lib/sendRequest";
import { backendApiPath } from "@/lib/backendApiPath";
import { toast } from "react-toastify";
import { setAuthToken } from "@/lib/jwtsUtils";

const HandleLoginFormSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    formData: { usernameOrEmail: string; password: string },
) => {
    e.preventDefault();

    let userData = {
        usernameOrEmail: formData.usernameOrEmail,
        password: formData.password,
    }
    try {
        const returnValue = sendRequest(
            backendApiPath.login,
            "POST",
            userData,
            {
                "Content-Type": "application/json",
            },
            true
        )
        returnValue.then((response) => {
            if (response.success) {
                toast.success("User login successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(response.data.accessToken);
                window.location.href = "/";
            } else {
                toast.error(response.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
    } catch (error) {
        console.error("Error in login:", error);
        toast.error("An error occurred during login.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

export default function LoginForm() {
    const [formData, setFormData] = useState({
        usernameOrEmail: "",
        password: "",
    })
    return (
        <div className="w-full max-w-lg mx-auto">
            <Field
                label="Username or Email"
                name="usernameOrEmail"
                type="text"
                placeholder="Enter your username or email"
                value={formData.usernameOrEmail}
                onChange={(e) => HandleFieldChange(e, formData, setFormData)}
                error={""}
            />
            <Field
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => HandleFieldChange(e, formData, setFormData)}
                error={""}
            />
            <button type="submit" className="relative w-full mb-6
                bg-black text-white text-sm font-bold py-4 px-4 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                hover:bg-gray-800 transition duration-300 ease-in-out"
                onClick={(e) => HandleLoginFormSubmit(e, formData)}>
                Login
            </button>
        </div>
    )
}