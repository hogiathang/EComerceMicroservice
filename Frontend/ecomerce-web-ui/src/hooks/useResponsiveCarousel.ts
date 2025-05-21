import { useState, useEffect } from 'react';

export const useResponsiveCarousel = (totalItems: number) => {
    const [visibleItems, setVisibleItems] = useState(3);
    const [maxIndex, setMaxIndex] = useState(totalItems - visibleItems);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                // Mobile: show 1 item
                setVisibleItems(1);
            } else if (window.innerWidth < 1024) {
                // Tablet: show 2 items
                setVisibleItems(2);
            } else {
                // Desktop: show 3 items
                setVisibleItems(3);
            }
        };

        // Set initial value
        handleResize();

        // Update on resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update maxIndex when visibleItems changes
    useEffect(() => {
        setMaxIndex(Math.max(0, totalItems - visibleItems));
    }, [visibleItems, totalItems]);

    return { visibleItems, maxIndex };
};
