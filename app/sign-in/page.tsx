import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignInForm from "./sign-in-form-n";

// Server component for SSR
export default async function LoginPage() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(), // you need to pass the headers object.
    });

    if (session) {
      // Redirect to dashboard if user has already logged in
      redirect("/dashboard");
    }
  } catch {
    // do nothing
  }

  return (
    <div className="container mx-auto">
      <SignInForm title="Sign in to Mflix" />
    </div>
  );
}
