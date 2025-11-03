// src/components/FeaturedBrands/BookItem.jsx (Cần cập nhật)

import React from 'react';
import styles from './FeaturedBrands.module.css';

const BookItem = ({ book }) => {
    // Sử dụng book.imageUrl thay vì fixed image
    const imgSrc = book.imageUrl;

    return (
        <div className={styles.bookItem}>
            <div className={styles.imageWrapper}>
                {/* Image Frame và book cover */}
                <img src={imgSrc} alt={book.title} className={styles.bookImage} />
                <span className={styles.fhsAlphaTag}>FHSALPHA</span> {/* Giả lập tag */}
            </div>

            <h3 className={styles.bookTitle}>{book.title}</h3>

            <div className={styles.priceInfo}>
                <span className={styles.currentPrice}>{book.currentPrice}</span>
                <span className={styles.discount}>{book.discount}</span>
            </div>
            <span className={styles.originalPrice}>{book.originalPrice}</span>

            <div className={styles.soldQty}>
                <span>Đã bán </span>{book.sold}
            </div>
        </div>
    );
};

export default BookItem;