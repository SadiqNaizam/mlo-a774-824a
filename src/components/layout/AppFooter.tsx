import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center md:flex md:items-center md:justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          &copy; {currentYear} SecureApp. All rights reserved.
        </div>
        <nav className="flex justify-center gap-4 md:gap-6 text-sm">
          <Link 
            to="#" // Placeholder as no route is defined in App.tsx
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            to="#" // Placeholder as no route is defined in App.tsx
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AppFooter;