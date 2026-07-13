"use client";
import { useState, useRef, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Download, Music, Video, ChevronDown, CheckCircle2, ArrowRight,
  Play, Zap, Shield, Globe, Star, Menu, X, Copy, Clock, Sparkles,
  MonitorPlay, Youtube, Facebook, Instagram, Twitter, Twitch,
  Linkedin, Rss, Music2, Clapperboard, Film, Camera, Ghost, Mail,
  LockKeyhole, Eye, EyeOff, ArrowLeft, Check, ShieldCheck, Github,
  BarChart2, Image,
} from "lucide-react";

// ─── Shared Nav ──────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Download className="text-[var(--accent)]" size={22} />
          <span>YT-DLP</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <Link href="/pricing" className="hover:text-[var(--accent)] transition-colors">Pricing</Link>
          <Link href="/api" className="hover:text-[var(--accent)] transition-colors">API</Link>
          <Link href="/dashboard" className="hover:text-[var(--accent)] transition-colors">Dashboard</Link>
          <Link href="/sign-in" className="px-4 py-1.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition">Sign In</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 pb-4 flex flex-col gap-3 text-sm font-medium overflow-hidden"
          >
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/api" onClick={() => setOpen(false)}>API</Link>
            <Link href="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
            <Link href="/sign-in" onClick={() => setOpen(false)}>Sign In</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted-foreground)]">
        <div className="flex items-center gap-2 font-semibold text-[var(--foreground)]">
          <Download size={18} className="text-[var(--accent)]" /> YT-DLP Frontend
        </div>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-[var(--foreground)] transition-colors">Privacy</Link>
          <Link href="/api-disclaimer" className="hover:text-[var(--foreground)] transition-colors">Disclaimer</Link>
          <Link href="/api" className="hover:text-[var(--foreground)] transition-colors">API</Link>
        </div>
        <span>© {new Date().getFullYear()} YT-DLP Frontend</span>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

const PLATFORMS = [
  { name: "YouTube", icon: Youtube, color: "#FF0000" },
  { name: "Facebook", icon: Facebook, color: "#1877F2" },
  { name: "Instagram", icon: Instagram, color: "#E1306C" },
  { name: "Twitter", icon: Twitter, color: "#1DA1F2" },
  { name: "Twitch", icon: Twitch, color: "#9146FF" },
  { name: "LinkedIn", icon: Linkedin, color: "#0077B5" },
  { name: "Podcast", icon: Rss, color: "#F26522" },
];

const FEATURES = [
  { icon: Zap, title: "Lightning Fast", desc: "Powered by yt-dlp — the fastest open-source downloader available." },
  { icon: Shield, title: "Private & Secure", desc: "No data stored. Downloads happen server-side and are immediately discarded." },
  { icon: Globe, title: "1000+ Platforms", desc: "YouTube, Instagram, Twitter, TikTok, Twitch and many more." },
  { icon: Music2, title: "Audio Extraction", desc: "Extract MP3 / AAC audio from any video in one click." },
  { icon: Camera, title: "Thumbnail Download", desc: "Grab high-res video thumbnails as JPG or WebP." },
  { icon: Clapperboard, title: "Quality Choice", desc: "Pick your preferred resolution from 360p up to 4K." },
];

export function HomePage() {
  const [url, setUrl] = useState("");
  const [type, setType] = useState<"video" | "audio" | "thumbnail">("video");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1800);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] text-xs font-semibold mb-6">
            <Sparkles size={12} /> Powered by yt-dlp
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Download <span className="text-[var(--accent)]">Anything</span><br />From Anywhere
          </h1>
          <p className="text-[var(--muted-foreground)] max-w-xl mx-auto mb-10 text-lg">
            Video, audio, or thumbnail — from YouTube, Instagram, Twitter and 1000+ more platforms.
          </p>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex gap-2 mb-4">
              {(["video", "audio", "thumbnail"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all border ${
                    type === t
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]"
                      : "bg-[var(--card)] border-[var(--border)] hover:border-[var(--accent)]"
                  }`}
                >
                  {t === "video" && <Film size={14} />}
                  {t === "audio" && <Music size={14} />}
                  {t === "thumbnail" && <Image size={14} />}
                  {t}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <input
                ref={inputRef}
                value={url}
                onChange={(e) => { setUrl(e.target.value); setDone(false); }}
                placeholder="Paste video URL here…"
                className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !url.trim()}
                className="px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm hover:opacity-90 transition disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? <Clock size={16} className="animate-spin" /> : done ? <CheckCircle2 size={16} /> : <Download size={16} />}
                {loading ? "Processing…" : done ? "Done!" : "Download"}
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-8">Supports 1000+ platforms including</p>
          <div className="flex flex-wrap justify-center gap-6">
            {PLATFORMS.map(({ name, icon: Icon, color }) => (
              <div key={name} className="flex items-center gap-2 text-sm font-medium">
                <Icon size={20} style={{ color }} />{name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why YT-DLP Frontend?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center bg-[var(--secondary)]">
        <h2 className="text-3xl font-bold mb-4">Ready to download?</h2>
        <p className="text-[var(--muted-foreground)] mb-8">Join thousands of users. No sign-up required for basic downloads.</p>
        <div className="flex justify-center gap-4">
          <Link href="/sign-up" className="px-6 py-3 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:opacity-90 transition flex items-center gap-2">
            Get Started <ArrowRight size={16} />
          </Link>
          <Link href="/pricing" className="px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] font-semibold hover:border-[var(--accent)] transition">
            View Pricing
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// ─── Sign In Page ─────────────────────────────────────────────────────────────

export function SignInPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1500); };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-6">
            <Download className="text-[var(--accent)]" size={24} /> YT-DLP
          </Link>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-1">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input type="email" placeholder="you@example.com" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Password</label>
            <div className="relative">
              <LockKeyhole size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input type={show ? "text" : "password"} placeholder="••••••••" className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm outline-none focus:border-[var(--accent)] transition-colors" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? <Clock size={16} className="animate-spin" /> : <ArrowRight size={16} />}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
        <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
          No account? <Link href="/sign-up" className="text-[var(--accent)] font-medium hover:underline">Sign up</Link>
        </p>
        <Link href="/" className="flex items-center justify-center gap-1.5 text-sm text-[var(--muted-foreground)] mt-4 hover:text-[var(--foreground)] transition-colors">
          <ArrowLeft size={14} /> Back to home
        </Link>
      </motion.div>
    </div>
  );
}

// ─── Sign Up Page ─────────────────────────────────────────────────────────────

export function SignUpPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1500); };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-6">
            <Download className="text-[var(--accent)]" size={24} /> YT-DLP
          </Link>
          <h1 className="text-2xl font-bold">Create account</h1>
          <p className="text-[var(--muted-foreground)] text-sm mt-1">Start downloading in seconds</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Full Name</label>
            <input type="text" placeholder="Muhammad Saad" className="w-full px-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm outline-none focus:border-[var(--accent)] transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input type="email" placeholder="you@example.com" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm outline-none focus:border-[var(--accent)] transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Password</label>
            <div className="relative">
              <LockKeyhole size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input type={show ? "text" : "password"} placeholder="••••••••" className="w-full pl-9 pr-9 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-sm outline-none focus:border-[var(--accent)] transition-colors" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]">
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="terms" className="mt-0.5" />
            <label htmlFor="terms" className="text-[var(--muted-foreground)]">I agree to the <Link href="/privacy" className="text-[var(--accent)] hover:underline">Privacy Policy</Link></label>
          </div>
          <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? <Clock size={16} className="animate-spin" /> : <Check size={16} />}
            {loading ? "Creating…" : "Create Account"}
          </button>
        </form>
        <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
          Have an account? <Link href="/sign-in" className="text-[var(--accent)] font-medium hover:underline">Sign in</Link>
        </p>
        <Link href="/" className="flex items-center justify-center gap-1.5 text-sm text-[var(--muted-foreground)] mt-4 hover:text-[var(--foreground)] transition-colors">
          <ArrowLeft size={14} /> Back to home
        </Link>
      </motion.div>
    </div>
  );
}

// ─── API Disclaimer Page ──────────────────────────────────────────────────────

export function ApiDisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center">
            <Ghost size={20} className="text-[var(--accent)]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">API Disclaimer</h1>
            <p className="text-[var(--muted-foreground)] text-sm">Please read before using the API</p>
          </div>
        </div>
        <div className="prose prose-sm max-w-none space-y-6 text-[var(--foreground)]">
          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
            <h2 className="text-lg font-semibold flex items-center gap-2"><ShieldCheck size={18} className="text-[var(--accent)]" /> Terms of Use</h2>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">This API is provided for personal and educational use only. You must comply with the terms of service of the platforms you are downloading from. Downloading copyrighted content without permission may be illegal in your jurisdiction.</p>
          </div>
          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
            <h2 className="text-lg font-semibold flex items-center gap-2"><Shield size={18} className="text-[var(--accent)]" /> Rate Limits</h2>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">Free tier is limited to 10 requests/hour. Upgrade to Pro for unlimited access. Abuse of the API may result in IP banning.</p>
          </div>
          <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
            <h2 className="text-lg font-semibold flex items-center gap-2"><Github size={18} className="text-[var(--accent)]" /> Open Source</h2>
            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">This project is built on top of the open-source <a href="https://github.com/yt-dlp/yt-dlp" className="text-[var(--accent)] hover:underline">yt-dlp</a> library. We are not affiliated with YouTube or any other platform.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ─── Privacy Policy Page ──────────────────────────────────────────────────────

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-[var(--muted-foreground)] text-sm mb-10">Last updated: July 2026</p>
        <div className="space-y-6 text-sm leading-relaxed text-[var(--muted-foreground)]">
          {[
            { title: "Data Collection", body: "We do not store any URLs, download history, or personal information beyond what is necessary for authentication. Session data is cleared on logout." },
            { title: "Cookies", body: "We use minimal cookies strictly for session management. No third-party tracking cookies are used." },
            { title: "Third-Party Services", body: "Downloads are processed on our servers and immediately deleted. We do not share any data with third parties." },
            { title: "Contact", body: "For privacy inquiries, contact us at privacy@ytdlp-frontend.com" },
          ].map(({ title, body }) => (
            <div key={title} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <h2 className="font-semibold text-[var(--foreground)] mb-2">{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ─── API Docs Page ────────────────────────────────────────────────────────────

export function ApiPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (text: string, key: string) => { navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(null), 2000); };

  const endpoints = [
    { method: "GET", path: "/api/download", desc: "Download video or audio", params: "url, type (video|audio|thumbnail), quality" },
    { method: "GET", path: "/api/info", desc: "Get video metadata", params: "url" },
    { method: "GET", path: "/api/formats", desc: "List available formats", params: "url" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-[var(--secondary)] flex items-center justify-center">
            <BarChart2 size={20} className="text-[var(--accent)]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">API Reference</h1>
            <p className="text-[var(--muted-foreground)] text-sm">RESTful API — Base URL: <code className="text-[var(--accent)]">https://api.ytdlp.example.com/v1</code></p>
          </div>
        </div>
        <div className="space-y-4">
          {endpoints.map((ep) => (
            <div key={ep.path} className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-[var(--accent)] text-white">{ep.method}</span>
                <code className="text-sm font-mono font-semibold">{ep.path}</code>
                <button onClick={() => copy(ep.path, ep.path)} className="ml-auto text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition">
                  {copied === ep.path ? <CheckCircle2 size={15} /> : <Copy size={15} />}
                </button>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mb-1">{ep.desc}</p>
              <p className="text-xs text-[var(--muted-foreground)]"><span className="font-medium text-[var(--foreground)]">Params:</span> {ep.params}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-5 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Example Request</h2>
            <button onClick={() => copy(`curl "https://api.ytdlp.example.com/v1/api/download?url=https://youtu.be/dQw4w9WgXcQ&type=audio"`, "curl")} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition">
              {copied === "curl" ? <CheckCircle2 size={15} /> : <Copy size={15} />}
            </button>
          </div>
          <pre className="text-xs bg-[var(--muted)] p-3 rounded-lg overflow-x-auto text-[var(--foreground)]">{`curl "https://api.ytdlp.example.com/v1/api/download?url=https://youtu.be/dQw4w9WgXcQ&type=audio"`}</pre>
        </div>
        <div className="mt-4 text-center">
          <Link href="/api-disclaimer" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors">Read API Disclaimer →</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// ─── Pricing Page ─────────────────────────────────────────────────────────────

const PLANS = [
  {
    name: "Free", price: "$0", period: "/month",
    features: ["10 downloads/day", "720p max quality", "Audio extraction", "Community support"],
    cta: "Get Started", highlight: false,
  },
  {
    name: "Pro", price: "$9", period: "/month",
    features: ["Unlimited downloads", "4K quality", "API access (1000 req/day)", "Priority support", "Batch downloads"],
    cta: "Start Pro", highlight: true,
  },
  {
    name: "Business", price: "$29", period: "/month",
    features: ["Everything in Pro", "Unlimited API", "Dedicated server", "SLA guarantee", "Custom integrations"],
    cta: "Contact Sales", highlight: false,
  },
];

export function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold mb-3">Simple Pricing</h1>
          <p className="text-[var(--muted-foreground)]">No hidden fees. Cancel any time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border flex flex-col ${
                plan.highlight
                  ? "border-[var(--accent)] bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg"
                  : "border-[var(--border)] bg-[var(--card)]"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--accent)] text-white">Most Popular</span>
                </div>
              )}
              <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm pb-1 ${plan.highlight ? "opacity-70" : "text-[var(--muted-foreground)]"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-2.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={15} className={plan.highlight ? "text-[var(--accent-foreground)]" : "text-[var(--accent)]"} />{f}
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up"
                className={`w-full py-2.5 rounded-xl font-semibold text-sm text-center transition hover:opacity-90 ${
                  plan.highlight
                    ? "bg-white text-[var(--primary)]"
                    : "bg-[var(--primary)] text-[var(--primary-foreground)]"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
