import React from "react";
import "../styles/HomeBanner.css";

const banners = [
    {
        src: "/chienthannguvan.png",
        alt: "Chiến thần ngữ văn",
    },
    {
        src: "/trangphunu.png",
        alt: "20-10 Mọng nàng luôn cười",
    },
    {
        src: "/vungngoaingu.png",
        alt: "Ngoại ngữ doanh nhân",
    },
    {
        src: "/NgoaiVanT10.png",
        alt: "October must-read picks",
    }
];

// Thay icon là link hình ảnh
const menuItems = [
    { icon: "/Icon_1510.png", title: "15.10" },
    { icon: "/ico_foreignbooks.png", title: "Ngoại Văn" },
    { icon: "/Icon_MCbook.png", title: "McBooks" },
    { icon: "/Icon_AlphaBooks.png", title: "Alpha Books" },
    { icon: "/IconFlashSale.png", title: "Flash Sale" },
    { icon: "/Icon_MaGiamGia.png", title: "Mã Giảm Giá" },
    { icon: "/Icon_SanPhamMoi.png", title: "Sản Phẩm Mới" },
    { icon: "/ChoDoCu.png", title: "Phiên Chợ Đồ Cũ" },
    { icon: "/Icon_DonSi.png", title: "Bán Sỉ" },
    { icon: "/icon_Mannga.png", title: "Manga" }
];

const HomeBanner = () => {
    return (
        <div className="home-banner-wrapper">
            {/* Banner Carousel */}
            <div className="banner-carousel">
                {banners.map((banner, idx) => (
                    <div className="banner-item" key={idx}>
                        <img src={banner.src} alt={banner.alt} />
                        <button className="buy-now-btn">MUA NGAY</button>
                    </div>
                ))}
            </div>
            {/* Menu Icon */}
            <div className="menu-bar">
                {menuItems.map((item, idx) => (
                    <div className="menu-item" key={idx}>
                        <div className="menu-icon">
                            <img
                                src={item.icon}
                                alt={item.title}
                                style={{ width: 44, height: 44, objectFit: "contain" }}
                            />
                        </div>
                        <div className="menu-title">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeBanner;