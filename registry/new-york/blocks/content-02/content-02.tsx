interface Article {
  title: string;
  date: string;
  description: string;
}

interface ContentCardsProps {
  articles?: Article[];
}

const defaultArticles: Article[] = [
  {
    title: "Getting Started Guide",
    date: "Mar 15, 2026",
    description: "Learn the basics of using Velocity Blocks in your projects",
  },
  {
    title: "Design System Tips",
    date: "Mar 10, 2026",
    description: "Best practices for building consistent interfaces",
  },
  {
    title: "Performance Optimization",
    date: "Mar 5, 2026",
    description: "How to keep your pages loading fast",
  },
];

export default function ContentCards({ articles = defaultArticles }: ContentCardsProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <article key={i} className="overflow-hidden rounded-lg border bg-card">
            <div className="h-48 bg-gradient-to-br from-primary/60 to-primary" />
            <div className="p-6">
              <div className="mb-2 text-xs text-muted-foreground">{article.date}</div>
              <h3 className="mb-2 text-xl font-bold text-foreground">{article.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{article.description}</p>
              <a href="#" className="text-sm font-semibold text-primary">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
