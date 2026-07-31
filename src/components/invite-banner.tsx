"use client";

import { useEffect, useState } from "react";

/**
 * Friend invite links look like https://wakecub.app/i/AB12CD34.
 *
 * On a device with the app installed, iOS opens the app via the Universal Link
 * and this page is never rendered. This is the fallback for everyone else, so
 * the code stays readable rather than being lost. GitHub Pages serves 404.html
 * for /i/* (no such route is exported), which is why this must keep working
 * from the not-found page as well as the index.
 */
export function InviteBanner() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    const m = window.location.pathname.match(/^\/i\/([A-Za-z0-9]{8})\/?$/);
    if (m) setCode(m[1].toUpperCase());
  }, []);

  if (!code) return null;

  return (
    <aside className="mb-10 rounded-xl border bg-card px-6 py-5">
      <p className="text-sm text-muted-foreground">
        A friend invited you to Wake cub. Their friend code:
      </p>
      <p className="my-1.5 font-mono text-3xl font-extrabold tracking-[0.18em] text-primary">
        {code}
      </p>
      <p className="text-sm text-muted-foreground">
        Once the app is installed, open the Friends tab and enter this code.
      </p>
    </aside>
  );
}
