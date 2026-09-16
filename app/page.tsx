import registry from "@/registry.json";
import { CopyInstallCommand } from "@/components/copy-install-command";

import HeroSplit from "@/registry/new-york/blocks/hero-01/hero-01";
import HeroCentered from "@/registry/new-york/blocks/hero-02/hero-02";
import HeroAsymmetric from "@/registry/new-york/blocks/hero-03/hero-03";
import FeaturesGrid from "@/registry/new-york/blocks/features-grid-01/features-grid-01";
import FeaturesAlternating from "@/registry/new-york/blocks/features-alternating-01/features-alternating-01";
import FeaturesBento from "@/registry/new-york/blocks/features-bento-01/features-bento-01";
import CTAEmail from "@/registry/new-york/blocks/cta-email-01/cta-email-01";
import CTASplit from "@/registry/new-york/blocks/cta-split-01/cta-split-01";
import CTAMinimal from "@/registry/new-york/blocks/cta-minimal-01/cta-minimal-01";
import PricingCards from "@/registry/new-york/blocks/pricing-01/pricing-01";
import PricingToggle from "@/registry/new-york/blocks/pricing-02/pricing-02";
import PricingComparison from "@/registry/new-york/blocks/pricing-03/pricing-03";
import NavCentered from "@/registry/new-york/blocks/nav-01/nav-01";
import NavSidebar from "@/registry/new-york/blocks/nav-02/nav-02";
import NavMega from "@/registry/new-york/blocks/nav-03/nav-03";
import FooterColumns from "@/registry/new-york/blocks/footer-01/footer-01";
import FooterMinimal from "@/registry/new-york/blocks/footer-02/footer-02";
import FooterNewsletter from "@/registry/new-york/blocks/footer-03/footer-03";
import TeamGrid from "@/registry/new-york/blocks/team-01/team-01";
import TeamCompact from "@/registry/new-york/blocks/team-02/team-02";
import LogosGrid from "@/registry/new-york/blocks/logos-01/logos-01";
import LogosMarquee from "@/registry/new-york/blocks/logos-02/logos-02";
import CodeSnippet from "@/registry/new-york/blocks/code-01/code-01";
import CodeTerminal from "@/registry/new-york/blocks/code-02/code-02";
import ContentSplit from "@/registry/new-york/blocks/content-01/content-01";
import ContentCards from "@/registry/new-york/blocks/content-02/content-02";

// Maps each registry item name to its actual component, for live preview.
const PREVIEWS: Record<string, React.ComponentType> = {
  "hero-01": HeroSplit,
  "hero-02": HeroCentered,
  "hero-03": HeroAsymmetric,
  "features-grid-01": FeaturesGrid,
  "features-alternating-01": FeaturesAlternating,
  "features-bento-01": FeaturesBento,
  "cta-email-01": CTAEmail,
  "cta-split-01": CTASplit,
  "cta-minimal-01": CTAMinimal,
  "pricing-01": PricingCards,
  "pricing-02": PricingToggle,
  "pricing-03": PricingComparison,
  "nav-01": NavCentered,
  "nav-02": NavSidebar,
  "nav-03": NavMega,
  "footer-01": FooterColumns,
  "footer-02": FooterMinimal,
  "footer-03": FooterNewsletter,
  "team-01": TeamGrid,
  "team-02": TeamCompact,
  "logos-01": LogosGrid,
  "logos-02": LogosMarquee,
  "code-01": CodeSnippet,
  "code-02": CodeTerminal,
  "content-01": ContentSplit,
  "content-02": ContentCards,
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold">Denkore Design Component Library</h1>
      <p className="mb-12 text-muted-foreground">
        Internal shadcn-style component registry. Click a command to copy it.
      </p>

      <section className="mb-16 flex flex-col gap-10">
        {registry.items.map((item) => {
          const Preview = PREVIEWS[item.name];
          return (
            <div key={item.name} className="overflow-hidden rounded-lg border bg-card">
              <div className="border-b bg-muted/40 px-6 py-4">
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
              <div className="overflow-auto bg-background">
                {Preview ? <Preview /> : (
                  <div className="p-6 text-sm text-destructive">No preview registered for {item.name}</div>
                )}
              </div>
              <div className="border-t px-6 py-3">
                <CopyInstallCommand name={item.name} />
              </div>
            </div>
          );
        })}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Discovery Tools</h2>
        <ul className="flex flex-col gap-3">
          <li className="rounded-lg border p-4">
            <a href="/tools/velocity-blocks" className="font-medium underline">
              Velocity Blocks
            </a>
            <div className="text-sm text-muted-foreground">Static component showcase with theme switcher</div>
          </li>
          <li className="rounded-lg border p-4">
            <a href="/tools/section-builder" className="font-medium underline">
              Section Builder
            </a>
            <div className="text-sm text-muted-foreground">Guided discovery flow for client section design</div>
          </li>
        </ul>
      </section>
    </main>
  );
}
