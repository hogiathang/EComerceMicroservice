export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black font-sans px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-center max-w-2xl">
                Welcome to our e-commerce platform! We are dedicated to providing you with the best online shopping experience. Our mission is to offer a wide range of products at competitive prices while ensuring excellent customer service.
            </p>
            <p className="text-lg text-center mt-4 max-w-2xl">
                Thank you for choosing us for your shopping needs!
            </p>

            <div className="mt-8 w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <p className="text-lg text-center mt-6 max-w-2xl">
                Or reach out via email:
                <a href="mailto:sample@gmail.com" className="text-blue-500 underline ml-1">
                    hogiathang2@gmail.com
                </a>
            </p>
        </div>
    );
}