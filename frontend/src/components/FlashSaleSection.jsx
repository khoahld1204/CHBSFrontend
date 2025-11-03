import React, { useState, useEffect } from "react"; // 1. Import useEffect
import "../styles/FlashSaleSection.css";

const flashSaleProducts = [
    // ... (Your flashSaleProducts array remains the same)
    {
        img: "/khonggiadinh.png",
        name: "Không Gia Đình - Bìa Cứng (Tái Bản 2024)",
        price: 129000,
        oldPrice: 215000,
        discount: 40,
        sold: 19
    },
    {
        img: "/summer-ghost_combo-2-cuon_bia_postcard.png",
        name: "Bộ Manga - Summer Ghost - Bóng Ma Mùa Hạ - Tập 1 + Tập 2 (Bộ 2 Cuốn)",
        price: 48000,
        oldPrice: 80000,
        discount: 40,
        sold: 4
    },
    {
        img: "/image_231202.png",
        name: "Người Bà Tài Giỏi Vùng Saga",
        price: 100000,
        oldPrice: 128000,
        discount: 21,
        sold: 6
    },
    {
        img: "/image_237646.png",
        name: "Sức Mạnh Tiềm Thức (Tái Bản 2021)",
        price: 100000,
        oldPrice: 128000,
        discount: 21,
        sold: 10
    },
    {
        img: "/atomichabit.png",
        name: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ (Tái Bản 2022)",
        price: 100000,
        oldPrice: 130000,
        discount: 23,
        sold: 8
    },
    // Thêm sách nếu muốn, sẽ sang tab tiếp theo
    {
        img: "/saochungtalaingu.png",
        name: "Sao Chúng Ta Lại Ngủ - Why We Sleep",
        price: 149400,
        oldPrice: 249000,
        discount: 40,
        sold: 12
    },
    {
        img: "/hsk100.png",
        name: "Giáo Trình Chuẩn HSK 1 (Tái Bản 2023)",
        price: 118800,
        oldPrice: 198000,
        discount: 40,
        sold: 14
    },
    {
        img: "/untitled-7.png",
        name: "Búp Sen Xanh - Bìa Cứng + Tặng Kèm Obi + Postcard Hành Trình...",
        price: 66000,
        oldPrice: 110000,
        discount: 40,
        sold: 13
    },
    {
        img: "/image_195509_1_11579.png",
        name: "Giáo Trình Chuẩn YCT 1",
        price: 82800,
        oldPrice: 138000,
        discount: 40,
        sold: 12
    },
    {
        img: "/8932000134749_1.png",
        name: "Nếu Biết Trăm Năm Là Hữu Hạn - Ấn Bản Kỉ Niệm 10 Năm Xuất B...",
        price: 95400,
        oldPrice: 159000,
        discount: 40,
        sold: 9
    }
];

const twoDigit = n => n.toString().padStart(2, "0");
const BOOKS_PER_TAB = 5;

const FlashSaleSection = () => {
    const [tab, setTab] = useState(0);
    const maxTab = Math.ceil(flashSaleProducts.length / BOOKS_PER_TAB);

    // 2. Change timeLeft to use state
    const [timeLeft, setTimeLeft] = useState({ h: 0, m: 28, s: 45 }); // Initial time

    // 3. Implement the countdown logic with useEffect
    useEffect(() => {
        // Stop the timer if time runs out
        if (timeLeft.h === 0 && timeLeft.m === 0 && timeLeft.s === 0) {
            return;
        }

        const timerID = setInterval(() => {
            setTimeLeft(prevTime => {
                let { h, m, s } = prevTime;

                if (s > 0) {
                    s -= 1;
                } else {
                    if (m > 0) {
                        m -= 1;
                        s = 59;
                    } else {
                        if (h > 0) {
                            h -= 1;
                            m = 59;
                            s = 59;
                        } else {
                            // Timer reaches 00:00:00, handled by the check before setInterval
                            clearInterval(timerID);
                            return { h: 0, m: 0, s: 0 };
                        }
                    }
                }
                return { h, m, s };
            });
        }, 1000); // Update every 1000 milliseconds (1 second)

        // Cleanup function to clear the interval when the component unmounts
        // or before the next effect run
        return () => clearInterval(timerID);
    }, [timeLeft.h, timeLeft.m, timeLeft.s]); // Dependency array: Re-run effect if time state changes to re-evaluate the stop condition

    const visibleBooks = flashSaleProducts.slice(tab * BOOKS_PER_TAB, (tab + 1) * BOOKS_PER_TAB);

    return (
        <div className="flashsale-section">
            <div className="flashsale-header">
                <span className="flashsale-title">
                    <span className="flashsale-icon">⚡</span>FLASH SALE
                </span>
                <span className="flashsale-timer-label">Kết thúc trong</span>
                <span className="flashsale-timer">
                    {/* Display the state values */}
                    <span>{twoDigit(timeLeft.h)}</span> :
                    <span>{twoDigit(timeLeft.m)}</span> :
                    <span>{twoDigit(timeLeft.s)}</span>
                </span>
                <a className="flashsale-link" href="#">Xem tất cả <span className="arrow">&rarr;</span></a>
            </div>
            {/* ... (The rest of the component remains the same) */}
            <div className="flashsale-list-wrapper">
                {tab > 0 && (
                    <button className="flashsale-arrow flashsale-arrow-left" onClick={() => setTab(tab - 1)}>
                        <svg width="36" height="36" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="18" fill="#fff" />
                            <polyline points="21 12 15 18 21 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}

                <div className="flashsale-list">
                    {visibleBooks.map((product, idx) => (
                        <div className="flashsale-item" key={idx}>
                            <div className="item-img-box">
                                <img src={product.img} alt={product.name} className="item-img" />
                                {product.tag && (
                                    <span className="item-tag">{product.tag}</span>
                                )}
                                {product.tag === "Độc quyền" && (
                                    <span className="item-tag exclusive">Độc quyền</span>
                                )}
                            </div>
                            <div className="item-name">{product.name}</div>
                            <div className="item-price-row">
                                <span className="item-price">{product.price.toLocaleString()} đ</span>
                                <span className="item-discount">-{product.discount}%</span>
                            </div>
                            <div className="item-oldprice">{product.oldPrice.toLocaleString()} đ</div>
                            <div className="item-progress">
                                <div className="item-progress-bar" style={{ width: `${Math.min(product.sold * 8, 100)}%` }}></div>
                                <span className="item-sold">Đã bán {product.sold}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {tab < maxTab - 1 && (
                    <button className="flashsale-arrow flashsale-arrow-right" onClick={() => setTab(tab + 1)}>
                        <svg width="36" height="36" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="18" fill="#fff" />
                            <polyline points="15 12 21 18 15 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default FlashSaleSection;