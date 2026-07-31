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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
