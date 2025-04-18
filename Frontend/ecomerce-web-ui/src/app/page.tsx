import HeroSlider from "@/components/hero/Slider";
import ItemCard from "@/components/items/item-card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    // Sample products for demonstration
    const hotDeals = [
        {
            id: 1,
            name: "Wireless Earbuds",
            price: 129.99,
            brand: "AudioTech",
            itemImage: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "True wireless earbuds with noise cancellation and 24-hour battery life",
            discount: 20
        },
        {
            id: 2,
            name: "Smart Watch Series 5",
            price: 249.99,
            brand: "TechGear",
            itemImage: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "Track your fitness, answer calls, and more with this advanced smartwatch",
            discount: 15
        },
        {
            id: 3,
            name: "Ultra HD 4K Monitor",
            price: 349.99,
            brand: "VisualPro",
            itemImage: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "27-inch 4K monitor with HDR support and eye-care technology",
            discount: 25
        }
    ];

    const newArrivals = [
        {
            id: 4,
            name: "Ergonomic Office Chair",
            price: 189.99,
            brand: "ComfortPlus",
            itemImage: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "Adjustable office chair with lumbar support and breathable mesh",
            discount: 0
        },
        {
            id: 5,
            name: "Portable SSD 1TB",
            price: 159.99,
            brand: "DataKeep",
            itemImage: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "Ultra-fast portable SSD with USB-C connectivity and shock resistance",
            discount: 0
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            price: 79.99,
            brand: "SoundWave",
            itemImage: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "Waterproof Bluetooth speaker with 20-hour playtime and deep bass",
            discount: 0
        }
    ];

    const categories = [
        { name: "Electronics", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
        { name: "Fashion", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
        { name: "Home & Garden", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
        { name: "Sports", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center text-black">
            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] relative px-4 sm:px-6 md:px-8 mt-4 md:mt-8">
                <HeroSlider />
            </section>

            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto my-12 px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <Link href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                            <div className="relative rounded-lg overflow-hidden shadow-md h-40 group">
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors z-10"></div>
                                <div className="relative h-full w-full">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-8">
                <div className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white">Hot Deals</h2>
                        <span className="text-white bg-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                            Up to 50% off
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hotDeals.map((product) => (
                            <ItemCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                brand={product.brand}
                                itemImage={product.itemImage}
                                description={product.description}
                                discount={product.discount}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link href="/products/hot-deals" className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            View All Deals
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto my-12 px-4 sm:px-6 md:px-8">
                <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-transparent z-10"></div>
                    <div className="relative h-full w-full">
                        <Image
                            src="https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif"
                            alt="Special Offer"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center pl-8 sm:pl-12 z-20">
                        <h3 className="text-white text-3xl font-bold mb-2">Special Offer</h3>
                        <p className="text-white text-lg mb-4 max-w-xs">Get free shipping on all orders over $50</p>
                        <Link href="/special-offer" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block w-max">
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>

            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 my-12">
                <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newArrivals.map((product) => (
                        <ItemCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            brand={product.brand}
                            itemImage={product.itemImage}
                            description={product.description}
                        />
                    ))}
                </div>
            </section>

            <section className="w-full bg-gray-100 py-8">
                <div className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
                            <p className="text-gray-600">On all orders over $50</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
                            <p className="text-gray-600">30-day return policy</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Get help when you need it</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 my-12">
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-600 mb-6">Get the latest updates on new products and upcoming sales</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}