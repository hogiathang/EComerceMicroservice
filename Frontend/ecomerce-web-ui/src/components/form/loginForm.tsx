'use client';
import { useState } from "react";
import Field from "./input/field";
import { HandleFieldChange, HandleErrorChange } from "@/lib/others/handleOnChangeField";
import { sendRequest } from "@/lib/request/sendRequest";
import { backendApiPath } from "@/lib/API/backendApiPath";
import { toast } from "react-toastify";
import { ShowToast } from "@/lib/notification/toastHandler";
import { saveFieldToSession } from "@/lib/storageApi/sessionApi";

interface LoginInterface extends Tokens {
    user: User
}

const HandleLoginFormSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    formData: { username: string; password: string },
) => {
    e.preventDefault();

    const userData = {
        username: formData.username,
        password: formData.password,
    }
    try {
        const returnValue = sendRequest<ResponseData<LoginInterface>>(
            backendApiPath.login,
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
                        ShowToast(response.data?.message || "Login failed", "ERROR");
                    }
                }
            } else {
                ShowToast(response.data?.message || "Login failed", "ERROR");
            }
        })
    } catch (error) {
        console.error("Error in login:", error);
        ShowToast("An error occurred durring login.", "ERROR")
    }
}

export default function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })

    return (
        <div className="w-full max-w-lg mx-auto">
            <Field
                label="Username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => {
                    const inputValue = e.target.value
                    const pattern = /^[a-zA-Z]{5,}[0-9]*[a-zA-Z]*$/
                    if (!pattern.test(inputValue)) {
                        HandleErrorChange(
                            "Username must start with at least 5 letters, followed by optional numbers and letters",
                            "username",
                            errors,
                            setErrors
                        )
                    } else {
                        HandleErrorChange(
                            "",
                            "username",
                            errors,
                            setErrors
                        )
                    }
                    HandleFieldChange(e, formData, setFormData)
                }}
                error={errors.username}
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
                    if (errors.username !== "" || errors.password !== "") {
                        toast.error("Please fix the errors in the form before submitting", {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        return;
                    }

                    if (!formData.username || !formData.password) {
                        toast.error("Please fill in all required fields", {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        return;
                    }

                    HandleLoginFormSubmit(e, formData);
                })}
            >
                Login
            </button>
        </div>
    )
}