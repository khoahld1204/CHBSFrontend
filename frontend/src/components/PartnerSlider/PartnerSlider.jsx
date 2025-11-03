// src/components/PartnerSlider/PartnerSlider.jsx

import React, { useRef } from 'react';
import PartnerLogoItem from './PartnerLogoItem';
import { partnerLogos } from '../../data/partnerLogos';
import styles from './PartnerSlider.module.css';

const PartnerSlider = () => {
    const sliderRef = useRef(null);

    // Điều chỉnh scroll step dựa trên số lượng logo hiển thị (ví dụ: 5 logo)
    const SCROLL_STEP = 5;

    const scroll = (direction) => {
        if (sliderRef.current) {
            // Tính toán chiều rộng của một item để trượt
            const itemWidth = sliderRef.current.scrollWidth / partnerLogos.length;
            const scrollAmount = itemWidth * SCROLL_STEP * (direction === 'next' ? 1 : -1);

            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.sliderContainer}>
            {/* Nút PREV */}
            <button className={`${styles.navButton} ${styles.prev}`} onClick={() => scroll('prev')}>
                &lt;
            </button>

            <div className={styles.sliderWrapper} ref={sliderRef}>
                {partnerLogos.map(logo => (
                    <PartnerLogoItem key={logo.id} logo={logo} />
                ))}
            </div>

            {/* Nút NEXT */}
            <button className={`${styles.navButton} ${styles.next}`} onClick={() => scroll('next')}>
                &gt;
            </button>
        </div>
    );
};

export default PartnerSlider;