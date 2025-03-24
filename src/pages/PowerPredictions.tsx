
import React from 'react';
import SearchBar from '@/components/SearchBar';
import SidebarNavigation from '@/components/SidebarNavigation';
import PowerDistributionChart from '@/components/PowerDistributionChart';
import PowerPredictionChart from '@/components/PowerPredictionChart';
import BatteryStatus from '@/components/BatteryStatus';
import { Card, CardContent } from '@/components/ui/card';

const PowerPredictions = () => {
  const [activeTab, setActiveTab] = React.useState('connectivity');

  return (
    <div className="flex flex-col h-screen w-screen bg-solar-blue overflow-hidden">
      <SearchBar />
      
      <div className="flex flex-1 overflow-hidden">
        <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 p-6 overflow-auto bg-solar-blue">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 space-y-4">
                <Card className="bg-white animate-fade-in">
                  <CardContent className="p-4">
                    <h3 className="text-sm text-gray-600 mb-2">Daily Energy Distribution</h3>
                    <PowerDistributionChart />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 shadow-sm animate-fade-in">
                  <CardContent className="p-2 text-center">
                    <div className="text-sm font-medium text-gray-700">Indicator</div>
                    <div className="text-xs text-gray-500">Battery storage at 75% capacity</div>
                  </CardContent>
                </Card>

                <Card className="bg-white animate-fade-in">
                  <CardContent className="p-4">
                    <h3 className="text-sm text-gray-600 mb-2">Daily Power Prediction</h3>
                    <PowerPredictionChart />
                  </CardContent>
                </Card>

                <Card className="bg-white/90 shadow-sm animate-fade-in">
                  <CardContent className="p-2 text-center">
                    <div className="text-sm font-medium text-gray-700">Indicator</div>
                    <div className="text-xs text-gray-500">Cloudy weather expected, output may decrease by 25%</div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-1">
                <BatteryStatus percent={55} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPredictions;
