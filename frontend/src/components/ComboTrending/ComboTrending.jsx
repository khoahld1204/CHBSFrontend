// src/components/ComboTrending/ComboTrending.jsx

import React, { useState } from 'react';
import ComboTabs from './ComboTabs';
import ComboSlider from './ComboSlider';
import { comboData } from '../../data/comboData'; // Import dữ liệu
import styles from './ComboTrending.module.css';

const tabs = Object.keys(comboData);

const ComboTrending = () => {
    const [activeTab, setActiveTab] = useState('Combo Kinh Tế');
    const combos = comboData[activeTab];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerIcon}>
                    <img src="https://cdn1.fahasa.com/media/wysiwyg/Thang-11-2023/icon_new.png" alt="Icon Combo Trending" className={styles.iconHeader} />
                </div>
                <h2 className={styles.title}>Combo trending</h2>
            </div>

            <ComboTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

            <ComboSlider combos={combos} />

            <div className={styles.viewMoreContainer}>
                <button className={styles.viewMoreButton}>Xem Thêm</button>
            </div>
        </div>
    );
};

export default ComboTrending;