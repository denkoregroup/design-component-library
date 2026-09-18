const logos = ["BRAND", "CORP", "LABS", "TECH", "SYSTEMS", "DIGITAL", "WORKS", "STUDIO"];

export default function LogosMarquee() {
  return (
    <section className="overflow-hidden bg-muted py-12">
      <div className="flex w-max animate-[marquee_20s_linear_infinite] gap-16">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="shrink-0 whitespace-nowrap text-xl font-extrabold text-muted-foreground/60">
            {logo}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
