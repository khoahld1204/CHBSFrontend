// src/components/FeaturedBrands/BookSlider.jsx

import React from 'react';
import BookItem from './BookItem';
import styles from './FeaturedBrands.module.css';

const BookSlider = ({ books }) => {
    return (
        <div className={styles.sliderWrapper}>
            {/* Sử dụng một thư viện slider thực tế ở đây, ví dụ Swiper */}
            <div className={styles.bookList}>
                {books.map(book => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
            {/* Giả lập nút điều hướng */}
            <div className={`${styles.navButton} ${styles.prev}`}>&lt;</div>
            <div className={`${styles.navButton} ${styles.next}`}>&gt;</div>
        </div>
    );
};

export default BookSlider;