"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

// This Module Contains
// 1. Controlled Inputs
// 2. React.js useState hook
// 3. Next.js "use client" breakpoint
// 4. Tailwind CSS Flex, Dark mode, Max Width

// Client component for CSR
export default function Login({ title }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  // Backend error handling
  const [error, setError] = useState("");

  const validateForm = () => {
    if (email === "") {
      setEmailError("Email address cannot be empty");
      return { isValid: false };
    }

    setEmailError("");
    return { isValid: true };
  };

  const handleSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Log the state stored credentials to debug console
    console.log("Form Data:", { email: email, password: password });

    // Frontend validation before submission
    const { isValid } = validateForm();

    // Continue the submission only if form is valid
    if (isValid) {
      // Check if the login credentials are valid
      if (email === "shalithadev@gmail.com" && password === "12345") {
        // Set Authentication Token
        localStorage.setItem("authToken", "12345");
        redirect("/dashboard");
      } else {
        // Set the invalid credentials error
        setError("Invalid email address or password");
      }
    }
  };

  return (
    <div className="w-[380px] mx-auto">
      <div className="bg-blue-50/90 shadow-md border border-gray-200 rounded-lg px-8 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* title */}
          <h3 className="text-center text-xl font-semibold text-gray-900">
            {title}
          </h3>

          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Your email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-blue-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter email address"
            />

            {emailError && (
              <span className="text-red-600 text-xs text-center">
                {emailError}
              </span>
            )}
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
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-blue-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter password"
            />
          </div>

          {/* error section */}
          <div className="flex justify-center">
            {error && error !== "" && (
              <span className="text-red-600 text-xs text-center">{error}</span>
            )}
          </div>

          {/* remember me */}
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>

              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <a
              href="/forget-password"
              className="text-sm text-blue-700 font-medium hover:underline"
            >
              Lost Password?
            </a>
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign In
          </button>

          <div className="flex justify-center text-sm font-medium text-gray-500 space-x-1">
            <span>Not registered?</span>
            <a href="/register" className="text-blue-700 hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
