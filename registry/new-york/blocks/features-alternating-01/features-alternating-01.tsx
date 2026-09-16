interface FeaturesAlternatingProps {
  firstTitle?: string;
  firstBody?: string;
  secondTitle?: string;
  secondBody?: string;
}

export default function FeaturesAlternating({
  firstTitle = "Built for speed",
  firstBody = "Every component is optimized for performance with minimal CSS and zero dependencies.",
  secondTitle = "Designed to convert",
  secondBody = "Each block is crafted with conversion in mind, using proven UI patterns.",
}: FeaturesAlternatingProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-16 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-4xl font-bold text-foreground">{firstTitle}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{firstBody}</p>
        </div>
        <div className="h-72 rounded-lg bg-gradient-to-br from-primary/60 to-primary" />
      </div>
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="h-72 rounded-lg bg-gradient-to-br from-primary to-primary/80 md:order-1" />
        <div className="md:order-2">
          <h2 className="mb-4 text-4xl font-bold text-foreground">{secondTitle}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{secondBody}</p>
        </div>
      </div>
    </section>
  );
}
