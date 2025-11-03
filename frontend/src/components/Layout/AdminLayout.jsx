import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import AdminFooter from './AdminFooter';
import { ThemeProvider } from '../../contexts/ThemeContext';


/**
 * @description AdminLayout bao gồm Sidebar, Header, Footer và wrapper cho Nội dung chính.
 * @param {React.ReactNode} children Nội dung trang (ví dụ: Dashboard).
 */
const AdminLayout = ({ children }) => {

    // State quản lý trạng thái mở/đóng của Sidebar
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);

    const toggleMobileSidebar = () => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    };

    const toggleDesktopSidebar = () => {
        setIsDesktopSidebarOpen(!isDesktopSidebarOpen);
    };

    // Tính toán margin-left cho Main Content Wrapper (để chừa chỗ cho Sidebar)
    const mainContentMargin = isDesktopSidebarOpen
        ? 'var(--sidebar-width)'
        : 'var(--sidebar-collapsed-width)';

    // Tính toán chiều rộng cho Header và Main Content Wrapper
    const headerWidth = isDesktopSidebarOpen
        ? `calc(100% - var(--sidebar-width))`
        : `calc(100% - var(--sidebar-collapsed-width))`;


    return (
        <ThemeProvider>
            {/* d-flex giúp body không cuộn ngang (kết hợp với overflow-x: hidden trong CSS) */}
            <div className="d-flex admin-layout-root">

                {/* Sidebar Cố định */}
                <Sidebar
                    isMobileSidebarOpen={isMobileSidebarOpen}
                    isDesktopSidebarOpen={isDesktopSidebarOpen}
                    toggleMobileSidebar={toggleMobileSidebar}
                />

                {/* Main Content và Header Cố định */}
                <div
                    // BỎ class "w-100" (width: 100%) để tránh tràn ra ngoài
                    className="admin-main-content-wrapper flex-grow-1"
                    style={{
                        // Áp dụng margin và TÍNH TOÁN CHIỀU RỘNG bằng headerWidth
                        marginLeft: mainContentMargin,
                        width: headerWidth, // Đảm bảo chiều rộng không vượt quá viewport
                        transition: 'margin-left 0.3s ease, width 0.3s ease'
                    }}
                >

                    {/* Header Cố định */}
                    <Header
                        toggleMobileSidebar={toggleMobileSidebar}
                        toggleDesktopSidebar={toggleDesktopSidebar}
                        isDesktopSidebarOpen={isDesktopSidebarOpen}
                        headerWidth={headerWidth}
                    />

                    {/* Nội dung trang */}
                    <main className="admin-main-content">
                        {children}
                    </main>

                    {/* Footer */}
                    <AdminFooter headerWidth={headerWidth} />
                </div>

                {/* Backdrop cho Mobile Overlay */}
                {isMobileSidebarOpen && (
                    <div
                        className="d-block d-lg-none position-fixed top-0 start-0 w-100 h-100"
                        style={{ zIndex: 1040, backgroundColor: 'rgba(0,0,0,0.5)' }}
                        onClick={toggleMobileSidebar}
                    ></div>
                )}
            </div>
        </ThemeProvider>
    );
};

export default AdminLayout;
