import { Badge } from "@/components/ui/badge";
import { InviteBanner } from "@/components/invite-banner";
import { LangSwitch } from "@/components/lang-switch";
import { Reveal } from "@/components/reveal";
import { copy, taskArt, LANGS, type Copy } from "@/content/copy";
import { APP_STORE_URL } from "@/lib/app-store";

/* Animated WebP with transparency — plain <img> rather than next/image,
   because static export can't run the optimizer and optimization would flatten
   the animation to a single frame. */

const displayText =
  "text-[clamp(1.9rem,1.2rem+2.4vw,2.75rem)] font-extrabold tracking-[-0.03em]";
const ledeText =
  "text-[clamp(1.125rem,0.95rem+0.7vw,1.375rem)] leading-[1.55] text-muted-foreground";
// Body copy holds a readable size at every width; the task blocks were losing
// to their own headings at desktop when this was left at the default.
const bodyText = "text-[1.0625rem] leading-[1.6] text-muted-foreground";
// One radius system for the page: 20px on every panel, full pill on anything
// interactive or badge-like.
const panel = "rounded-[20px] border bg-card/60 p-6 sm:p-8";
const ctaButton =
  "mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-[1rem] font-semibold text-primary-foreground transition-transform duration-200 hover:brightness-105 active:scale-[0.98] motion-reduce:transition-none";

function TaskArt({
  art,
  alt,
  className = "",
  priority = false,
}: {
  art: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative grid place-items-center ${className}`}>
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_66%)] opacity-20" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/assets/${art}`}
        alt={alt}
        width={360}
        height={360}
        loading={priority ? "eager" : "lazy"}
        className="relative w-[86%] max-w-[22rem] drop-shadow-[0_18px_26px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}

/**
 * The whole page body for one language. Rendered once per translation, with CSS
 * showing exactly one (see the .lang-* rules in globals.css). One layout, three
 * sets of strings, so the languages cannot drift apart.
 */
function Page({ t }: { t: Copy }) {
  const arts = [taskArt.squat, taskArt.punch, taskArt.walk];

  return (
    <div lang={t.htmlLang}>
      {/* Hero — the bear sits in a pool of warm light, like a toy on a nightstand */}
      <section className="grid items-center gap-6 pb-20 pt-2 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-28">
        <Reveal>
          <Badge
            variant="outline"
            className="mb-6 rounded-full px-4 py-1.5 text-[0.875rem] font-normal text-muted-foreground"
          >
            {t.hero.badge}
          </Badge>
          <h1 className="text-balance text-[clamp(2.5rem,1.4rem+4.4vw,4.25rem)] font-black leading-[1] tracking-[-0.035em]">
            {t.hero.headlineLead}{" "}
            <span className="text-primary">{t.hero.headlineAccent}</span>
          </h1>
          <p className={`mt-5 max-w-[36ch] text-pretty ${ledeText}`}>
            {t.hero.lede}
          </p>
          <a href={APP_STORE_URL} className={ctaButton}>
            {t.hero.cta}
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <TaskArt
            art={taskArt.punch}
            alt={t.hero.heroAlt}
            className="mx-auto aspect-square w-full max-w-[26rem]"
            priority
          />
        </Reveal>
      </section>

      {/* The problem — the one place the page speaks at full width */}
      <section className="border-t py-16 md:py-24">
        <Reveal>
          <h2
            className={`max-w-[22ch] text-balance leading-[1.08] ${displayText}`}
          >
            {t.problem.heading}
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-10">
            <p className={`text-pretty ${ledeText}`}>{t.problem.left}</p>
            <p className={`text-pretty ${ledeText}`}>
              {t.problem.rightBefore}
              <strong className="font-semibold text-foreground">
                {t.problem.rightStrong}
              </strong>
              {t.problem.rightAfter}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Tasks — a 1 + 2 trio rather than three identical image/text rows */}
      <section className="border-t py-16 md:py-24">
        <div className="grid gap-5">
          <Reveal>
            <article
              className={`grid items-center gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:gap-10 ${panel}`}
            >
              <TaskArt
                art={arts[0]}
                alt={t.tasks[0].alt}
                className="aspect-square w-full"
              />
              <div>
                <h3 className={`text-balance leading-[1.05] ${displayText}`}>
                  {t.tasks[0].title}
                </h3>
                <p className={`mt-3 max-w-[42ch] text-pretty ${bodyText}`}>
                  {t.tasks[0].body}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {t.tasks.slice(1).map((task, i) => (
              <Reveal key={task.title} delay={i * 0.1}>
                <article className={`h-full ${panel}`}>
                  <TaskArt
                    art={arts[i + 1]}
                    alt={task.alt}
                    className="mx-auto aspect-[4/3] w-full max-w-[18rem]"
                  />
                  <h3
                    className={`mt-4 text-balance leading-[1.05] ${displayText}`}
                  >
                    {task.title}
                  </h3>
                  <p className={`mt-3 text-pretty ${bodyText}`}>{task.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-14">
            <h3 className="text-lg font-bold tracking-[-0.015em]">
              {t.otherTasksHeading}
            </h3>
            <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.otherTasks.map((task) => (
                <div key={task.title} className="border-t pt-4">
                  <p className="font-semibold text-foreground">{task.title}</p>
                  <p className={`mt-1 text-pretty ${bodyText}`}>{task.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Friends leads here — it is the feature people tell each other about */}
      <section className="border-t py-16 md:py-24">
        <div className="grid gap-5">
          <Reveal>
            <div
              className={`${panel} bg-[radial-gradient(120%_140%_at_12%_0%,color-mix(in_oklch,var(--primary)_16%,transparent)_0%,transparent_58%)]`}
            >
              <h3 className={`max-w-[16ch] text-balance ${displayText}`}>
                {t.friends.title}
              </h3>
              <p className={`mt-3 max-w-[52ch] text-pretty ${ledeText}`}>
                {t.friends.body}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {t.guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1}>
                <div className={`h-full ${panel}`}>
                  <h3 className="text-lg font-bold tracking-[-0.015em]">
                    {g.title}
                  </h3>
                  <p className={`mt-2 text-pretty ${bodyText}`}>{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The one deliberately generous fold on the page */}
      <section className="border-t py-24 text-center md:py-32">
        <Reveal>
          <p
            className={`mx-auto max-w-[18ch] text-balance leading-[1.1] ${displayText}`}
          >
            {t.closing.line}
          </p>
          <p className={`mx-auto mt-5 max-w-[44ch] text-pretty ${bodyText}`}>
            {t.closing.body}
          </p>
          <a href={APP_STORE_URL} className={ctaButton}>
            {t.closing.cta}
          </a>
        </Reveal>
      </section>

      <footer className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t py-8 text-sm text-muted-foreground">
        <span>{t.footer.rights}</span>
        <a
          className="underline-offset-4 hover:text-foreground hover:underline"
          href="/privacy.html"
        >
          {t.footer.privacy}
        </a>
        <a
          className="underline-offset-4 hover:text-foreground hover:underline"
          href="/terms.html"
        >
          {t.footer.terms}
        </a>
        <a
          className="underline-offset-4 hover:text-foreground hover:underline sm:ml-auto"
          href="mailto:ravenholo7@gmail.com"
        >
          ravenholo7@gmail.com
        </a>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 sm:px-8">
      <header className="flex items-center gap-3 py-6 text-lg font-extrabold tracking-tight">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/icon.png"
          alt=""
          width={36}
          height={36}
          className="rounded-[10px]"
        />
        Wake cub
        <LangSwitch className="ml-auto" />
      </header>

      <InviteBanner />

      {LANGS.map((lang) => (
        <div key={lang} className={`lang-${lang}`}>
          <Page t={copy[lang]} />
        </div>
      ))}
    </main>
  );
}
