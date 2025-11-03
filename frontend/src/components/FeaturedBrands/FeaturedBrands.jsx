// src/components/FeaturedBrands/FeaturedBrands.jsx

import React, { useState } from 'react';
import BrandTabs from './BrandTabs';
import BookSlider from './BookSlider';
import styles from './FeaturedBrands.module.css';

// Dữ liệu mẫu đã cập nhật bao gồm link hình ảnh
const featuredData = {
    AlphaBooks: [
        // Slide 1 (Hình ảnh 1)
        {
            id: 6,
            title: 'Hồi Ký Nguyễn Thị Bình - Gia Đình, Bạn Bè Và Đất Nước',
            currentPrice: '151.050 đ',
            originalPrice: '159.000 đ',
            discount: '-5%',
            sold: '2.8k', // Dùng 2.8k theo hình 1
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-gia-_nh_-b_n-b_-v_-_t-n_c_1.jpg'
        },
        {
            id: 7,
            title: 'Hồi ức, Giấc mơ, Suy ngẫm',
            currentPrice: '293.000 đ',
            originalPrice: '345.000 đ',
            discount: '-15%',
            sold: '241',
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a-h_i-_c_-gi_c-m_-suy-ng_m_1.jpg'
        },
        {
            id: 8,
            title: 'Những Kẻ Xuất Chúng (Tái Bản 2021)',
            currentPrice: '111.300 đ',
            originalPrice: '159.000 đ',
            discount: '-30%',
            sold: '320',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZpzLm-Q7Js-C6pBdigDVztefw_V3-LFKqQ&s'
        },
        {
            id: 9,
            title: '13 Bài Giảng Của Giáo Tiên Về Quản Trị Và Lãnh Đạo',
            currentPrice: '200.200 đ',
            originalPrice: '286.000 đ',
            discount: '-30%',
            sold: '293',
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935251422481.jpg'
        },
        {
            id: 10,
            title: 'Chính Sách Tiền Tệ Thế Kỷ 21',
            currentPrice: '227.500 đ',
            originalPrice: '325.000 đ',
            discount: '-30%',
            sold: '238',
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a_-_chinh_sach_tien_te_the_ky_21_-_outline_cs5-01.jpg'
        },

        // Slide 2 (Hình ảnh 2) - Bắt đầu từ ID 1 để dễ phân biệt
        {
            id: 1,
            title: 'Nexus - Lược Sử Của Những Mạng Lưới Thông Tin Tứ Thời Đại...',
            currentPrice: '227.500 đ',
            originalPrice: '325.000 đ',
            discount: '-30%',
            sold: '1.8k',
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/n/e/nexus-b_a-m_m_1.jpg'
        },
        {
            id: 2,
            title: 'Súng, Vi Trùng Và Thép (Tái Bản)',
            currentPrice: '237.300 đ',
            originalPrice: '339.000 đ',
            discount: '-30%',
            sold: '240',
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_244718_1_4935.jpg'
        },
        {
            id: 3,
            title: 'Sapiens Lược Sử Loài Người',
            currentPrice: '254.000 đ',
            originalPrice: '299.000 đ',
            discount: '-15%',
            sold: '612',
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/b/_/b_a_sapiens.jpg'
        },
        {
            id: 4,
            title: 'Từ Sống Bền Hải Đến Đỉnh Độc Lập',
            currentPrice: '153.300 đ',
            originalPrice: '219.000 đ',
            discount: '-30%',
            sold: '247',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMlrwAHsnsMFhS46c8Mo0fM2EqctIHhAt4g&s'
        },
        {
            id: 5,
            title: 'Thiên Nga Đen (Tái Bản 2020)',
            currentPrice: '209.300 đ',
            originalPrice: '299.000 đ',
            discount: '-30%',
            sold: '174',
            imageUrl: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_27686.jpg'
        },
    ],
    Sbooks: [
        // Dữ liệu Sbooks
    ],
    MCBooks: [
        // Dữ liệu MCBooks
    ],
};

const tabs = ['AlphaBooks', 'Sbooks', 'MCBooks'];

const FeaturedBrands = () => {
    const [activeTab, setActiveTab] = useState('AlphaBooks');
    const books = featuredData[activeTab];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerIcon}>
                    <img src="https://cdn1.fahasa.com/media/wysiwyg/icon-menu/icon_dealhot_new.png" alt="Icon Deal Hot" className={styles.iconHeader} />
                </div>
                <h2 className={styles.title}>Thương hiệu nổi bật</h2>
            </div>

            <BrandTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            <BookSlider books={books} />

            <div className={styles.viewMoreContainer}>
                <button className={styles.viewMoreButton}>Xem Thêm</button>
            </div>
        </div>
    );
};

export default FeaturedBrands;