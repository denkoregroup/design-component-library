const columns = [
  { title: "Product", links: ["Features", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers"] },
  { title: "Legal", links: ["Privacy", "Terms"] },
];

export default function FooterColumns() {
  return (
    <footer className="bg-foreground px-6 py-16 text-background">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-12 sm:grid-cols-4">
        <div>
          <div className="mb-4 text-2xl font-extrabold">Velocity</div>
          <p className="text-sm text-background/60">Build faster with distinctive UI blocks</p>
        </div>
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="mb-4 text-sm font-bold">{col.title}</h4>
            <div className="flex flex-col gap-3">
              {col.links.map((link, j) => (
                <a key={j} href="#" className="text-sm text-background/60">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
