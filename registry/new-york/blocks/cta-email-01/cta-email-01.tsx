interface CTAEmailProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
}

export default function CTAEmail({
  headline = "Ready to get started?",
  subheadline = "Join thousands of teams building with Velocity",
  buttonText = "Get Access",
}: CTAEmailProps) {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center">
      <h2 className="mb-4 text-4xl font-extrabold text-primary-foreground">{headline}</h2>
      {subheadline ? (
        <p className="mb-8 text-lg text-primary-foreground/90">{subheadline}</p>
      ) : null}
      <div className="mx-auto flex max-w-md gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 rounded-lg border-0 px-4 py-3 text-foreground"
        />
        <button className="rounded-lg bg-background px-6 py-3 font-semibold text-primary transition hover:opacity-90">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
