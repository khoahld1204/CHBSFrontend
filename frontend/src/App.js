import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import EmptyCartPage from './components/EmptyCartPage';
import HomePage from './components/HomePage'; 
import UserProfilePage from './components/Profile/UserProfilePage';
import Dashboard from './pages/Dashboard';
import AdminLayout from './components/Layout/AdminLayout';

const AppContent = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <>
            {!isAdminRoute && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout/cart" element={<EmptyCartPage />} />
                <Route path="/customer/account" element={<UserProfilePage />} />
                <Route path="/admin/dashboard" element={
                    <AdminLayout>
                        <Dashboard />
                    </AdminLayout>
                } />
                <Route path="*" element={
                    <div className="text-center p-5">
                        <h1 className="text-danger">404 - Trang không tồn tại</h1>
                        <p>Vui lòng kiểm tra lại đường dẫn.</p>
                    </div>
                } />
            </Routes>
            {!isAdminRoute && <Footer />}
        </>
    );
};

function App() {
    return (
        <div className="App min-h-screen bg-white">
            <Router>
                <AppContent />
            </Router>
        </div>
    );
}

export default App;