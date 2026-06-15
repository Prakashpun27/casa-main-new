import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Luxury Architecture, Interiors & Turnkey Execution | Casa Exotique" },
      { name: "description", content: "Architecture, luxury residential interiors, hospitality design, premium retail, developer solutions and end-to-end turnkey execution by Casa Exotique, Gurgaon." },
      { property: "og:title", content: "Casa Exotique — Services" },
      { property: "og:description", content: "Architecture, interiors, hospitality, retail, developer solutions and turnkey execution." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    t: "Architecture",
    d: "Thoughtfully designed architectural environments that balance spatial planning, natural light, materiality and long-term usability.",
    items: ["Luxury residences", "Villas", "Hospitality environments", "Boutique commercial spaces", "Developer-led architectural concepts"],
  },
  {
    n: "02",
    t: "Luxury Residential Interiors",
    d: "Highly bespoke homes designed around the client's lifestyle, routines and emotional connection to space.",
    items: ["Penthouses", "Private villas", "High-end apartments", "Personal material narratives", "Timeless detailing"],
  },
  {
    n: "03",
    t: "Hospitality Design",
    d: "Immersive hospitality environments that create emotional memory and elevate the guest experience.",
    items: ["Boutique hotels", "Cafés", "Restaurants & lounges", "Luxury dining concepts", "Experiential spaces"],
  },
  {
    n: "04",
    t: "Luxury Retail Design",
    d: "Retail environments that increase engagement, customer experience and premium brand perception.",
    items: ["Flagship stores", "Brand boutiques", "Pop-up environments", "Showroom concepts", "Display & lighting design"],
  },
  {
    n: "05",
    t: "Developer Solutions",
    d: "Emotionally persuasive environments that accelerate buyer confidence and enhance project positioning.",
    items: ["Sample apartments", "Sales galleries", "Experience centers", "Clubhouses & lobbies", "Amenity & investor environments"],
  },
  {
    n: "06",
    t: "Turnkey Project Execution",
    d: "End-to-end execution with complete project accountability — under a single, integrated system.",
    items: ["Civil & technical coordination", "Custom furniture", "Procurement & lighting", "Fit-outs & finishing", "Project management"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Practice"
        title="Architecture, interiors and execution — under one studio."
        intro="From private residences to large-scale developer environments, Casa Exotique brings the entire design and delivery process under one accountable team."
      />

      <Section className="space-y-24">
        {services.map((s, i) => (
          <article key={s.n} className="grid lg:grid-cols-12 gap-10 border-t border-border/60 pt-12">
            <div className="lg:col-span-2 font-display text-5xl text-accent">{s.n}</div>
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl lg:text-4xl">{s.t}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
            <ul className="lg:col-span-5 space-y-3 lg:pt-3">
              {s.items.map((it) => (
                <li key={it} className="flex gap-4 border-b border-border/40 pb-3 text-sm">
                  <span className="text-accent">—</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            {i === services.length - 1 && (
              <div className="lg:col-start-3 lg:col-span-10">
                <Link to="/contact" className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent">
                  Discuss your project
                </Link>
              </div>
            )}
          </article>
        ))}
      </Section>
    </SiteLayout>
  );
}