import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRACTICE, type Practice } from "@/lib/site-data";

function stripHtml(s: string) {
  return s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
}

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const practice = PRACTICE.find((p) => p.slug === params.slug);
    if (!practice) throw notFound();
    return { practice };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.practice;
    const title = p ? `${stripHtml(p.title)} — DM Counsel` : "Practice Area — DM Counsel";
    const desc = p ? stripHtml(p.blurb) : "";
    const url = `/practice-areas/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: p.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            },
          ]
        : undefined,
    };
  },
  component: PracticeDetailPage,
  notFoundComponent: () => (
    <section>
      <div className="wrap"><h1 className="h2">Practice area not found</h1><p style={{ marginTop: "1rem" }}><Link to="/practice-areas" className="btn btn-navy">See all practice areas</Link></p></div>
    </section>
  ),
});

function PracticeDetailPage() {
  const { practice } = Route.useLoaderData();
  return <PracticeDetail p={practice} />;
}

export function PracticeDetail({ p }: { p: Practice }) {
  return (
    <>
      <section className="pbanner">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/practice-areas">Practice Areas</Link>
            <span className="sep">/</span>
            <span dangerouslySetInnerHTML={{ __html: p.title }} />
          </p>
          <span className="eyebrow" style={{ marginTop: "1.2rem" }}>Practice · {p.ix}</span>
          <h1 dangerouslySetInnerHTML={{ __html: p.title }} />
          <p className="lead" style={{ color: "rgba(252,250,246,.82)", maxWidth: "62ch" }}>{p.summary}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="pa-detail-grid">
            <div>
              <span className="pa-tag">What we can recover</span>
              <ul className="recover" style={{ marginTop: "1rem" }}>
                {p.recover.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <div className="faq" style={{ marginTop: "1.6rem", maxWidth: "none" }}>
                {p.faqs.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <div className="ans"><p>{f.a}</p></div>
                  </details>
                ))}
              </div>
              <Link className="btn btn-navy" to="/contact" style={{ marginTop: "1.4rem" }}>
                Ask Daniel about your case <span className="ar">→</span>
              </Link>
            </div>
            <div>
              <p className="summary">{p.summary}</p>
              {p.body.map((b, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2 className="h2">Wondering whether you have a claim?</h2>
          <p>Tell Daniel what happened. He'll give you a straight read, in confidence, at no cost.</p>
          <div className="hero-cta">
            <Link className="btn btn-gold" to="/contact">Request a free consultation <span className="ar">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
