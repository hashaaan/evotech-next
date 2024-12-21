"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const authenticate = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return { ok: true, message: "Login successful!" };
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: true,
            message: "Invalid email or password.",
          };
        case "CallbackRouteError":
          return {
            error: true,
            message: "Invalid email or password.",
          };
        default:
          return {
            error: true,
            message: "Something went wrong.",
          };
      }
    }
    // throw error;
  }
};
