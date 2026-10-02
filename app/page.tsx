"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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

// Category -> ordered block names, matching the original Velocity Blocks grouping.
const CATEGORIES: { name: string; blocks: string[] }[] = [
  { name: "Heroes", blocks: ["hero-01", "hero-02", "hero-03"] },
  { name: "Features", blocks: ["features-grid-01", "features-alternating-01", "features-bento-01"] },
  { name: "CTAs", blocks: ["cta-email-01", "cta-split-01", "cta-minimal-01"] },
  { name: "Pricing", blocks: ["pricing-01", "pricing-02", "pricing-03"] },
  { name: "Navigation", blocks: ["nav-01", "nav-02", "nav-03"] },
  { name: "Footers", blocks: ["footer-01", "footer-02", "footer-03"] },
  { name: "Team", blocks: ["team-01", "team-02"] },
  { name: "Logo Cloud", blocks: ["logos-01", "logos-02"] },
  { name: "Code Demo", blocks: ["code-01", "code-02"] },
  { name: "Content", blocks: ["content-01", "content-02"] },
];

const itemsByName = Object.fromEntries(registry.items.map((item) => [item.name, item]));

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name);
  const [navOpen, setNavOpen] = useState(false);
  const category = CATEGORIES.find((c) => c.name === activeCategory)!;

  const selectCategory = (name: string) => {
    setActiveCategory(name);
    setNavOpen(false); // picking a category is the end goal of opening the nav - close it
  };

  return (
    <div className="flex min-h-screen">
      {/* Mobile top bar - only shown below lg, where the sidebar is hidden by default */}
      <div className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b bg-card px-4 py-3 lg:hidden">
        <div className="text-sm font-bold">Denkore Registry</div>
        <button
          onClick={() => setNavOpen(true)}
          aria-label="Open categories"
          className="rounded-md p-2 text-muted-foreground hover:bg-muted"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Backdrop - only rendered while the mobile drawer is open */}
      {navOpen && (
        <div
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={
          (navOpen ? "translate-x-0" : "-translate-x-full") +
          " fixed inset-y-0 left-0 z-50 w-64 shrink-0 overflow-y-auto border-r bg-card transition-transform duration-200 ease-in-out lg:static lg:translate-x-0"
        }
      >
        <div className="flex items-center justify-between border-b px-6 py-6">
          <div>
            <div className="text-lg font-bold">Denkore Registry</div>
            <div className="text-xs text-muted-foreground">Internal component library</div>
          </div>
          <button
            onClick={() => setNavOpen(false)}
            aria-label="Close categories"
            className="rounded-md p-1 text-muted-foreground hover:bg-muted lg:hidden"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex flex-col py-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => selectCategory(cat.name)}
              className={
                cat.name === activeCategory
                  ? "border-l-2 border-primary bg-muted px-6 py-2.5 text-left text-sm font-medium"
                  : "border-l-2 border-transparent px-6 py-2.5 text-left text-sm text-muted-foreground hover:bg-muted/50"
              }
            >
              {cat.name}
            </button>
          ))}
        </nav>

        <div className="mt-4 border-t px-6 py-6">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Discovery Tools
          </div>
          <div className="flex flex-col gap-3">
            <a href="/tools/velocity-blocks" className="text-sm font-medium underline">
              Velocity Blocks
            </a>
            <a href="/tools/section-builder" className="text-sm font-medium underline">
              Section Builder
            </a>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto pt-14 lg:pt-0">
        <div className="flex flex-col gap-10 p-8">
          <h1 className="text-2xl font-bold">{category.name}</h1>
          {category.blocks.map((name) => {
            const item = itemsByName[name];
            const Preview = PREVIEWS[name];
            return (
              <div key={name} className="overflow-hidden rounded-lg border bg-card">
                <div className="border-b bg-muted/40 px-6 py-4">
                  <div className="font-semibold">{item.title}</div>
                  <div className="mb-3 text-sm text-muted-foreground">{item.description}</div>
                  <CopyInstallCommand name={name} />
                </div>
                <div className="light-scope overflow-auto">
                  {Preview ? <Preview /> : (
                    <div className="p-6 text-sm text-destructive">No preview registered for {name}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
