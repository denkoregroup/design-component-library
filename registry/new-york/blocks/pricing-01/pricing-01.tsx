interface Plan {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

interface PricingCardsProps {
  plans?: Plan[];
}

const defaultPlans: Plan[] = [
  { name: "Starter", price: "$0", features: ["20 blocks", "Basic support", "Personal use"] },
  {
    name: "Pro",
    price: "$29",
    features: ["All blocks", "Priority support", "Commercial license"],
    featured: true,
  },
  {
    name: "Team",
    price: "$99",
    features: ["Everything in Pro", "Team collaboration", "Custom components"],
  },
];

export default function PricingCards({ plans = defaultPlans }: PricingCardsProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={
              plan.featured
                ? "scale-105 rounded-lg bg-primary p-8 text-primary-foreground shadow-lg"
                : "rounded-lg border bg-card p-8"
            }
          >
            <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
            <div className="mb-6 text-5xl font-extrabold">{plan.price}</div>
            <ul className="mb-8 flex flex-col gap-2">
              {plan.features.map((f, j) => (
                <li
                  key={j}
                  className={
                    plan.featured
                      ? "border-b border-primary-foreground/20 py-2"
                      : "border-b py-2"
                  }
                >
                  → {f}
                </li>
              ))}
            </ul>
            <button
              className={
                plan.featured
                  ? "w-full rounded-lg bg-background px-4 py-3 font-semibold text-primary transition hover:opacity-90"
                  : "w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
              }
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
