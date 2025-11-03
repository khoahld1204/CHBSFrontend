import React from 'react';

/**
 * @description Footer component cho Admin Layout, tự động điều chỉnh theo sidebar
 * @param {string} headerWidth Độ rộng được tính toán từ AdminLayout
 */
const AdminFooter = ({ headerWidth }) => {
    // Lấy năm hiện tại
    const currentYear = new Date().getFullYear();

    return (
        <footer 
            className="admin-footer"
            style={{
                width: headerWidth || '100%',
                transition: 'width 0.3s ease'
            }}
        >
            <div className="container-fluid">
                <div className="row">
                    {/* Copyright và Tên ứng dụng */}
                    <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
                        <p 
                            className="mb-0 small"
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'color 0.3s ease'
                            }}
                        >
                            &copy; {currentYear} Fahasa Admin Dashboard. All Rights Reserved.
                        </p>
                    </div>

                    {/* Liên kết Footer */}
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item me-3">
                                <a 
                                    href="#" 
                                    className="text-decoration-none small"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--fahasa-primary)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="list-inline-item me-3">
                                <a 
                                    href="#" 
                                    className="text-decoration-none small"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--fahasa-primary)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    Support
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a 
                                    href="#" 
                                    className="text-decoration-none small"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--fahasa-primary)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    Licenses
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AdminFooter;
