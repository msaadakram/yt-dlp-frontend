"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar,
} from "recharts";
import {
  Download, Zap, Shield, Key, CreditCard, Settings, BarChart2, Bell,
  LogOut, Copy, CheckCircle2, X, Plus, Eye, EyeOff, Trash2, RefreshCw,
  ArrowUpRight, ArrowDownRight, AlertTriangle, Check, User, Lock,
  ChevronRight, Sparkles, Activity, Star,
} from "lucide-react";

const downloadData = [
  { day: "Mon", downloads: 12 }, { day: "Tue", downloads: 28 },
  { day: "Wed", downloads: 19 }, { day: "Thu", downloads: 35 },
  { day: "Fri", downloads: 42 }, { day: "Sat", downloads: 31 },
  { day: "Sun", downloads: 24 },
];

const apiData = [
  { hour: "0h", calls: 5 }, { hour: "4h", calls: 12 }, { hour: "8h", calls: 38 },
  { hour: "12h", calls: 65 }, { hour: "16h", calls: 53 }, { hour: "20h", calls: 29 },
];

const recentDownloads = [
  { title: "How to Build a Next.js App", platform: "YouTube", type: "video", time: "2m ago", size: "148 MB" },
  { title: "Lo-Fi Beats Mix 2026", platform: "SoundCloud", type: "audio", time: "14m ago", size: "32 MB" },
  { title: "React Summit 2026 Keynote", platform: "YouTube", type: "video", time: "1h ago", size: "890 MB" },
  { title: "CSS Tips Thumbnail", platform: "Twitter", type: "thumbnail", time: "3h ago", size: "0.4 MB" },
];

const TABS = ["Overview", "API Keys", "Downloads", "Billing", "Settings"] as const;
type Tab = typeof TABS[number];

const NAV_ITEMS = [
  { icon: BarChart2, label: "Overview" },
  { icon: Key, label: "API Keys" },
  { icon: Download, label: "Downloads" },
  { icon: CreditCard, label: "Billing" },
  { icon: Settings, label: "Settings" },
];

export function DashboardPage() {
  const [tab, setTab] = useState<Tab>("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const apiKey = "sk-ytdlp-a7f3c2e1b9d0f4a8c6e2d1f7b3a9c4e0";

  const copy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: "Total Downloads", value: "1,284", change: "+12%", up: true, icon: Download },
    { label: "API Calls Today", value: "342", change: "+8%", up: true, icon: Zap },
    { label: "Storage Used", value: "4.2 GB", change: "-3%", up: false, icon: Activity },
    { label: "Active Keys", value: "3", change: "same", up: true, icon: Key },
  ];

  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -240, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -240, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-60 bg-[var(--card)] border-r border-[var(--border)] z-40 flex flex-col"
          >
            <div className="flex items-center gap-2 px-5 h-16 border-b border-[var(--border)] font-bold text-lg">
              <Download size={20} className="text-[var(--accent)]" />
              YT-DLP
            </div>
            <nav className="flex-1 py-4 px-3 space-y-1">
              {NAV_ITEMS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => setTab(label as Tab)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    tab === label
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <Icon size={16} />{label}
                  {tab === label && <ChevronRight size={14} className="ml-auto" />}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-[var(--border)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center text-xs font-bold">MS</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Muhammad Saad</p>
                  <p className="text-xs text-[var(--muted-foreground)] truncate">Pro Plan</p>
                </div>
                <Star size={14} className="text-yellow-500 shrink-0" />
              </div>
              <Link href="/" className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                <LogOut size={13} /> Sign out
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className={`flex-1 flex flex-col transition-all ${sidebarOpen ? "ml-60" : "ml-0"}`}>
        {/* Topbar */}
        <header className="sticky top-0 z-30 h-16 bg-[var(--background)]/80 backdrop-blur border-b border-[var(--border)] flex items-center gap-4 px-6">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition">
            {sidebarOpen ? <X size={18} /> : <BarChart2 size={18} />}
          </button>
          <h1 className="text-base font-semibold flex-1">{tab}</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button onClick={() => setNotifOpen(!notifOpen)} className="relative text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition">
                <Bell size={18} />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--destructive)]" />
              </button>
              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 top-9 w-72 bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-xl p-4 z-50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold">Notifications</span>
                      <button onClick={() => setNotifOpen(false)}><X size={14} /></button>
                    </div>
                    <div className="space-y-2">
                      {[
                        { icon: AlertTriangle, msg: "API rate limit at 80%", time: "5m ago", color: "text-yellow-500" },
                        { icon: CheckCircle2, msg: "Download batch completed", time: "1h ago", color: "text-green-500" },
                        { icon: Sparkles, msg: "New Pro features available", time: "2h ago", color: "text-[var(--accent)]" },
                      ].map(({ icon: Icon, msg, time, color }) => (
                        <div key={msg} className="flex items-start gap-3 p-2 rounded-lg hover:bg-[var(--secondary)] transition text-sm">
                          <Icon size={15} className={`mt-0.5 shrink-0 ${color}`} />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-xs">{msg}</p>
                            <p className="text-[var(--muted-foreground)] text-xs">{time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}>

              {tab === "Overview" && (
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map(({ label, value, change, up, icon: Icon }) => (
                      <div key={label} className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-xl bg-[var(--secondary)] flex items-center justify-center">
                            <Icon size={16} className="text-[var(--accent)]" />
                          </div>
                          <span className={`flex items-center gap-0.5 text-xs font-semibold ${
                            change === "same" ? "text-[var(--muted-foreground)]" : up ? "text-green-600" : "text-red-500"
                          }`}>
                            {change !== "same" && (up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />)}
                            {change}
                          </span>
                        </div>
                        <p className="text-2xl font-bold">{value}</p>
                        <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-4 text-sm">Downloads This Week</h3>
                      <ResponsiveContainer width="100%" height={180}>
                        <AreaChart data={downloadData}>
                          <defs>
                            <linearGradient id="dlGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                          <Area type="monotone" dataKey="downloads" stroke="var(--accent)" fill="url(#dlGrad)" strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                      <h3 className="font-semibold mb-4 text-sm">API Calls Today</h3>
                      <ResponsiveContainer width="100%" height={180}>
                        <BarChart data={apiData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                          <XAxis dataKey="hour" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                          <Bar dataKey="calls" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Recent Downloads */}
                  <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                    <h3 className="font-semibold mb-4 text-sm">Recent Downloads</h3>
                    <div className="space-y-3">
                      {recentDownloads.map((d) => (
                        <div key={d.title} className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 rounded-lg bg-[var(--secondary)] flex items-center justify-center shrink-0">
                            <Download size={14} className="text-[var(--accent)]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{d.title}</p>
                            <p className="text-xs text-[var(--muted-foreground)]">{d.platform} · {d.type} · {d.size}</p>
                          </div>
                          <span className="text-xs text-[var(--muted-foreground)] shrink-0">{d.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {tab === "API Keys" && (
                <div className="max-w-2xl space-y-6">
                  <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                    <h3 className="font-semibold mb-1">Your API Key</h3>
                    <p className="text-xs text-[var(--muted-foreground)] mb-4">Keep this secret. Do not expose it in client-side code.</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 px-3 py-2.5 rounded-lg bg-[var(--secondary)] font-mono text-xs overflow-x-auto">
                        {apiKeyVisible ? apiKey : apiKey.replace(/./g, "•")}
                      </div>
                      <button onClick={() => setApiKeyVisible(!apiKeyVisible)} className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition">
                        {apiKeyVisible ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                      <button onClick={copy} className="p-2.5 rounded-lg border border-[var(--border)] hover:bg-[var(--secondary)] transition">
                        {copied ? <Check size={15} className="text-green-500" /> : <Copy size={15} />}
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-medium hover:opacity-90 transition">
                      <Plus size={15} /> Generate New Key
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium hover:bg-[var(--secondary)] transition">
                      <RefreshCw size={15} /> Rotate Key
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--destructive)] text-[var(--destructive)] text-sm font-medium hover:bg-red-50 transition">
                      <Trash2 size={15} /> Revoke
                    </button>
                  </div>
                </div>
              )}

              {tab === "Downloads" && (
                <div className="space-y-3">
                  {recentDownloads.concat(recentDownloads).map((d, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] text-sm">
                      <div className="w-9 h-9 rounded-xl bg-[var(--secondary)] flex items-center justify-center shrink-0">
                        <Download size={15} className="text-[var(--accent)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{d.title}</p>
                        <p className="text-xs text-[var(--muted-foreground)]">{d.platform} · {d.type} · {d.size}</p>
                      </div>
                      <span className="text-xs text-[var(--muted-foreground)] shrink-0">{d.time}</span>
                      <button className="text-[var(--muted-foreground)] hover:text-[var(--destructive)] transition">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {tab === "Billing" && (
                <div className="max-w-2xl space-y-6">
                  <div className="p-5 rounded-2xl border border-[var(--accent)] bg-[var(--card)]">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg">Pro Plan</h3>
                        <p className="text-sm text-[var(--muted-foreground)]">Billed monthly · Next renewal Aug 13, 2026</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-bold">Active</span>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-extrabold">$9</span>
                      <span className="text-[var(--muted-foreground)] pb-1">/month</span>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]">
                    <h3 className="font-semibold mb-4 text-sm">Payment Method</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-7 rounded bg-[var(--secondary)] flex items-center justify-center">
                        <CreditCard size={16} className="text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">•••• •••• •••• 4242</p>
                        <p className="text-xs text-[var(--muted-foreground)]">Expires 12/28</p>
                      </div>
                      <button className="ml-auto text-xs text-[var(--accent)] hover:underline">Change</button>
                    </div>
                  </div>
                </div>
              )}

              {tab === "Settings" && (
                <div className="max-w-2xl space-y-6">
                  <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] space-y-4">
                    <h3 className="font-semibold text-sm">Profile</h3>
                    {[
                      { label: "Full Name", value: "Muhammad Saad", icon: User },
                      { label: "Email", value: "arhamsaad453@gmail.com", icon: Shield },
                      { label: "Password", value: "••••••••", icon: Lock },
                    ].map(({ label, value, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--secondary)] flex items-center justify-center">
                          <Icon size={14} className="text-[var(--accent)]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-[var(--muted-foreground)]">{label}</p>
                          <p className="text-sm font-medium">{value}</p>
                        </div>
                        <button className="text-xs text-[var(--accent)] hover:underline">Edit</button>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 rounded-2xl border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
                    <h3 className="font-semibold text-sm text-red-600 mb-2">Danger Zone</h3>
                    <p className="text-xs text-red-500 mb-3">These actions are irreversible. Please be certain.</p>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-400 text-red-600 text-sm font-medium hover:bg-red-100 transition">
                      <Trash2 size={14} /> Delete Account
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
