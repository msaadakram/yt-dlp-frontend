# YT-DLP Frontend

A modern Next.js 15 frontend for [yt-dlp](https://github.com/yt-dlp/yt-dlp) — download videos, audio, and thumbnails from YouTube and 1000+ platforms.

## Features

- 🎬 Video, audio, and thumbnail downloads
- 🌐 1000+ platform support
- 🔒 Auth pages (Sign In / Sign Up)
- 📊 Dashboard with download history
- 💳 Pricing plans
- 📖 REST API reference
- 🌙 Dark mode via `next-themes`

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **shadcn/ui** components (Radix UI)
- **Framer Motion** (via `motion`)
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/download` | Download video/audio/thumbnail |
| GET | `/api/info` | Get video metadata |
| GET | `/api/formats` | List available formats |

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/msaadakram/yt-dlp-frontend)

## License

MIT
