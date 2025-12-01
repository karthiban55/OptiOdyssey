import "./globals.css";
import "../styles/utilities.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OptiOdyssey",
  description: "AI-powered multi-agent travel optimizer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <div className="min-h-screen flex flex-col gradient-bg">
          {/* Top Nav */}
          <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur sticky top-0 z-20">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-blue-500/20 text-blue-400 text-lg font-bold">
                  O
                </span>
                <div>
                  <div className="font-semibold tracking-tight">
                    OptiOdyssey
                  </div>
                  <div className="text-xs text-slate-400">
                    AI Travel & Lifestyle OS
                  </div>
                </div>
              </div>

              <nav className="flex gap-6 text-sm">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/explore" className="nav-link">
                  Explore
                </Link>
                <button className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-xs font-semibold shadow-md shadow-blue-500/30">
                  Sign in (placeholder)
                </button>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-800 bg-slate-950/80 text-xs text-slate-500">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
              <span>© {new Date().getFullYear()} OptiOdyssey.</span>
              <span>Multi-agent travel intelligence prototype.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
