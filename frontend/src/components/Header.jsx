// src/components/Header.jsx

import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import ProductCategoryMenu from "./ProductCategoryMenu";
import "../styles/Header.css";
import AuthModal from "./auth/AuthModal";
import { Link } from 'react-router-dom';

const LOGO_URL = "/fahasa-logo.png";
const TOP_BANNER_IMAGE = "/banner_top.png";
const NOTIFICATION_ICON = "/ico_noti_gray.svg";
const ACCOUNT_ICON = "/ico_account_gray.svg";
const CART_ICON_URL = "/ico_cart_gray.svg";

// URLs cho cờ
const VN_FLAG_URL = "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg";
const UK_FLAG_URL = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";

const Header = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("vn"); // 'vn' hoặc 'en'
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const openAuthModal = () => setIsAuthOpen(true);
    const closeAuthModal = () => setIsAuthOpen(false);

    const toggleLangMenu = () => {
        // Chỉ cho phép mở dropdown nếu đang ở chế độ VN
        if (currentLang === 'vn') {
            setIsLangOpen(!isLangOpen);
        } else {
            // Trong chế độ EN, click chỉ chuyển sang VN (như ảnh mẫu)
            handleChangeLang('vn');
        }

    };

    // Thêm hàm xử lý khi click vào cờ EN
    const handleFlagClick = () => {
        if (currentLang === 'vn') {
            toggleLangMenu();
        } else {
            // Khi ở chế độ EN, click vào cờ sẽ chuyển sang VN
            handleChangeLang('vn');
        }
    };

    const handleChangeLang = (lang) => {
        setCurrentLang(lang);
        setIsLangOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Lấy số lượng sản phẩm trong giỏ hàng từ localStorage
    useEffect(() => {
        const readCartCount = () => {
            try {
                const possibleKeys = ["cartItems", "cart", "cart_products"]; // hỗ trợ nhiều key phổ biến
                let total = 0;
                for (const key of possibleKeys) {
                    const raw = localStorage.getItem(key);
                    if (!raw) continue;
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed)) {
                        total += parsed.length;
                    } else if (parsed && Array.isArray(parsed.items)) {
                        total += parsed.items.length;
                    }
                }
                setCartCount(total);
            } catch {
                setCartCount(0);
            }
        };

        readCartCount();

        // Cập nhật khi có thay đổi từ tab khác
        const onStorage = (e) => {
            if (!e || !e.key) {
                readCartCount();
                return;
            }
            if (["cartItems", "cart", "cart_products"].includes(e.key)) {
                readCartCount();
            }
        };
        window.addEventListener("storage", onStorage);

        // Cho phép các nơi khác trong app chủ động phát sự kiện cập nhật
        const onCustom = () => readCartCount();
        window.addEventListener("cart-updated", onCustom);

        return () => {
            window.removeEventListener("storage", onStorage);
            window.removeEventListener("cart-updated", onCustom);
        };
    }, []);

    return (
        <header className="header-wrapper">
            {/* 🔴 TOP BANNER */}
            <div className="top-banner">
                <img
                    src={TOP_BANNER_IMAGE}
                    alt="Fahasa banner khuyến mãi"
                    className="banner-img"
                />
            </div>

            {/* ⚪ MAIN HEADER */}
            <div className="main-header">
                <div className="header-container">
                    {/* ✅ Logo & Menu Button */}
                    <div className="logo-section">
                        <img 
                            src={LOGO_URL} 
                            alt="Fahasa Logo" 
                            className="logo-img"
                            onError={(e) => {
                                // Fallback nếu logo không load được
                                e.target.onerror = null;
                                e.target.src = "https://via.placeholder.com/150x44/D41C16/FFFFFF?text=Fahasa";
                            }}
                            style={{ display: 'block', visibility: 'visible', opacity: 1 }}
                        />
                        <button className="menu-toggle-button" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <X className="menu-icon" />
                            ) : (
                                <img src={"/ico_menu.svg"} alt="Menu" className="menu-icon" />
                            )}
                        </button>
                    </div>

                    {/* 🔍 Search bar (Giữ nguyên) */}
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Nobel 2025 - Vũ Điệu Quỷ Satan"
                            className="search-input"
                        />
                        <button className="search-button">
                            <Search className="search-icon" />
                        </button>
                    </div>

                    {/* 🛒 Icons (Giữ nguyên) */}
                    <div className="icon-section">
                        <div className="icon-item">
                            <img
                                src={NOTIFICATION_ICON}
                                alt="Thông báo"
                                className="icon"
                                style={{ width: '22px', height: '22px' }}
                            />
                            <span>Thông Báo</span>
                        </div>

                        <div className="icon-item cart-item">
                            <Link to="/checkout/cart" className="cart-link">
                                <div className="cart-icon-container">
                                    <img
                                        src={CART_ICON_URL}
                                        alt="Giỏ hàng"
                                        className="cart-icon-img"
                                        style={{ width: '22px', height: '22px' }}
                                    />
                                    {cartCount > 0 && (
                                        <span className="cart-count">{cartCount}</span>
                                    )}
                                </div>
                                <span>Giỏ Hàng</span>
                            </Link>
                        </div>

                        <div className="icon-item account-item" onClick={openAuthModal}>
                            <img src={ACCOUNT_ICON} alt="Tài khoản" className="account-icon" />
                            <div className="account-text">
                                <span className="account">Tài khoản</span>
                            </div>
                        </div>
                        <AuthModal isOpen={isAuthOpen} onClose={closeAuthModal} />


                        {/* 🌐 Language selector - ĐÃ CHỈNH SỬA LẠI LOGIC HIỂN THỊ */}
                        <div
                            className={`flag-box ${currentLang === 'en' ? 'flag-box-en' : ''}`}
                            onClick={handleFlagClick} // Dùng hàm mới
                        >
                            <img
                                src={currentLang === "vn" ? VN_FLAG_URL : UK_FLAG_URL}
                                alt="Language Flag"
                                className="flag-icon"
                            />

                            {/* CHỈ HIỂN THỊ CHỮ VÀ MŨI TÊN KHI Ở CHẾ ĐỘ VN */}
                            {currentLang === "vn" && (
                                <>
                                    <span className="lang-text">VN</span>
                                    <svg
                                        className="dropdown-arrow"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </>
                            )}


                            {/* 🇻🇳🇬🇧 Dropdown menu */}
                            {isLangOpen && (
                                <div className="lang-dropdown">
                                    <div
                                        className="lang-option"
                                        onClick={(e) => { e.stopPropagation(); handleChangeLang("vn") }}
                                    >
                                        <img
                                            src={VN_FLAG_URL}
                                            alt="VN Flag"
                                        />
                                        <span>Tiếng Việt</span>
                                    </div>
                                    <div
                                        className="lang-option"
                                        onClick={(e) => { e.stopPropagation(); handleChangeLang("en") }}
                                    >
                                        <img
                                            src={UK_FLAG_URL}
                                            alt="UK Flag"
                                        />
                                        <span>English</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔽 Divider */}
            <div className="divider"></div>

            {/* ⬅️ NEW: Product Category Menu */}
            <ProductCategoryMenu isOpen={isMenuOpen} />
        </header>
    );
};

export default Header;