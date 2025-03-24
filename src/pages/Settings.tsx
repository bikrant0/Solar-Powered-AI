
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useUnitPreferences } from '@/contexts/UnitPreferencesContext';

const Settings = () => {
  const navigate = useNavigate();
  const { preferences, updatePreference } = useUnitPreferences();

  return (
    <div className="flex h-screen">
      <div className="bg-solar-blue w-full overflow-auto">
        <div className="p-4 flex items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 rounded-full hover:bg-white/10 mr-3"
          >
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          <h1 className="text-xl font-bold text-white">Setting</h1>
        </div>

        <div className="mx-auto max-w-3xl p-6">
          <div className="bg-solar-blue-lighter rounded-lg mb-6 overflow-hidden">
            <div className="p-4 border-b border-blue-500">
              <h2 className="font-semibold text-white uppercase tracking-wider">TEMPERATURE</h2>
              <ToggleGroup 
                type="single" 
                value={preferences.temperature}
                onValueChange={(value: any) => {
                  if (value) updatePreference('temperature', value);
                }}
                className="justify-between my-2"
              >
                <ToggleGroupItem 
                  value="celsius" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-l-md text-white"
                >
                  Celsius
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="fahrenheit" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-r-md text-white"
                >
                  Fahrenheit
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="p-4 border-b border-blue-500">
              <h2 className="font-semibold text-white uppercase tracking-wider">WIND SPEED</h2>
              <ToggleGroup 
                type="single" 
                value={preferences.windSpeed}
                onValueChange={(value: any) => {
                  if (value) updatePreference('windSpeed', value);
                }}
                className="justify-between my-2"
              >
                <ToggleGroupItem 
                  value="celsius" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-l-md text-white"
                >
                  Celsius
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="kts" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 text-white"
                >
                  Kts
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="knots" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-r-md text-white"
                >
                  Knots
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="p-4 border-b border-blue-500">
              <h2 className="font-semibold text-white uppercase tracking-wider">PRESSURE</h2>
              <ToggleGroup 
                type="single" 
                value={preferences.pressure}
                onValueChange={(value: any) => {
                  if (value) updatePreference('pressure', value);
                }}
                className="justify-between my-2"
              >
                <ToggleGroupItem 
                  value="kpa" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-l-md text-white"
                >
                  kPa
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="inches" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 text-white"
                >
                  Inches
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="mm" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-r-md text-white"
                >
                  mm
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="p-4 border-b border-blue-500">
              <h2 className="font-semibold text-white uppercase tracking-wider">PRECIPITATION</h2>
              <ToggleGroup 
                type="single" 
                value={preferences.precipitation}
                onValueChange={(value: any) => {
                  if (value) updatePreference('precipitation', value);
                }}
                className="justify-between my-2"
              >
                <ToggleGroupItem 
                  value="millimeters" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-l-md text-white"
                >
                  Millimeters
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="inches" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-r-md text-white"
                >
                  Inches
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="p-4">
              <h2 className="font-semibold text-white uppercase tracking-wider">DISTANCE</h2>
              <ToggleGroup 
                type="single" 
                value={preferences.distance}
                onValueChange={(value: any) => {
                  if (value) updatePreference('distance', value);
                }}
                className="justify-between my-2"
              >
                <ToggleGroupItem 
                  value="kilometers" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-l-md text-white"
                >
                  Kilometers
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="miles" 
                  className="w-full py-2 data-[state=on]:bg-blue-600 rounded-r-md text-white"
                >
                  Miles
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
