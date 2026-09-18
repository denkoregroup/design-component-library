export default function PricingToggle() {
  return (
    <section className="mx-auto max-w-md px-6 py-16 text-center">
      <div className="mb-12 inline-flex gap-2 rounded-lg bg-muted p-1">
        <button className="rounded-md bg-background px-6 py-2 text-sm font-semibold">
          Monthly
        </button>
        <button className="rounded-md px-6 py-2 text-sm font-semibold text-muted-foreground">
          Annual
        </button>
      </div>
      <div className="rounded-2xl border bg-card p-12">
        <h3 className="mb-4 text-3xl font-bold text-foreground">Pro Plan</h3>
        <div className="mb-8 text-6xl font-extrabold text-foreground">
          $29
          <span className="text-2xl font-normal text-muted-foreground">/mo</span>
        </div>
        <button className="rounded-lg bg-primary px-10 py-4 font-semibold text-primary-foreground transition hover:opacity-90">
          Start Trial
        </button>
      </div>
    </section>
  );
}
