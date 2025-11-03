import React from 'react';
import styles from './Profile.module.css';

const PROFILE_BANNER = "https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-owl.png";
// 🌟 THAY ĐỔI: URL ảnh nền cho banner màu xám/trắng
const BACKGROUND_BANNER_URL = "https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/background_silver.png";

const ProfileContent = () => {
    // Dữ liệu giả lập cho các thành tích/ưu đãi
    const achievementData = [
        { title: 'F-Point hiện có', value: '0', unit: '' },
        { title: 'Freeship hiện có', value: '0', unit: 'lần' },
        { title: 'Số đơn hàng', value: '0', unit: 'đơn hàng' },
        { title: 'Đã thanh toán', value: '0', unit: 'đ' },
    ];

    return (
        <div className={styles.contentArea}>
            {/* Alert Header (Cảnh báo) */}
            <div className={styles.alertHeader}>
                <p className={styles.alertText}>
                    <span style={{ color: '#d32f2f' }}>⚠️</span> Bạn vui lòng cập nhật thông tin tài khoản:
                </p>
                <a href="#" className={styles.alertLink}>
                    Cập nhật thông tin ngay
                </a>
            </div>

            {/* Membership Banner (Fahasa Owl) */}
            <div className={styles.membershipBanner} style={{ backgroundImage: `url('${BACKGROUND_BANNER_URL}')` }}>
                <img src={PROFILE_BANNER} alt="Fahasa Owl" className={styles.membershipOwl} />
                <button className={styles.membershipButton}>Thành viên &gt;</button>
            </div>

            {/* Achievement Grid (Ưu đãi & Thành tích) */}
            <div className={styles.achievementGrid}>

                {/* Khối Ưu đãi của bạn */}
                <div className={styles.achievementGroup}>
                    <h4 className={styles.cardGroupTitle}>Ưu đãi của bạn</h4>
                    <div className={styles.cardGroupBody}>
                        {achievementData.slice(0, 2).map((item, index) => (
                            <div key={index} className={styles.achievementCard}>
                                <p className={styles.cardTitle}>{item.title}</p>
                                <p className={`${styles.cardValue} ${styles.red}`}>
                                    {item.value} <span className={styles.cardUnit}>{item.unit}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Khối Thành tích năm 2025 */}
                <div className={styles.achievementGroup}>
                    <h4 className={styles.cardGroupTitle}>Thành tích năm 2025</h4>
                    <div className={styles.cardGroupBody}>
                        {achievementData.slice(2).map((item, index) => (
                            <div key={index} className={styles.achievementCard}>
                                <p className={styles.cardTitle}>{item.title}</p>
                                <p className={`${styles.cardValue} ${styles.red}`}>
                                    {item.value} <span className={styles.cardUnit}>{item.unit}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Khám phá hạng thành viên */}
            <p className={styles.exploreLink}>
                Khám phá hạng thành viên. <a href="#" className={styles.headerLink}>Xem chi tiết</a>
            </p>

            {/* Form Hồ Sơ Cá Nhân */}
            <h3 className={styles.sectionTitle}>Hồ sơ cá nhân</h3>
            <form className={styles.profileForm}>
                {/* Họ */}
                <label className={styles.formLabel}>Họ*</label>
                <input type="text" className={styles.formInput} placeholder="Ho" defaultValue="Ho" readOnly />
                <span className={styles.formAction} style={{ visibility: 'hidden' }}>&nbsp;</span>

                {/* Tên */}
                <label className={styles.formLabel}>Tên*</label>
                <input type="text" className={styles.formInput} placeholder="Khoa" defaultValue="Khoa" readOnly />
                <span className={styles.formAction}>Thay đổi</span>

                {/* Số điện thoại */}
                <label className={styles.formLabel}>Số điện thoại</label>
                <input type="tel" className={styles.formInput} defaultValue="0374295461" readOnly />
                <span className={styles.formAction}>Thêm mới</span>

                {/* Email */}
                <label className={styles.formLabel}>Email</label>
                <input type="email" className={styles.formInput} placeholder="Chưa có email" readOnly />
                <span className={styles.formAction}>Thêm mới</span>

                {/* Giới tính */}
                <label className={styles.formLabel}>Giới tính*</label>
                <div className={styles.genderBirthdayGrid} style={{ justifyContent: 'flex-start' }}>
                    <label className={styles.genderOption}>
                        <input type="radio" name="gender" value="Nam" defaultChecked /> Nam
                    </label>
                    <label className={styles.genderOption}>
                        <input type="radio" name="gender" value="Nữ" /> Nữ
                    </label>
                </div>
                <span className={styles.formAction} style={{ visibility: 'hidden' }}>&nbsp;</span>

                {/* Ngày sinh */}
                <label className={styles.formLabel}>Birthday*</label>
                <div className={styles.birthdayInputs}>
                    <input type="text" placeholder="01" className={styles.birthdayInput} defaultValue="01" />
                    <input type="text" placeholder="02" className={styles.birthdayInput} defaultValue="02" />
                    <input type="text" placeholder="1990" className={styles.birthdayInput} defaultValue="1990" />
                </div>
                <span className={styles.formAction} style={{ visibility: 'hidden' }}>&nbsp;</span>

                {/* Nút Lưu */}
                <button type="submit" className={styles.saveButton}>Lưu thay đổi</button>
            </form>
        </div>
    );
};

export default ProfileContent;
