// components/ProductList/ProductList.js

import React from 'react';
import styles from '../../styles/ProductList.module.css';

// ----------------------------------------------------------------------
// ĐÃ XÓA DÒNG IMPORT TỪ FILE KHÁC ĐỂ CHỈ DÙNG DỮ LIỆU BÊN DƯỚI
// import productData from '../../data/productData'; 
// ----------------------------------------------------------------------

// Helper component cho Rating Star
const RatingStars = ({ rating }) => {
    if (!rating) return null;
    const ratingWidth = (rating / 5) * 100; // Tính % width cho div rating
    return (
        <div className={styles.ratingContainer}>
            <div className={styles.ratingBox}>
                <div className={styles.rating} style={{ width: `${ratingWidth}%` }}></div>
            </div>
            {/* Đây là phần hiển thị rating số trên mobile/nếu cần */}
            {/* <div className={styles.ratingLinks}>{rating}</div> */}
        </div>
    );
};

const ProductItem = ({ product }) => {
    // Để đơn giản hóa, URL của sản phẩm được lấy từ title
    const productSlug = product.title.toLowerCase().replace(/\s/g, '-').replace(/[^\w-]/g, '');

    return (
        <li className={styles.productItem}>
            <div className={styles.itemInner}>
                <div className={styles.productImagesContainer}>
                    <a href={`/${productSlug}`} title={product.title} className={styles.productImageLink}>
                        <div className={styles.productImage}>
                            {/* Khung (Frame) nếu có */}
                            {product.frame && (
                                <img className={styles.fhsImgFrameBlock} src={product.frame} alt="Frame" />
                            )}
                            {/* Ảnh sản phẩm chính */}
                            <img className={styles.lazyloaded} src={product.image} alt={product.title} loading="lazy" />
                        </div>
                        {/* Nhãn Tập (Episode Label) */}
                        {product.episode && (
                            <div className={styles.episodeLabel}>{product.episode}</div>
                        )}
                    </a>
                </div>

                <h2 className={styles.productName}>
                    <a href={`/${productSlug}`} title={product.title}>
                        {product.title}
                    </a>
                </h2>

                <div className={styles.priceLabel}>
                    <p className={styles.specialPrice}>
                        <span className={styles.price}>{product.price}</span>
                        <span className={styles.discountPercent}>{product.discount}</span>
                    </p>
                    <span className={styles.oldPrice}>{product.oldPrice}</span>
                </div>

                <div className={styles.soldContainer}>
                    {/* Hiển thị Rating nếu có */}
                    {product.rating && (
                        <>
                            <RatingStars rating={product.rating} />
                            <span className={styles.soldSeparator}>|</span>
                        </>
                    )}
                    <div className={styles.soldQtyNum}>
                        <span>Đã bán </span>
                        <span>{product.sold}</span>
                    </div>
                </div>
            </div>
        </li>
    );
};

const ProductList = () => {
    return (
        <div className={styles.personalizationBlock}>
            {/* Header Block */}
            <div className={styles.blockHeader}>
                {/* Icon và Text "Gợi ý cho bạn" */}
                <h3 className={styles.blockHeaderTitle}>
                    <span className={styles.headerIcon}>✨</span> Gợi ý cho bạn <span className={styles.headerIcon}>👍</span>
                </h3>
            </div>

            {/* Product Grid / List */}
            <ul className={styles.productListGrid}>
                {productData.map((product, index) => ( // Dòng .map() này sẽ không lỗi
                    <ProductItem key={index} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

// Data mẫu cho 8 sản phẩm đầu tiên (Dữ liệu này vẫn ở cuối file)
const productData = [
    {
        title: "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên Trên Internet Như Thế Nào Và Bạn Cũng Có Thể Làm Như Thế (Tái Bản 2021)",
        price: "169.000 đ",
        oldPrice: "199.000 đ",
        discount: "-15%",
        sold: 9,
        image: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_3718.jpg",
        frame: "https://cdn1.fahasa.com/media/wysiwyg/HONG_KD/Frame_ncc_2025/Frame_AlphaBooks.png",
    },
    {
        title: "Hình Ảnh Của Bạn Đáng Giá Triệu Đô (Tái Bản 2019)",
        price: "78.000 đ",
        oldPrice: "120.000 đ",
        discount: "-35%",
        sold: 93,
        image: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_181017.jpg",
    },
    {
        title: "Chainsaw Man - Tập 9 - Tặng Kèm Lót Ly",
        price: "42.500 đ",
        oldPrice: "45.000 đ",
        discount: "-5%",
        sold: 97,
        image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8934974185598.jpg",
        episode: "Tập 9",
    },
    {
        title: "Giấy Photo A4 80gsm - Paper One (500 Tờ)",
        price: "100.500 đ",
        oldPrice: "106.000 đ",
        discount: "-5%",
        sold: 34,
        image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8993242596993_1.jpg",
        frame: "https://cdn1.fahasa.com/media/wysiwyg/HUYEN-1/CTGiayPhoto_Frame1_1080x1080.png",
    },
    {
        title: "Bộ Những Tia Nắng Đầu Tiên (Bộ 10 Cuốn) (Tái Bản 2022)",
        price: "81.000 đ",
        oldPrice: "90.000 đ",
        discount: "-10%",
        sold: 46,
        image: "https://cdn1.fahasa.com/media/catalog/product/z/3/z3276903113530_6d7705a82f3cc09c14dfd4d707c5f5ea.jpg",
    },
    {
        title: "MASHLE - Tập 3 - Mash Burnedead Và Pháp Sư Mặt Nạ",
        price: "28.500 đ",
        oldPrice: "30.000 đ",
        discount: "-5%",
        sold: 39,
        image: "https://cdn1.fahasa.com/media/catalog/product/m/a/mashle_bia_tap_03_2.jpg",
    },
    {
        title: "Tam Quốc Diễn Nghĩa (Trọn Bộ 3 Tập)",
        price: "312.000 đ",
        oldPrice: "390.000 đ",
        discount: "-20%",
        sold: 58,
        image: "https://cdn1.fahasa.com/media/catalog/product/3/3/333_4.jpg",
        rating: 4.8,
    },
    {
        title: "25 Chuyên Đề Ngữ Pháp Tiếng Anh Trọng Tâm - Tập 2",
        price: "74.400 đ",
        oldPrice: "120.000 đ",
        discount: "-38%",
        sold: 146,
        image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935095626649.jpg",
        episode: "Tập 2",
        rating: 4.7,
    },
    {
        title: "Collins - Writing For Ielts (Tái Bản 2023)",
        price: "129.500 đ",
        oldPrice: "144.000 đ",
        discount: "-10%",
        sold: 54,
        image: "https://cdn1.fahasa.com/media/catalog/product/9/7/9786043778526.jpg",
    },
    {
        title: "Đỉnh Gió Hú (Bìa Mềm)",
        price: "80.000 đ",
        oldPrice: "100.000 đ",
        discount: "-20%",
        sold: 18,
        image: "https://cdn1.fahasa.com/media/catalog/product/4/2/42bb0951bd84257992fc9b9c0bb4b02e.jpg",
        rating: 5.0,
    },
];