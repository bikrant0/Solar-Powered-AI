
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email",
      });
      return;
    }
    
    // In a real app, this would connect to a backend service
    toast({
      title: "Success",
      description: "If your email exists in our system, you will receive reset instructions",
    });
    
    // Reset form
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-solar-blue">
      <div className="absolute top-0 right-0 mt-8 mr-8">
        <div className="w-16 h-16 bg-yellow-300 rounded-full" />
        <div className="w-24 h-8 bg-gray-200 rounded-full absolute -left-12 top-4" />
      </div>
      
      <div className="bg-white/90 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Reset your password</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Enter your email address below and we'll send you a link to reset your password.
        </p>
        
        <form onSubmit={handleReset}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
            Reset Password
          </Button>
          
          <div className="text-center mt-4">
            <Link to="/login" className="text-sm text-blue-500 hover:underline">
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
