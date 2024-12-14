import { api } from "@/app/lib/api";

export const loginUser = async () => {
  const data = await api.get("login").json();
  console.log("Login", data);
};
