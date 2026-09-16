interface Member {
  name: string;
  role: string;
}

interface TeamGridProps {
  team?: Member[];
}

const defaultTeam: Member[] = [
  { name: "Alex Chen", role: "CEO & Founder" },
  { name: "Sarah Kim", role: "Head of Design" },
  { name: "Marcus Johnson", role: "Lead Engineer" },
  { name: "Emily Rodriguez", role: "Product Manager" },
];

export default function TeamGrid({ team = defaultTeam }: TeamGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {team.map((member, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto mb-4 h-36 w-36 rounded-full bg-gradient-to-br from-primary/60 to-primary" />
            <h3 className="mb-1 text-lg font-bold text-foreground">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
