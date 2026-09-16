export default function FooterMinimal() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-muted-foreground">© 2026 Velocity. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-muted-foreground">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground">
            Terms
          </a>
          <a href="#" className="text-sm text-muted-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
