'use client';
import { useState } from "react";
import Field from "./input/field";
import HandleFieldChange from "@/lib/handleOnChangeField";
export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    return (
        <div className="w-full max-w-lg mx-auto">
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
                hover:bg-gray-800 transition duration-300 ease-in-out">
                Login
            </button>
        </div>
    )
}