import registry from "@/registry.json";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Denkore Design Component Library</h1>
      <p className="mb-10 text-muted-foreground">
        Internal shadcn-style component registry. Install any block into a client repo with{" "}
        <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-sm">
          pnpm dlx shadcn add {"{url}"}/r/{"{name}"}.json
        </code>
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Registry Blocks</h2>
        <ul className="flex flex-col gap-3">
          {registry.items.map((item) => (
            <li key={item.name} className="rounded-lg border p-4">
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.description}</div>
              <code className="mt-2 block text-xs text-muted-foreground">/r/{item.name}.json</code>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Discovery Tools</h2>
        <ul className="flex flex-col gap-3">
          <li className="rounded-lg border p-4">
            <a href="/tools/velocity-blocks" className="font-medium underline">
              Velocity Blocks
            </a>
            <div className="text-sm text-muted-foreground">Static component showcase with theme switcher</div>
          </li>
          <li className="rounded-lg border p-4">
            <a href="/tools/section-builder" className="font-medium underline">
              Section Builder
            </a>
            <div className="text-sm text-muted-foreground">Guided discovery flow for client section design</div>
          </li>
        </ul>
      </section>
    </main>
  );
}
