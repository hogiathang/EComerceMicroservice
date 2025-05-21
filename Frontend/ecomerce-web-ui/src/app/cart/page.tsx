import { MainCart } from "@/components/cart/mainCart";

export const metadata = {
    title: 'Shopping Cart',
    description: 'View and manage items in your shopping cart',
};

export default function CartPage() {
    return (

        <div className="flex flex-col min-h-screen py-6 bg-gray-100 text-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6">Shopping Cart</h1>
                <MainCart />
            </div>
        </div>
    )
}