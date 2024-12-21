import { NextRequest, NextResponse } from "next/server";
import { LOGIN } from "./constants";

export const POST = async (req: NextRequest) => {
  const requestData = await req.json();
  console.log("REQ::", requestData);

  // Create a new user in database

  return NextResponse.json(LOGIN);
};
