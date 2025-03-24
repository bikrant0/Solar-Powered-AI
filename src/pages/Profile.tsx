
import React, { useState } from 'react';
import { ArrowLeft, User, Mail, MapPin, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import SidebarNavigation from '@/components/SidebarNavigation';
import SearchBar from '@/components/SearchBar';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'New York, USA',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
    });
  };

  return (
    <div className="flex h-screen">
      <SidebarNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col bg-solar-blue">
        <SearchBar />
        
        <div className="p-6 flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto bg-white/10 rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
                <p className="text-white/80">{profile.email}</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Full Name</label>
                <div className="relative">
                  <Input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/20 border-none text-white"
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2">Email</label>
                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/20 border-none text-white"
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2">Location</label>
                <div className="relative">
                  <Input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/20 border-none text-white"
                  />
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
                </div>
              </div>
              
              <Button type="submit" className="bg-green-500 hover:bg-green-600">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
