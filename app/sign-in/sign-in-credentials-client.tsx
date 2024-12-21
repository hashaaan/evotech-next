"use client";
import { signIn } from "next-auth/react";

export default function SignInWithCredentialsClient() {
  // Server Action for Sign in form submission
  const credentialsAction = (formData: FormData) => {
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(credentials);
    signIn("credentials", credentials);
  };

  return (
    <div className="w-[380px] mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg px-8 py-6">
        <h1 className="mb-4 font-bold text-xl text-center">Welcome to MFlix</h1>
        <h3 className="mb-4 font-bold">Sign in with Credentials</h3>
        <form action={credentialsAction} className="space-y-6 mb-2">
          <div>
            {/* email */}
            <label
              htmlFor="credentials-email"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your email
            </label>

            <input
              name="email"
              id="credentials-email"
              type="email"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter email address"
            />
          </div>

          {/* password */}
          <div>
            <label
              htmlFor="credentials-password"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your password
            </label>
            <input
              name="password"
              id="credentials-password"
              type="password"
              className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter password"
            />
          </div>

          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
