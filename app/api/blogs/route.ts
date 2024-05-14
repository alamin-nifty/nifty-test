import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const res = await fetch(`https://niftyitsolution.com/api/blogs`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
