export default function NavMega() {
  return (
    <nav className="mx-auto max-w-6xl border-b px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold text-foreground">Brand</div>
        <div className="flex gap-8">
          <button className="px-4 py-2 text-sm font-medium text-foreground">
            Products ▾
          </button>
          <a href="#" className="px-4 py-2 text-sm font-medium text-foreground">
            Company
          </a>
          <a href="#" className="px-4 py-2 text-sm font-medium text-foreground">
            Resources
          </a>
        </div>
      </div>
    </nav>
  );
}
