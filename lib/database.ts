import { USERS } from "@/data/users";

export function getUserFromDb(email: string, pwHash: string) {
  if (email && pwHash) {
    const found = USERS.find((user) => user.email === email);
    return found;
  }

  return undefined;
}
