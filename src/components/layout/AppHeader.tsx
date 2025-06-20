import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Or any other suitable logo icon
import ThemeToggleButton from '@/components/ThemeToggleButton'; // Import the new component

const AppHeader: React.FC = () => {
  console.log('AppHeader loaded');

  return (
    <header className="bg-card border-b"> {/* Use theme-aware background and border */}
      <div className=\"container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between\">
        <Link to=\"/\" className=\"flex items-center gap-2 text-xl font-semibold text-foreground\"> {/* Use theme-aware text */}
          <ShieldCheck className=\"h-7 w-7 text-primary\" /> {/* Use theme-aware primary color */}
          <span>SecureApp</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Navigation links can be added here if needed */}
          <ThemeToggleButton /> {/* Add the theme toggle button */}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;