import React from 'react';

const MonthlyTarget = () => {
    const progressValue = 75.55;
    const isPositive = true;

    // Giữ giá trị làm tròn một chữ số thập phân
    const displayValue = Math.floor(progressValue * 10) / 10;

    return (
        <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3">
                <h5 className="mb-0 card-title">Monthly Target</h5>
            </div>
            <div className="card-body text-center">
                <div className="position-relative d-inline-block" style={{ width: '150px', height: '150px' }}>

                    {/* KHỐI BIỂU ĐỒ TRÒN */}
                    <div className="rounded-circle border border-2 border-light position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center"
                        style={{
                            width: '100%', height: '100%',
                            background: `conic-gradient(var(--fahasa-primary) ${progressValue}%, #eee 0%)`
                        }}>

                        {/* HIỂN THỊ SỐ ĐÃ SỬA MÀU CHỮ */}
                        <div className="text-center">
                            <h2 className="fw-bold mb-0"
                                // Thay đổi màu chữ thành TRẮNG và thêm text-shadow nhẹ
                                style={{
                                    color: 'white',
                                    fontSize: '2.5rem',
                                    textShadow: '0 0 5px rgba(0, 0, 0, 0.4)' // Giúp số nổi bật hơn
                                }}>
                                {displayValue}
                            </h2>
                            {/* Nếu bạn muốn hiển thị ký hiệu "+" nhỏ ở giữa, hãy dùng màu trắng: */}
                            {/* <p className={`small text-white mb-0`} style={{textShadow: '0 0 3px rgba(0, 0, 0, 0.4)'}}>{isPositive ? '+' : '-'}</p> */}
                        </div>

                    </div>
                </div>

                <p className="mt-3 text-muted">You earn $250 today. It's higher than last month. Keep up good work!</p>

                <div className="row mt-4 border-top pt-3">
                    <div className="col-6 border-end">
                        <p className="small text-muted mb-1">Target</p>
                        <p className="fw-bold mb-0">$20K</p>
                    </div>
                    <div className="col-6">
                        <p className="small text-muted mb-1">Today</p>
                        <p className="fw-bold mb-0 d-flex justify-content-center align-items-center">
                            $20K
                            <span className="ms-1 text-success">↑</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyTarget;