// src/components/ComboTrending/ComboSlider.jsx

import React from 'react';
import ComboItem from './ComboItem';
import styles from './ComboTrending.module.css';

const ComboSlider = ({ combos }) => {
    return (
        <div className={styles.sliderWrapper}>
            {/* Giả lập nút điều hướng slider */}
            <div className={`${styles.navButton} ${styles.prev}`}>&lt;</div>

            <div className={styles.comboList}>
                {combos.map(combo => (
                    <ComboItem key={combo.id} combo={combo} />
                ))}
            </div>

            <div className={`${styles.navButton} ${styles.next}`}>&gt;</div>
        </div>
    );
};

export default ComboSlider;