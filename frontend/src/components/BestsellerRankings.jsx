import React, { useState } from 'react';
import '../styles/BestsellerRankings.css';

// Dữ liệu giả lập mô phỏng API trả về (Giữ nguyên)
const MOCK_BESTSELLERS = [
    {
        id: 1,
        title: 'Mưa Đỏ',
        author: 'Chu Lai',
        score: 5841,
        coverUrl: 'muado.png', // Dùng placeholder
        rank: 1,
        change: 'up',
    },
    {
        id: 2,
        title: 'Hồ Điệp Và Kinh Ngư',
        author: 'Tuệ Kiến',
        score: 1082,
        coverUrl: 'bia-2d_ho-diep-va-kinh-ngu_17307.png', // Dùng placeholder
        rank: 2,
        change: 'up',
    },
    {
        id: 3,
        title: 'Nhà Giả Kim (Tái Bản 2020)',
        author: 'Paulo Coelho',
        score: 887,
        coverUrl: 'nhagiakim.png', // Dùng placeholder
        rank: 3,
        change: 'down',
    },
    {
        id: 4,
        title: 'Bến Xe (Tái Bản 2020)',
        author: 'Thương Thái Vĩ',
        score: 851,
        coverUrl: '8935212349208.png', // Dùng placeholder
        rank: 4,
        change: 'up',
    },
    {
        id: 5,
        title: 'Nếu Biết Trăm Năm Là Hữu Hạn - Ấn Bản Kỉ Niệm 10 Năm Xuất Bản (Tái Bản 2024)',
        author: 'Phạm Lữ Ân',
        score: 778,
        coverUrl: '8932000134749.png', // Dùng placeholder
        rank: 5,
        change: 'up',
    },
];

// Dữ liệu chi tiết cho cuốn sách đang được chọn (Giữ nguyên)
const MOCK_SELECTED_BOOK = {
    id: 1, // Thêm ID để tạo link chi tiết
    title: 'Mưa Đỏ',
    author: 'Chu Lai',
    publisher: 'Quân Đội Nhân Dân',
    price: '184.500',
    oldPrice: '205.000',
    discount: '-10%',
    description: 'Niềm vui, sự sống - cái chết, những thăng hoa - mất mát, sự hy sinh của những người cha, người chồng, người con, những người lính, những đồng chí, đồng đội đã không tiếc máu xương trong cuộc chiến đấu 81 ngày đêm bảo vệ thành Cổ Quảng Trị...',
    imageUrl: 'muado.png', // Dùng placeholder
};

// --- Sub-Component: Item Xếp Hạng ---
const RankingItem = ({ book }) => {
    // Lớp CSS cho màu mũi tên
    const changeClass = book.change === 'up' ? 'rank-up' : 'rank-down';
    const arrowIcon = book.change === 'up' ? '▲' : '▼';

    return (
        // Bọc toàn bộ item bằng thẻ <a> để tạo link
        <li className="ranking-item-wrapper">
            <a href={`/book-detail/${book.id}`} className="ranking-item"
                onClick={(e) => { e.preventDefault(); console.log(`Chuyển đến trang chi tiết sách ID: ${book.id}`); }}>
                {/* Cột 1: Hạng và Mũi tên */}
                <div className="rank-info">
                    <span className="rank-number">{book.rank.toString().padStart(2, '0')}</span>
                    <div className={`rank-change ${changeClass}`}>
                        {arrowIcon}
                    </div>
                </div>

                {/* Cột 2: Ảnh bìa */}
                <div className="book-cover-wrapper">
                    <img
                        src={book.coverUrl} // Đã thay thế bằng URL placeholder
                        alt={book.title}
                        className="book-cover-small"
                    />
                </div>

                {/* Cột 3: Thông tin sách */}
                <div className="book-metadata">
                    <p className="book-title" title={book.title}>{book.title}</p>
                    <p className="book-author">{book.author}</p>
                    <p className="book-score">{book.score.toLocaleString()} điểm</p>
                </div>
            </a>
        </li>
    );
};

// --- Sub-Component: Chi tiết Sách ---
const BookDetail = ({ book }) => (
    <div className="book-detail-inner">
        {/* Ảnh lớn (có thể click để xem chi tiết) */}
        <a href={`/book-detail/${book.id}`} className="book-cover-large-wrapper"
            onClick={(e) => { e.preventDefault(); console.log(`Chuyển đến trang chi tiết sách ID: ${book.id}`); }}>
            <img
                src={book.imageUrl} // Đã thay thế bằng URL placeholder
                alt={book.title}
                className="book-cover-large"
            />
        </a>

        {/* Thông tin chi tiết */}
        <div className="detail-info-wrapper">
            <h3 className="detail-title">{book.title}</h3>
            <div className="detail-meta">
                <p>Tác giả: <span className="author-name">{book.author}</span></p>
                <p>Nhà xuất bản: <span className="publisher-name">{book.publisher}</span></p>
            </div>

            {/* Giá */}
            <div className="detail-price">
                <span className="price-current">{book.price} đ</span>
                <span className="price-old">{book.oldPrice} đ</span>
                <span className="discount-tag">{book.discount}</span>
            </div>

            {/* Nút Mua ngay và Xem chi tiết */}
            <div className="detail-actions">
                <button className="btn-buy">Mua ngay</button>
                <a href={`/book-detail/${book.id}`} className="btn-view-detail"
                    onClick={(e) => { e.preventDefault(); console.log(`Xem chi tiết ID: ${book.id}`); }}>
                    Xem chi tiết
                </a>
            </div>

            {/* Mô tả */}
            <div className="detail-description">
                <h4 className="description-title">Giới thiệu sách</h4>
                <p className="description-text">{book.description}</p>
            </div>
        </div>
    </div>
);


// --- Main Component ---
const BestsellerRankings = () => {
    const [selectedTab, setSelectedTab] = useState('Văn học');
    const [selectedBookDetail, setSelectedBookDetail] = useState(MOCK_SELECTED_BOOK);

    const tabs = [
        'Văn học', 'Kinh tế', 'Tâm lý - Kỹ năng sống',
        'Thiếu nhi', 'Sách học ngoại ngữ', 'Foreign books', 'Thể loại khác'
    ];

    return (
        <div className="bestsellers-container">

            {/* Tiêu đề chính */}
            <div className="bestsellers-header">
                <h1>Bảng xếp hạng bán chạy tuần</h1>
            </div>

            {/* Thanh Tabs - Responsive */}
            <div className="bestsellers-tabs">
                <ul className="bestsellers-tabs-list">
                    {tabs.map(tab => (
                        <li key={tab}>
                            <button
                                onClick={() => setSelectedTab(tab)}
                                className={`tab-button ${selectedTab === tab ? 'active' : ''}`}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Nội dung Chính: Chia làm 2 Cột - Responsive */}
            <div className="bestsellers-content">

                {/* Cột 1: Danh sách Xếp hạng */}
                <div className="ranking-list-section">
                    <ul className="ranking-list">
                        {MOCK_BESTSELLERS.map((book) => (
                            <RankingItem key={book.id} book={book} />
                        ))}
                    </ul>
                    {/* Nút Xem thêm */}
                    <div className="load-more-wrapper">
                        <button className="load-more-button">
                            Xem thêm
                        </button>
                    </div>
                </div>

                {/* Cột 2: Chi tiết Sách được chọn */}
                <div className="book-detail-section">
                    <BookDetail book={selectedBookDetail} />
                </div>
            </div>
        </div>
    );
};

export default BestsellerRankings;