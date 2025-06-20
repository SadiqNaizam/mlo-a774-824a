import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import AppHeader from '@/components/layout/AppHeader'; // Custom component
import AppFooter from '@/components/layout/AppFooter'; // Custom component
import AuthFormCard from '@/components/AuthFormCard'; // Custom component

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Lock, AlertTriangle } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  rememberMe: z.boolean().default(false).optional(),
});

const LoginPage: React.FC = () => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();

  console.log('LoginPage loaded');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoginError(null); // Clear previous errors
    console.log("Login attempt with:", values);

    // Simulate API call for login
    if (values.email === "user@example.com" && values.password === "password123") {
      console.log("Login successful, navigating to dashboard...");
      navigate("/dashboard"); 
    } else {
      console.log("Login failed: Invalid credentials");
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  const authFormFooterLinks = [
    { text: "Forgot Password?", to: "/password-recovery" }, 
    { text: "Don't have an account? Sign Up", to: "/registration", type: 'primary' as 'primary' | 'secondary' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground"> {/* Use theme-aware bg/text */}
      <AppHeader />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormCard
          title="Login to Your Account"
          description="Enter your credentials to access your dashboard."
          footerLinks={authFormFooterLinks}
          className="w-full max-w-md"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {loginError && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Login Failed</AlertTitle>
                  <AlertDescription>{loginError}</AlertDescription>
                </Alert>
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" /> {/* Use theme-aware icon color */}
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                        // className="dark:bg-gray-700 dark:text-white dark:border-gray-600" // Remove explicit dark styles, rely on component's theme awareness
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      <Lock className="mr-2 h-4 w-4 text-muted-foreground" /> {/* Use theme-aware icon color */}
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        // className="dark:bg-gray-700 dark:text-white dark:border-gray-600" // Remove explicit dark styles
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        // className="dark:border-gray-600" // Remove explicit dark styles
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal text-foreground"> {/* Use theme-aware text */}
                        Remember me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full"> {/* Remove explicit bg colors, rely on primary variant */}
                Login
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <AppFooter />
    </div>
  );
};

export default LoginPage;