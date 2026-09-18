export default function FeaturesBento() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 text-primary-foreground md:row-span-2">
          <h3 className="mb-4 text-4xl font-extrabold">Production Ready</h3>
          <p className="text-xl opacity-95">All blocks are tested and ready to ship</p>
        </div>
        <div className="rounded-2xl border bg-card p-8">
          <div className="mb-4 text-3xl">✓</div>
          <h4 className="mb-2 font-bold text-foreground">Accessible</h4>
          <p className="text-sm text-muted-foreground">WCAG compliant</p>
        </div>
        <div className="rounded-2xl border bg-card p-8">
          <div className="mb-4 text-3xl">🚀</div>
          <h4 className="mb-2 font-bold text-foreground">Fast</h4>
          <p className="text-sm text-muted-foreground">Optimized CSS</p>
        </div>
      </div>
    </section>
  );
}
