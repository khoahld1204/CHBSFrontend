// src/components/ComboTrending/ComboItem.jsx

import React from 'react';
import styles from './ComboTrending.module.css';

const ComboItem = ({ combo }) => {
    return (
        <div className={styles.comboItem}>
            <div className={styles.imageWrapper}>
                <img src={combo.imageUrl} alt={combo.title} className={styles.comboImage} />
                {/* Tag FHSALPHA nếu cần, nhưng không thấy trên các combo trong hình */}
            </div>

            <h3 className={styles.comboTitle}>{combo.title}</h3>

            <div className={styles.priceInfo}>
                <span className={styles.currentPrice}>{combo.currentPrice}</span>
                <span className={styles.discount}>{combo.discount}</span>
            </div>
            <span className={styles.originalPrice}>{combo.originalPrice}</span>

            <div className={styles.soldQty}>
                <span>Đã bán </span>{combo.sold}
            </div>
        </div>
    );
};

export default ComboItem;