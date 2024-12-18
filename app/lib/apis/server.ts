import { api } from "@/app/lib/api";

export const loginUser = async () => {
  const data = await api.get("login").json();
  console.log("Login", data);
};

export const getMovies = async () => {
  const data = await api.get("movies").json();
  return data;
};
