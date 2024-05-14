import { NextResponse } from "next/server";

export async function GET(req: any) {
  const url = new URL(req.url);
  console.log(url);
  const blogSlug = url.pathname.split("/").pop();
  const res = await fetch(`https://niftyitsolution.com/api/blogs/${blogSlug}`);
  const data = await res.json();
  console.log(data);
  return NextResponse.json(data);
}
