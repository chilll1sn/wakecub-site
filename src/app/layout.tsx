import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

// Figtree: humanist, soft terminals, wide weight range — it matches the matte
// injection-moulded toy the mascot actually is. One family, carried by weight
// contrast rather than a display/body pair.
const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
});

const title = "Wake cub — the alarm that watches you get up";
const description =
  "Wake cub is an iOS alarm clock that won't turn off until the camera has seen you actually do something: squats, punches, jogging, brushing your teeth. Runs on-device — no video ever leaves your phone.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wakecub.app"),
  title,
  description,
  icons: { icon: "/assets/icon.png", apple: "/assets/icon.png" },
  openGraph: {
    title,
    description,
    url: "https://wakecub.app",
    siteName: "Wake cub",
    images: [{ url: "/assets/icon.png", width: 1024, height: 1024 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: {
    canonical: "https://wakecub.app",
    // Both languages live at the same URL: output:"export" emits a single
    // index.html, so there is no separate document to point a locale at.
    languages: { en: "https://wakecub.app", "zh-Hant": "https://wakecub.app" },
  },
};

/* Runs in <head>, before first paint, so a Chinese reader never sees the
   English flash first. Ported from public/terms.html so the whole site decides
   language the same way. Order of precedence: an explicit #zh / #en in the URL
   always wins (it is how someone overrides the guess, and how the toggle
   works), otherwise fall back to what the browser asks for. */
const langScript = `(function () {
  var root = document.documentElement;

  function pick() {
    var hash = location.hash;
    if (hash === "#zh") return "zh";
    if (hash === "#en") return "en";
    // navigator.languages covers the case where Chinese is a secondary
    // preference; "zh" matches zh-TW, zh-Hant, zh-CN and friends alike,
    // since the one translation we have serves all of them better than
    // English does.
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      if (/^zh\\b/i.test(langs[i])) return "zh";
    }
    return "en";
  }

  function apply() {
    var lang = pick();
    root.setAttribute("data-lang", lang);
    // Keep the document's own language honest for screen readers, which
    // announce the page in whatever this claims.
    root.setAttribute("lang", lang === "zh" ? "zh-Hant" : "en");
  }

  apply();
  addEventListener("hashchange", apply);
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
