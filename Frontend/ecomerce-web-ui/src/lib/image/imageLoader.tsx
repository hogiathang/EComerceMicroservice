import Image from 'next/image';
import { CSSProperties } from 'react';

interface ImageLoaderProps {
    src: string;
    width: number;
    height?: number;
    quality?: number;
    alt?: string;
    className?: string;
    style?: CSSProperties;
}

export default function ResponsiveImage({
    src,
    width,
    height,
    quality = 75,
    alt = "Image",
    className = "",
    style = {}
}: ImageLoaderProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height || width}
            quality={quality}
            className={`object-cover ${className}`}
            loading="lazy"
            style={{
                objectFit: 'cover',
                ...style
            }}
        />
    );
}