import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    winRate: "74%",
    roi: "28.4%",
    maxDrawdown: "8.2%"
  });
}
