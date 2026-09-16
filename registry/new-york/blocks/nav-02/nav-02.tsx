export default function NavSidebar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-6">
      <div className="text-2xl font-extrabold text-foreground">Velocity</div>
      <div className="flex items-center gap-8">
        <a href="#" className="font-medium text-foreground">
          Features
        </a>
        <a href="#" className="font-medium text-foreground">
          Pricing
        </a>
        <a href="#" className="font-medium text-foreground">
          Docs
        </a>
        <button className="rounded-md bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
          Sign In
        </button>
      </div>
    </nav>
  );
}
