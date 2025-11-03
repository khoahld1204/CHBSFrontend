// components/Footer/Footer.js

import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    // --- Các URL hình ảnh/Logo/Icons ---
    // LOGO_URL được đặt là '/fahasa-logo.png', với dấu / ở đầu để trỏ đúng đến public folder
    const LOGO_URL = "/fahasa-logo.png";
    const VERIFIED_BADGE_URL = "https://cdn1.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao1.png";
    const APP_STORE_URL = "https://cdn1.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png";
    const GOOGLE_PLAY_URL = "https://cdn1.fahasa.com/media/wysiwyg/Logo-NCC/android1.png";

    const SHIPPING_LOGOS = [
        {
            src: "https://cdn1.fahasa.com/media/wysiwyg/Logo-NCC/logo_lex.jpg", alt: "LEX" },
        { src: "https://cdn1.fahasa.com/media/wysiwyg/Logo-NCC/Logo_ninjavan.png", alt: "Ninjavan" },
        { src: "https://cdn1.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png", alt: "VNPost" },
    ];

    const PAYMENT_LOGOS = [
        { src: "https://cdn1.fahasa.com/media//wysiwyg/Logo-NCC/vnpay_logo.png", alt: "VNPay QR" },
        { src: "https://cdn1.fahasa.com/media//wysiwyg/Logo-NCC/momopay.png", alt: "MoMo" },
        { src: "https://cdn1.fahasa.com/media//wysiwyg/Logo-NCC/shopeepay_logo.png", alt: "Shopee Pay" },
        { src: "https://cdn1.fahasa.com/media//wysiwyg/Logo-NCC/logo_zalopay_2.png", alt: "ZaloPay" },
    ];

    // Cập nhật cấu trúc: Sử dụng 'src' thay cho 'name' (chữ cái)
    // Các URL dưới đây được lấy từ trang web gốc để đảm bảo độ chính xác về giao diện.
    const SOCIAL_LINKS = [
        {
            src: "https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/footer/Facebook-on.png",
            href: 'https://www.facebook.com/fahasa/',
            alt: 'Facebook'
        },
        {
            src: "https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png",
            href: 'https://www.instagram.com/fahasa_bookstore/',
            alt: 'Instagram'
        },
        {
            src: "https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/footer/Youtube-on.png",
            href: 'https://www.youtube.com/user/FAHASAvideo',
            alt: 'Youtube'
        },
        {
            src: "https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/twitter-on.png",
            href: 'https://twitter.com/Fahasa_vn',
            alt: 'Twitter'
        },
        {
            src: "https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/pinterest-on.png",
            href: 'https://www.pinterest.com/fahasa_vn/',
            alt: 'Pinterest'
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                {/* Cột 1: Logo và Địa chỉ */}
                <div className={styles.column + ' ' + styles.logoColumn}>
                    {/* Logo FAHASA */}
                    <img 
                        src={LOGO_URL} 
                        alt="Fahasa Logo" 
                        className={styles.logo}
                        onError={(e) => {
                            // Fallback nếu logo không load được
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/200x60/D41C16/FFFFFF?text=Fahasa";
                        }}
                        style={{ display: 'block', visibility: 'visible', opacity: 1 }}
                    />

                    <p className={styles.address}>
                        Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM<br />
                        Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA<br />
                        60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam
                    </p>
                    <p className={styles.description}>
                        Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ Thống Fahasa trên toàn quốc.
                    </p>

                    {/* Huy hiệu Bộ Công Thương */}
                    <div className={styles.verifiedBadge}>
                        <img src={VERIFIED_BADGE_URL} alt="Đã thông báo Bộ Công Thương" className={styles.bctBadge} />
                    </div>

                    {/* Icons mạng xã hội */}
                    <div className={styles.socialIcons}>
                        {SOCIAL_LINKS.map(item => (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" key={item.alt} title={item.alt}>
                                <img src={item.src} alt={item.alt} className={styles.socialImage} />
                            </a>
                        ))}
                    </div>

                    {/* App Stores */}
                    <div className={styles.appStores}>
                        <a href="#">
                            <img src={GOOGLE_PLAY_URL} alt="Google Play" className={styles.appStoreBadge} />
                        </a>
                        <a href="#">
                            <img src={APP_STORE_URL} alt="App Store" className={styles.appStoreBadge} />
                        </a>
                    </div>
                </div>

                {/* Cột 2: Dịch Vụ và LIÊN HỆ */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>DỊCH VỤ</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#">Điều khoản sử dụng</a></li>
                        <li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
                        <li><a href="#">Chính sách bảo mật thanh toán</a></li>
                        <li><a href="#">Giới thiệu Fahasa</a></li>
                        <li><a href="#">Hệ thống trung tâm - nhà sách</a></li>
                    </ul>

                    <h4 className={styles.columnTitle}>LIÊN HỆ</h4>
                    <p className={styles.contactInfo}>
                        <span className={styles.icon}>📍</span> 60-62 Lê Lợi, Q.1, TP. HCM
                    </p>
                    {/* Email và Phone (Duy trì ở đây theo bố cục đã điều chỉnh) */}
                    <p className={styles.contactInfo}>
                        <span className={styles.icon}>📧</span> <a href="mailto:cskh@fahasa.com.vn">cskh@fahasa.com.vn</a>
                    </p>
                    <p className={styles.contactInfo}>
                        <span className={styles.icon}>📞</span> 1900636467
                    </p>
                </div>

                {/* Cột 3: HỖ TRỢ */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>HỖ TRỢ</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#">Chính sách đổi - trả - hoàn tiền</a></li>
                        <li><a href="#">Chính sách bảo hành - bồi hoàn</a></li>
                        <li><a href="#">Chính sách vận chuyển</a></li>
                        <li><a href="#">Chính sách khách sỉ</a></li>
                    </ul>
                </div>

                {/* Cột 4: Tài Khoản Của Tôi */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>TÀI KHOẢN CỦA TÔI</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#">Đăng nhập/Tạo mới tài khoản</a></li>
                        <li><a href="#">Thay đổi địa chỉ khách hàng</a></li>
                        <li><a href="#">Chi tiết tài khoản</a></li>
                        <li><a href="#">Lịch sử mua hàng</a></li>
                    </ul>
                </div>

            </div>

            {/* Dòng Thanh Toán và Vận Chuyển (Cập nhật sử dụng Grid và styles mới) */}
            <div className={styles.shippingPaymentSection}>
                {/* Dòng Vận chuyển - Sử dụng Grid 3 cột */}
                <div className={styles.shippingGrid}>
                    {SHIPPING_LOGOS.map((item, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                style={{ width: item.width }}
                                className={styles.shippingLogo}
                            />
                        </div>
                    ))}
                </div>

                {/* Dòng Thanh toán - Sử dụng Grid 4 cột */}
                <div className={styles.paymentGrid}>
                    {PAYMENT_LOGOS.map((item, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                style={item.style}
                                className={styles.paymentLogo}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Thông tin Đăng ký kinh doanh */}
            <div className={styles.copyrightRow}>
                <p>
                    Giấy chứng nhận Đăng ký kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
                </p>
            </div>
        </footer>
    );
};

export default Footer;