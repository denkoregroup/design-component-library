interface HeroAsymmetricProps {
  headlineLine1: string;
  headlineLine2: string;
  subheadline?: string;
  ctaText: string;
}

export default function HeroAsymmetric({
  headlineLine1 = "Distinctive",
  headlineLine2 = "by design",
  subheadline = "Break free from generic templates with marketing blocks that make your brand unforgettable.",
  ctaText = "Explore Blocks",
}: HeroAsymmetricProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="mb-8 text-7xl font-extralight leading-none tracking-tight text-foreground">
          {headlineLine1}
          <br />
          <strong className="font-black">{headlineLine2}</strong>
        </h1>
        <p className="mb-8 text-2xl leading-normal text-muted-foreground">{subheadline}</p>
        <button className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-90">
          {ctaText} →
        </button>
      </div>
    </section>
  );
}
