interface Member {
  name: string;
  role: string;
  email: string;
}

const team: Member[] = [
  { name: "Alex Chen", role: "CEO & Founder", email: "alex@company.com" },
  { name: "Sarah Kim", role: "Head of Design", email: "sarah@company.com" },
  { name: "Marcus Johnson", role: "Lead Engineer", email: "marcus@company.com" },
];

export default function TeamCompact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      {team.map((member, i) => (
        <div
          key={i}
          className={`flex items-center gap-6 py-6 ${i < team.length - 1 ? "border-b" : ""}`}
        >
          <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-primary/60 to-primary" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
          <a href={`mailto:${member.email}`} className="text-sm font-medium text-primary">
            Contact
          </a>
        </div>
      ))}
    </section>
  );
}
