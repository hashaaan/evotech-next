import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import LoginForm from "./login-form";

// Server component for SSR
export default async function LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (session) {
    // Redirect to dashboard if user has already logged in
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <LoginForm title="Sign in to Mflix" />
    </div>
  );
}
