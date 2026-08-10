import Link from "next/link";

import { InviteBanner } from "@/components/invite-banner";
import { LangSwitch } from "@/components/lang-switch";
import { copy } from "@/content/copy";

/**
 * Static export writes this to 404.html, which GitHub Pages serves for any
 * unmatched path — including /i/AB12CD34 friend-invite links. Those must keep
 * showing the code, so InviteBanner renders here as well as on the index.
 * Anyone who lands here by mistake gets the ordinary not-found copy instead.
 */
export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24 sm:px-8">
      <div className="mb-10 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-extrabold tracking-tight"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[10px]"
          />
          Wake cub
        </Link>
        <LangSwitch className="ml-auto" />
      </div>

      <InviteBanner />

      {(["en", "zh"] as const).map((lang) => {
        const t = copy[lang];
        return (
          <div key={lang} className={`lang-${lang}`} lang={t.htmlLang}>
            <h1 className="text-balance text-4xl font-black tracking-[-0.03em]">
              {t.notFound.heading}
            </h1>
            <p className="mt-4 text-pretty text-muted-foreground">
              {t.notFound.bodyBefore}
              <Link
                className="text-primary underline-offset-4 hover:underline"
                href="/"
              >
                {t.notFound.link}
              </Link>
              {t.notFound.bodyAfter}
            </p>
          </div>
        );
      })}
    </main>
  );
}
