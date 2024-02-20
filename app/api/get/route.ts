import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  return new NextResponse(JSON.stringify({ Message: `All the data's are fetched` }), {
    status: 200
  })
}
