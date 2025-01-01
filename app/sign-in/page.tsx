import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SignInWithCredentialsClient from "./sign-in-credentials-client";
// import SignInWithGithub from "./sign-in-github";
// import SignInWithCredentials from "./sign-in-credentials";

// Server component for SSR
export default async function SignInPage() {
  const authResp = await auth();

  if (authResp?.user) {
    redirect("/");
  }

  // return (
  //   <div className="flex flex-col justify-center items-center min-h-screen text-black">
  //     <SignInWithCredentials />
  //     <SignInWithGithub />
  //   </div>
  // );

  return <SignInWithCredentialsClient />;
}
