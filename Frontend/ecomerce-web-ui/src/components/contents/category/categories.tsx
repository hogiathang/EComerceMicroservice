import Link from "next/link";
import Image from "next/image";

const categories = [
    { name: "Electronics", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { name: "Fashion", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { name: "Home & Garden", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { name: "Sports", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
];

export const Category = () => {
    return (
        <>
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
        </>
    )
}