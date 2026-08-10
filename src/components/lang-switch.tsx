import { copy } from "@/content/copy";

/**
 * Plain anchors, no JavaScript of its own: the head script in layout.tsx
 * listens for hashchange and re-applies data-lang. Same mechanism as the .lang
 * nav in public/terms.html.
 *
 * This exists because the language is otherwise guessed from the browser. A
 * Chinese-locale reader who would rather read English needs a way out, and it
 * has to be visible without scrolling — hence the header rather than the
 * footer.
 */
export function LangSwitch({ className = "" }: { className?: string }) {
  const pill =
    "rounded-full border px-3 py-1 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground";

  return (
    <nav className={`flex items-center gap-1.5 ${className}`} aria-label="Language">
      {/* The active pill is CSS-driven so it stays correct on the very first
          paint, before any script has told React which language won. */}
      <a href="#en" className={`${pill} lang-pill-en`} lang="en">
        {copy.en.nav.en}
      </a>
      <a href="#zh" className={`${pill} lang-pill-zh`} lang="zh-Hant">
        {copy.zh.nav.zh}
      </a>
    </nav>
  );
}
