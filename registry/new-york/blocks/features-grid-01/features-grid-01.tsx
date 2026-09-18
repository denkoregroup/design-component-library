interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  { icon: "⚡", title: "Lightning Fast", description: "Optimized for performance" },
  { icon: "🎨", title: "Fully Customizable", description: "Theme with CSS variables" },
  { icon: "📱", title: "Mobile First", description: "Responsive by default" },
];

export default function FeaturesGrid({ features = defaultFeatures }: FeaturesGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-lg border bg-card p-8">
            <div className="mb-4 text-5xl">{f.icon}</div>
            <h3 className="mb-2 text-2xl font-bold text-foreground">{f.title}</h3>
            <p className="text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
