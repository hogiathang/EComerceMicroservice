import Link from "next/link";
import Image from "next/image";

const categories = [
    { id: 'electronic', name: "Electronics", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { id: 'fashion', name: "Fashion", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { id: 'home-garden', name: "Home & Garden", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
    { id: 'sports', name: "Sports", image: "https://img.lazcdn.com/g/p/f01c91f5036e2419cfaf626ba752c836.jpg_400x400q80.jpg_.avif" },
];

export const Category = () => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Link href={`/category/${category.id}`} key={category.id} className="block">
                        <div className="relative rounded-lg overflow-hidden shadow-md h-40 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
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
                                <h3 className="text-white text-xl font-bold transform transition-transform group-hover:scale-110 group-hover:translate-y-[-3px]">{category.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}