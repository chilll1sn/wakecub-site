import { InviteBanner } from "@/components/invite-banner";

/**
 * Static export writes this to 404.html, which GitHub Pages serves for any
 * unmatched path — including /i/AB12CD34 friend-invite links. Those must keep
 * showing the code, so InviteBanner renders here as well as on the index.
 * Anyone who lands here by mistake gets the ordinary not-found copy instead.
 */
export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24 sm:px-8">
      <a
        href="/"
        className="mb-10 flex items-center gap-3 text-lg font-extrabold tracking-tight"
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
      </a>

      <InviteBanner />

      <h1 className="text-balance text-4xl font-black tracking-[-0.03em]">
        This page went back to sleep.
      </h1>
      <p className="mt-4 text-pretty text-muted-foreground">
        We couldn&apos;t find what you were looking for.{" "}
        <a className="text-primary underline-offset-4 hover:underline" href="/">
          Head back to the front page
        </a>
        .
      </p>
    </main>
  );
}
