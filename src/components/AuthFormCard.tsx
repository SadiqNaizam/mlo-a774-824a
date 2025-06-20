import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface AuthFormCardLink {
  text: string;
  to: string;
  type?: 'primary' | 'secondary'; // Optional: to style links differently
}

interface AuthFormCardProps {
  title: string;
  description?: string; // Optional description below the title
  children: React.ReactNode; // For the form elements
  footerLinks?: AuthFormCardLink[];
  className?: string; // Allow additional Tailwind classes
}

const AuthFormCard: React.FC<AuthFormCardProps> = ({
  title,
  description,
  children,
  footerLinks,
  className,
}) => {
  console.log('AuthFormCard loaded with title:', title);

  return (
    <Card className={`w-full max-w-md mx-auto ${className || ''}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        {description && (
          <CardDescription className="text-sm text-muted-foreground pt-1">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
      {footerLinks && footerLinks.length > 0 && (
        <CardFooter className="flex flex-col items-center space-y-2 pt-4 border-t">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`text-sm ${
                link.type === 'primary'
                  ? 'text-primary hover:underline font-medium'
                  : 'text-muted-foreground hover:text-primary hover:underline'
              }`}
            >
              {link.text}
            </Link>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormCard;