export default function FooterNewsletter() {
  return (
    <footer className="bg-muted px-6 py-16">
      <div className="mx-auto max-w-md text-center">
        <h3 className="mb-3 text-2xl font-bold text-foreground">Stay Updated</h3>
        <p className="mb-8 text-muted-foreground">
          Get the latest blocks and updates delivered to your inbox
        </p>
        <div className="mb-8 flex gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded-md border bg-background px-4 py-3 text-sm"
          />
          <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            Subscribe
          </button>
        </div>
        <div className="text-xs text-muted-foreground">© 2026 Velocity. All rights reserved.</div>
      </div>
    </footer>
  );
}
