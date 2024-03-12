import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  return new NextResponse(
    JSON.stringify({
      message: "This is backend exclusively made for React Native Project",
    }),
    {
      status: 200,
    }
  );
}
