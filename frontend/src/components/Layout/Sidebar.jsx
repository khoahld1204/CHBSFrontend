import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, ShoppingCart, Users, Gift, BarChart2, Calendar, User, Settings, Lock, Package, Tags, Zap } from 'lucide-react';

const sidebarNavItems = [
    // MENU
    { name: 'Dashboard', icon: Home, link: '/admin/dashboard', category: 'MENU', selected: true },
    { name: 'Lịch làm việc', icon: Calendar, link: '/admin/calendar', category: 'MENU' },
    { name: 'Quản lý Tài khoản', icon: User, link: '/admin/profile', category: 'MENU' },

    // E-COMMERCE
    { name: 'Quản lý Sách', icon: Book, link: '/admin/books', category: 'E-COMMERCE' },
    { name: 'Quản lý Kho', icon: Package, link: '/admin/inventory', category: 'E-COMMERCE' },
    { name: 'Danh mục/Tác giả', icon: Tags, link: '/admin/categories', category: 'E-COMMERCE' },
    { name: 'Đơn hàng', icon: ShoppingCart, link: '/admin/orders', category: 'E-COMMERCE' },
    { name: 'Khách hàng', icon: Users, link: '/admin/customers', category: 'E-COMMERCE' },
    { name: 'Khuyến Mãi/Voucher', icon: Gift, link: '/admin/promotions', category: 'E-COMMERCE' },

    // KHÁC
    { name: 'Báo cáo', icon: BarChart2, link: '/admin/reports', category: 'KHÁC' },
    { name: 'Tiện ích (Plugins)', icon: Zap, link: '/admin/plugins', category: 'KHÁC' },
    { name: 'Cài đặt', icon: Settings, link: '/admin/settings', category: 'KHÁC' },
    { name: 'Đăng xuất', icon: Lock, link: '/admin/logout', category: 'KHÁC' },
];

/**
 * @description Sidebar Menu bên trái của Admin Dashboard.
 * @param {boolean} isMobileSidebarOpen Trạng thái mở/đóng (chủ yếu cho mobile).
 * @param {boolean} isDesktopSidebarOpen Trạng thái mở/đóng (chủ yếu cho desktop).
 * @param {function} toggleMobileSidebar Hàm để đóng sidebar khi click vào nút close trên mobile.
 */
const Sidebar = ({ isMobileSidebarOpen, isDesktopSidebarOpen, toggleMobileSidebar }) => {

    // 1. Logic cho Responsive Class (Mobile)
    const mobileClass = `d-lg-block ${isMobileSidebarOpen ? 'active' : ''}`;

    // 2. Logic cho Desktop Style (Điều khiển chiều rộng)
    const desktopStyle = isDesktopSidebarOpen
        ? { width: 'var(--sidebar-width)' }
        : { width: 'var(--sidebar-collapsed-width)', overflow: 'hidden' };

    const baseStyle = { transition: 'width 0.3s ease' };

    const renderNavItems = (category) => (
        <ul className="nav flex-column mb-3">
            {sidebarNavItems.filter(item => item.category === category).map((item) => (
                <li className="nav-item" key={item.name}>
                    <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                            `sidebar-nav-item ${isActive ? 'active' : ''} ${!isDesktopSidebarOpen ? 'collapsed' : ''}`
                        }
                        onClick={toggleMobileSidebar} // Đóng sidebar khi click trên mobile
                        title={!isDesktopSidebarOpen ? item.name : undefined} // Hiện tooltip khi thu gọn
                    >
                        <item.icon size={18} className="me-2" />

                        {/* Chỉ hiển thị tên khi sidebar MỞ */}
                        {isDesktopSidebarOpen && <span>{item.name}</span>}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    return (
        <aside
            className={`admin-sidebar ${mobileClass}`}
            style={{ ...baseStyle, ...desktopStyle }}
        >
            {/* Sidebar Header (Logo/Title) */}
            <div 
                className="p-4 border-bottom d-flex justify-content-between align-items-center"
                style={{
                    borderColor: 'var(--border-color)',
                    transition: 'border-color 0.3s ease'
                }}
            >
                <NavLink to="/admin" className="text-decoration-none">
                    {/* Luôn hiển thị FAHASA ADMIN khi mở, KHÔNG hiển thị gì khi thu gọn */}
                    {isDesktopSidebarOpen && (
                        <h4 
                            className="fw-bold mb-0"
                            style={{
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s ease'
                            }}
                        >
                            FAHASA ADMIN
                        </h4>
                    )}
                </NavLink>

                {/* Nút đóng sidebar trên mobile */}
                <button
                    className="btn btn-sm d-lg-none"
                    onClick={toggleMobileSidebar}
                    aria-label="Close sidebar"
                    style={{
                        color: 'var(--text-primary)',
                        transition: 'color 0.3s ease'
                    }}
                >
                    &times;
                </button>
            </div>

            {/* Sidebar Menu Body */}
            <div className={`p-3 overflow-auto ${!isDesktopSidebarOpen ? 'p-1' : ''}`} style={{ maxHeight: 'calc(100vh - 70px)' }}>

                {/* Ẩn tiêu đề danh mục khi thu gọn */}
                {isDesktopSidebarOpen && (
                    <h6 
                        className="text-uppercase fw-bold mb-2 small"
                        style={{
                            color: 'var(--text-muted)',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        MENU
                    </h6>
                )}
                {renderNavItems('MENU')}

                {isDesktopSidebarOpen && (
                    <h6 
                        className="text-uppercase fw-bold mt-4 mb-2 small"
                        style={{
                            color: 'var(--text-muted)',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        E-COMMERCE
                    </h6>
                )}
                {renderNavItems('E-COMMERCE')}

                {isDesktopSidebarOpen && (
                    <h6 
                        className="text-uppercase fw-bold mt-4 mb-2 small"
                        style={{
                            color: 'var(--text-muted)',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        KHÁC
                    </h6>
                )}
                {renderNavItems('KHÁC')}
            </div>
        </aside>
    );
};

export default Sidebar;
