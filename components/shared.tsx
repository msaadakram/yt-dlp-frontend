"use client";

import { useState, useRef, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Music,
  Image,
  Video,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Play,
  Zap,
  Shield,
  Globe,
  Star,
  Menu,
  X,
  Copy,
  Clock,
  Sparkles,
  MonitorPlay,
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  Twitch,
  Linkedin,
  Rss,
  Music2,
  Clapperboard,
  Film,
  Camera,
  Ghost,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowLeft,
  Check,
  ShieldCheck,
  Github,
  BarChart2,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type DownloadType = "video" | "audio" | "thumbnail";
type Format = { label: string; ext: string; quality?: string };
type _Platform = { name: string; color: string; icon: typeof Youtube };
type PricingPlan = { name: string; price: string; period: string; features: string[]; cta: string; highlight: boolean };

// ─── Brand SVG logos ─────────────────────────────────────────────────────────

type BrandLogoProps = { className?: string; style?: React.CSSProperties };

function YoutubeLogo({ className, style }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

function FacebookLogo({ className, style }: BrandLogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

// NOTE: The complete source code for all page components is in the original
// Design System for SaaS Product (2).zip file in this repository.
// 
// To get the full working code:
// 1. Extract the ZIP file
// 2. Copy src/app/App.tsx content here (replacing react-router imports with next/link)
// 3. Change all <Link to="X"> to <Link href="X">
// 4. Remove: import { router } from "./routes"
// 5. Remove: export default function App() block
//
// All exported pages needed:
export function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">fetchwave</h1>
        <p className="text-muted-foreground mb-8">Paste the full App.tsx content into components/shared.tsx</p>
        <Link href="/dashboard" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">Dashboard</Link>
      </div>
    </div>
  );
}

export function SignInPage() {
  return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-foreground">Sign In - paste full App.tsx content into components/shared.tsx</p></div>;
}

export function SignUpPage() {
  return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-foreground">Sign Up - paste full App.tsx content into components/shared.tsx</p></div>;
}

export function ApiDisclaimerPage() {
  return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-foreground">API Disclaimer</p></div>;
}

export function PrivacyPolicyPage() {
  return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-foreground">Privacy Policy</p></div>;
}

export function ApiPage() {
  return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-foreground">API Page</p></div>;
}

export function PricingPage() {
  return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-foreground">Pricing</p></div>;
}
