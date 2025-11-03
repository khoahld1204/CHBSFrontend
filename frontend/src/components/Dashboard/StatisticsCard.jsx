import React from 'react';
import { Users, ShoppingCart, TrendingUp } from 'lucide-react';

const StatisticsCard = ({ title, value, change, icon: Icon, colorClass }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center justify-between">
                <span className={`flex h-11.5 w-11.5 items-center justify-center rounded-full ${colorClass}`}>
                    <Icon className="h-5 w-5 text-white" />
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                    <TrendingUp className="h-5 w-5" />
                </button>
            </div>

            <div className="mt-4">
                <h4 className="text-xl font-semibold text-black dark:text-white">{title}</h4>
                <div className="mt-1 flex items-end justify-between">
                    <p className="text-3xl font-bold text-black dark:text-white">
                        {value}
                    </p>
                    <span className={`flex items-center gap-1 text-sm font-medium ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {change}
                    </span>
                </div>
            </div>
        </div>
    );
};



export default StatisticsCard;
