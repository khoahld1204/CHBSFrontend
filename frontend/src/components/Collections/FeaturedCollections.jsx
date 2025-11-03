// src/components/Collections/FeaturedCollections.jsx (Đã chỉnh sửa để mô phỏng slider)

import React, { useRef } from 'react';
import CollectionItem from './CollectionItem';
import { collectionData } from '../../data/collectionData';
import styles from './Collections.module.css';

const FeaturedCollections = () => {
    // Sử dụng useRef để tham chiếu đến container chứa các mục sưu tập
    const sliderRef = useRef(null);

    // Hàm xử lý khi nhấn nút NEXT
    const scrollNext = () => {
        if (sliderRef.current) {
            // Cuộn sang phải một lượng bằng chiều rộng của 4 mục (mô phỏng)
            const scrollAmount = sliderRef.current.clientWidth / 5; // Ví dụ cuộn 1/5 chiều rộng
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Hàm xử lý khi nhấn nút PREV
    const scrollPrev = () => {
        if (sliderRef.current) {
            const scrollAmount = sliderRef.current.clientWidth / 5;
            sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    // Giả lập dữ liệu chỉ lấy 8 mục đầu tiên cho màn hình chính (theo Hình 1)
    // Hoặc lấy tất cả để mô phỏng 9 mục bị tràn trên Hình 2
    // Ta lấy tất cả 9 mục và dùng CSS để xử lý overflow/slider
    const items = collectionData;

    return (
        <div className={styles.container}>
            {/* Header Block */}
            <div className={styles.headerBlock}>
                <div className={styles.headerIcon}>
                    <img
                        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_sachtrongnuoc.svg"
                        alt="Icon Bộ Sưu Tập"
                        className={styles.icon}
                    />
                </div>
                <h2 className={styles.title}>BỘ SƯU TẬP NỔI BẬT</h2>
            </div>

            {/* Content Slider/List */}
            <div className={styles.contentWrapper}>
                {/* Nút PREV */}
                <div className={`${styles.navButton} ${styles.prev}`} onClick={scrollPrev}>&lt;</div>

                {/* Danh sách các mục sử dụng Flexbox cho phép cuộn ngang */}
                <div className={styles.collectionsList} ref={sliderRef}>
                    {items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
                </div>

                {/* Nút NEXT */}
                <div className={`${styles.navButton} ${styles.next}`} onClick={scrollNext}>&gt;</div>
            </div>
        </div>
    );
};

export default FeaturedCollections;