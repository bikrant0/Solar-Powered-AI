
import React, { useState } from 'react';
import { Search, Bell, Settings, Sun } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex items-center justify-between px-4 py-2 w-full bg-solar-blue text-white animate-fade-in">
      <div className="text-lg font-semibold flex items-center">
        <Sun className="mr-2 h-5 w-5" />
        <span>Solar Energy Forecast</span>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="rounded-full bg-white/20 border-none pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all w-32 md:w-44"
          />
          <Search className="absolute left-2 top-1.5 h-4 w-4 text-white/70" />
        </div>
        
        <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        
        <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors">
          <Settings className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
