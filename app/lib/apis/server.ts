// Server Actions
import { api } from "@/app/lib/api";
import { HTTPError } from "ky";

export const loginUser = async () => {
  const data = await api.get("login").json();
  console.log("Login", data);
};

type SignUpData = {
  name: string;
  email: string;
  password: string;
};

export const signUpUser = async (formData: SignUpData) => {
  try {
    const response = await api
      .post("signup", {
        json: formData,
      })
      .json();

    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      // Handle HTTP errors specifically
      const status = error.response.status; // HTTP status code (e.g., 404, 500)
      const responseBody = await error.response.json(); // Parse the response body if possible

      // console.log("HTTP Error:", status, responseBody);

      // You can handle different status codes here
      if (status === 401) {
        console.log("Unauthorized. Check your credentials.");
      } else if (status === 500) {
        console.log("Server error. Please try again later.");
      } else if (status === 404) {
        console.log(status, responseBody.message);
      }
    } else {
      // Handle non-HTTP errors (e.g., network issues)
      console.log("Unknown error:", error);
    }
    return undefined;
  }
};

export const getMovies = async () => {
  try {
    const moviesResp = await api.get("movies", { cache: "no-store" });

    if (moviesResp.ok) {
      return moviesResp.json();
    } else {
      return { error: true, message: "Something went wrong!" };
    }
  } catch (error) {
    if (error instanceof HTTPError) {
      // Handle HTTP errors specifically
      const status = error.response.status; // HTTP status code (e.g., 404, 500)
      const responseBody = await error.response.json(); // Parse the response body if possible

      // console.log("HTTP Error:", status, responseBody);

      // You can handle different status codes here
      if (status === 401) {
        console.log("Unauthorized. Check your credentials.");
      } else if (status === 500) {
        console.log("Server error. Please try again later.");
      } else if (status === 404) {
        console.log(status, responseBody.message);
      }
    } else {
      // Handle non-HTTP errors (e.g., network issues)
      console.log("Unknown error:", error);
    }
    return undefined;
  }
};
