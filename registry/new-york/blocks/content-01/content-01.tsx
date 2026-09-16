interface ContentSplitProps {
  headline: string;
  body: string;
  ctaText: string;
}

export default function ContentSplit({
  headline = "Built for modern teams",
  body = "Every component is crafted with attention to detail and optimized for performance. Start building faster today.",
  ctaText = "Learn More",
}: ContentSplitProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="h-96 rounded-lg bg-gradient-to-br from-primary/60 to-primary" />
        <div>
          <h2 className="mb-4 text-4xl font-bold text-foreground">{headline}</h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{body}</p>
          <button className="rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:opacity-90">
            {ctaText} →
          </button>
        </div>
      </div>
    </section>
  );
}
