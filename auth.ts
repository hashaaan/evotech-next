import NextAuth, { CredentialsSignin, type NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { saltAndHashPassword } from "@/lib/utils";
import { getUserFromDb } from "@/lib/database";
// import { api } from "@/app/lib/api";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid email or password";
}

// async function refreshAccessToken(token) {
//   console.log("Now refreshing the expired token...");
//   try {
//     const response = await api.post("")
//   }
// }

export const config = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  pages: {
    signIn: "/login-2",
  },
  providers: [
    GitHub({
      clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET,
    }),
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
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
