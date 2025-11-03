// src/components/FeaturedBrands/BrandTabs.jsx

import React from 'react';
import styles from './FeaturedBrands.module.css';

const BrandTabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <ul className={styles.tabList}>
            {tabs.map(tab => (
                <li
                    key={tab}
                    className={`${styles.tabItem} ${activeTab === tab ? styles.active : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </li>
            ))}
        </ul>
    );
};

export default BrandTabs;