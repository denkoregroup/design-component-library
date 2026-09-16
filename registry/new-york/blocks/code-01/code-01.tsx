export default function CodeSnippet() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <div className="overflow-auto rounded-lg bg-zinc-900 p-8 font-mono text-sm text-zinc-200">
        <div className="mb-4 text-zinc-500">{"// Install Velocity Blocks"}</div>
        <div className="text-teal-300">
          npm install <span className="text-amber-300">velocity-blocks</span>
        </div>
      </div>
    </section>
  );
}
