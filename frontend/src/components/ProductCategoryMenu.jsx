import React from "react";
import { ChevronRight } from "lucide-react";
import "../styles/ProductCategoryMenu.css";

// URL hình ảnh cho icon sách thay thế cho icon emoji 📚
const BOOK_ICON_URL = "https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_sachtrongnuoc.svg";

const CategoryLink = ({ text, subText, onClick }) => (
    <div className="category-link" onClick={onClick}>
        <span>{text}</span>
        {subText && <span className="sub-text">{subText}</span>}
    </div>
);

const SubCategoryGroup = ({ title, children }) => (
    <div className="subcategory-group">
        <h4 className="subcategory-title">{title}</h4>
        <div className="subcategory-list">{children}</div>
    </div>
);

const ProductCategoryMenu = ({ isOpen }) => {
    // Nếu bạn muốn chuyển sang cơ chế hover, cần truyền `isOpen` từ component cha (Header)
    // với logic onMouseEnter/onMouseLeave. Tôi giữ nguyên `isOpen` là prop.
    const containerStyle = {
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.2s ease-out, visibility 0.2s',
        pointerEvents: isOpen ? 'auto' : 'none'
    };

    // 💡 Placeholder function for navigation
    const handleLinkClick = (category) => {
        console.log(`Navigating to: ${category}`);
        // Thêm logic điều hướng tại đây (ví dụ: dùng react-router-dom)
    };

    return (
        <div className="category-menu-overlay" style={containerStyle}>
            <div className="category-menu-container">
                <div className="sidebar-menu">
                    <h3 className="menu-header">Danh mục sản phẩm</h3>
                    <div className="main-category-list">
                        <div className="main-category-item active">
                            Sách Trong Nước
                        </div>
                        <div className="main-category-item">
                            FOREIGN BOOKS
                        </div>
                        <div className="main-category-item">
                            VPP - Dụng Cụ Học Sinh
                        </div>
                        <div className="main-category-item">
                            Đồ Chơi
                        </div>
                        <div className="main-category-item">
                            Làm Đẹp - Sức Khỏe
                        </div>
                        <div className="main-category-item">
                            Sách Giáo Khoa 2025
                        </div>
                        <div className="main-category-item">
                            VPP - DCHS Theo Thương Hiệu
                        </div>
                        <div className="main-category-item">
                            Đồ Chơi Theo Thương Hiệu
                        </div>
                        <div className="main-category-item">
                            Bách Hóa Online - Lưu Niệm
                        </div>
                    </div>
                </div>

                <div className="category-details">
                    <h2 className="details-header">
                        {/* 🌟 THAY ĐỔI: Thay thế icon emoji bằng thẻ <img> */}
                        <img src={BOOK_ICON_URL} alt="Icon Sách" className="icon-image-red" />
                        Sách Trong Nước
                    </h2>

                    <div className="category-grid">
                        {/* Cột 1: VĂN HỌC & SÁCH THIẾU NHI */}
                        <div>
                            <SubCategoryGroup title="VĂN HỌC">
                                <CategoryLink text="Tiểu Thuyết" onClick={() => handleLinkClick('Tiểu Thuyết')} />
                                <CategoryLink text="Truyện Ngắn - Tản Văn" onClick={() => handleLinkClick('Truyện Ngắn')} />
                                <CategoryLink text="Light Novel" onClick={() => handleLinkClick('Light Novel')} />
                                <CategoryLink text="Ngôn Tình" onClick={() => handleLinkClick('Ngôn Tình')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('VĂN HỌC')} />
                            </SubCategoryGroup>

                            <SubCategoryGroup title="SÁCH THIẾU NHI">
                                <CategoryLink text="Manga - Comic" onClick={() => handleLinkClick('Manga - Comic')} />
                                <CategoryLink text="Kiến Thức Bách Khoa" onClick={() => handleLinkClick('Kiến Thức Bách Khoa')} />
                                <CategoryLink text="Sách Trang Kỹ Năng Sống C..." onClick={() => handleLinkClick('Kỹ Năng Sống')} />
                                <CategoryLink text="Vừa Học - Vừa Chơi: Học Vừa Chơi" onClick={() => handleLinkClick('Vừa Học - Vừa Chơi')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('SÁCH THIẾU NHI')} />
                            </SubCategoryGroup>

                            {/* SÁCH MỚI */}
                            <SubCategoryGroup title="SÁCH MỚI 💖">
                                <CategoryLink text="MANGA MỚI 💖" onClick={() => handleLinkClick('MANGA MỚI')} />
                                <CategoryLink text="LIGHT NOVEL MỚI 💖" onClick={() => handleLinkClick('LIGHT NOVEL MỚI')} />
                                <CategoryLink text="ĐAM MỸ MỚI 💖" onClick={() => handleLinkClick('ĐAM MỸ MỚI')} />
                            </SubCategoryGroup>
                        </div>

                        {/* Cột 2: KINH TẾ & TIỂU SỬ - HỒI KÝ */}
                        <div>
                            <SubCategoryGroup title="KINH TẾ">
                                <CategoryLink text="Nhân Vật - Bài Học Kinh Doanh" onClick={() => handleLinkClick('Kinh Doanh')} />
                                <CategoryLink text="Quản Trị - Lãnh Đạo" onClick={() => handleLinkClick('Quản Trị')} />
                                <CategoryLink text="Marketing - Bán Hàng" onClick={() => handleLinkClick('Marketing')} />
                                <CategoryLink text="Phân Tích Kinh Tế" onClick={() => handleLinkClick('Phân Tích Kinh Tế')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('KINH TẾ')} />
                            </SubCategoryGroup>

                            <SubCategoryGroup title="TIỂU SỬ - HỒI KÝ">
                                <CategoryLink text="Câu Chuyện Cuộc Đời" onClick={() => handleLinkClick('Câu Chuyện Cuộc Đời')} />
                                <CategoryLink text="Chính Trị" onClick={() => handleLinkClick('Chính Trị')} />
                                <CategoryLink text="Kinh Tế" onClick={() => handleLinkClick('Kinh Tế')} />
                                <CategoryLink text="Nghệ Thuật - Giải Trí" onClick={() => handleLinkClick('Nghệ Thuật')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('TIỂU SỬ - HỒI KÝ')} />
                            </SubCategoryGroup>

                            {/* SÁCH BÁN CHẠY */}
                            <SubCategoryGroup title="SÁCH BÁN CHẠY ❣️">
                                {/* Thêm các link sách bán chạy nếu cần */}
                            </SubCategoryGroup>
                        </div>

                        {/* Cột 3: TÂM LÝ - KỸ NĂNG SỐNG & GIÁO KHOA - THAM KHẢO */}
                        <div>
                            <SubCategoryGroup title="TÂM LÝ - KỸ NĂNG SỐNG">
                                <CategoryLink text="Kỹ Năng Sống" onClick={() => handleLinkClick('Kỹ Năng Sống')} />
                                <CategoryLink text="Rèn Luyện Nhân Cách" onClick={() => handleLinkClick('Rèn Luyện Nhân Cách')} />
                                <CategoryLink text="Tâm Lý" onClick={() => handleLinkClick('Tâm Lý')} />
                                <CategoryLink text="Sách cho tuổi mới lớn" onClick={() => handleLinkClick('Tuổi Mới Lớn')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('TÂM LÝ - KỸ NĂNG SỐNG')} />
                            </SubCategoryGroup>

                            <SubCategoryGroup title="GIÁO KHOA - THAM KHẢO">
                                <CategoryLink text="Sách Giáo Khoa" onClick={() => handleLinkClick('Sách Giáo Khoa')} />
                                <CategoryLink text="Sách Tham Khảo" onClick={() => handleLinkClick('Sách Tham Khảo')} />
                                <CategoryLink text="Luyện Thi THPT Quốc Gia" onClick={() => handleLinkClick('Luyện Thi')} />
                                <CategoryLink text="Mẫu Giáo" onClick={() => handleLinkClick('Mẫu Giáo')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('GIÁO KHOA - THAM KHẢO')} />
                            </SubCategoryGroup>
                        </div>

                        {/* Cột 4: NUÔI DẠY CON & SÁCH HỌC NGOẠI NGỮ */}
                        <div>
                            <SubCategoryGroup title="NUÔI DẠY CON">
                                <CategoryLink text="Cẩm Nang Làm Cha Mẹ" onClick={() => handleLinkClick('Cẩm Nang Cha Mẹ')} />
                                <CategoryLink text="Phương Pháp Giáo Dục Trẻ..." onClick={() => handleLinkClick('Phương Pháp Giáo Dục')} />
                                <CategoryLink text="Phát Triển Trí Tuệ Cho Trẻ" onClick={() => handleLinkClick('Phát Triển Trí Tuệ')} />
                                <CategoryLink text="Phát Triển Kỹ Năng Cho Trẻ" onClick={() => handleLinkClick('Phát Triển Kỹ Năng')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('NUÔI DẠY CON')} />
                            </SubCategoryGroup>

                            <SubCategoryGroup title="SÁCH HỌC NGOẠI NGỮ">
                                <CategoryLink text="Tiếng Anh" onClick={() => handleLinkClick('Tiếng Anh')} />
                                <CategoryLink text="Tiếng Nhật" onClick={() => handleLinkClick('Tiếng Nhật')} />
                                <CategoryLink text="Tiếng Hoa" onClick={() => handleLinkClick('Tiếng Hoa')} />
                                <CategoryLink text="Tiếng Hàn" onClick={() => handleLinkClick('Tiếng Hàn')} />
                                <CategoryLink text="Xem tất cả" subText="»" onClick={() => handleLinkClick('SÁCH HỌC NGOẠI NGỮ')} />
                            </SubCategoryGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryMenu;
