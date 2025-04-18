export default function VerticalFilter() {
    return (
        <div className="w-[20%] bg-gray-100 h-screen overflow-y-auto">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                <div className="flex flex-col bg-white shadow-md rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Categories</h3>
                    <ul className="space-y-2">
                        <li><input type="checkbox" id="category1" className="mr-2" /> <label htmlFor="category1">Electronics</label></li>
                        <li><input type="checkbox" id="category2" className="mr-2" /> <label htmlFor="category2">Clothing</label></li>
                        <li><input type="checkbox" id="category3" className="mr-2" /> <label htmlFor="category3">Home & Kitchen</label></li>
                        <li><input type="checkbox" id="category4" className="mr-2" /> <label htmlFor="category4">Books</label></li>
                        <li><input type="checkbox" id="category5" className="mr-2" /> <label htmlFor="category5">Sports</label></li>
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