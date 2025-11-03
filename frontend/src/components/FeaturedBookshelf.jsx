import React from 'react';
// Đã loại bỏ import CSS để tránh lỗi biên dịch

// Dữ liệu giả lập cho các đầu sách nổi bật
const bookData = [
    { id: 1, title: "Tủ Sách Kinh Tế", image: "doanh-nghiep-cua-the-ky-21.png" },
    { id: 2, title: "Tủ Sách Trinh Thám", image: "tusachtrinhtham.png" },
    { id: 3, title: "Tủ Sách Kinh Dị", image: "2020_07_21_16_21_52_1-390x510__39168_image2_800_big.png" },
    { id: 4, title: "Tủ Sách Trung Thu", image: "e91985531b6007269c4ab5d430da0a-e6449ecf-c2f6-4494-8b35-2b03e3edb461.png" },
    { id: 5, title: "Tủ Sách Mùa Thu", image: "bia-2d_ho-diep-va-kinh-ngu_17307.png" },
    { id: 6, title: "Harry Potter", image: "harry-potter.png" },
    { id: 7, title: "Ôn Luyện THPT", image: "tong-on-ngu-phap-Tieng-Anh.png" },
    { id: 8, title: "Kinh dị - Bí ẩn", image: "d_-m_t-qu_-2.png" },
    { id: 9, title: "Văn học cổ điển", image: "ong-gia-khottabit---bia-1-1.png" },
    { id: 10, title: "Sách thiếu nhi", image: "bia_1_409d2c70893a478cac94c2a96f49c057_master.png" },
];

const logoUrl = "ico_sachtrongnuoc.svg"; // Placeholder cho logo Tủ Sách

// --- BookItem Component ---
const BookItem = ({ book }) => {
    return (
        <div className="fb-book-item">
            <img src={book.image} alt={book.title} className="fb-book-image" />
            <p className="fb-book-title">{book.title}</p>
        </div>
    );
};

// --- Main FeaturedBookshelf Component ---
const FeaturedBookshelf = () => {
    const carouselRef = React.useRef(null);

    // Xử lý cuộn carousel
    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 250; // Cuộn 250px mỗi lần
            if (direction === 'left') {
                carouselRef.current.scrollLeft -= scrollAmount;
            } else {
                carouselRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    return (
        <div className="fb-container">

            {/* Header Section with Pink Background */}
            <div className="fb-header-section">
                <div className="fb-title-bar">
                    {/* THAY THẾ SVG BẰNG IMG */}
                    <img src={logoUrl} alt="Logo Tủ Sách" className="fb-logo-image" />
                    <h2 className="fb-section-title">TỦ SÁCH NỔI BẬT</h2>
                </div>
            </div>

            {/* Carousel Area */}
            <div className="fb-carousel-wrapper">

                {/* Navigation Arrow (Left) - Thêm mũi tên trái */}
                <button className="fb-nav-arrow left" onClick={() => scroll('left')}>
                    {/* Inline SVG for Arrow Left */}
                    <svg className="fb-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>

                <div className="fb-book-carousel" ref={carouselRef}>
                    {bookData.map(book => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </div>

                {/* Navigation Arrow (Right) */}
                <button className="fb-nav-arrow right" onClick={() => scroll('right')}>
                    {/* Inline SVG for Arrow Right */}
                    <svg className="fb-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            {/* CSS Đã Hợp Nhất */}
            <style>{`
                /* --- Base Container --- */
                .fb-container {
                    max-width: 1200px;
                    margin: 20px auto;
                    padding: 0;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    font-family: Arial, sans-serif;
                }

                /* --- Header Section (Pink Background) --- */
                .fb-header-section {
                    background-color: #fdeaea; /* Màu hồng nhạt */
                    padding: 15px 20px;
                    margin-bottom: 20px;
                    border-radius: 8px 8px 0 0;
                }

                .fb-title-bar {
                    display: flex;
                    align-items: center;
                }

                /* STYLE MỚI CHO LOGO DẠNG IMG */
                .fb-logo-image {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    object-fit: contain;
                }

                .fb-section-title {
                    font-size: 16px;
                    font-weight: bold;
                    color: #333;
                    margin: 0;
                }

                /* --- Carousel Layout --- */
                .fb-carousel-wrapper {
                    position: relative;
                    padding: 0 20px 20px; /* Thêm padding cho mũi tên */
                }

                .fb-book-carousel {
                    display: flex;
                    overflow-x: scroll;
                    scroll-behavior: smooth;
                    gap: 15px;
                    padding: 0 5px; 

                    /* Ẩn thanh cuộn */
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .fb-book-carousel::-webkit-scrollbar {
                    display: none;
                }

                /* --- Book Item --- */
                .fb-book-item {
                    min-width: 100px; /* Kích thước cơ sở */
                    max-width: 100px;
                    flex-shrink: 0;
                    text-align: center;
                    cursor: pointer;
                }

                .fb-book-image {
                    width: 100%;
                    height: auto;
                    max-height: 150px;
                    object-fit: contain;
                    border-radius: 4px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s;
                }

                .fb-book-image:hover {
                    transform: translateY(-2px);
                }

                .fb-book-title {
                    font-size: 13px;
                    color: #555;
                    margin-top: 8px;
                    line-height: 1.3;
                    height: 34px; 
                    overflow: hidden;
                }

                /* --- Navigation Arrow --- */
                .fb-nav-arrow {
                    position: absolute;
                    top: 60%; 
                    transform: translateY(-50%);
                    background-color: white;
                    padding: 10px;
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    border: none;
                    cursor: pointer;
                    z-index: 10;
                    display: none; /* Mặc định ẩn trên mobile nhỏ */
                    transition: opacity 0.2s;
                    opacity: 0.9;
                }
                
                .fb-nav-arrow:hover {
                    opacity: 1;
                }

                .fb-nav-arrow.right {
                    right: 5px;
                }

                .fb-nav-arrow.left {
                    left: 5px;
                }

                .fb-arrow-icon {
                    width: 16px;
                    height: 16px;
                    color: #555;
                }

                /* --- RESPONSIVE MEDIA QUERIES --- */

                /* Tablet and Desktop */
                @media (min-width: 768px) {
                    .fb-book-item {
                        min-width: 120px; 
                        max-width: 120px;
                    }

                    .fb-book-image {
                        max-height: 180px;
                    }
                    
                    .fb-nav-arrow {
                        display: block; /* Hiện mũi tên trên màn hình lớn */
                    }
                }
            `}</style>
        </div>
    );
};

export default FeaturedBookshelf;
