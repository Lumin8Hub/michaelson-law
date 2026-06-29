import { createFileRoute, Link } from "@tanstack/react-router";
import { PRACTICE } from "@/lib/site-data";

export const Route = createFileRoute("/practice-areas/")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Personal Injury & Medical Malpractice | DM Counsel" },
      { name: "description", content: "Serious personal-injury and medical-negligence claims handled by Daniel Michaelson across Ontario — motor vehicle, medical malpractice, catastrophic injury, accident benefits, slip and fall, fire loss, wrongful death, disability, product liability, and class actions." },
      { property: "og:title", content: "Practice Areas — DM Counsel" },
      { property: "og:description", content: "Plain-language guidance on what each area of personal-injury and medical-malpractice law covers, and how Daniel approaches it." },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeIndex,
});

function PracticeIndex() {
  return (
    <>
      <section className="pbanner">
        <div className="wrap">
          <p className="crumb"><Link to="/">Home</Link><span className="sep">/</span>Practice Areas</p>
          <span className="eyebrow" style={{ marginTop: "1.2rem" }}>Practice Areas</span>
          <h1>Serious injury and medical-negligence claims across Ontario.</h1>
          <p className="lead" style={{ color: "rgba(252,250,246,.82)", maxWidth: "60ch" }}>
            Each of these claims has its own deadlines, its own evidence, and its own way of being defended. Below is plain-language guidance on what each one covers and how Daniel approaches it — and a free consultation whenever you're ready to talk specifics.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="pa-grid">
            {PRACTICE.map((p) => (
              <Link key={p.slug} className="pa-card" to="/practice-areas/$slug" params={{ slug: p.slug }}>
                <span className="ix">{p.ix}</span>
                <h3 dangerouslySetInnerHTML={{ __html: p.title }} />
                <p>{p.blurb}</p>
                <span className="go">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2 className="h2">Not sure which one fits your situation?</h2>
          <p>That's normal — most serious cases touch more than one area. Tell Daniel what happened and he'll sort out where it fits.</p>
          <div className="hero-cta">
            <Link className="btn btn-gold" to="/contact">Request a free consultation <span className="ar">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
