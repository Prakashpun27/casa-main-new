import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";

const faqs = [
  {
    q: "What makes Casa Exotique different from other luxury interior designers in Gurgaon?",
    a: "Casa Exotique combines architecture, interior design, turnkey execution and developer solutions under one integrated system — allowing clients to experience seamless project delivery with greater design consistency and execution control.",
  },
  {
    q: "Does Casa Exotique handle turnkey luxury interior projects?",
    a: "Yes. We provide complete turnkey project execution including civil work, lighting, HVAC coordination, custom furniture, procurement, fit-outs, project management and final styling.",
  },
  {
    q: "Does Casa Exotique design hospitality and retail spaces?",
    a: "Yes. The studio specializes in luxury hospitality environments, boutique commercial spaces, cafés, restaurants and premium retail experiences designed to enhance customer engagement and brand perception.",
  },
  {
    q: "Does Casa Exotique work with real estate developers?",
    a: "Yes. We partner with developers for sample apartments, sales galleries, clubhouses, experience centers and premium amenity environments designed to improve buyer engagement and project positioning.",
  },
  {
    q: "Where is Casa Exotique based and where do you take on projects?",
    a: "Our studio is based in Gurgaon, Haryana. We undertake luxury residential, hospitality, retail and developer projects across Delhi NCR and India.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Luxury Interior Designers Gurgaon | Casa Exotique" },
      { name: "description", content: "Answers to common questions about Casa Exotique's luxury design-build process, turnkey execution, hospitality and developer work." },
      { property: "og:title", content: "Frequently Asked Questions — Casa Exotique" },
      { property: "og:description", content: "About our process, turnkey execution and hospitality work." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Journal · FAQ"
        title="Frequently asked questions."
        intro="A closer look at how Casa Exotique works — from first conversation to final reveal."
      />

      <Section>
        <div className="border-t border-border/60">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b border-border/60 py-8 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex justify-between items-start gap-8 cursor-pointer list-none">
                <h2 className="font-display text-2xl lg:text-3xl pr-6">{f.q}</h2>
                <span className="font-display text-3xl text-accent transition-transform group-open:rotate-45 shrink-0">+</span>
              </summary>
              <p className="mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section className="mt-32 mb-10">
        <div className="bg-primary text-primary-foreground p-10 lg:p-16 flex flex-wrap items-end justify-between gap-8">
          <h2 className="font-display text-3xl lg:text-5xl max-w-2xl">Have a project in mind?</h2>
          <Link to="/contact" className="inline-flex items-center px-7 py-4 border border-bone/60 text-[0.72rem] uppercase tracking-[0.28em] hover:border-accent hover:text-accent">
            Begin Your Project
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}