import React, { useRef } from 'react';
import '../styles/ReferenceProducts.css'; // Đường dẫn này sẽ được giải quyết sau khi tạo file CSS

// Dữ liệu giả lập cho các sản phẩm
const productsData = [
    {
        id: 1,
        title: "Bảng Tuần Hoàn Các Nguyên Tố Hóa Học Theo Chuẩn...",
        currentPrice: "8.500 ₫",
        originalPrice: "10.000 ₫",
        discount: "-15%",
        status: "Đã bán 1.7k",
        tag: "Xu hướng",
        image: "bang-tuan-hoan-hoa-hoc-4.png",
        overlay: null,
    },
    {
        id: 2,
        title: "Math In My World 5 (2024)",
        currentPrice: "46.000 ₫",
        originalPrice: null,
        discount: null,
        status: "Đã bán 183",
        tag: null,
        image: "untitled-5.png",
        overlay: "Tập 5",
    },
    {
        id: 3,
        title: "Amazing Science 2 (2023)",
        currentPrice: "50.000 ₫",
        originalPrice: null,
        discount: null,
        status: "Đã bán 243",
        tag: null,
        image: "amazing_science_2_2023_1_2023_06_02_08_22_43.png",
        overlay: "Tập 2",
    },
    {
        id: 4,
        title: "Amazing Science 1 (2023)",
        currentPrice: "50.000 ₫",
        originalPrice: null,
        discount: null,
        status: "Đã bán 350",
        tag: "Xu hướng",
        image: "amazing_science_1_2023_1_2023_06_02_08_22_43.png",
        overlay: "Tập 1",
    },
    {
        id: 5,
        title: "Cẩm Nang Sử Dụng Bảng Tuần Hoàn Các Nguyên T...",
        currentPrice: "7.500 ₫",
        originalPrice: "10.000 ₫",
        discount: "-25%",
        status: "Đã bán 586",
        tag: null,
        image: "images.png",
        overlay: null,
    },
    {
        id: 6,
        title: "Sách tham khảo Tiếng Anh 3 (Mới)",
        currentPrice: "35.000 ₫",
        originalPrice: null,
        discount: null,
        status: "Đã bán 1.2k",
        tag: "Mới",
        image: "9786040342546.png",
        overlay: "Mới",
    },
];

// --- ProductCard Component ---
const ProductCard = ({ product }) => {
    return (
        <div className="rp-product-card">
            <div className="rp-image-wrapper">
                {/* Product Image */}
                <img src={product.image} alt={product.title} className="rp-product-image" />

                {/* Image Overlay Tag (Tập 1, Tập 2...) */}
                {product.overlay && (
                    <span className="rp-overlay-tag">
                        {product.overlay}
                    </span>
                )}
            </div>

            <div className="rp-content-area">
                {/* Title and Trend Tag */}
                <div className="rp-title-section">
                    {product.tag === 'Xu hướng' && (
                        <span className="rp-trend-tag">Xu hướng</span>
                    )}
                    <span className="rp-product-title">{product.title}</span>
                </div>

                {/* Price Info */}
                <div className="rp-price-info">
                    <span className="rp-current-price">{product.currentPrice}</span>
                    {product.originalPrice && (
                        <span className="rp-original-price">{product.originalPrice}</span>
                    )}
                    {product.discount && (
                        <span className="rp-discount-badge">
                            {product.discount}
                        </span>
                    )}
                </div>

                {/* Status */}
                <p className="rp-status-text">{product.status}</p>
            </div>
        </div>
    );
};


// --- Main App Component ---
const ReferenceProducts = () => {
    // 1. Tạo tham chiếu đến element carousel
    const carouselRef = useRef(null);

    // 2. Định nghĩa hàm cuộn
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            // Lấy chiều rộng của phần tử đầu tiên (card sản phẩm)
            const itemWidth = container.querySelector('.rp-product-card')?.offsetWidth || 200;
            // Khoảng cách cuộn: 3 card + 3 khoảng cách (gap)
            const scrollDistance = (itemWidth * 3) + (15 * 3); // 15px là giá trị gap trong CSS

            if (direction === 'right') {
                container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            } else if (direction === 'left') {
                container.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
            }
        }
    };

    const tabs = [
        { name: "Sách Tham Khảo", active: true },
        { name: "Giáo trình học ngữ Tiếng Anh", active: false },
        { name: "Bộ Dụng Cụ Học Tập", active: false },
    ];

    return (
        <div className="rp-container">
            <div className="rp-wrapper">

                {/* --- Header Tabs --- */}
                <nav className="rp-nav-tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`rp-nav-tab ${tab.active ? 'active' : ''}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>

                {/* --- Product Carousel --- */}
                <div className="rp-carousel-container">
                    {/* 3. Gán ref cho container cuộn */}
                    <div className="rp-product-carousel" ref={carouselRef}>
                        {productsData.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Nút Mũi tên TRÁI (Cuộn ngược) */}
                    <button className="rp-nav-arrow left" onClick={() => scrollCarousel('left')}>
                        {/* Inline SVG for Arrow Left */}
                        <svg className="rp-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    {/* Nút Mũi tên PHẢI (Cuộn xuôi) */}
                    <button className="rp-nav-arrow right" onClick={() => scrollCarousel('right')}>
                        {/* Inline SVG for Arrow Right */}
                        <svg className="rp-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                {/* --- View More Button --- */}
                <div className="rp-view-more-section">
                    <button className="rp-view-more-button">
                        Xem Thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReferenceProducts;
