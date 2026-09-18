interface CTAMinimalProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
}

export default function CTAMinimal({
  headline = "Start your free trial",
  subheadline = "No credit card required · 14-day trial",
  buttonText = "Try it Free",
}: CTAMinimalProps) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-muted px-8 py-16 text-center">
      <h2 className="mb-3 text-3xl font-bold text-foreground">{headline}</h2>
      {subheadline ? <p className="mb-8 text-muted-foreground">{subheadline}</p> : null}
      <button className="rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition hover:opacity-90">
        {buttonText}
      </button>
    </section>
  );
}
