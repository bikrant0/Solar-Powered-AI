
import React, { useState } from 'react';
import { Bell, X, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'success';
}

const NotificationsPanel: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'System Update',
      message: 'Weather system updated with new features',
      time: '2 hours ago',
      read: false,
      type: 'info'
    },
    {
      id: '2',
      title: 'Weather Alert',
      message: 'Heavy rain expected in your area',
      time: '5 hours ago',
      read: false,
      type: 'warning'
    },
    {
      id: '3',
      title: 'Forecast Updated',
      message: 'Weekly forecast has been updated',
      time: '1 day ago',
      read: true,
      type: 'success'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors relative">
          <Bell className="h-5 w-5 text-white" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <div className="flex justify-between items-center p-2">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="text-xs text-blue-500 hover:text-blue-700"
            >
              Mark all as read
            </Button>
          )}
        </div>
        <DropdownMenuSeparator />
        
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="py-6 text-center text-gray-500">No notifications</div>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`p-3 border-b last:border-b-0 relative ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
              >
                <button 
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={() => removeNotification(notification.id)}
                >
                  <X className="h-4 w-4" />
                </button>
                
                <div className="flex items-start mb-1 pr-5">
                  <div className="mr-2 mt-0.5">
                    {getIconForType(notification.type)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{notification.title}</h4>
                    <p className="text-xs text-gray-600">{notification.message}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{notification.time}</span>
                  {!notification.read && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => markAsRead(notification.id)}
                      className="text-xs text-blue-500 hover:text-blue-700 p-0 h-auto"
                    >
                      Mark as read
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsPanel;
