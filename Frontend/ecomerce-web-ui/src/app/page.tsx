import HeroSlider from "@/components/hero/Slider";
import Link from "next/link";
import { Category } from "@/components/contents/category/categories";
import { Carousel } from "@/components/contents/deals/Carousel";
import { ContentSpan } from "@/components/contents/span/Span";

export default function Home() {

    const newArrivals = [
        {
            id: "1",
            name: "Smartphone Pro Max",
            price: 999.99,
            brand: "TechBrand",
            image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "Latest smartphone with advanced features and stunning display",
            quantity: 10,
            discount: 10
        },
        {
            id: "2",
            name: "Gaming Laptop",
            price: 1499.99,
            brand: "GameMaster",
            image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "High-performance laptop for gaming and productivity",
            quantity: 20,
            discount: 15
        },
        {
            id: "3",
            name: "Bluetooth Speaker",
            price: 79.99,
            brand: "SoundWave",
            image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "Portable Bluetooth speaker with deep bass and long battery life",
            quantity: 10,
            discount: 5
        }
    ];

    const hotDeals = [
        {
            id: "1",
            name: "Wireless Earbuds",
            price: 129.99,
            brand: "AudioTech",
            image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "True wireless earbuds with noise cancellation and 24-hour battery life",
            quantity: 10,
            discount: 20
        },
        {
            id: "2",
            name: "Smart Watch Series 5",
            price: 249.99,
            brand: "TechGear",
            image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "Track your fitness, answer calls, and more with this advanced smartwatch",
            quantity: 10,
            discount: 15
        },
        {
            id: "3",
            name: "Ultra HD 4K Monitor",
            price: 349.99,
            brand: "VisualPro",
            image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "27-inch 4K monitor with HDR support and eye-care technology",
            quantity: 10,
            discount: 25
        },
        {
            id: "4",
            name: "Ultra HD 4K Monitor",
            price: 349.99,
            brand: "VisualPro",
            image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif",
            description: "27-inch 4K monitor with HDR support and eye-care technology",
            quantity: 10,
            discount: 25
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center text-black bg-gray-100">
            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] relative px-4 sm:px-6 md:px-8 mt-4 md:mt-8">
                <HeroSlider />
            </section>

            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto my-12 px-4 sm:px-6 md:px-8">
                <Category />
            </section>

            <section className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-8">
                <Carousel
                    items={hotDeals}
                    carolHeader={
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-white">Hot Deals</h2>
                            <span className="text-white bg-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                                Up to 50% off
                            </span>
                        </div>
                    }
                    navigation={
                        <div className="flex justify-center mt-8">
                            <Link href="/products/hot-deals" className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                View All Deals
                            </Link>
                        </div>
                    }
                    colorStyle="bg-white"
                />
            </section>

            <section className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto my-12 px-4 sm:px-6 md:px-8">
                <ContentSpan
                    src="https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif"
                    alt="Special Offer"
                    title="Special Offer"
                    description="Get free shipping on all orders over $50"
                    link="/special-offer"
                    linkContent="Shop Now"
                />
            </section>

            <section className="w-full bg-gradient-to-r bg-slate-300 py-8">
                <Carousel
                    items={newArrivals}
                    carolHeader={
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">New Arrivals</h2>
                        </div>
                    }
                    navigation={
                        <div className="flex justify-center mt-8">
                            <Link href="/products/new-arrivals" className="bg-white px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                View All New Products
                            </Link>
                        </div>
                    }
                    colorStyle="bg-black"
                />

            </section>

            <section className="w-full bg-gray-100 py-8">
                <div className="w-full md:w-[90%] lg:w-[80%] max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Policy:</h2>
                    </div>
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