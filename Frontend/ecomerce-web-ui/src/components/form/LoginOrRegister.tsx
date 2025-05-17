'use client';
import Link from "next/link";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import githubICon from "@/utils/img/logo/icons8-github.svg";
import googleICon from "@/utils/img/logo/icons8-google.svg";
import Image from "next/image";

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

            <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>

            <div className="flex gap-4 justify-center">
                <button type="button" className="flex items-center justify-center w-1/2 p-3 border border-gray-300 rounded-lg
                transition-colors text-black hover:bg-gray-500 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                    <Image
                        src={githubICon}
                        alt="GitHub"
                        width={24}
                        height={24}
                        className="mr-2"
                    />
                    <span className="font-bold">GitHub</span>
                </button>
                <button type="button" className="flex items-center justify-center w-1/2 p-3 border border-gray-300 rounded-lg
                transition-colors text-black hover:bg-red-300 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent">
                    <Image
                        src={googleICon}
                        alt="Google"
                        width={24}
                        height={24}
                        className="mr-2"
                    />
                    <span className="font-bold">Google</span>
                </button>
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center">
                {props.isLogin ? "Don't have an account?" : "Already have an account?"}
                <Link href={props.isLogin ? "/auth/register" : "/auth/login"} className="text-blue-500 hover:underline ml-1">
                    {props.isLogin ? "Register" : "Login"}
                </Link>
            </p>
        </div>
    )
}