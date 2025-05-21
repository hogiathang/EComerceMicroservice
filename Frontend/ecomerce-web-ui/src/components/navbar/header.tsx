'use client';
import Link from "next/link";
import { SearchBar } from "./utils/search-bar";
import Logo from "@images/logo.jpg";
import CartImg from "@images/cart.svg";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { sendRequest } from "@/lib/sendRequest";
// import { backendApiPath } from "@/lib/backendApiPath";

const HeaderLink = {
    login: "/auth/login",
    register: "/auth/register",
    products: "/products",
    about: "/about",
    contact: "/contact",
    cart: "/cart",
    home: "/",
};

// interface UserInfoResponse {
//     success: boolean;
//     data: {
//         username: string;
//         avatar: string;
//     };
// }

// const getLoggedInStatus = async () => {
//     try {
//         const response = await sendRequest<UserInfoResponse>(
//             backendApiPath.userInfoHeader,
//             "GET"
//         );
//         return response;
//     } catch {
//         return false;
//     }
// };

// const getLoggedOutStatus = async () => {
//     try {
//         const response = await sendRequest<UserInfoResponse>(
//             backendApiPath.logout,
//             "POST"
//         )
//         return response;
//     } catch {
//         return false;
//     }
// }

export default function HeaderBar() {
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    // const [userInfo, setUserInfo] = useState<{ username: string; avatar: string } | null>(null);

    // useEffect(() => {
    //     const loggedInStatus = sessionStorage.getItem("isLoggedIn");
    //     if (loggedInStatus === "true") {
    //         setIsLoggedIn(true);
    //         getLoggedInStatus().then((response) => {
    //             if (response && response.success && response.data) {
    //                 setUserInfo({
    //                     username: response.data.username,
    //                     avatar: response.data.avatar,
    //                 });
    //             } else {
    //                 setIsLoggedIn(false);
    //                 sessionStorage.setItem("isloggedIn", "false");
    //             }
    //         });
    //     }
    // }, []);

    const renderUserSection = () => {
        // if (isLoggedIn && userInfo) {
        //     return (
        //         <>
        //             <Link href={HeaderLink.register} className="text-gray-600 hover:text-gray-900 text-lg flex items-center">
        //                 <Image
        //                     src={`data:image/png;base64,${userInfo.avatar}`}
        //                     alt="User Avatar"
        //                     width={40}
        //                     height={40}
        //                     className="rounded-full mr-2"
        //                 />
        //                 {userInfo.username}
        //             </Link>
        //             <div className="flex items-center">
        //                 <button
        //                     onClick={() => {
        //                         getLoggedOutStatus().then((response) => {
        //                             if (response) {
        //                                 setIsLoggedIn(false);
        //                                 sessionStorage.setItem("isloggedIn", "false");
        //                             }
        //                         });
        //                     }}
        //                     className="text-gray-600 hover:text-gray-900 text-lg ml-4"
        //                 >
        //                     Logout
        //                 </button>
        //             </div>
        //         </>
        //     );
        // } else {
        return (
            <Link href={HeaderLink.login} className="text-gray-600 hover:text-gray-900 text-lg">
                Login
            </Link>
        );
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
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-xs">0</span>
                        </div>
                    </Link>
                    {renderUserSection()}
                </nav>
            </div>
        </header>
    );
}