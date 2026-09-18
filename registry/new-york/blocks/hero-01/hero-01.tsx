interface HeroSplitProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export default function HeroSplit({
  eyebrow = "New Product",
  headline = "Ship faster with Velocity",
  subheadline = "Production-ready marketing blocks that help you build distinctive landing pages in minutes, not days.",
  primaryCtaText = "Get Started",
  secondaryCtaText = "View Demo",
}: HeroSplitProps) {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground">
          {headline}
        </h1>
        {subheadline ? (
          <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
            {subheadline}
          </p>
        ) : null}
        <div className="flex gap-4">
          <button className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-90">
            {primaryCtaText} →
          </button>
          {secondaryCtaText ? (
            <button className="rounded-lg border-2 border-border px-8 py-4 text-base font-semibold text-foreground transition hover:bg-accent">
              {secondaryCtaText}
            </button>
          ) : null}
        </div>
      </div>
      <div className="h-[400px] rounded-2xl bg-gradient-to-br from-primary/70 to-primary" />
    </section>
  );
}
