import React from "react";
import "../styles/HalloweenSection.css";

const products = [
    // ... (Giữ nguyên mảng products, giả định bạn đã sửa URL ảnh)
    {
        id: 1,
        name: "Dây Đèn Led Bí Ngô Trang Trí Halloween - YF03",
        price: "109.500 ₫",
        oldPrice: "122.000 ₫",
        discount: "-10%",
        sold: 5,
        image: "3900000266765.png",
    },
    {
        id: 2,
        name: "Dây Đèn Led Xác Ướp Trang Trí Halloween - YF04",
        price: "117.500 ₫",
        oldPrice: "131.000 ₫",
        discount: "-10%",
        sold: 5,
        image: "3900000266772.png",
    },
    {
        id: 3,
        name: "Dây Đèn Led Đầu Lâu Trang Trí Halloween - YF07",
        price: "126.000 ₫",
        oldPrice: "140.000 ₫",
        discount: "-10%",
        sold: 1,
        image: "3900000266802_1.png",
    },
    {
        id: 4,
        name: "Dây Đèn Led Ma Trắng Trang Trí Halloween - YF08",
        price: "126.000 ₫",
        oldPrice: "140.000 ₫",
        discount: "-10%",
        sold: 2,
        image: "3900000266819.png",
    },
    {
        id: 5,
        name: "Dây Đèn Led Bí Ngô Trang Trí Halloween - YF05",
        price: "109.500 ₫",
        oldPrice: "122.000 ₫",
        discount: "-10%",
        sold: 3,
        image: "3900000266826.png",
    },
];

const HalloweenSection = () => {
    return (
        <div className="halloween-section">
            {/* 🎃 Banner (Giữ nguyên) */}
            <div className="halloween-banner">
                <img src="/TrangHalloween10_Resize840x320.png" alt="Lễ hội ma quái" />
            </div>

            {/* 🛍️ Danh sách sản phẩm */}
            <div className="halloween-products">
                {products.map((item) => (
                    <div className="halloween-card" key={item.id}>

                        {/* 🌟 THAY ĐỔI LỚN: Thêm wrapper cho ảnh và thẻ discount */}
                        <div className="halloween-img-wrapper">
                            <span className="discount-tag-corner">{item.discount}</span>
                            <img src={item.image} alt={item.name} className="halloween-img" />
                        </div>

                        <div className="halloween-info">
                            <p className="name">{item.name}</p>
                            <div className="prices">
                                <span className="price">{item.price}</span>
                                <span className="old">{item.oldPrice}</span>
                                {/* BỎ thẻ .discount cũ khỏi đây */}
                            </div>
                            <p className="sold">Đã bán {item.sold}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔸 Nút xem thêm */}
            <div className="see-more">
                <button>Xem thêm</button>
            </div>
        </div>
    );
};

export default HalloweenSection;