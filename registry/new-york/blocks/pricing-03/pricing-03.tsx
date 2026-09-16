const rows = [
  "20 Blocks",
  "All Blocks",
  "Priority Support",
  "Commercial License",
  "Team Collaboration",
];

export default function PricingComparison() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">Starter</th>
            <th className="p-4 text-center">Pro</th>
            <th className="p-4 text-center">Team</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((feature, i) => (
            <tr key={i} className="border-b">
              <td className="p-4">{feature}</td>
              <td className="p-4 text-center">{i < 1 ? "✓" : "—"}</td>
              <td className="p-4 text-center">{i < 4 ? "✓" : "—"}</td>
              <td className="p-4 text-center">✓</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
