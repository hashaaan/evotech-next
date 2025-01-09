import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(
  "mongodb+srv://dbUserET:evotech@clusteret.4tpjd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterET",
);
const db = client.db("sample_mflix");

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    // autoSignIn: false,
  },
});
