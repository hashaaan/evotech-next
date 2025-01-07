import { MongoClient } from "mongodb";

async function clientPromise() {
  const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
  const options = {};

  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  const client = new MongoClient(MONGODB_URI, options);
  return client.connect();
}

export default clientPromise;
