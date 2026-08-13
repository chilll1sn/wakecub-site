"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { copy as strings, LANGS } from "@/content/copy";
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

/* The code is READ from the URL, not state this component owns: it is fixed for
   the lifetime of the page and nothing here ever changes it. Reading it through
   useSyncExternalStore rather than an effect that calls setState says exactly
   that, and avoids the extra render an effect would cost before the banner can
   paint. The subscribe callback is a no-op for the same reason — the path
   cannot change under a static export without a full navigation.

   getServerSnapshot returns null because this page is prerendered at build
   time, where there is no location. That is also what makes the markup match on
   hydration: the server renders nothing, and the code appears on the client's
   first commit. */
const subscribe = () => () => {};
const readCode = () =>
  window.location.pathname.match(/^\/i\/([A-Za-z0-9]{8})\/?$/)?.[1].toUpperCase() ?? null;
const noCode = () => null;

export function InviteBanner() {
  const code = useSyncExternalStore(subscribe, readCode, noCode);
  const [copied, setCopied] = useState(false);

  // The redirect IS a real effect: it reaches outside React to schedule a
  // navigation, and it must be cancelled if this unmounts before it fires.
  useEffect(() => {
    if (!code) return;
    const t = setTimeout(() => {
      window.location.href = APP_STORE_URL;
    }, REDIRECT_MS);
    return () => clearTimeout(t);
  }, [code]);

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
      {/* Every language renders; CSS shows one. The code itself is language
          neutral and sits outside the switch so it is never duplicated. */}
      {LANGS.map((lang) => (
        <p key={lang} className={`lang-${lang} text-sm text-muted-foreground`}>
          {strings[lang].invite.intro}
        </p>
      ))}
      <p className="my-1.5 font-mono text-3xl font-extrabold tracking-[0.18em] text-primary">
        {code}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={APP_STORE_URL}
          className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-[1rem] font-semibold text-primary-foreground transition-transform duration-200 hover:brightness-105 active:scale-[0.98] motion-reduce:transition-none"
        >
          {LANGS.map((lang) => (
            <span key={lang} className={`lang-${lang}`}>
              {strings[lang].invite.download}
            </span>
          ))}
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex h-12 items-center rounded-full border px-6 text-[1rem] font-semibold transition-colors hover:bg-accent"
        >
          {LANGS.map((lang) => (
            <span key={lang} className={`lang-${lang}`}>
              {copied ? strings[lang].invite.copied : strings[lang].invite.copy}
            </span>
          ))}
        </button>
      </div>

      {LANGS.map((lang) => (
        <p
          key={lang}
          className={`lang-${lang} mt-4 text-sm text-muted-foreground`}
        >
          {strings[lang].invite.outro}
        </p>
      ))}
    </aside>
  );
}
