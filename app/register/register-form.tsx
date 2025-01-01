"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FormEvent, useState } from "react";
import { signUpUser } from "../lib/apis/server";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

type APIResponse = { status: number } | undefined;

export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const { toast } = useToast();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission default behavior
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") ?? "";
    const email = formData.get("email") ?? "";
    const password = formData.get("password") ?? "";
    const confirmPassword = formData.get("confirm-password") ?? "";

    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setError(DEFAULT_ERROR);
        console.log({ name, email, password, confirmPassword });
        // Call signup endpoint
        const signupResp = (await signUpUser({
          name: name.toString(), // Convert form data to string
          email: email.toString(),
          password: password.toString(),
        })) as APIResponse;

        if (signupResp?.status === 409) {
          toast({
            variant: "destructive",
            title: "Signup failed!",
            description: "User with this email already exists.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      } else {
        setError({ error: true, message: "Passwords doesn't match." });
      }
    } else {
      setError({ error: true, message: "All fields are required." });
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90 w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">Create an account</CardTitle>
          <CardDescription className="text-xs text-center">
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="John Doe" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter new password"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Enter password again to confirm"
                />
              </div>

              <div className="flex justify-center">
                {error.error && (
                  <span className="text-red-600 text-xs text-center">
                    {error.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center gap-1 text-xs">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button className="flex-1" type="submit">
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
