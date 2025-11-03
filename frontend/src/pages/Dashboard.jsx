import React from 'react';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import StatisticsCard from '../components/Dashboard/StatisticsCard';
import MonthlyTarget from '../components/Dashboard/MonthlyTarget';
import MonthlySalesChart from '../components/Dashboard/MonthlySalesChart';
import StatsAreaChart from '../components/Dashboard/StatsAreaChart';
import CustomerDemographic from '../components/Dashboard/CustomerDemographic';
import RecentOrdersTable from '../components/Dashboard/RecentOrdersTable';

const Dashboard = () => {
    return (
        <div className="container-fluid">

                {/* 1. Hàng Card Thống Kê */}
                <div className="row g-4 mb-4">
                    {/* Sử dụng col-lg-3 để chia thành 4 cột trên desktop */}
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <StatisticsCard
                            title="Customers"
                            value="3,782"
                            change="+5.2%"
                            icon={Users}
                            colorClass="bg-primary"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <StatisticsCard
                            title="Orders"
                            value="5,399"
                            change="-0.02%"
                            icon={ShoppingCart}
                            colorClass="bg-info"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <StatisticsCard
                            title="Revenue"
                            value="$12.5K"
                            change="+1.5%"
                            icon={DollarSign}
                            colorClass="bg-success"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <StatisticsCard
                            title="Conversion Rate"
                            value="4.5%"
                            change="+0.8%"
                            icon={TrendingUp}
                            colorClass="bg-warning"
                        />
                    </div>
                </div>

                {/* 2. Hàng Biểu Đồ Cột và Mục tiêu */}
                <div className="row g-4 mb-4">
                    {/* Monthly Sales Chart (Chiếm 8/12 cột trên Desktop) */}
                    <div className="col-lg-8 col-12">
                        <MonthlySalesChart />
                    </div>

                    {/* Monthly Target (Chiếm 4/12 cột trên Desktop) */}
                    <div className="col-lg-4 col-12">
                        <MonthlyTarget />
                    </div>
                </div>

                {/* 3. Biểu đồ Vùng Lớn (Chiếm toàn bộ chiều rộng) */}
                <div className="row mb-4">
                    <div className="col-12">
                        <StatsAreaChart />
                    </div>
                </div>

                {/* 4. Hàng Bảng và Demographic */}
                <div className="row g-4">
                    {/* Customer Demographic (Chiếm 5/12 cột trên Desktop) */}
                    <div className="col-lg-5 col-12">
                        <CustomerDemographic />
                    </div>

                    {/* Recent Orders Table (Chiếm 7/12 cột trên Desktop) */}
                    <div className="col-lg-7 col-12">
                        <RecentOrdersTable />
                    </div>
                </div>
            </div>
    );
};

export default Dashboard;
