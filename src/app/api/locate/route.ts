import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const region = process.env.NOW_REGION || "Region not available";

  return NextResponse.json({ region }, { status: 200 });
}
