interface HeroCenteredProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
}

export default function HeroCentered({
  headline = "Build products people love",
  subheadline = "Everything you need to create stunning marketing pages that convert.",
  ctaText = "Start Free Trial",
}: HeroCenteredProps) {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-muted to-accent px-8 py-24 text-center">
      <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground">
        {headline}
      </h1>
      {subheadline ? (
        <p className="mx-auto mb-10 max-w-xl text-xl leading-relaxed text-muted-foreground">
          {subheadline}
        </p>
      ) : null}
      <button className="rounded-lg bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition hover:opacity-90">
        {ctaText}
      </button>
    </section>
  );
}
