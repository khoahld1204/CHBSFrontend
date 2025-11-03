import React from 'react';
import '../styles/ProductCategories.css';
import { BsGridFill } from 'react-icons/bs';

const categories = [
    { name: "Đồ Chơi Lắp Ráp", img: "8935339411178-5-removebg-preview.png" },
    { name: "Giấy Photo", img: "8934986004412-_4-removebg-preview.png" },
    { name: "Quả Địa Cầu", img: "1401030001118-removebg-preview.png" },
    { name: "SGK 2025", img: "SGK-Lop3-1.png" },
    { name: "Lịch Sử Việt Nam", img: "8935244874389.png" },
    { name: "Văn Học", img: "8934974182375.png" },
    { name: "Tâm Lý Kỹ Năng", img: "atomichabit.png" },
    { name: "Thiếu Nhi", img: "bup-sen-xanh.png" },
    { name: "Sách Học Ngoại Ngữ", img: "hsk100.png" },
    { name: "Ngoại Văn", img: "ngoai-van-t1.png" }
    // Thêm các danh mục khác nếu cần
];

const ProductCategories = () => {
    return (
        <div className="category-section-container">
            <div className="category-header">
                {/* Sử dụng icon từ react-icons/bs. Nếu không dùng, có thể thay bằng HTML entity hoặc SVG */}
                <BsGridFill className="category-header-icon" />
                <h2 className="category-header-title">Danh mục sản phẩm</h2>
            </div>
            <div className="category-list">
                {categories.map((category, index) => (
                    <a href="#" className="category-item" key={index}>
                        <div className="category-image-wrapper">
                            <img
                                src={category.img}
                                alt={category.name}
                                className="category-image"
                            />
                        </div>
                        <span className="category-name">{category.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProductCategories;