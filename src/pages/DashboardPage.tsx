import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

// shadcn/ui Components
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// lucide-react icons
import { User, LogOut, Settings, Edit3, Briefcase } from 'lucide-react';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, you would also clear authentication tokens/state here.
    console.log('User logging out, redirecting to login page.');
    navigate('/'); // Navigate to LoginPage (path "/") as defined in App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">
            User Dashboard
          </h1>
          <Button onClick={handleLogout} variant="outline" className="w-full sm:w-auto">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section Card */}
          <Card className="md:col-span-1 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader className="flex flex-col items-center text-center space-y-3 pt-6">
              <Avatar className="h-24 w-24 border-2 border-blue-500">
                <AvatarImage src="https://i.pravatar.cc/150?u=jane.doe" alt="User Avatar" />
                <AvatarFallback className="text-3xl">JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-semibold">Jane Doe</CardTitle>
                <CardDescription className="text-sm text-blue-600 dark:text-blue-400">Premium Member</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-6 pb-6">
              <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                Welcome back! Manage your profile and activities.
              </p>
              <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <User className="mr-3 h-5 w-5 text-blue-500" /> View Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="mr-3 h-5 w-5 text-blue-500" /> Account Settings
              </Button>
            </CardContent>
          </Card>

          {/* Quick Note Section Card */}
          <Card className="md:col-span-2 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <Edit3 className="mr-3 h-5 w-5 text-green-500" /> Quick Note
              </CardTitle>
              <CardDescription>Jot down important thoughts or reminders.</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What's on your mind today?"
                rows={6}
                className="focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-200"
              />
            </CardContent>
            <CardFooter className="flex justify-end pt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Save Note
              </Button>
            </CardFooter>
          </Card>

          {/* Placeholder for additional dashboard content/widgets */}
          <Card className="md:col-span-3 bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <Briefcase className="mr-3 h-5 w-5 text-purple-500" /> My Projects
              </CardTitle>
              <CardDescription>Overview of your current projects and tasks.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">No active projects assigned.</p>
                <Button variant="link" className="mt-2 text-purple-600 dark:text-purple-400">
                  Start a new project
                </Button>
              </div>
              {/* In a real app, this area would list projects or provide project-related actions */}
            </CardContent>
          </Card>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default DashboardPage;