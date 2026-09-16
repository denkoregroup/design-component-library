export default function CodeTerminal() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <div className="rounded-t-lg border-b border-zinc-700 bg-zinc-950 p-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="rounded-b-lg bg-zinc-950 p-8 font-mono text-sm text-zinc-200">
        <div className="mb-2">
          <span className="text-green-400">$</span> velocity init my-project
        </div>
        <div className="text-zinc-500">✓ Created project in ./my-project</div>
      </div>
    </section>
  );
}
