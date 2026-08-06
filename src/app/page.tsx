import { Badge } from "@/components/ui/badge";
import { InviteBanner } from "@/components/invite-banner";
import { Reveal } from "@/components/reveal";
import { APP_STORE_URL } from "@/lib/app-store";

/* The three camera-verified tasks, each with the mascot actually doing it.
   Animated WebP with transparency — plain <img> rather than next/image, because
   static export can't run the optimizer and optimization would flatten the
   animation to a single frame. */
const tasks = [
  {
    art: "bear-squat-6fps.webp",
    alt: "The bear dropping into a squat and standing back up",
    title: "Squats",
    body: "The camera tracks your hips and knees through every rep. Go down far enough or it doesn't count. Pick shallow, normal or deep, depending on how much you hate mornings.",
  },
  {
    art: "bear-punch-6fps.webp",
    alt: "The bear throwing alternating punches toward the camera",
    title: "Punches",
    body: "Throw punches at the phone. Each one has to extend and pull back like a real punch. Waving your arm around gets you nothing but a still-ringing alarm.",
  },
  {
    art: "bear-walk-6fps.webp",
    alt: "The bear jogging in place",
    title: "Jogging in place",
    body: "Run on the spot until the timer fills. Stop moving and the timer stops with you, so standing there catching your breath only makes the morning longer.",
  },
];

/* The remaining tasks don't get their own art, so they read as a set of
   capabilities rather than a run-on paragraph of bolded phrases. */
const otherTasks = [
  {
    title: "Brushing your teeth",
    body: "The camera has to see a real toothbrush in your hand.",
  },
  {
    title: "A photo from home",
    body: "Match a spot you chose the night before, so you have to leave the bedroom.",
  },
  { title: "Maths", body: "No camera. For quieter mornings." },
  { title: "Vocabulary", body: "No camera. Answer to stop the ringing." },
];

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
      </header>

      <InviteBanner />

      {/* Hero — the bear sits in a pool of warm light, like a toy on a nightstand */}
      <section className="grid items-center gap-6 pb-20 pt-2 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-28">
        <Reveal>
          <Badge
            variant="outline"
            className="mb-6 rounded-full px-4 py-1.5 text-[0.875rem] font-normal text-muted-foreground"
          >
            Out now on iOS
          </Badge>
          <h1 className="text-balance text-[clamp(2.5rem,1.4rem+4.4vw,4.25rem)] font-black leading-[1] tracking-[-0.035em]">
            Every other alarm can be turned off{" "}
            <span className="text-primary">in your sleep.</span>
          </h1>
          <p className={`mt-5 max-w-[36ch] text-pretty ${ledeText}`}>
            Wake cub keeps ringing until the camera has watched you actually do
            something.
          </p>
          <a
            href={APP_STORE_URL}
            className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-7 text-[1rem] font-semibold text-primary-foreground transition-transform duration-200 hover:brightness-105 active:scale-[0.98] motion-reduce:transition-none"
          >
            Download on the App Store
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <TaskArt
            art="bear-punch-6fps.webp"
            alt="The Wake cub bear throwing punches at the camera"
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
            Shake. Tap. Scan a barcode. All of it works lying down.
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-10">
            <p className={`text-pretty ${ledeText}`}>
              That&apos;s the problem with every &ldquo;hard to dismiss&rdquo;
              alarm: the mission is something your thumb can finish while the
              rest of you stays asleep. You solve it, you go back to bed, and you
              oversleep anyway.
            </p>
            <p className={`text-pretty ${ledeText}`}>
              Wake cub asks for your{" "}
              <strong className="font-semibold text-foreground">
                whole body
              </strong>
              , and it uses the camera to check. There is no way to fake a squat
              from under the duvet.
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
                art={tasks[0].art}
                alt={tasks[0].alt}
                className="aspect-square w-full"
              />
              <div>
                <h3 className={`text-balance leading-[1.05] ${displayText}`}>
                  {tasks[0].title}
                </h3>
                <p className={`mt-3 max-w-[42ch] text-pretty ${bodyText}`}>
                  {tasks[0].body}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {tasks.slice(1).map((task, i) => (
              <Reveal key={task.title} delay={i * 0.1}>
                <article className={`h-full ${panel}`}>
                  <TaskArt
                    art={task.art}
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
              Four more ways to get out of bed
            </h3>
            <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {otherTasks.map((t) => (
                <div key={t.title} className="border-t pt-4">
                  <p className="font-semibold text-foreground">{t.title}</p>
                  <p className={`mt-1 text-pretty ${bodyText}`}>{t.body}</p>
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
                Set off a friend&apos;s alarm
              </h3>
              <p className={`mt-3 max-w-[52ch] text-pretty ${ledeText}`}>
                Catch a friend still asleep and you can ring their phone yourself
                and choose the task they have to finish to stop it. Pick
                squats, and they are doing squats.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className={`h-full ${panel}`}>
                <h3 className="text-lg font-bold tracking-[-0.015em]">
                  Nothing leaves your phone
                </h3>
                <p className={`mt-2 text-pretty ${bodyText}`}>
                  Pose and object detection run entirely on-device. No frame of
                  video is uploaded, stored, or sent anywhere. The camera is a
                  sensor, not a recorder.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className={`h-full ${panel}`}>
                <h3 className="text-lg font-bold tracking-[-0.015em]">
                  Killing the app doesn&apos;t help
                </h3>
                <p className={`mt-2 text-pretty ${bodyText}`}>
                  Force-quit it, swipe the notification away, turn the volume
                  down. It keeps coming back. Getting rid of Wake cub is meant
                  to be harder than getting up.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The one deliberately generous fold on the page */}
      <section className="border-t py-24 text-center md:py-32">
        <Reveal>
          <p
            className={`mx-auto max-w-[18ch] text-balance leading-[1.1] ${displayText}`}
          >
            You can&apos;t argue with a bear that won&apos;t stop shouting.
          </p>
          <p className={`mx-auto mt-5 max-w-[44ch] text-pretty ${bodyText}`}>
            Wake cub is on the App Store. Free to download, with the
            camera-verified tasks available on subscription.
          </p>
          {/* The QR is for desktop readers, who can't tap the button with the
              phone they'd install on. It carries its own white plate because
              the site is dark-only and inverted codes scan unreliably. */}
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-7">
            <a
              href={APP_STORE_URL}
              className="inline-flex h-12 items-center rounded-full bg-primary px-7 text-[1rem] font-semibold text-primary-foreground transition-transform duration-200 hover:brightness-105 active:scale-[0.98] motion-reduce:transition-none"
            >
              Download on the App Store
            </a>
            <div className="hidden items-center gap-3 sm:flex">
              <div className="h-10 w-px bg-border" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/app-store-qr.svg"
                alt="QR code linking to Wake cub on the App Store"
                width={104}
                height={104}
                loading="lazy"
                className="size-[6.5rem] rounded-[10px]"
              />
              <p className="text-left text-sm leading-[1.45] text-muted-foreground">
                Or point your
                <br />
                camera here
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t py-8 text-sm text-muted-foreground">
        <span>© 2026 Wake cub</span>
        <a
          className="underline-offset-4 hover:text-foreground hover:underline"
          href="https://chilll1sn.github.io/wakecub-privacy/"
        >
          Privacy
        </a>
        <a
          className="underline-offset-4 hover:text-foreground hover:underline"
          href="/terms.html"
        >
          Terms
        </a>
        <a
          className="underline-offset-4 hover:text-foreground hover:underline sm:ml-auto"
          href="mailto:ravenholo7@gmail.com"
        >
          ravenholo7@gmail.com
        </a>
      </footer>
    </main>
  );
}
