const logos = ["ACME", "APEX", "ZENITH", "NOVA", "PULSE", "VERTEX"];

export default function LogosGrid() {
  return (
    <section className="bg-muted px-6 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by leading companies
        </p>
        <div className="grid grid-cols-2 items-center gap-12 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, i) => (
            <div key={i} className="text-xl font-extrabold text-muted-foreground/60">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
