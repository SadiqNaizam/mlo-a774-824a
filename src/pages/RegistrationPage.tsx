import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import AuthFormCard from '@/components/AuthFormCard';

// Shadcn/ui Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Libraries for Form Handling & Validation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Icons
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const registrationFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }).max(50, { message: "Full name must not exceed 50 characters."}),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Password confirmation is required." })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], 
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

interface PageAlert {
  type: 'success' | 'error';
  message: string;
}

const RegistrationPage: React.FC = () => {
  console.log('RegistrationPage loaded');
  const navigate = useNavigate();
  const [pageAlert, setPageAlert] = useState<PageAlert | null>(null);

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    setPageAlert(null); 
    console.log('Registration form submitted:', data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const isSuccess = Math.random() > 0.3; 

    if (isSuccess) {
      setPageAlert({ type: 'success', message: 'Registration successful! Redirecting to login...' });
      form.reset(); 
      setTimeout(() => {
        navigate('/'); 
      }, 2000);
    } else {
      setPageAlert({ type: 'error', message: 'Registration failed. An unexpected error occurred. Please try again.' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground"> {/* Use theme-aware bg/text */}
      <AppHeader />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Create Your Account"
          description="Fill in the details below to register a new account."
          footerLinks={[
            { text: "Already have an account? Log In", to: "/" } 
          ]}
          className="w-full max-w-lg"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="name@example.com" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="•••••••• (min. 8 characters)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {pageAlert && (
                // For Alert component, ensure its variants handle dark mode (ShadCN usually does)
                // 'default' variant in ShadCN Alert is typically theme-aware.
                // 'destructive' variant is also theme-aware.
                // Custom success styling might need explicit dark mode handling if not using a 'success' variant from ShadCN.
                // The Alert component in this project uses `variant="default"` or `variant="destructive"` which should be fine.
                <Alert variant={pageAlert.type === 'error' ? 'destructive' : 'default'} className={`mt-4 ${pageAlert.type === 'success' ? 'border-green-500 text-green-700 dark:border-green-600 dark:text-green-400' : ''}`}>
                  {pageAlert.type === 'error' ? <AlertTriangle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                  <AlertTitle>{pageAlert.type === 'success' ? 'Success!' : 'Registration Error'}</AlertTitle>
                  <AlertDescription>
                    {pageAlert.message}
                  </AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full !mt-6" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <AppFooter />
    </div>
  );
};

export default RegistrationPage;