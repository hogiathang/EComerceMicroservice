import Link from "next/link";
import Image from "next/image";

interface SpanContent {
    src: string;
    alt: string;
    title: string;
    description: string;
    link: string;
    linkContent: string;
}

export const ContentSpan = (spanContent: SpanContent) => {
    return (
        <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-transparent z-10 transition-opacity duration-300 group-hover:from-blue-600/90"></div>
            <div className="relative h-full w-full overflow-hidden">
                <Image
                    src={spanContent.src}
                    alt={spanContent.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center pl-8 sm:pl-12 z-20 transition-all duration-300 group-hover:pl-10 sm:group-hover:pl-14">
                <h3 className="text-white text-3xl font-bold mb-2 transition-transform group-hover:translate-x-1">
                    {spanContent.title}
                </h3>
                <p className="text-white text-lg mb-4 max-w-xs transition-opacity duration-300 group-hover:opacity-90">
                    {spanContent.description}
                </p>
                <Link
                    href={spanContent.link}
                    className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 inline-block w-max hover:bg-blue-600 hover:text-white hover:shadow-md hover:scale-105"
                >
                    {spanContent.linkContent}
                </Link>
            </div>
        </div>
    )
}