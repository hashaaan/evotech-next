import { NextRequest, NextResponse } from "next/server";
import { LOGIN } from "./constants";

export const GET = async (req: NextRequest) => {
  console.log("REQ::", req);
  return NextResponse.json(LOGIN);
};
