
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

interface BatteryStatusProps {
  percent: number;
}

const BatteryStatus: React.FC<BatteryStatusProps> = ({ percent }) => {
  // Calculate the battery fill height
  const fillHeight = `${percent}%`;
  
  // Determine battery color based on percentage
  const getBatteryColor = () => {
    if (percent <= 20) return 'bg-red-500';
    if (percent <= 50) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  return (
    <Card className="h-full flex flex-col justify-between animate-fade-in">
      <CardContent className="p-4 text-center">
        <h3 className="font-medium text-lg">Battery Status</h3>
      </CardContent>
      
      <div className="flex justify-center items-center flex-1 p-6">
        <div className="relative h-60 w-32 border-4 border-gray-300 rounded-xl flex flex-col items-center justify-end">
          {/* Battery Terminal */}
          <div className="absolute -top-4 w-10 h-4 bg-gray-300 rounded-md"></div>
          
          {/* Battery Fill */}
          <div 
            className={`w-full ${getBatteryColor()} rounded-b-lg transition-all duration-1000 ease-in-out`} 
            style={{ height: fillHeight }}
          ></div>
          
          {/* Battery Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="h-10 w-10 text-white drop-shadow-md" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-4 text-center">
        <div className="text-xl font-medium">Charging {percent}%</div>
      </CardContent>
    </Card>
  );
};

export default BatteryStatus;
