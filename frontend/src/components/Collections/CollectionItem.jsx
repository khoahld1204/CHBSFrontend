// src/components/Collections/CollectionItem.jsx

import React from 'react';
import styles from './Collections.module.css';

const CollectionItem = ({ item }) => {
    return (
        <a href={item.link} className={styles.collectionItem} title={item.name}>
            <div className={styles.imageContainer}>
                <img src={item.imageUrl} alt={item.name} className={styles.collectionImage} />
            </div>
            <div className={styles.collectionName}>
                {item.name}
            </div>
        </a>
    );
};

export default CollectionItem;