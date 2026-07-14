import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing 'url' parameter" }, { status: 400 });
  }

  // Placeholder: In production, call yt-dlp -F here
  return NextResponse.json({
    success: true,
    message: "Connect to yt-dlp backend to get real formats",
    url,
    formats: [
      { id: "137", ext: "mp4", resolution: "1080p", note: "1080p HD" },
      { id: "136", ext: "mp4", resolution: "720p", note: "720p HD" },
      { id: "135", ext: "mp4", resolution: "480p", note: "480p" },
      { id: "134", ext: "mp4", resolution: "360p", note: "360p" },
      { id: "140", ext: "m4a", resolution: "audio", note: "Audio only (m4a)" },
    ],
  });
}
