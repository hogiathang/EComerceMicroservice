'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import CartItem from "@/components/cart/cartItem"
import CartSummary from "@/components/cart/cartSummary"

export type CartItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    brand: string;
}

export const MainCart = () => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        if (!isClient) return;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const isEmpty = cartItems.length === 0;

    return (
        <>
            {
                isEmpty ? (
                    <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow" >
                        <h2 className="text-xl font-semibold">Your Cart is Empty</h2>
                        <p className="mt-4 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
                        <Link href="/products" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                            Continue Shopping
                        </Link>
                    </div >
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6">

                        <div className="flex-grow">
                            <div className="bg-white rounded-lg shadow overflow-hidden">
                                <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium text-gray-500">
                                    <div className="col-span-6">Product</div>
                                    <div className="col-span-2 text-center">Price</div>
                                    <div className="col-span-2 text-center">Quantity</div>
                                    <div className="col-span-2 text-right">Total</div>
                                </div>

                                {cartItems.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        updateQuantity={updateQuantity}
                                        removeItem={removeItem}
                                    />
                                ))}

                                <div className="p-4 border-t flex justify-between">
                                    <Link
                                        href="/products"
                                        className="text-blue-500 hover:text-blue-600 flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Continue Shopping
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setCartItems([])
                                        }}
                                        className="text-red-500 hover:text-red-600 flex items-center"
                                    >
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-80">
                            <CartSummary subtotal={subtotal} />
                        </div>
                    </div>
                )}
        </>
    )
}