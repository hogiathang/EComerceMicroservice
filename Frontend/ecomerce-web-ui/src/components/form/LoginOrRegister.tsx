'use client';
import Link from "next/link";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

interface LoginOrRegisterFormProps {
    isLogin: boolean;
}

export default function LoginOrRegisterForm(
    props: LoginOrRegisterFormProps
) {
    return (
        <div className="w-full max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4
                text-center text-gray-800">
                {props.isLogin ? "Login" : "Register"}
            </h1>

            {props.isLogin ? <LoginForm /> : <RegisterForm />}

            <p className="mt-4 text-sm text-gray-600 text-center">
                {props.isLogin ? "Don't have an account?" : "Already have an account?"}
                <Link href={props.isLogin ? "/auth/register" : "/auth/login"} className="text-blue-500 hover:underline ml-1">
                    {props.isLogin ? "Register" : "Login"}
                </Link>
            </p>
        </div>
    )
}