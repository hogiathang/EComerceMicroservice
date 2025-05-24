'use client';
import Link from "next/link";
import { SearchBar } from "./utils/search-bar";
import Logo from "@images/logo.jpg";
import CartImg from "@images/cart.svg";
import Image from "next/image";
import { getFieldFromSession } from "@/lib/storageApi/sessionApi";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/lib/storageApi/localStorageApi";

const HeaderLink = {
    login: "/auth/login",
    register: "/auth/register",
    products: "/products",
    about: "/about",
    contact: "/contact",
    cart: "/cart",
    home: "/",
};

export default function HeaderBar() {
    const [cartItems, setCartItems] = useLocalStorage<Items[]>("cartItems", [])
    const [username, setUsername] = useState<string | null>(null)
    const [loginToggle, setLoginToggle] = useState<boolean>(false)

    useEffect(() => {
        setUsername(getFieldFromSession("Username"))

    }, [])

    const renderUserSection = () => {
        if (username === null) {
            return (
                <Link href={HeaderLink.login} className="text-gray-600 hover:text-gray-900 text-lg">
                    Login
                </Link>
            );
        } else {
            return (
                <div className="relative group text-base">
                    <button className="flex items-center text-gray-600 hover:text-gray-900 text-lg hover:cursor-pointer"
                        onClick={() => setLoginToggle(!loginToggle)}>
                        <span className="mr-1">Hi, {username}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {loginToggle && loginMenu()}
                </div>
            )
        }
    }

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={HeaderLink.home} className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={40}
                            height={40}
                            className="mr-4"
                        />
                        <h1 className="text-2xl font-bold text-black">T-commerce</h1>
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link href={HeaderLink.home} className="text-gray-600 hover:text-gray-900 text-lg">Home</Link>
                    <Link href={HeaderLink.products} className="text-gray-600 hover:text-gray-900 text-lg">Products</Link>
                    <Link href={HeaderLink.about} className="text-gray-600 hover:text-gray-900 text-lg">About</Link>
                </nav>

                <div className="hidden md:flex relative w-1/3">
                    <SearchBar />
                </div>

                <nav className="flex space-x-4">
                    <Link href={HeaderLink.cart} className="text-gray-600 hover:text-gray-900">
                        <div className="relative">
                            <Image
                                src={CartImg}
                                alt="Cart"
                                width={30}
                                height={30}
                            />
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">{cartItems.length}</span>
                        </div>
                    </Link>
                    {renderUserSection()}
                </nav>
            </div>
        </header >
    );
}

const loginMenu = () => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
            <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                My Profile
            </Link>
            <Link
                href="/orders"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                My Orders
            </Link>
            <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                Logout
            </button>
        </div>
    )
}