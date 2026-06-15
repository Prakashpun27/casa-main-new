import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHero, Eyebrow } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Casa Exotique — Luxury Design-Build Studio, Gurgaon" },
      { name: "description", content: "Begin your luxury residential, hospitality, retail or developer project with Casa Exotique. Schedule a design consultation with the Gurgaon studio." },
      { property: "og:title", content: "Begin Your Project — Casa Exotique" },
      { property: "og:description", content: "Architecture, design and execution under one integrated vision." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Begin your project."
        intro="Whether you are developing a luxury residence, hospitality concept, retail environment or large-scale turnkey project — Casa Exotique brings architecture, design and execution together under one vision."
      />

      <Section className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <Eyebrow>Studio</Eyebrow>
            <p className="mt-4 font-display text-3xl leading-snug">Gurgaon<br/>Haryana, India</p>
          </div>
          <div>
            <Eyebrow>Enquiries</Eyebrow>
            <p className="mt-4 text-lg">studio@casaexotique.com</p>
            <p className="text-sm text-muted-foreground mt-1">For new projects, collaborations & press</p>
          </div>
          <div>
            <Eyebrow>Hours</Eyebrow>
            <p className="mt-4 text-sm text-muted-foreground">Monday — Saturday<br/>By appointment only</p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-7 space-y-8 border-t border-border/60 pt-10"
        >
          {sent ? (
            <div className="py-20 text-center">
              <p className="eyebrow">Thank you</p>
              <h3 className="mt-6 font-display text-4xl">We've received your enquiry.</h3>
              <p className="mt-4 text-muted-foreground">A member of the studio will be in touch shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-8">
                <Field label="Your Name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" />
                <Field label="City" name="city" />
              </div>
              <Field label="Project Type" name="type" placeholder="Residence · Hospitality · Retail · Developer · Other" />
              <Field label="Tell us about your project" name="message" textarea />
              <button
                type="submit"
                className="inline-flex items-center px-8 py-5 bg-primary text-primary-foreground text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent transition-colors"
              >
                Schedule a Design Consultation
              </button>
            </>
          )}
        </form>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  placeholder,
}: { label: string; name: string; type?: string; textarea?: boolean; placeholder?: string }) {
  const cls = "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base placeholder:text-muted-foreground/60";
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={`${cls} resize-none mt-3`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={`${cls} mt-3`} />
      )}
    </label>
  );
}