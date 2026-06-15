import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/SiteLayout";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Bhawana Bhatnagar — Founder & Creative Director, Casa Exotique" },
      { name: "description", content: "Bhawana Bhatnagar is the founder and creative director of Casa Exotique, a luxury design-build studio in Gurgaon known for highly personalized residential, hospitality and developer-led environments." },
      { property: "og:title", content: "Bhawana Bhatnagar — Founder, Casa Exotique" },
      { property: "og:description", content: "Design as atmosphere, emotion, and the invisible relationship between people and space." },
      { property: "og:url", content: "/founder" },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <SiteLayout>
      <Section className="pt-24 lg:pt-36 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <figure className="lg:col-span-5">
          <img src={founder} alt="Bhawana Bhatnagar, founder of Casa Exotique" loading="lazy" width={1000} height={1300} className="w-full object-cover" />
          <figcaption className="mt-5 flex justify-between text-sm">
            <span className="font-display text-xl">Bhawana Bhatnagar</span>
            <span className="eyebrow">Founder · Creative Director</span>
          </figcaption>
        </figure>
        <div className="lg:col-span-7 space-y-8">
          <Eyebrow>Founder</Eyebrow>
          <h1 className="font-display text-5xl lg:text-7xl leading-[1.02]">
            Design as <em className="text-accent not-italic">atmosphere</em> — and the invisible relationship between people and space.
          </h1>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              For Bhawana Bhatnagar, design is not simply about aesthetics. It is about
              atmosphere. Emotion. Human behavior. And the quiet, invisible relationship
              between people and the spaces they inhabit.
            </p>
            <p>
              Under her leadership, Casa Exotique has developed into a luxury design-build
              studio recognized for highly personalized environments that balance
              architectural sophistication with execution excellence.
            </p>
            <p>
              Her design philosophy draws inspiration from hospitality, global luxury culture,
              material storytelling and modern architectural minimalism.
            </p>
            <p className="text-foreground">
              Rather than following trends, she focuses on creating environments with
              <em className="not-italic text-accent"> emotional permanence</em> — spaces that
              continue to feel relevant, calm and deeply human over time.
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center px-7 py-4 bg-primary text-primary-foreground text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent">
            Work with the studio
          </Link>
        </div>
      </Section>
    </SiteLayout>
  );
}