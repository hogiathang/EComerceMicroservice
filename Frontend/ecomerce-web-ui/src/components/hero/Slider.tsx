'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
    const banners = [
        {
            image: "https://img.lazcdn.com/us/lazgcp/974f2300-88ab-4349-a60f-d0a486767d3a_VN-1188-400.jpg_2200x2200q80.jpg_.webp",
            title: "Làm đẹp ngày xanh",
            subtitle: "CHỐT DEAL AN LÀNH",
            cta: "Mua ngay",
        },
        {
            image: "https://img.lazcdn.com/us/lazgcp/974f2300-88ab-4349-a60f-d0a486767d3a_VN-1188-400.jpg_2200x2200q80.jpg_.webp",
            title: "Giảm giá sốc 50%",
            subtitle: "Voucher tới 400K",
            cta: "Xem thêm",
        },
    ];

    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="w-full h-full"
        >
            {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="w-full h-full bg-cover bg-center flex items-center justify-between px-10"
                        style={{ backgroundImage: `url(${banner.image})` }}
                    >
                        <div className="bg-black/40 p-6 rounded-lg backdrop-blur-sm max-w-md">
                            <h2 className="text-4xl font-bold text-white drop-shadow-lg">{banner.title}</h2>
                            <p className="text-2xl mt-2 text-yellow-300 drop-shadow-lg">{banner.subtitle}</p>
                            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-colors">
                                {banner.cta}
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}