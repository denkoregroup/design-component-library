export default function NavCentered() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between border-b px-6 py-6">
      <div className="flex flex-1 gap-8">
        <a href="#" className="font-medium text-foreground">
          Product
        </a>
        <a href="#" className="font-medium text-foreground">
          Features
        </a>
      </div>
      <div className="text-2xl font-extrabold text-foreground">LOGO</div>
      <div className="flex flex-1 justify-end gap-8">
        <a href="#" className="font-medium text-foreground">
          Pricing
        </a>
        <a href="#" className="font-medium text-foreground">
          Docs
        </a>
      </div>
    </nav>
  );
}
