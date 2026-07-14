import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing 'url' parameter" }, { status: 400 });
  }

  // Placeholder: In production, call yt-dlp --dump-json here
  return NextResponse.json({
    success: true,
    message: "Connect to yt-dlp backend to get real metadata",
    url,
    title: "Sample Video Title",
    duration: 0,
    thumbnail: null,
    uploader: null,
  });
}
