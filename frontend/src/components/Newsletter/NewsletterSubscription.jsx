// src/components/Newsletter/NewsletterSubscription.jsx

import React from 'react';
import styles from './NewsletterSubscription.module.css';
// Giả định bạn đang sử dụng Font Awesome cho icon, nếu không, bạn có thể thay bằng icon SVG hoặc ký tự đơn giản.
// Nếu không dùng thư viện icon, bạn sẽ cần import icon cụ thể hoặc dùng HTML entity.

const NewsletterSubscription = () => {
    // Trong React, chúng ta thường quản lý state cho input và xử lý submit.
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic đăng ký bản tin ở đây (gửi email lên server)
        console.log('Đăng ký với email:', email);
        alert(`Đăng ký thành công với email: ${email}`);
        setEmail(''); // Reset input
    };

    return (
        <div className={styles.container}>
            <div className={styles.innerContent}>

                {/* Phần Tiêu đề Đăng ký */}
                <div className={styles.subscribeTitle}>
                    {/* Sử dụng một ký tự envelope hoặc component icon thực tế */}
                    <span className={styles.iconEnvelope}>✉️</span>
                    <label className={styles.label}>ĐĂNG KÝ NHẬN BẢN TIN</label>
                </div>

                {/* Form Đăng ký */}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="email"
                        name="email"
                        id="newsletter"
                        className={styles.inputEmail}
                        placeholder="Nhập địa chỉ email của bạn"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.submitButton}>
                        Đăng ký
                    </button>
                </form>

            </div>
        </div>
    );
};

export default NewsletterSubscription;