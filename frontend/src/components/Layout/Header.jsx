import React, { useEffect } from 'react';
import { Search, Bell, Menu, Settings, LogOut, Edit3, Info, User, ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

/**
 * @description Header là Navbar trên cùng, cố định và điều khiển Sidebar.
 * @param {function} toggleMobileSidebar Hàm để mở/đóng Sidebar trên mobile.
 * @param {function} toggleDesktopSidebar Hàm để mở/đóng Sidebar trên desktop (thu gọn).
 * @param {string} headerWidth Độ rộng Header được tính toán từ AdminLayout.
 */
const Header = ({ toggleMobileSidebar, toggleDesktopSidebar, headerWidth }) => {
    const { theme, toggleTheme, isDark } = useTheme();
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = React.useState(false);
    const navigate = useNavigate();

    // Đường dẫn tới ảnh trong thư mục public
    const avatarPath = "/avatar.jpg";

    const toggleAccountDropdown = () => setIsAccountDropdownOpen(!isAccountDropdownOpen);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isAccountDropdownOpen && !event.target.closest('.admin-account-dropdown-container')) {
                setIsAccountDropdownOpen(false);
            }
        };

        if (isAccountDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isAccountDropdownOpen]);

    return (
        // Sử dụng admin-header class và style inline cho vị trí cố định chính xác
        <header
            className="admin-header navbar navbar-expand-lg"
            style={{
                // Tính toán vị trí bên trái (left) dựa trên độ rộng Sidebar bị đóng
                left: headerWidth ? `calc(100% - ${headerWidth})` : 'var(--sidebar-width)',
                width: headerWidth
            }}
        >
            <div className="container-fluid">

                {/* 1. Nút Toggle Sidebar (Desktop và Tablet) */}
                <button
                    className="btn btn-link d-none d-lg-inline-block me-3 p-0"
                    onClick={toggleDesktopSidebar}
                    aria-label="Toggle sidebar visibility"
                    style={{ 
                        color: 'var(--text-primary)',
                        transition: 'color 0.3s ease'
                    }}
                >
                    <Menu size={20} />
                </button>

                {/* 2. Nút Toggle Sidebar cho Mobile */}
                <button
                    className="btn btn-link d-lg-none me-3 p-0"
                    onClick={toggleMobileSidebar}
                    aria-label="Toggle navigation"
                    style={{ 
                        color: 'var(--text-primary)',
                        transition: 'color 0.3s ease'
                    }}
                >
                    <Menu size={20} />
                </button>

                {/* 3. Ô tìm kiếm - Ẩn trên Mobile */}
                <form className="d-none d-md-flex me-auto" style={{ width: 'min(25%, 300px)' }}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control form-control-sm border-end-0"
                            placeholder="Type to search..."
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderColor: 'var(--border-color)',
                                color: 'var(--text-primary)',
                                transition: 'all 0.3s ease'
                            }}
                        />
                        <span 
                            className="input-group-text border-start-0"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderColor: 'var(--border-color)',
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <Search size={16} />
                        </span>
                    </div>
                </form>

                {/* 4. Các icon thông báo và Profile bên phải */}
                <div className="d-flex align-items-center">

                    {/* Icon Dark/Light Mode */}
                    <button 
                        className="btn btn-link me-3 p-0" 
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        style={{ 
                            color: 'var(--text-primary)',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Icon Thông báo */}
                    <button 
                        className="btn btn-link position-relative me-3 p-0"
                        style={{ 
                            color: 'var(--text-primary)',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        <Bell size={20} />
                        <span
                            className="position-absolute translate-middle badge rounded-pill bg-danger"
                            style={{ top: '5px', right: '5px', fontSize: '0.6em' }}
                        >
                            3
                        </span>
                    </button>

                    {/* 5. Dropdown Profile Chi tiết */}
                    <div className="position-relative admin-account-dropdown-container">
                        <div
                            className="d-flex align-items-center text-decoration-none"
                            onClick={toggleAccountDropdown}
                            style={{ 
                                color: 'var(--text-primary)',
                                transition: 'color 0.3s ease',
                                cursor: 'pointer',
                                padding: '4px 8px',
                                borderRadius: '4px'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--hover-bg)'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            {/* Avatar */}
                            <img
                                src={avatarPath}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/32x32/D41C16/FFFFFF?text=K" }}
                                alt="Admin Avatar"
                                width="32"
                                height="32"
                                className="rounded-circle me-2"
                                style={{ border: '1px solid var(--border-color)' }}
                            />
                            <span className="d-none d-md-inline me-1 fw-bold">KHOA</span>
                            <ChevronDown 
                                size={16} 
                                style={{ 
                                    color: 'var(--text-secondary)',
                                    transition: 'transform 0.2s ease'
                                }}
                                className={isAccountDropdownOpen ? 'rotate-180' : ''}
                            />
                        </div>

                        {/* Dropdown Menu */}
                        {isAccountDropdownOpen && (
                            <div
                                className="admin-account-dropdown-menu"
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    right: 0,
                                    marginTop: '8px',
                                    minWidth: '200px',
                                    backgroundColor: 'var(--bg-primary)',
                                    borderColor: 'var(--border-color)',
                                    borderRadius: '8px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 1000,
                                    padding: '8px',
                                    animation: 'fadeInDown 0.2s ease'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {/* Các mục chức năng */}
                                    <li>
                                        <a 
                                            className="d-flex align-items-center py-2 px-3 rounded-2" 
                                            href="/admin/profile"
                                            style={{ 
                                                color: 'var(--text-primary)',
                                                transition: 'background-color 0.2s ease',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--hover-bg)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                            onClick={() => setIsAccountDropdownOpen(false)}
                                        >
                                            <div 
                                                className="me-3 d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    border: '1px solid var(--border-color)',
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                <User size={16} style={{ color: 'var(--text-secondary)' }} />
                                            </div>
                                            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Edit profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            className="d-flex align-items-center py-2 px-3 rounded-2" 
                                            href="/admin/settings"
                                            style={{ 
                                                color: 'var(--text-primary)',
                                                transition: 'background-color 0.2s ease',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--hover-bg)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                            onClick={() => setIsAccountDropdownOpen(false)}
                                        >
                                            <div 
                                                className="me-3 d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    border: '1px solid var(--border-color)',
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                <Settings size={16} style={{ color: 'var(--text-secondary)' }} />
                                            </div>
                                            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Account settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            className="d-flex align-items-center py-2 px-3 rounded-2" 
                                            href="#"
                                            style={{ 
                                                color: 'var(--text-primary)',
                                                transition: 'background-color 0.2s ease',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--hover-bg)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsAccountDropdownOpen(false);
                                            }}
                                        >
                                            <div 
                                                className="me-3 d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '50%',
                                                    border: '1px solid var(--border-color)',
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                <Info size={16} style={{ color: 'var(--text-secondary)' }} />
                                            </div>
                                            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Support</span>
                                        </a>
                                    </li>

                                    {/* Divider */}
                                    <li><hr style={{ borderColor: 'var(--border-color)', margin: '0.5rem 0', borderTop: '1px solid var(--border-color)' }} /></li>
                                    
                                    {/* Đăng xuất */}
                                    <li>
                                        <a 
                                            className="d-flex align-items-center py-2 px-3 rounded-2" 
                                            href="#"
                                            style={{ 
                                                color: 'var(--text-primary)',
                                                transition: 'background-color 0.2s ease',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--hover-bg)'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsAccountDropdownOpen(false);
                                                // Xử lý đăng xuất ở đây
                                            }}
                                        >
                                            <div 
                                                className="me-3 d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    borderRadius: '4px',
                                                    border: '1px solid var(--border-color)',
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                <LogOut size={16} style={{ color: 'var(--text-primary)' }} />
                                            </div>
                                            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Sign out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
