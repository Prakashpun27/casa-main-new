import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHero, Eyebrow } from "@/components/SiteLayout";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Projects — Luxury Residences, Hospitality & Retail | Casa Exotique" },
      { name: "description", content: "A curated selection of luxury residences, hospitality environments, retail spaces and developer-led experiences designed and executed by Casa Exotique." },
      { property: "og:title", content: "Selected Projects — Casa Exotique" },
      { property: "og:description", content: "Material depth, spatial clarity and refined execution across India." },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: p1 },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: p1, title: "Penthouse Aria", category: "Residence", location: "Gurgaon", year: "2024", w: 1100, h: 1400 },
  { img: p2, title: "Maison No. 12", category: "Hospitality", location: "New Delhi", year: "2024", w: 1400, h: 1000 },
  { img: p3, title: "Atelier Travertine", category: "Retail", location: "Mumbai", year: "2023", w: 1100, h: 1400 },
  { img: p4, title: "Villa Selene", category: "Architecture", location: "Delhi NCR", year: "2023", w: 1400, h: 1000 },
  { img: p5, title: "The Sample House", category: "Developer Experience", location: "Gurgaon", year: "2024", w: 1100, h: 1400 },
  { img: p6, title: "Noor Dining Room", category: "Hospitality", location: "Gurgaon", year: "2022", w: 1400, h: 1000 },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Selected Projects"
        title="A curated collection of refined environments."
        intro="Luxury residences, hospitality concepts, retail spaces and developer-led experiences — each project reflects our commitment to material depth, spatial clarity and refined execution."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((p, i) => (
            <figure key={p.title} className={`group ${i % 3 === 1 ? "md:mt-24" : ""}`}>
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.title}, ${p.category} in ${p.location}`}
                  loading="lazy"
                  width={p.w}
                  height={p.h}
                  className="w-full h-[65vh] object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              <figcaption className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <p className="eyebrow">{p.category}</p>
                  <h2 className="mt-3 font-display text-3xl">{p.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                </div>
                <span className="font-display text-xl text-accent">{p.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="mt-32 mb-10">
        <div className="border-t border-border/60 pt-16">
          <Eyebrow>Confidential</Eyebrow>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Many of our residences and developer projects are not publicly listed.
            Detailed portfolios are shared during private consultations.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}