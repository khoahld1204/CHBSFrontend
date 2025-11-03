import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Home, Lock, ShoppingCart, Wallet, Bell, Heart, BookOpen, MessageSquare } from 'lucide-react';
import styles from './Profile.module.css';

const ProfileSidebar = ({ activeLink }) => {
    // Dữ liệu menu điều hướng
    const menuItems = [
        {
            section: 'Thông tin tài khoản', links: [
                { name: 'Hồ sơ cá nhân', path: 'personal', icon: User, color: '#9333ea' }, // Purple
                { name: 'Sổ địa chỉ', path: 'address', icon: Home, color: '#22c55e' }, // Green
                { name: 'Đổi mật khẩu', path: 'password', icon: Lock, color: '#f97316' }, // Orange
            ]
        },
        {
            section: 'Thông tin khác', links: [
                { name: 'Đơn hàng của tôi', path: 'orders', icon: ShoppingCart, color: '#6366f1' },
                { name: 'Ví voucher/F-Point/Freeship', path: 'wallet', icon: Wallet, color: '#eab308' },
                { name: 'Thông báo', path: 'notifications', icon: Bell, color: '#3b82f6' },
                { name: 'Sản phẩm yêu thích', path: 'wishlist', icon: Heart, color: '#ec4899' },
                { name: 'Sách theo bộ', path: 'collections', icon: BookOpen, color: '#8b5cf6' },
                { name: 'Nhận xét của tôi', path: 'reviews', icon: MessageSquare, color: '#06b6d4' },
            ]
        },
    ];

    return (
        <div className={styles.sidebar}>
            {/* Tóm tắt Profile */}
            <div className={styles.profileSummary}>
                <div className={styles.avatar}>HK</div>
                <h3 className={styles.userName}>Ho Khoa</h3>
                <p className={styles.membership}>Thành viên Bạc</p>
                <p className={styles.fpoint}>F-Point tích lũy:
                    <span style={{ fontWeight: 'bold', color: '#dc2626' }}> 20.000 điểm</span></p>
                <p className={styles.fpoint}>Điểm thưởng dùng được:
                    <span style={{ fontWeight: 'bold', color: '#dc2626' }}> 0 điểm</span></p>
            </div>

            {/* Menu điều hướng */}
            {menuItems.map((group, index) => (
                <div key={index}>
                    <h4 className={styles.navTitle}>{group.section}</h4>
                    <ul className={styles.navList}>
                        {group.links.map(link => {
                            const IconComponent = link.icon;
                            return (
                                <li
                                    key={link.path}
                                    className={`${styles.navItem} ${activeLink === link.path ? styles.active : ''}`}
                                >
                                    {/* Sử dụng NavLink từ react-router-dom nếu cần, hoặc thẻ <a> đơn giản */}
                                    <NavLink
                                        to={`/customer/account?tab=${link.path}`}
                                        title={link.name}
                                    >
                                        {IconComponent && <IconComponent size={18} style={{ color: link.color || '#555' }} />}
                                        {link.name}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProfileSidebar;
