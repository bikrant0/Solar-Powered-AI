
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UnitPreference = {
  temperature: 'celsius' | 'fahrenheit';
  windSpeed: 'celsius' | 'kts' | 'knots';
  pressure: 'kpa' | 'inches' | 'mm';
  precipitation: 'millimeters' | 'inches';
  distance: 'kilometers' | 'miles';
};

type UnitPreferencesContextType = {
  preferences: UnitPreference;
  updatePreference: <K extends keyof UnitPreference>(
    key: K,
    value: UnitPreference[K]
  ) => void;
};

const defaultPreferences: UnitPreference = {
  temperature: 'celsius',
  windSpeed: 'celsius',
  pressure: 'kpa',
  precipitation: 'millimeters',
  distance: 'kilometers',
};

const UnitPreferencesContext = createContext<UnitPreferencesContextType | undefined>(undefined);

export const UnitPreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UnitPreference>(defaultPreferences);

  const updatePreference = <K extends keyof UnitPreference>(
    key: K,
    value: UnitPreference[K]
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <UnitPreferencesContext.Provider value={{ preferences, updatePreference }}>
      {children}
    </UnitPreferencesContext.Provider>
  );
};

export const useUnitPreferences = () => {
  const context = useContext(UnitPreferencesContext);
  if (context === undefined) {
    throw new Error('useUnitPreferences must be used within a UnitPreferencesProvider');
  }
  return context;
};
