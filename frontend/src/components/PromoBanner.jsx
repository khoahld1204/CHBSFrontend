import React, { useState } from "react";
import "../styles/PromoBanner.css";

const mainBanners = [
    { src: "/banner1.png", alt: "Ngọt ngào trong từng hộp bánh" },
    { src: "/banner2.png", alt: "Banner 2" },
    { src: "/banner3.png", alt: "Banner 3" },
    { src: "/banner4.png", alt: "Banner 4" },
    { src: "/banner5.png", alt: "Banner 5" }
];

const PromoBanner = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? mainBanners.length - 1 : current - 1);
    };
    const nextSlide = () => {
        setCurrent(current === mainBanners.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="promo-banner-container">
            {/* Main Banner Slider */}
            <div className="promo-banner-main">
                <button
                    className="promo-banner-arrows promo-banner-arrow-left"
                    onClick={prevSlide}
                >&lt;</button>
                <button
                    className="promo-banner-arrows promo-banner-arrow-right"
                    onClick={nextSlide}
                >&gt;</button>
                <img
                    src={mainBanners[current].src}
                    alt={mainBanners[current].alt}
                />
                <div className="promo-banner-dots">
                    {mainBanners.map((_, i) => (
                        <div
                            key={i}
                            className={`promo-banner-dot${i === current ? " active" : ""}`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side: 2 stacked banners - chỉ để ảnh, không text */}
            <div className="promo-banner-right">
                <div
                    className="promo-banner-right-banner"
                    style={{ backgroundImage: `url('/thetindung.png')` }}
                ></div>
                <div
                    className="promo-banner-right-banner"
                    style={{ backgroundImage: `url('/giam50k.png')` }}
                ></div>
            </div>
        </div>
    );
};

export default PromoBanner;