// src/components/ComboTrending/ComboTabs.jsx

import React from 'react';
import styles from './ComboTrending.module.css';

const ComboTabs = ({ tabs, activeTab, setActiveTab }) => {
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

export default ComboTabs;