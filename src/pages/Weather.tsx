
import React from 'react';
import { Cloud, Search, MapPin, Droplets, Wind, Sun } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import SidebarNavigation from '@/components/SidebarNavigation';
import { useUnitPreferences } from '@/contexts/UnitPreferencesContext';

const Weather = () => {
  const [activeTab, setActiveTab] = React.useState('weather');
  const { preferences } = useUnitPreferences();
  
  const dailyForecast = [
    { day: 'Mon', temp: 28, condition: 'Sunny' },
    { day: 'Tue', temp: 29, condition: 'Sunny' },
    { day: 'Wed', temp: 30, condition: 'Sunny' },
    { day: 'Thu', temp: 29, condition: 'Sunny' },
    { day: 'Fri', temp: 30, condition: 'Sunny' },
    { day: 'Sat', temp: 28, condition: 'Rain' },
  ];
  
  const weeklyForecast = [
    { day: 'Sunday', tempMin: 25, tempMax: 29 },
    { day: 'Monday', tempMin: 26, tempMax: 31 },
    { day: 'Wednesday', tempMin: 25, tempMax: 29 },
    { day: 'Thursday', tempMin: 26, tempMax: 29 },
    { day: 'Friday', tempMin: 25, tempMax: 29 },
    { day: 'Saturday', tempMin: 25, tempMax: 29 },
  ];

  return (
    <div className="flex h-screen">
      <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col bg-solar-blue">
        <SearchBar />
        
        <div className="flex">
          {/* Left side - Weather forecasts */}
          <div className="flex-1 p-4">
            <h2 className="text-xl font-semibold text-white mb-4">Daily Weather Forecast</h2>
            
            <div className="grid grid-cols-6 gap-4 mb-8">
              {dailyForecast.map((day, index) => (
                <div key={index} className="bg-blue-400/30 rounded-md p-4 text-center text-white">
                  <div className="text-lg font-bold">{day.temp}°{preferences.temperature === 'celsius' ? 'C' : 'F'}</div>
                  <div className="flex justify-center my-2">
                    {day.condition === 'Sunny' ? (
                      <Sun className="h-8 w-8 text-yellow-300" />
                    ) : (
                      <Cloud className="h-8 w-8 text-gray-300" />
                    )}
                  </div>
                  <div className="uppercase text-sm">{day.condition}</div>
                  <div className="text-xs mt-1">{day.day}</div>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-4">Weekly Weather Forecast</h2>
            
            <div className="grid grid-cols-3 gap-4">
              {weeklyForecast.slice(0, 3).map((day, index) => (
                <div key={index} className="bg-blue-400/30 rounded-md p-4 text-center text-white">
                  <div className="text-lg font-bold">
                    {day.tempMin}°-{day.tempMax}°{preferences.temperature === 'celsius' ? 'C' : 'F'}
                  </div>
                  <div className="text-sm mt-2">{day.day}</div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              {weeklyForecast.slice(3, 6).map((day, index) => (
                <div key={index} className="bg-blue-400/30 rounded-md p-4 text-center text-white">
                  <div className="text-lg font-bold">
                    {day.tempMin}°-{day.tempMax}°{preferences.temperature === 'celsius' ? 'C' : 'F'}
                  </div>
                  <div className="text-sm mt-2">{day.day}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Weather info */}
          <div className="w-64 bg-blue-500/30 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Display Info</h3>
            
            <div className="relative mb-4">
              <input 
                type="text" 
                className="w-full bg-blue-400/30 border-none rounded-md pl-8 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/50"
                placeholder="Search" 
              />
              <Search className="absolute left-2 top-2 h-4 w-4 text-white" />
            </div>
            
            <div className="bg-blue-400/30 rounded-md p-3 mb-3 text-white">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">City:</span>
              </div>
              <div className="ml-6 text-sm font-semibold">Kathmandu</div>
            </div>
            
            <div className="bg-blue-400/30 rounded-md p-3 mb-3 text-white">
              <div className="flex items-center">
                <Droplets className="h-4 w-4 mr-2" />
                <span className="text-sm">Humidity:</span>
              </div>
              <div className="ml-6 text-sm font-semibold">61%</div>
            </div>
            
            <div className="bg-blue-400/30 rounded-md p-3 mb-3 text-white">
              <div className="flex items-center">
                <Wind className="h-4 w-4 mr-2" />
                <span className="text-sm">Wind Speed:</span>
              </div>
              <div className="ml-6 text-sm font-semibold">12km/hr</div>
            </div>
            
            <div className="bg-blue-400/30 rounded-md p-3 mb-3 text-white">
              <div className="flex items-center">
                <Sun className="h-4 w-4 mr-2" />
                <span className="text-sm">UV Index:</span>
              </div>
              <div className="ml-6 text-sm font-semibold">11(very high)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
