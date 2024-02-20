import prisma from '@/app/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  console.log(process.env.MONGODB_URI)
  if (!title || !description) {
    return new NextResponse(JSON.stringify({ message: "Enter title and description " }))
  }
  try {
    const result = await prisma.post.create({
      data: {
        title,
        description
      }
    });
    return new NextResponse(JSON.stringify({ message: `Your post about ${title} is posted successfully` }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error while inserting document:", error);
    return new NextResponse(JSON.stringify({ message: "Error posting the document" }), { status: 500 });
  }
}
