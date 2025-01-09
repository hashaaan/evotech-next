import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import RegisterForm from "./register-form";

export default async function SignUpPage() {
  // Create sign up form using shadcn
  // Add shadcn Card, Label, Input
  // Use zod to validate form
  // Use mongodb to store user
  // Install bcrypt

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session) {
    // Redirect to dashboard if user has already logged in
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto">
      <RegisterForm />
    </div>
  );
}
