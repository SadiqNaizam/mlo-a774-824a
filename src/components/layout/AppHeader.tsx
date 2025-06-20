import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react'; // Or any other suitable logo icon

const AppHeader: React.FC = () => {
  console.log('AppHeader loaded');

  return (
    <header className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
          <ShieldCheck className="h-7 w-7 text-blue-600 dark:text-blue-500" />
          <span>SecureApp</span>
        </Link>
        {/* Navigation links can be added here if needed for unauthenticated pages in the future */}
        {/* For now, it's primarily for brand consistency as per the description */}
      </div>
    </header>
  );
};

export default AppHeader;