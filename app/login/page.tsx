import { redirect } from "next/navigation";
import LoginForm from "./login-form";
import SignInWithGithub from "./sign-in-github";
import { auth } from "@/auth";

// Server component for SSR
export default async function LoginPage() {
  const authResp = await auth();

  if (authResp?.user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <LoginForm title="Sign in to Mflix" />
      <SignInWithGithub />
    </div>
  );
}
