
import React, { useState } from 'react';
import { Home, Cloud, Sun, Wifi, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();
  
  // Update items with the correct routes
  const items = [
    { id: 'home', icon: Home, path: '/dashboard' },
    { id: 'weather', icon: Cloud, path: '/weather' },
    { id: 'solar', icon: Sun, path: '/' },
    { id: 'connectivity', icon: Wifi, path: '/power-predictions' },
    { id: 'profile', icon: User, path: '/profile' },
  ];

  const handleTabClick = (tabId: string, path: string) => {
    setActiveTab(tabId);
    navigate(path);
  };

  // Synchronize activeTab with current route on component mount
  React.useEffect(() => {
    const currentItem = items.find(item => item.path === location.pathname);
    if (currentItem && currentItem.id !== activeTab) {
      setActiveTab(currentItem.id);
    }
  }, [location.pathname, activeTab, setActiveTab]);

  return (
    <div className="flex flex-col items-center py-4 bg-solar-dark-blue h-full w-16 animate-fade-in">
      {items.map((item) => (
        <SidebarItem
          key={item.id}
          icon={item.icon}
          isActive={activeTab === item.id}
          onClick={() => handleTabClick(item.id, item.path)}
        />
      ))}
    </div>
  );
};

export default SidebarNavigation;
