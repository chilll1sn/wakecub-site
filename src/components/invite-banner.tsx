"use client";

import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/app-store";

/**
 * Friend invite links look like https://wakecub.app/i/AB12CD34.
 *
 * On a device with the app installed, iOS opens the app via the Universal Link
 * and this page is never rendered. This is the fallback for everyone else, so
 * the code stays readable rather than being lost. GitHub Pages serves 404.html
 * for /i/* (no such route is exported), which is why this must keep working
 * from the not-found page as well as the index.
 *
 * Landing here means the app isn't installed, so the banner sends them to the
 * App Store on a short delay. The delay is what makes the code survive the trip:
 * it renders and can be copied before the redirect, and the page is still here
 * in the back-stack afterwards. Redirecting immediately would lose the code,
 * which is the whole reason the link carries one.
 */
const REDIRECT_MS = 1200;

export function InviteBanner() {
  const [code, setCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const m = window.location.pathname.match(/^\/i\/([A-Za-z0-9]{8})\/?$/);
    if (!m) return;
    setCode(m[1].toUpperCase());

    const t = setTimeout(() => {
      window.location.href = APP_STORE_URL;
    }, REDIRECT_MS);
    return () => clearTimeout(t);
  }, []);

  if (!code) return null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(code!);
      setCopied(true);
    } catch {
      // Clipboard is blocked without a secure context or user gesture on some
      // browsers. The code is on screen either way, so there is nothing to say.
    }
  }

  return (
    <aside className="mb-10 rounded-[20px] border bg-card px-6 py-6">
      <p className="text-sm text-muted-foreground">
        A friend invited you to Wake cub. Their friend code:
      </p>
      <p className="my-1.5 font-mono text-3xl font-extrabold tracking-[0.18em] text-primary">
        {code}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={APP_STORE_URL}
          className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-[1rem] font-semibold text-primary-foreground transition-transform duration-200 hover:brightness-105 active:scale-[0.98] motion-reduce:transition-none"
        >
          Download on the App Store
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-12 items-center rounded-full border px-6 text-[1rem] font-semibold transition-colors hover:bg-accent"
        >
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Taking you to the App Store. Once installed, open the Friends tab and
        enter this code.
      </p>
    </aside>
  );
}
