import React from 'react';
import { Filter, Search } from 'lucide-react';

const recentOrders = [
    { product: 'Búp Sen Xanh', category: 'Văn học', price: '$29.99', status: 'Delivered' },
    { product: 'Apple Watch Ultra', category: 'Thiết bị', price: '$499.00', status: 'Pending' },
    { product: 'iPhone 15 Pro Max', category: 'SmartPhone', price: '$999.00', status: 'Delivered' },
    { product: 'Giáo Trình HSK', category: 'Giáo dục', price: '$24.99', status: 'Cancelled' },
    { product: 'Đắc Nhân Tâm', category: 'Kỹ năng', price: '$19.00', status: 'Delivered' },
];

const RecentOrdersTable = () => {
    const getStatusBadge = (status) => {
        let className = 'badge rounded-pill';
        if (status === 'Delivered') className += ' bg-success';
        else if (status === 'Pending') className += ' bg-warning text-dark';
        else if (status === 'Cancelled') className += ' bg-danger';
        return <span className={className}>{status}</span>;
    };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 card-title">Recent Orders</h5>
                <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
                    <Filter size={14} className="me-1" /> Filter
                </button>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="fw-bold">{order.product}</div>
                                        <div className="text-muted small">2 items</div>
                                    </td>
                                    <td>{order.category}</td>
                                    <td>{order.price}</td>
                                    <td>{getStatusBadge(order.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecentOrdersTable;