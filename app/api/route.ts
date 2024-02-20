
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest) {
  return new NextResponse(JSON.stringify({ message: "Welcome from Sheninth Jr" }), {
    status: 200,
  });
}

