import { usePathname, useRouter } from 'next/navigation';

const categories = [
    { id: 'electronic', name: "Electronics", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { id: 'fashion', name: "Fashion", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { id: 'home-garden', name: "Home & Garden", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { id: 'sports', name: "Sports", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
];



export default function VerticalFilter() {
    const router = useRouter();
    const pathname = usePathname();

    const handleCategoryClick = (categoryId: string) => {
        router.push(`/category/${categoryId}`);
    };

    return (
        <div className="w-[20%] bg-gray-100 h-screen overflow-y-auto">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                <div className="flex flex-col bg-white shadow-md rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    <ul className="space-y-2">
                        <li key='product' className="flex items-center">
                            <button
                                className={`w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors
                                ${pathname === `/products` ? 'font-semibold bg-gray-50' : ''}`}
                                onClick={() => { router.push(`/products`) }}
                            >
                                All Products
                            </button>
                        </li>

                        {categories.map(category => (
                            <li key={category.id} className="flex items-center">
                                <button
                                    className={`w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition-colors
                                              ${pathname === `/category/${category.id}` ? 'font-semibold bg-gray-50' : ''}`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col bg-white shadow-md rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Price Range</h3>
                    <div className="space-y-3">
                        <div>
                            <label htmlFor="min-price" className="block text-sm">Min Price</label>
                            <input type="range" id="min-price" min="0" max="1000" className="w-full" />
                            <span className="text-sm text-gray-600">$0</span>
                        </div>
                        <div>
                            <label htmlFor="max-price" className="block text-sm">Max Price</label>
                            <input type="range" id="max-price" min="0" max="1000" className="w-full" />
                            <span className="text-sm text-gray-600">$1000</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-white shadow-md rounded-lg p-4 mb-4"></div>

                <h3 className="text-lg font-semibold mb-2">Brands</h3>
                <ul className="space-y-2">
                    <li><input type="checkbox" id="brand1" className="mr-2" /> <label htmlFor="brand1">Brand A</label></li>
                    <li><input type="checkbox" id="brand2" className="mr-2" /> <label htmlFor="brand2">Brand B</label></li>
                    <li><input type="checkbox" id="brand3" className="mr-2" /> <label htmlFor="brand3">Brand C</label></li>
                    <li><input type="checkbox" id="brand4" className="mr-2" /> <label htmlFor="brand4">Brand D</label></li>
                </ul>
            </div>
        </div>
    )
}