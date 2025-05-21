import Image from 'next/image';
import { CartItemType } from './mainCart';

interface CartItemProps {
    item: CartItemType;
    updateQuantity: (id: string, quantity: number) => void;
    removeItem: (id: string) => void;
}

export default function CartItem({ item, updateQuantity, removeItem }: CartItemProps) {
    const itemTotal = item.price * item.quantity;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
            <div className="col-span-1 sm:col-span-6 flex">
                <div className="relative h-20 w-20 rounded overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/80';
                        }}
                    />
                </div>
                <div className="ml-4">
                    <h3 className="text-sm sm:text-base font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.brand}</p>
                    <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs mt-2 flex items-center"
                    >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Remove
                    </button>
                </div>
            </div>

            {/* Price */}
            <div className="col-span-1 sm:col-span-2 flex items-center justify-center">
                <span className="text-gray-700">${item.price.toFixed(2)}</span>
            </div>

            {/* Quantity */}
            <div className="col-span-1 sm:col-span-2 flex items-center justify-center">
                <div className="flex items-center border rounded">
                    <button
                        className="px-2 py-1 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                    >
                        -
                    </button>
                    <span className="px-2 py-1 min-w-[30px] text-center">{item.quantity}</span>
                    <button
                        className="px-2 py-1 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Total */}
            <div className="col-span-1 sm:col-span-2 flex items-center justify-end">
                <span className="font-medium">${itemTotal.toFixed(2)}</span>
            </div>
        </div>
    );
}
