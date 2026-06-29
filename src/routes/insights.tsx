import { createFileRoute, Link } from "@tanstack/react-router";
import { INSIGHTS } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | DM Counsel" },
      { name: "description", content: "Plain-language guidance on personal injury and medical malpractice law in Ontario, and Daniel Michaelson's perspective on how technology is reshaping civil liability." },
      { property: "og:title", content: "Insights — DM Counsel" },
      { property: "og:description", content: "Answers to the questions injured people actually ask." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <section className="pbanner">
        <div className="wrap">
          <p className="crumb"><Link to="/">Home</Link><span className="sep">/</span>Insights</p>
          <span className="eyebrow" style={{ marginTop: "1.2rem" }}>Insights</span>
          <h1>Plain-language guidance on injury &amp; malpractice law.</h1>
          <p className="lead" style={{ color: "rgba(252,250,246,.82)", maxWidth: "62ch" }}>
            Answers to the questions injured people actually ask — and Daniel's thinking on where injury law is heading as technology rewrites how we prove what happened.
          </p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="ins-grid">
            {INSIGHTS.map((i) => (
              <Link key={i.title} to="/contact" className="ins-card">
                <span className="cat">{i.cat}</span>
                <h3>{i.title}</h3>
                <p>{i.excerpt}</p>
                <span className="meta">{i.meta}</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "2.4rem", color: "var(--slate-light)", fontFamily: "'Spline Sans Mono',monospace", fontSize: ".8rem" }}>
            Article previews shown are placeholders — the structure is ready for Daniel's first published pieces.
          </p>
        </div>
      </section>
    </>
  );
}
