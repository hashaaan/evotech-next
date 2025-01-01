"use client"; // Ensure this is a client component as it uses state and events

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInWithCredentialsClient() {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission default behavior
    setErrorMessage(""); // Reset error message

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result = await signIn("credentials", {
        redirect: false, // Prevent automatic redirection on failure
        email,
        password,
      });

      if (result?.error && result?.code) {
        console.log("RESULT", result);
        // Handle invalid credentials
        setErrorMessage(result.code);
      } else {
        // Handle successful login (e.g., redirect user)
        // window.location.href = "/dashboard"; // Example redirection
        console.log("SIGN IN SUCCESS::", result);
      }
    } catch (error) {
      console.log("Sign In Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <div className="w-[380px] mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg px-8 py-6">
          <h1 className="mb-4 font-bold text-xl text-center">
            Welcome to MFlix
          </h1>
          <h3 className="mb-4 font-bold">Sign in with Credentials</h3>
          <form onSubmit={onSubmitForm} className="space-y-6 mb-2">
            <div>
              {/* email */}
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter email address"
              />
            </div>

            {/* password */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Your password
              </label>
              <input
                name="password"
                type="password"
                className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter password"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-600 text-sm font-medium text-center">
                {errorMessage}
              </div>
            )}

            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
