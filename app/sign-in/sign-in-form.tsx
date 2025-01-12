"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";
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
import { signIn } from "@/lib/auth-client";

const DEFAULT_ERROR = {
  error: false,
  message: "",
};

// Client component for CSR
export default function SignInForm({ title }: { title: string }) {
  const [isLoading, setLoading] = useState(false);
  const [isLoadingGit, setLoadingGit] = useState(false);
  // Backend error handling
  const [error, setError] = useState(DEFAULT_ERROR);

  const validateForm = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (email === "") {
      setError({ error: true, message: "Email address cannot be empty" });
      return false;
    } else if (password === "") {
      setError({ error: true, message: "Password cannot be empty" });
      return false;
    }

    setError(DEFAULT_ERROR);
    return true;
  };

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    // Prevent default form submission
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    // Continue the submission only if form is valid
    if (validateForm({ email, password })) {
      setLoading(true);
      await signIn.email(
        { email, password },
        {
          onSuccess: () => {
            redirect("/dashboard");
          },
          onError: (ctx) => {
            setError({ error: true, message: ctx.error.message });
            setLoading(false);
          },
        },
      );
    }
  };

  const handleGithubSignIn = async () => {
    setLoadingGit(true);
    await signIn.social(
      {
        provider: "github",
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          setLoadingGit(false);
        },
      },
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90 w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-lg">{title}</CardTitle>
          <CardDescription className="text-xs text-center">
            Enter your login details and sign in
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* error section */}
            <div className="flex justify-center">
              {error.error && (
                <span className="text-red-600 text-xs text-center animate-pulse duration-1000">
                  {error.message}
                </span>
              )}
            </div>

            {/* remember me and forget password */}
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="text-sm ml-3">
                  <Label
                    htmlFor="remember"
                    className="font-medium text-gray-900"
                  >
                    Remember me
                  </Label>
                </div>
              </div>

              <Link
                href="#"
                className="text-sm text-blue-700 font-medium hover:underline"
              >
                Lost Password?
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col justify-center space-y-4">
            <Button
              className="w-full"
              type="submit"
              disabled={isLoading || isLoadingGit}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              Sign In
            </Button>

            <div className="flex justify-center text-xs text-gray-500 space-x-1">
              <span>Not registered?</span>
              <Link href="/register" className="text-blue-700 hover:underline">
                Create an account
              </Link>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-green-600"
              onClick={handleGithubSignIn}
              disabled={isLoadingGit || isLoading}
            >
              <FaGithub className="text-lg" />
              <span>Sign In with Github</span>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
