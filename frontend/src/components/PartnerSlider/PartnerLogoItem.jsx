// src/components/PartnerSlider/PartnerLogoItem.jsx

import React from 'react';
import styles from './PartnerSlider.module.css';

const PartnerLogoItem = ({ logo }) => {
    return (
        <a href={logo.link} className={styles.logoItem} title={logo.name}>
            <img
                src={logo.imageUrl}
                alt={logo.name}
                className={styles.logoImage}
            />
        </a>
    );
};

export default PartnerLogoItem;