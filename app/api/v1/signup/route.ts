import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    // Parse the incoming request JSON body
    const { name, email, password } = await req.json();

    // Basic validation for required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 },
      );
    }

    // Connect to MongoDB
    const client = await clientPromise();
    const db = client.db("sample_mflix");

    // Check if the user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 409 },
      );
    }

    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword, // Save the hashed password
      createdAt: new Date(),
    });

    // Return a success response
    return NextResponse.json({
      success: true,
      message: "User created successfully",
      data: { userId: result.insertedId }, // Return the created user's ID
    });
  } catch (error) {
    console.error("MongoDB ERROR:: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
