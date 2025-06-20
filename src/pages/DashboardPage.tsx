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
    console.log('User logging out, redirecting to login page.');
    navigate('/'); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground"> {/* Use theme-aware bg/text */}
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b"> {/* Use theme-aware border */}
          <h1 className="text-3xl font-bold text-foreground mb-4 sm:mb-0"> {/* Use theme-aware text */}
            User Dashboard
          </h1>
          <Button onClick={handleLogout} variant="outline" className="w-full sm:w-auto">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section Card */}
          <Card className="md:col-span-1 bg-card text-card-foreground shadow-lg"> {/* Use theme-aware card styles */}
            <CardHeader className="flex flex-col items-center text-center space-y-3 pt-6">
              <Avatar className="h-24 w-24 border-2 border-primary"> {/* Use theme-aware primary color */}
                <AvatarImage src="https://i.pravatar.cc/150?u=jane.doe" alt="User Avatar" />
                <AvatarFallback className="text-3xl">JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-semibold">Jane Doe</CardTitle>
                <CardDescription className="text-sm text-primary">Premium Member</CardDescription> {/* Use theme-aware primary color */}
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-6 pb-6">
              <p className="text-sm text-center text-muted-foreground"> {/* Use theme-aware muted text */}
                Welcome back! Manage your profile and activities.
              </p>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-accent hover:text-accent-foreground"> {/* Use theme-aware text and hover */}
                <User className="mr-3 h-5 w-5 text-primary" /> View Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-accent hover:text-accent-foreground"> {/* Use theme-aware text and hover */}
                <Settings className="mr-3 h-5 w-5 text-primary" /> Account Settings
              </Button>
            </CardContent>
          </Card>

          {/* Quick Note Section Card */}
          <Card className="md:col-span-2 bg-card text-card-foreground shadow-lg"> {/* Use theme-aware card styles */}
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <Edit3 className="mr-3 h-5 w-5 text-green-500 dark:text-green-400" /> Quick Note {/* Adjusted for visibility */}
              </CardTitle>
              <CardDescription>Jot down important thoughts or reminders.</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What's on your mind today?"
                rows={6}
                // className="focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-200" // Rely on Textarea's theme awareness
              />
            </CardContent>
            <CardFooter className="flex justify-end pt-4">
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white dark:text-gray-900"> {/* Specific button styling */}
                Save Note
              </Button>
            </CardFooter>
          </Card>

          {/* Placeholder for additional dashboard content/widgets */}
          <Card className="md:col-span-3 bg-card text-card-foreground shadow-lg"> {/* Use theme-aware card styles */}
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <Briefcase className="mr-3 h-5 w-5 text-purple-500 dark:text-purple-400" /> My Projects {/* Adjusted for visibility */}
              </CardTitle>
              <CardDescription>Overview of your current projects and tasks.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No active projects assigned.</p> {/* Use theme-aware muted text */}
                <Button variant="link" className="mt-2 text-primary"> {/* Use theme-aware primary text */}
                  Start a new project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default DashboardPage;