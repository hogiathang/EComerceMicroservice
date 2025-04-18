import LoginOrRegisterForm from "@/components/form/LoginOrRegister";


export default function Login() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4"></h1>
            <LoginOrRegisterForm isLogin={true} />
            <p className="mt-4 text-sm text-gray-600"></p>
        </div>
    )
}