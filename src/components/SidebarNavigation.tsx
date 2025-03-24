
import React from 'react';
import { Home, Cloud, Sun, Wifi, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon: React.ElementType;
  isActive?: boolean;
  onClick: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, isActive = false, onClick }) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-center p-3 cursor-pointer transition-all duration-200 hover:bg-white/10 rounded-lg mb-2",
        isActive && "bg-white/10"
      )}
      onClick={onClick}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
};

type SidebarNavigationProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'home', icon: Home },
    { id: 'weather', icon: Cloud },
    { id: 'solar', icon: Sun },
    { id: 'connectivity', icon: Wifi },
    { id: 'profile', icon: User },
  ];

  return (
    <div className="flex flex-col items-center py-4 bg-solar-dark-blue h-full w-16 animate-fade-in">
      {items.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          isActive={activeTab === item.id}
          onClick={() => setActiveTab(item.id)}
        />
      ))}
    </div>
  );
};

export default SidebarNavigation;
