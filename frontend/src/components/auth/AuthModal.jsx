import React, { useState } from "react";
import "./AuthModal.css";
import axios from "axios";

// Đã loại bỏ alert() theo quy tắc của Canvas
const customAlert = (message) => {
    console.log(`ALERT: ${message}`);
    // Trong môi trường Canvas, dùng console log hoặc một modal tùy chỉnh thay vì window.alert/confirm
};


const API_CONTROLLER_URL = "https://localhost:7126/api/Accounts";

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
    // Thêm state cho dữ liệu form
    const [activeTab, setActiveTab] = useState("login"); // "login" | "register" | "forgot"
    const [loginData, setLoginData] = useState({ taiKhoan: "", matKhau: "" });
    const [registerData, setRegisterData] = useState({
        sdt: "", // Chỉ cần SDT và Mật khẩu theo hình Đăng ký
        matKhau: "",
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [otpMethod, setOtpMethod] = useState('sms'); // 'sms' | 'zns'

    if (!isOpen) return null;

    // --- UTILITY HANDLERS ---
    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setError(null); // Xóa lỗi khi chuyển tab
        setIsPasswordVisible(false); // Ẩn mật khẩu khi chuyển tab
    };

    // Hàm xử lý Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // Lưu ý: Đây là URL giả định cho môi trường phát triển (localhost:7126)
            const response = await axios.post(`${API_CONTROLLER_URL}/login`, {
                taiKhoan: loginData.taiKhoan,
                matKhau: loginData.matKhau,
            });

            const token = response.data.token;
            localStorage.setItem("authToken", token);

            customAlert("Đăng nhập thành công!");
            if (onLoginSuccess) {
                onLoginSuccess(token);
            }
            onClose();
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản/mật khẩu.";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Hàm xử lý Register
    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // Giả định API đăng ký đơn giản hơn (chỉ cần sdt và mật khẩu)
            const registerPayload = {
                username: registerData.sdt,
                matKhau: registerData.matKhau,
                sdt: registerData.sdt,
            };

            const response = await axios.post(`${API_CONTROLLER_URL}/register`, registerPayload);

            customAlert("Đăng ký thành công! Vui lòng đăng nhập.");
            handleTabChange("login");
            setLoginData({ taiKhoan: registerData.sdt, matKhau: "" });
            setRegisterData({ sdt: "", matKhau: "" });
        } catch (err) {
            let errorMessage = err.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.";

            if (err.response?.data?.errors) {
                const validationErrors = Object.values(err.response.data.errors).flat().join(". ");
                errorMessage = `Lỗi nhập liệu: ${validationErrors}`;
            }
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // --- RENDER FUNCTIONS ---

    const renderLoginForm = () => (
        <form className="auth-form" onSubmit={handleLogin}>
            <label>Số điện thoại/Email</label>
            <input
                type="text"
                placeholder="Nhập số điện thoại hoặc email"
                name="taiKhoan"
                value={loginData.taiKhoan}
                onChange={handleLoginChange}
                required
            />
            <label>Mật khẩu</label>
            <div className="password-box">
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    name="matKhau"
                    value={loginData.matKhau}
                    onChange={handleLoginChange}
                    required
                />
                <span
                    className="show-password"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    {isPasswordVisible ? "Ẩn" : "Hiện"}
                </span>
            </div>
            <div className="forgot-link" onClick={() => handleTabChange("forgot")}>
                Quên mật khẩu?
            </div>
            {error && <p className="error-message">{error}</p>}

            {/* CHỈNH SỬA: Đảo ngược class cho nút Đăng nhập và Bỏ qua */}
            <button className="btn-action btn-red-filled" type="submit" disabled={isLoading}>
                {isLoading ? "Đang xử lý..." : "Đăng nhập"}
            </button>
            <button className="btn-action btn-white-border" type="button" onClick={onClose} disabled={isLoading}>
                Bỏ qua
            </button>
        </form>
    );

    const renderRegisterForm = () => (
        <form className="auth-form" onSubmit={handleRegister}>
            <label>Số điện thoại</label>
            <input
                type="tel"
                placeholder="Nhập số điện thoại"
                name="sdt"
                value={registerData.sdt}
                onChange={handleRegisterChange}
                required
            />

            <label>Chọn phương thức xác minh OTP</label>
            <div className="otp-methods">
                <button
                    type="button"
                    className={`otp-btn ${otpMethod === 'sms' ? 'active' : ''}`}
                    onClick={() => setOtpMethod('sms')}
                >
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/register_form_ui/sms_icon.svg?q=11414" alt="SMS Icon" className="otp-icon" />
                    Tin nhắn SMS
                </button>
                <button
                    type="button"
                    className={`otp-btn ${otpMethod === 'zns' ? 'active' : ''}`}
                    onClick={() => setOtpMethod('zns')}
                >
                    <img src="https://cdn1.fahasa.com/skin/frontend/ma_vanese/fahasa/images/register_form_ui/zalo_icon.svg?q=11414" alt="Zalo Icon" className="otp-icon" />
                    Zalo ZNS
                </button>
            </div>

            <label>Mã xác nhận OTP</label>
            <input
                type="text"
                placeholder="6 ký tự"
                name="otp" // Giả định input OTP
                required
            />

            <label>Mật khẩu</label>
            <div className="password-box">
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                    name="matKhau"
                    value={registerData.matKhau}
                    onChange={handleRegisterChange}
                    required
                />
                <span
                    className="show-password"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                    {isPasswordVisible ? "Ẩn" : "Hiện"}
                </span>
            </div>

            {error && <p className="error-message">{error}</p>}

            {/* CHỈNH SỬA: Dùng button primary mặc định của form Đăng ký */}
            <button className="btn-action btn-default" type="submit" disabled={isLoading}>
                {isLoading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
        </form>
    );

    const renderForgotForm = () => (
        <div className="auth-form">
            <label>Số điện thoại</label>
            <input type="text" placeholder="Nhập số điện thoại" />

            <label>Chọn phương thức xác minh OTP</label>
            <div className="otp-methods">
                <button className="otp-btn active">
                    <img src="https://i.imgur.com/L7p4j8U.png" alt="SMS Icon" className="otp-icon" />
                    Tin nhắn SMS
                </button>
                <button className="otp-btn">
                    <img src="https://i.imgur.com/7vjP51C.png" alt="Zalo Icon" className="otp-icon" />
                    Zalo ZNS
                </button>
            </div>

            <label>Mã xác nhận OTP</label>
            <input type="text" placeholder="6 ký tự" />

            <label>Mật khẩu mới</label>
            <div className="password-box">
                <input type="password" placeholder="Nhập mật khẩu mới" />
                <span className="show-password">Hiện</span>
            </div>

            <button className="btn-action btn-default" disabled={true}>Xác nhận</button>
            <button className="btn-action btn-white-border" type="button" onClick={() => handleTabChange("login")}>Quay lại Đăng nhập</button>
        </div>
    );

    // --- MAIN RENDER ---

    return (
        <div className="modal-overlay">
            <div className="auth-modal">
                <div className="tab-header">
                    <div
                        className={`tab ${activeTab === "login" ? "active" : ""}`}
                        onClick={() => handleTabChange("login")}
                    >
                        Đăng nhập
                    </div>
                    <div
                        className={`tab ${activeTab === "register" ? "active" : ""}`}
                        onClick={() => handleTabChange("register")}
                    >
                        Đăng ký
                    </div>
                </div>

                {activeTab === "login"
                    ? renderLoginForm()
                    : activeTab === "register"
                        ? renderRegisterForm()
                        : renderForgotForm()}

                {/* Nút đóng X (ẩn đi vì hình mẫu không có) */}
                {/* <button className="close-btn" onClick={onClose}>✕</button> */}
            </div>
        </div>
    );
};

export default AuthModal;
