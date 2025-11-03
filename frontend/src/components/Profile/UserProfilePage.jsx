import React from 'react';
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';
import styles from './Profile.module.css';


const UserProfilePage = () => {
    
    const activeTab = 'personal';

    return (
        <div className={styles.pageContainer}>
            
            <ProfileSidebar activeLink={activeTab} />

            
            <ProfileContent activeTab={activeTab} />
        </div>
    );
};

export default UserProfilePage;
