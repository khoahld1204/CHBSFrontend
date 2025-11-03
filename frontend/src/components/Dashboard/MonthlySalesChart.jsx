import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', sales: 250 }, { name: 'Feb', sales: 300 }, { name: 'Mar', sales: 400 },
    { name: 'Apr', sales: 350 }, { name: 'May', sales: 450 }, { name: 'Jun', sales: 500 },
    { name: 'Jul', sales: 380 }, { name: 'Aug', sales: 420 }, { name: 'Sep', sales: 550 },
    { name: 'Oct', sales: 600 }, { name: 'Nov', sales: 520 }, { name: 'Dec', sales: 480 },
];

const MonthlySalesChart = () => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3">
                <h5 className="mb-0 card-title">Monthly Sales</h5>
            </div>
            <div className="card-body" style={{ height: '300px' }}>
                
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" stroke="#6c757d" />
                        <YAxis stroke="#6c757d" />
                        <Tooltip />
                        
                        <Bar dataKey="sales" fill="var(--fahasa-primary)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MonthlySalesChart;