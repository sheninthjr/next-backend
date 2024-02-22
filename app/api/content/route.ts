import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAPI_KEY });

export async function POST(request: NextApiRequest) {
  const { content, question } = await request.body;
  const response = await openai.completions.create({
    model: "davinci-002",
    prompt: `Summarize the following text to answer the question: ${question}\n\nText: ${content}\n`,
    temperature: 0.7,
    max_tokens: 100,
  });
  return new NextResponse(JSON.stringify({ Message: response.choices[0] }), {
    status: 200,
  });
}
