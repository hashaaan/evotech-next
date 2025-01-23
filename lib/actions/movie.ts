"use server";

import { clientPromise } from "@/lib/mongodb";

type CreateMovie = {
  title: string;
  year: number;
  plot: string;
  rated: string;
  genres: string[];
};

// Server action to create movie in mongodb
export const createMovie = async (doc: CreateMovie) => {
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");
    const result = await db.collection("movies-new").insertOne(doc);

    console.log(`A movie was inserted with the _id: ${result.insertedId}`);

    if (result.acknowledged) {
      return { movieId: 123 };
    } else {
      return undefined;
    }
  } catch {
    console.log("Mongodb insert failed!");
  }
};
