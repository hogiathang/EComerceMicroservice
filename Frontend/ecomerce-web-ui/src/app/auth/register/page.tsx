import LoginOrRegisterForm from "@/components/form/LoginOrRegister";

export default function Register() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4"></h1>
            <LoginOrRegisterForm isLogin={false} />
            <p className="mt-4 text-sm text-gray-600"></p>
        </div>
    )
}