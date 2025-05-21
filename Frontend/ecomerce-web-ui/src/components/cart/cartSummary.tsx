'use client'
import { useState } from 'react';

interface CartSummaryProps {
    subtotal: number;
}

export default function CartSummary({ subtotal }: CartSummaryProps) {
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);

    const shipping = subtotal > 100 ? 0 : 10;
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const tax = (subtotal - discount) * 0.07;
    const total = subtotal - discount + shipping + tax;

    const applyPromoCode = () => {
        if (promoCode.toLowerCase() === 'discount10') {
            setPromoApplied(true);
        } else {
            alert('Invalid promo code');
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                    </div>
                )}

                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                </div>

                <div className="h-px bg-gray-200 my-2"></div>

                <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="promo" className="text-sm font-medium text-gray-700">
                    Promo Code
                </label>
                <div className="mt-1 flex">
                    <input
                        type="text"
                        id="promo"
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button
                        className="inline-flex items-center px-3 py-2 border border-transparent rounded-r-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={applyPromoCode}
                    >
                        Apply
                    </button>
                </div>
                {promoApplied && (
                    <p className="text-green-600 text-sm mt-1">Promo code applied!</p>
                )}
            </div>

            <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors">
                Proceed to Checkout
            </button>

            <div className="mt-4 text-xs text-gray-500 text-center">
                <p>Secure checkout with encryption</p>
                <div className="flex justify-center mt-2 space-x-2">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>PayPal</span>
                </div>
            </div>
        </div>
    );
}
