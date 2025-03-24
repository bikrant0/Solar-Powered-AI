
import React, { useState, useEffect } from 'react';
import SidebarNavigation from '@/components/SidebarNavigation';
import SearchBar from '@/components/SearchBar';
import ForecastTable from '@/components/ForecastTable';

const Index = () => {
  const [activeTab, setActiveTab] = useState('solar');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for the forecast table
  const forecastData = [
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 70 },
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 70 },
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 70 },
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 75 },
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 70 },
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 70 },
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 70 },
    { date: '2023-1-1', standard: 50, peak: 80, pvPath: 70 },
  ];

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen bg-solar-blue overflow-hidden">
      <SearchBar />
      
      <div className="flex flex-1 overflow-hidden">
        <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 p-6 overflow-auto bg-solar-blue">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <ForecastTable 
                data={forecastData} 
                className="animate-fade-in"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
