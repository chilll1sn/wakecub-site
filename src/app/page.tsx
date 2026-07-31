import { Badge } from "@/components/ui/badge";
import { InviteBanner } from "@/components/invite-banner";

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
    body: "Throw punches at the phone. Each one has to extend and pull back like a real punch — waving your arm around gets you nothing but a still-ringing alarm.",
  },
  {
    art: "bear-walk-6fps.webp",
    alt: "The bear jogging in place",
    title: "Jogging in place",
    body: "Run on the spot until the timer fills. Stop moving and the timer stops with you, so standing there catching your breath only makes the morning longer.",
  },
];

const guarantees = [
  {
    title: "Nothing leaves your phone",
    body: "Pose and object detection run entirely on-device. No frame of video is uploaded, stored, or sent anywhere. The camera is a sensor, not a recorder.",
  },
  {
    title: "Killing the app doesn't help",
    body: "Force-quit it, swipe the notification away, turn the volume down — it keeps coming back. Getting rid of Wake cub is meant to be harder than getting up.",
  },
  {
    title: "Set off a friend's alarm",
    body: "Catch a friend still asleep and you can ring their phone yourself — and choose the task they have to finish to stop it. Pick squats, and they are doing squats.",
  },
];

const displayText =
  "text-[clamp(1.9rem,1.2rem+2.4vw,2.75rem)] font-extrabold tracking-[-0.03em]";
const ledeText =
  "text-[clamp(1.125rem,0.95rem+0.7vw,1.375rem)] leading-[1.55] text-muted-foreground";
// Body copy holds a readable size at every width; the task blocks were losing
// to their own headings at desktop when this was left at the default.
const bodyText = "text-[1.0625rem] leading-[1.6] text-muted-foreground";

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
        <div>
          <h1 className="text-balance text-[clamp(2.5rem,1.4rem+4.4vw,4.25rem)] font-black leading-[1] tracking-[-0.035em]">
            Every other alarm can be turned off{" "}
            <span className="text-primary">in your sleep.</span>
          </h1>
          <p className={`mt-5 max-w-[36ch] text-pretty ${ledeText}`}>
            Wake cub keeps ringing until the camera has watched you actually do
            something.
          </p>
          <Badge
            variant="outline"
            className="mt-9 gap-2 rounded-full px-4 py-2 text-[0.9375rem] font-normal text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Coming to iOS
          </Badge>
        </div>

        <div className="relative mx-auto grid aspect-square w-full max-w-[26rem] place-items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,var(--primary)_0%,transparent_62%)] opacity-25" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/bear-punch-6fps.webp"
            alt="The Wake cub bear throwing punches at the camera"
            width={416}
            height={416}
            className="relative w-[88%] drop-shadow-[0_26px_34px_rgba(0,0,0,0.5)]"
          />
        </div>
      </section>

      {/* The problem — the one place the page speaks at full width */}
      <section className="border-t py-16 md:py-24">
        <h2 className={`max-w-[22ch] text-balance leading-[1.08] ${displayText}`}>
          Shake. Tap. Scan a barcode. All of it works lying down.
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-10">
          <p className={`text-pretty ${ledeText}`}>
            That&apos;s the problem with every &ldquo;hard to dismiss&rdquo;
            alarm: the mission is something your thumb can finish while the rest
            of you stays asleep. You solve it, you go back to bed, and you
            oversleep anyway.
          </p>
          <p className={`text-pretty ${ledeText}`}>
            Wake cub asks for your{" "}
            <strong className="font-semibold text-foreground">whole body</strong>
            , and it uses the camera to check. There is no way to fake a squat
            from under the duvet.
          </p>
        </div>
      </section>

      {/* Tasks — alternating sides so the page has a gait rather than a grid */}
      <section className="pb-16 md:pb-24">
        {tasks.map((task, i) => (
          <article
            key={task.title}
            className="grid items-center gap-4 border-t py-8 sm:gap-10 md:grid-cols-2 md:py-10"
          >
            <div
              className={`relative mx-auto grid aspect-square w-full max-w-[20rem] place-items-center ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,var(--primary)_0%,transparent_68%)] opacity-20" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/assets/${task.art}`}
                alt={task.alt}
                width={320}
                height={320}
                loading="lazy"
                className="relative w-[88%] drop-shadow-[0_16px_22px_rgba(0,0,0,0.45)]"
              />
            </div>
            <div>
              <h3 className={`text-balance leading-[1.05] ${displayText}`}>
                {task.title}
              </h3>
              <p className={`mt-3 max-w-[42ch] text-pretty ${bodyText}`}>
                {task.body}
              </p>
            </div>
          </article>
        ))}

        <p className={`max-w-[62ch] text-pretty border-t pt-8 ${bodyText}`}>
          There is also{" "}
          <strong className="font-semibold text-foreground">
            brushing your teeth
          </strong>
          , where the camera has to see a real toothbrush in your hand, and{" "}
          <strong className="font-semibold text-foreground">
            a photo of somewhere in your home
          </strong>{" "}
          that you set the night before, which forces you to physically leave the
          bedroom. Prefer something quieter?{" "}
          <strong className="font-semibold text-foreground">Maths</strong> and{" "}
          <strong className="font-semibold text-foreground">
            vocabulary questions
          </strong>{" "}
          need no camera at all.
        </p>
      </section>

      <section className="grid gap-8 border-t py-16 sm:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] sm:gap-10 md:py-20">
        {guarantees.map((g) => (
          <div key={g.title}>
            <h3 className="mb-2 text-lg font-bold tracking-[-0.015em]">
              {g.title}
            </h3>
            <p className={`text-pretty ${bodyText}`}>{g.body}</p>
          </div>
        ))}
      </section>

      {/* The one deliberately generous fold on the page */}
      <section className="border-t py-24 text-center md:py-32">
        <p
          className={`mx-auto max-w-[18ch] text-balance leading-[1.1] ${displayText}`}
        >
          You can&apos;t argue with a bear that won&apos;t stop shouting.
        </p>
        <p className={`mx-auto mt-5 max-w-[44ch] text-pretty ${bodyText}`}>
          Wake cub is in development for iOS. Free to download, with the
          camera-verified tasks available on subscription.
        </p>
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
