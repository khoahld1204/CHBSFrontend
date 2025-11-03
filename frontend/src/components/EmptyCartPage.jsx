// src/components/EmptyCartPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Cần React Router
import '../styles/EmptyCart.css';

const EmptyCartPage = () => {
    // Hook của React Router để chuyển hướng
    const navigate = useNavigate();

    // Hàm xử lý khi nhấn nút "MUA SẮM NGAY"
    const handleShopNowClick = () => {
        // Chuyển hướng về trang chủ hoặc trang khuyến mãi chính
        navigate('/');
    };

    return (
        <div className="cart-page-wrapper">

            {/* Header của nội dung trang Giỏ hàng */}
            <div className="cart-page-header">
                <h1 className="cart-page-title">Giỏ hàng</h1>
                <span className="cart-page-item-count">(0 sản phẩm)</span>
            </div>

            {/* Container chính hiển thị hộp trống */}
            <div className="cart-empty-container">
                <div className="cart-empty-box">

                    {/* Icon ZzZ (Mô phỏng bằng một div với CSS) */}
                    <div className="empty-icon-graphic">ZzZ</div>

                    <p className="empty-message">
                        Chưa có sản phẩm trong giỏ hàng của bạn.
                    </p>

                    <button
                        className="button-shopping-now"
                        onClick={handleShopNowClick}
                        title="Mua sắm ngay"
                    >
                        MUA SẮM NGAY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmptyCartPage;