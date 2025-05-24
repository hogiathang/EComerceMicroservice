'use client';
import ItemCard from "@/components/items/item-card";
import { useState, useEffect } from "react";
import { useResponsiveCarousel } from "@/hooks/useResponsiveCarousel";


interface CarouselProps {
    items: Items[];
    carolHeader: React.ReactNode;
    navigation?: React.ReactNode;
    colorStyle?: string;
}

export const Carousel = (
    { items, carolHeader, navigation, colorStyle }: CarouselProps
) => {
    const [startIndex, setStartIndex] = useState(0);
    const { visibleItems, maxIndex } = useResponsiveCarousel(items.length);

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) =>
                prevIndex >= maxIndex ? 0 : prevIndex + 1
            );
        }, 5000); // Slide every 5 seconds

        return () => clearInterval(interval);
    }, [maxIndex]);

    const goToPrevious = () => {
        setStartIndex((prevIndex) =>
            prevIndex <= 0 ? maxIndex : prevIndex - 1
        );
    };

    const goToNext = () => {
        setStartIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
            {carolHeader}

            <div className="relative overflow-hidden">
                {/* Navigation Buttons */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${(items.length * 100) / visibleItems}%`,
                            transform: `translateX(-${startIndex * (100 / items.length)}%)`
                        }}
                    >
                        {items.map((product) => (
                            <div
                                key={product.id}
                                style={{ width: `${100 / items.length}%` }}
                                className="flex-shrink-0 px-3"
                            >
                                <div className="max-w-[300px] mx-auto w-full">
                                    <ItemCard
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        brand={product.brand}
                                        image={product.image}
                                        description={product.description}
                                        discount={product.discount}
                                        quantity={product.quantity}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-4 space-x-1.5">
                    {Array.from({ length: Math.min(items.length - visibleItems + 1, 4) }).map((_, index) => (
                        <button
                            key={index}
                            className={`transition-all h-1.5 ${startIndex >= index * Math.ceil(maxIndex / 3) &&
                                startIndex < (index + 1) * Math.ceil(maxIndex / 3)
                                ? `w-4 ${colorStyle ? colorStyle : 'bg-red-400'}`
                                : "bg-gray-400 w-3"
                                } rounded-full`}
                            onClick={() => setStartIndex(index * Math.ceil(maxIndex / 3))}
                            aria-label={`Go to slide group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            {navigation}
        </div>
    );
};