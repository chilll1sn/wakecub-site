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
    // Every language lives at the same URL: output:"export" emits a single
    // index.html, so there is no separate document to point a locale at.
    languages: {
      en: "https://wakecub.app",
      "zh-Hant": "https://wakecub.app",
      "zh-Hans": "https://wakecub.app",
      ja: "https://wakecub.app",
      ko: "https://wakecub.app",
    },
  },
};

/* Runs in <head>, before first paint, so a Japanese, Korean or Chinese reader
   never sees the English flash first. Ported from public/terms.html so the whole
   site decides language the same way. Order of precedence: an explicit
   #ja / #ko / #zh / #zhHans / #en in the URL always wins (it is how someone
   overrides the guess, and how the toggle works), otherwise fall back to what
   the browser asks for.

   The browser guess walks navigator.languages IN ORDER and takes the first
   entry that matches any translation, rather than testing one language against
   the whole list at a time. That ordering is the user's own preference ranking,
   so someone who lists Japanese above Chinese gets Japanese — testing per
   language instead would let whichever we happened to check first win. */
const langScript = `(function () {
  var root = document.documentElement;
  // The hash values and data-lang values the site answers to.
  var known = ["zh", "zhHans", "ja", "ko"];
  // What each one claims as the document language, for screen readers.
  var htmlLang = { zh: "zh-Hant", zhHans: "zh-Hans", ja: "ja", ko: "ko", en: "en" };

  // Matched by string comparison rather than a RegExp: this script lives inside
  // a JS template literal, and a "\\b" written there needs a level of escaping
  // that is easy to get wrong and silently produces a pattern matching nothing
  // (which reads as "everyone gets English"). Comparing the subtag directly has
  // no escaping to get wrong. A tag matches when it IS the code or when the
  // code is followed by "-", so "ja" and "ja-JP" match while "javanese" does not.
  function matches(tag, code) {
    tag = tag.toLowerCase();
    return tag === code || tag.indexOf(code + "-") === 0;
  }

  // Chinese is the one language where the base subtag is not enough: zh-Hans-CN
  // and zh-Hant-TW both start "zh" but are different pages. Browsers spell it
  // either way — an explicit script ("zh-Hans") or a region that implies one
  // ("zh-CN", "zh-SG") — so both are checked. A bare "zh" carries neither and
  // keeps Traditional, which is what the site shipped before Simplified existed.
  // The region test is anchored on a separator so it cannot fire on a longer
  // subtag that merely ends in those letters.
  function chinese(tag) {
    tag = tag.toLowerCase();
    if (tag.indexOf("hans") >= 0) return "zhHans";
    if (tag.indexOf("hant") >= 0) return "zh";
    if (tag === "zh-cn" || tag === "zh-sg" || tag.indexOf("zh-cn-") === 0 || tag.indexOf("zh-sg-") === 0) return "zhHans";
    return "zh";
  }

  function pick() {
    var hash = location.hash;
    for (var k = 0; k < known.length; k++) {
      if (hash === "#" + known[k]) return known[k];
    }
    if (hash === "#en") return "en";

    // Walked in the user's own preference order, so the first entry that names
    // a language we ship wins.
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var tag = langs[i] || "";
      // "zh" has to be resolved to a script before the generic loop, which
      // would otherwise return whichever Chinese sits first in the known list.
      if (matches(tag, "zh")) return chinese(tag);
      for (var j = 0; j < known.length; j++) {
        if (matches(tag, known[j])) return known[j];
      }
    }
    return "en";
  }

  function apply() {
    var lang = pick();
    root.setAttribute("data-lang", lang);
    // Keep the document's own language honest for screen readers, which
    // announce the page in whatever this claims.
    root.setAttribute("lang", htmlLang[lang] || "en");
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
