"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
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
import { signUp, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

export default function RegisterForm() {
  const [error, setError] = useState(DEFAULT_ERROR);
  const [isLoading, setLoading] = useState(false);
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard");
  }

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission default behavior
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirm-password")?.toString();

    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setError(DEFAULT_ERROR);
        setLoading(true);

        const { data, error } = await signUp.email(
          { email, password, name, image: undefined },
          {
            onRequest: () => {
              // console.log("onRequest", ctx);
            },
            onSuccess: (ctx) => {
              console.log("onSuccess", ctx);
              setLoading(false);
            },
            onError: (ctx) => {
              // console.log("onError", ctx.error.code);
              setError({ error: true, message: ctx.error.message });
              setLoading(false);
            },
          },
        );

        if (data) {
          console.log("data", data);
        }

        if (error) {
          console.log("AUTH ERROR:", error);
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
          <CardTitle className="text-center text-lg">
            Create an account
          </CardTitle>
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
                  <span className="text-red-600 text-xs text-center animate-pulse duration-1000">
                    {error.message}
                  </span>
                )}
              </div>

              <div className="flex justify-center text-xs text-gray-500 space-x-1">
                <span>Already have an account?</span>
                <Link href="/sign-in" className="text-blue-600 hover:underline">
                  Sign In
                </Link>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              className="flex-1 bg-black hover:bg-black/90"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
