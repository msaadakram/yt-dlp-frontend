import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const type = searchParams.get("type") || "video";
  const quality = searchParams.get("quality") || "best";

  if (!url) {
    return NextResponse.json({ error: "Missing 'url' parameter" }, { status: 400 });
  }

  // Placeholder: In production, call yt-dlp backend here
  return NextResponse.json({
    success: true,
    message: "Download queued (connect to yt-dlp backend)",
    url,
    type,
    quality,
    downloadUrl: null,
  });
}
