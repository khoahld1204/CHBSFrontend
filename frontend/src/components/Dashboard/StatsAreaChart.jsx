import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', value: 100 }, { name: 'Feb', value: 120 }, { name: 'Mar', value: 90 },
    { name: 'Apr', value: 150 }, { name: 'May', value: 180 }, { name: 'Jun', value: 140 },
    { name: 'Jul', value: 190 }, { name: 'Aug', value: 220 }, { name: 'Sep', value: 200 },
    { name: 'Oct', value: 240 }, { name: 'Nov', value: 230 }, { name: 'Dec', value: 250 },
];

const StatsAreaChart = () => {
    return (
        <div className="card shadow-sm mt-4">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center py-3">
                <h5 className="mb-0 card-title">Statistics</h5>
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-secondary">Monthly</button>
                    <button className="btn btn-outline-secondary">Quarterly</button>
                    <button className="btn btn-outline-secondary">Annually</button>
                </div>
            </div>
            <div className="card-body" style={{ height: '350px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <XAxis dataKey="name" stroke="#6c757d" />
                        <YAxis stroke="#6c757d" />
                        <Tooltip />
                        
                        <Area type="monotone" dataKey="value" stroke="var(--fahasa-info)" fill="rgba(13, 110, 253, 0.1)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatsAreaChart;