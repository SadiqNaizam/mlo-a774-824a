import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t"> {/* Use theme-aware background and border */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center md:flex md:items-center md:justify-between">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0"> {/* Use theme-aware text */}
          &copy; {currentYear} SecureApp. All rights reserved.
        </div>
        <nav className="flex justify-center gap-4 md:gap-6 text-sm">
          <Link 
            to=\"#\" // Placeholder as no route is defined in App.tsx
            className="text-muted-foreground hover:text-primary transition-colors" /* Use theme-aware text */
          >
            Terms of Service
          </Link>
          <Link 
            to=\"#\" // Placeholder as no route is defined in App.tsx
            className="text-muted-foreground hover:text-primary transition-colors" /* Use theme-aware text */
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AppFooter;