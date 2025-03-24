
import React, { useState } from 'react';
import SidebarNavigation from '@/components/SidebarNavigation';
import SearchBar from '@/components/SearchBar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  // Data for the dashboard stats
  const dashboardData = {
    totalPredicted: '129000KW',
    avgPredicted: '14333.33KW',
    totalActual: '128700KW',
    avgActual: '14611.11KW'
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-solar-blue overflow-hidden">
      <SearchBar />
      
      <div className="flex flex-1 overflow-hidden">
        <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 p-6 overflow-auto bg-solar-blue">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Main chart card */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
              <h2 className="text-lg font-semibold mb-4">Daily Power Production</h2>
              
              <div className="w-full h-64">
                <img 
                  src="/lovable-uploads/3a7117d7-327e-44dd-97c6-8854b906cce6.png" 
                  alt="Solar power production chart" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-300 rounded-lg p-4 text-center">
                <p className="text-sm font-medium mb-2">Total Predicted:</p>
                <p className="text-xl font-bold">{dashboardData.totalPredicted}</p>
              </div>
              
              <div className="bg-blue-300 rounded-lg p-4 text-center">
                <p className="text-sm font-medium mb-2">Avg Predicted:</p>
                <p className="text-xl font-bold">{dashboardData.avgPredicted}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-300 rounded-lg p-4 text-center">
                <p className="text-sm font-medium mb-2">Total Actual:</p>
                <p className="text-xl font-bold">{dashboardData.totalActual}</p>
              </div>
              
              <div className="bg-blue-300 rounded-lg p-4 text-center">
                <p className="text-sm font-medium mb-2">Avg Actual:</p>
                <p className="text-xl font-bold">{dashboardData.avgActual}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
