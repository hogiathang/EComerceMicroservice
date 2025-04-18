'use client';
import Image from "next/image";
import { useState } from "react";

interface ItemCardProps {
    name: string,
    price: number,
    brand: string,
    itemImage: string,
    description: string,
    discount?: number,
}

export default function ItemCard(
    properties: ItemCardProps
) {
    const [isHovered, setIsHovered] = useState(false);

    function showItemDetailsWhenHovered() {
        if (isHovered) {
            return (
                <div className="absolute left-0 right-0 bg-white shadow-lg rounded-lg p-3 sm:p-4 mt-2 z-10">
                    <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-black">Details</h4>
                    <p className="text-sm sm:text-base text-gray-700 mb-1 sm:mb-2 line-clamp-3">{properties.description}</p>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-xs sm:text-sm text-gray-500">{properties.brand}</span>
                    </div>
                </div>
            );
        }
        return null;
    }

    return (
        <div
            className="w-full bg-white rounded-lg shadow-lg p-3 sm:p-4 flex flex-col items-center justify-between relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full aspect-square relative mb-2">
                <Image
                    src={properties.itemImage}
                    alt={properties.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover rounded-lg"
                />
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

                <button className="w-full py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base rounded-lg transition-colors">
                    Add to Cart
                </button>
            </div>

            {showItemDetailsWhenHovered()}
        </div>
    )
}