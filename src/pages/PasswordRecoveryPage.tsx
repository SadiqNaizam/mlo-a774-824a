import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Though shadcn Form usually uses FormLabel
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, AlertCircle, CheckCircle2 } from 'lucide-react';

const passwordRecoverySchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type PasswordRecoveryFormValues = z.infer<typeof passwordRecoverySchema>;

const PasswordRecoveryPage = () => {
  console.log('PasswordRecoveryPage loaded');
  const navigate = useNavigate();
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const form = useForm<PasswordRecoveryFormValues>({
    resolver: zodResolver(passwordRecoverySchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: PasswordRecoveryFormValues) => {
    setFormMessage(null);
    console.log('Password recovery requested for:', data.email);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate success
    setFormMessage({ type: 'success', text: "If an account exists for this email, password recovery instructions have been sent." });
    form.reset(); // Optionally reset form on success

    // Simulate error (e.g., email not found - though typically you wouldn't reveal this for security)
    // setFormMessage({ type: 'error', text: "Could not process request. Please try again." });
  };

  const authFormFooterLinks = [
    { text: "Remember your password? Sign In", to: "/" }, // Path from App.tsx
    { text: "Don't have an account? Sign Up", to: "/registration" } // Path from App.tsx
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <AppHeader />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Forgot Your Password?"
          description="No problem! Enter your email address below and we'll send you instructions to reset your password."
          footerLinks={authFormFooterLinks}
          className="w-full max-w-md"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          className="pl-10"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {formMessage && (
                <Alert variant={formMessage.type === 'error' ? 'destructive' : 'default'} className={formMessage.type === 'success' ? 'bg-green-50 border-green-300 dark:bg-green-900 dark:border-green-700' : ''}>
                  {formMessage.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <AlertTitle>{formMessage.type === 'success' ? 'Instructions Sent' : 'Error'}</AlertTitle>
                  <AlertDescription>
                    {formMessage.text}
                  </AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Send Reset Instructions'}
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <AppFooter />
    </div>
  );
};

export default PasswordRecoveryPage;