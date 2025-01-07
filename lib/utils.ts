import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// Your own logic for dealing with plaintext password strings;
export const saltAndHashPassword = async (password: string) => {
  if (!password) {
    throw new Error("Password is required");
  }

  // Generate a random salt
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const saltString = btoa(String.fromCharCode(...salt));

  // Encode the password
  const encoder = new TextEncoder();
  const passwordData = encoder.encode(password + saltString);

  // Hash the password using SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", passwordData);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashString = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return `${saltString}:${hashString}`;
};

export const verifyPassword = async (
  password: string,
  storedPassword: string,
) => {
  if (!password || !storedPassword) {
    throw new Error("Password and stored password are required");
  }

  // Split the stored password into salt and hash
  const [salt, originalHash] = storedPassword.split(":");

  // Rehash the provided password with the same salt
  const encoder = new TextEncoder();
  const passwordData = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", passwordData);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashString = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  // Compare the hashes
  return hashString === originalHash;
};
