'use client'
import { HandleFieldChange, HandleErrorChange } from "@/lib/others/handleOnChangeField";
import Field from "./input/field";
import { useState } from "react";
import { sendRequest } from "@/lib/request/sendRequest";
import { backendApiPath } from "@/lib/API/backendApiPath";
import { ROLE } from '@/lib/enumuration/enum'
import { ShowToast } from "@/lib/notification/toastHandler";
import { saveFieldToSession } from "@/lib/storageApi/sessionApi";

interface RegisterInterface extends Tokens {
    user: User
}

const HandleRegisterFormSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    formData: { name: string; email: string; password: string },
) => {
    e.preventDefault();
    const userData = {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        roleToRegister: ROLE.CUSTOMER
    }
    try {
        const returnValue = sendRequest<ResponseData<RegisterInterface>>(
            backendApiPath.customerRegister,
            "POST",
            userData,
            {
                "Content-Type": "application/json",
            }
        )
        returnValue.then((response) => {
            if (response.success) {
                const data = response.data
                if (data) {
                    if (response.success && data.data) {
                        saveFieldToSession("UID", data.data.user.userId)
                        saveFieldToSession("Username", data.data.user.username)
                        saveFieldToSession("AccessToken", data.data.accessToken)
                        saveFieldToSession("RefreshToken", data.data.refreshToken)

                        ShowToast(data.message, "SUCCESS")
                        window.location.href = "/"
                    } else {
                        ShowToast(response.data?.message || "Registration failed", "ERROR");
                    }
                }
            } else {
                ShowToast(response.data?.message || "Registration failed", "ERROR");
            }
        })
    } catch (error) {
        ShowToast("An error occurred during registration.", "ERROR")
    }
}

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    })

    return (
        <div className="w-full max-w-lg mx-auto">
            <Field
                label="Username"
                name="name"
                type="text"
                placeholder="Enter your username"
                value={formData.name}
                onChange={(e) => {
                    const inputValue = e.target.value
                    const pattern = /^[a-zA-Z]{5,}[0-9]*[a-zA-Z]*$/
                    if (!pattern.test(inputValue)) {
                        HandleErrorChange(
                            "Username must start with at least 5 letters, followed by optional numbers and letters",
                            "name",
                            errors,
                            setErrors
                        )
                    } else {
                        HandleErrorChange(
                            "",
                            "name",
                            errors,
                            setErrors
                        )
                    }
                    HandleFieldChange(e, formData, setFormData)
                }}
                error={errors.name}
            />
            <Field
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                    const inputValue = e.target.value
                    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!pattern.test(inputValue)) {
                        HandleErrorChange(
                            "Email must be a valid email address (e.g. example@domain.com)",
                            "email",
                            errors,
                            setErrors
                        )
                    } else {
                        HandleErrorChange(
                            "",
                            "email",
                            errors,
                            setErrors
                        )
                    }
                    HandleFieldChange(e, formData, setFormData)
                }}
                error={errors.email}
            />
            <Field
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    const pattern = /^.{4,}$/;

                    if (!pattern.test(inputValue)) {
                        HandleErrorChange(
                            "Password must be at least 4 character",
                            "password",
                            errors,
                            setErrors
                        );
                    } else {
                        HandleErrorChange(
                            "",
                            "password",
                            errors,
                            setErrors
                        );
                    }
                    HandleFieldChange(e, formData, setFormData);
                }}
                error={errors.password}
            />
            <button type="submit" className="relative w-full mb-6
    bg-black text-white text-sm font-bold py-4 px-4 rounded-xl
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    hover:bg-gray-800 transition duration-300 ease-in-out"
                onClick={(e => {
                    if (errors.name !== "" || errors.email !== "" || errors.password !== "") {
                        ShowToast("Please fix the errors in the form before submitting", "ERROR", 2000, "top-left")
                        return;
                    }

                    if (!formData.name || !formData.email || !formData.password) {
                        ShowToast("Please fill in all required fields", "ERROR", 2000, "top-left")
                        return;
                    }

                    HandleRegisterFormSubmit(e, formData);
                })}
            >
                Get Started
            </button>
        </div >
    )
}