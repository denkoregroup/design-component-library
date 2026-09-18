export default function CTASplit() {
  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border md:grid-cols-2">
      <div className="bg-card p-10">
        <h3 className="mb-3 text-2xl font-bold text-foreground">For Individuals</h3>
        <p className="mb-8 text-muted-foreground">Start building today with our free plan</p>
        <button className="w-full rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary/5">
          Start Free
        </button>
      </div>
      <div className="bg-primary p-10 text-primary-foreground">
        <h3 className="mb-3 text-2xl font-bold">For Teams</h3>
        <p className="mb-8 opacity-90">Unlock advanced features and collaboration</p>
        <button className="w-full rounded-lg bg-background px-6 py-3 font-semibold text-primary transition hover:opacity-90">
          Contact Sales
        </button>
      </div>
    </section>
  );
}
