'use client'
import HandleFieldChange from "@/lib/handleOnChangeField";
import Field from "./input/field";
import { useState } from "react";
import { sendRequest } from "@/lib/sendRequest";
import { backendApiPath } from "@/lib/backendApiPath";
import { toast } from 'react-toastify';

const HandleRegisterFormSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    formData: { name: string; email: string; password: string },
) => {
    e.preventDefault();

    let userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
    }
    try {
        const returnValue = sendRequest(
            backendApiPath.register,
            "POST",
            userData,
            {
                "Content-Type": "application/json",
            },
            true
        )
        returnValue.then((response) => {
            if (response.success) {
                toast.success("User registered successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.location.href = "/"
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
        console.error("Error in registration:", error);
        toast.error("An error occurred during registration.", {
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

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    return (
        <div className="w-full max-w-lg mx-auto">
            <Field
                label="Username"
                name="name"
                type="text"
                placeholder="Enter your username"
                value={formData.name}
                onChange={(e) => HandleFieldChange(e, formData, setFormData)}
                error={""}
            />
            <Field
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
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
                onClick={(e => HandleRegisterFormSubmit(e, formData))}>
                Get Started
            </button>
        </div>
    )
}