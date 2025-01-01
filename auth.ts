import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings;
import { saltAndHashPassword } from "@/lib/utils";
import { getUserFromDb } from "@/lib/database";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid email or password";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (credentials === null) {
          return null;
        }

        try {
          // logic to salt and hash password
          const pwHash = await saltAndHashPassword(
            credentials?.password as string,
          );

          // logic to verify if the user exists
          const user = getUserFromDb(
            credentials?.email as string,
            pwHash as string,
          );

          if (user) {
            const isMatch = user.password === credentials?.password;

            if (isMatch) {
              return user;
            } else {
              throw new InvalidLoginError();
            }
          } else {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new InvalidLoginError();
          }
        } catch (error) {
          console.log("CATCH", error);
          throw new InvalidLoginError();
        }
      },
    }),
  ],
});
