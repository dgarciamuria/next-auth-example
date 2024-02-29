import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const origin = new URL(req.url).origin;
  const h: string[] = [];
  return Response.json({
    origin,
    url: req.url,
    headers: [...headers().entries()].map(([key, value]) => `${key}: ${value}`),
    envs: Object.entries(process.env).map((key) => `${key}`),
  });
}
