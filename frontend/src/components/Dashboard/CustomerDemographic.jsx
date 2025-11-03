import React from 'react';
import { MapPin } from 'lucide-react';

const CustomerDemographic = () => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3">
                <h5 className="mb-0 card-title">Customer Demographic</h5>
                <p className="card-subtitle text-muted small">Number of customers based on country.</p>
            </div>
            <div className="card-body">
               
                <div className="text-center p-5 bg-light rounded mb-4" style={{ height: '150px' }}>

                </div>

               
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                        <span className="me-2">🇺🇸</span>
                        <span>USA</span>
                    </div>
                    <span className="fw-bold">85%</span>
                </div>
                <div className="progress mb-3" style={{ height: '8px' }}>
                    <div className="progress-bar progress-bar-fahasa" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center">
                        <span className="me-2">🇫🇷</span>
                        <span>France</span>
                    </div>
                    <span className="fw-bold">70%</span>
                </div>
                <div className="progress mb-3" style={{ height: '8px' }}>
                    <div className="progress-bar progress-bar-fahasa" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <p className="small text-muted mt-4 mb-0">Total customers: **9,258**</p>
            </div>
        </div>
    );
};

export default CustomerDemographic;