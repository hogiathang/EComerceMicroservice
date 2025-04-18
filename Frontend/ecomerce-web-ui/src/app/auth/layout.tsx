import BackGroundImg from '@images/auth-background.jpg'
import React from 'react'


const backgroundStyle = {
    backgroundImage: `url(${BackGroundImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex items-center justify-center min-h-screen" style={backgroundStyle}>
            <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                {children}
            </div>
        </div>
    )
}