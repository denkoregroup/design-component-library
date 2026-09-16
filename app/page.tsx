import registry from "@/registry.json";
import { CopyInstallCommand } from "@/components/copy-install-command";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Denkore Design Component Library</h1>
      <p className="mb-10 text-muted-foreground">
        Internal shadcn-style component registry. Click a command below to copy it.
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Registry Blocks</h2>
        <ul className="flex flex-col gap-3">
          {registry.items.map((item) => (
            <li key={item.name} className="rounded-lg border p-4">
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.description}</div>
              <CopyInstallCommand name={item.name} />
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
