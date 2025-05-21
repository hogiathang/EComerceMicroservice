'use client';
import Image from "next/image";
import { toast } from "react-toastify";
interface ItemCardProps {
    id: string,
    name: string,
    price: number,
    brand: string,
    itemImage: string,
    description: string,
    discount?: number,
    quantity?: number,
}

export default function ItemCard(
    properties: ItemCardProps
) {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg p-3 sm:p-4 flex flex-col items-center justify-between relative">
            <div className="w-full aspect-square relative mb-2">
                <div className="">
                    <Image
                        src={properties.itemImage}
                        alt={properties.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="absolute left-0 right-0 top-0 bottom-0
                transition-all duration-300 ease-in-out opacity-0 hover:opacity-100
                bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 overflow-y-auto
                flex flex-col">
                    <h4 className="text-base sm:text-lg font-bold text-blue-600 border-b border-gray-200 pb-2 mb-2">Product Details</h4>

                    <div className="mb-3">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs mb-2">{properties.brand}</span>
                    </div>

                    <div className="flex-grow">
                        <p className="text-sm sm:text-base text-gray-700 mb-3">{properties.description}</p>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-black truncate">{properties.name}</h3>

                <div className="flex flex-wrap items-center gap-1 mb-2">
                    {properties.discount ? (
                        <>
                            <span className="line-through text-xs sm:text-sm text-red-500">${properties.price}</span>
                            <span className="text-sm sm:text-base font-medium text-green-500">
                                ${(properties.price * (1 - properties.discount / 100)).toFixed(2)}
                            </span>
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full ml-auto">
                                {properties.discount}% off
                            </span>
                        </>
                    ) : (
                        <span className="text-base sm:text-lg font-medium text-gray-700">${properties.price}</span>
                    )}
                </div>
                <button onClick={() => handleAddToCart(properties)}
                    className="w-full py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded-lg transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

const handleAddToCart = (item: ItemCardProps) => {
    const localStorageCartItems = localStorage.getItem('cartItems');
    const cartItems = localStorageCartItems ? JSON.parse(localStorageCartItems) : [];
    const existingItemIndex = cartItems.findIndex((cartItem: ItemCardProps) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
    } else {
        const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            brand: item.brand,
            image: item.itemImage,
            description: item.description,
            discount: item.discount,
            quantity: 1
        }
        cartItems.push(newItem);

    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    addSuccessWithToast(`${item.name} has been added to your cart!`);
}

const addSuccessWithToast = (message: string) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}