import { createFileRoute, Link } from "@tanstack/react-router";
import { CASES } from "@/lib/site-data";
import { CaseRow } from "./index";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Reported Decisions | DM Counsel" },
      { name: "description", content: "Publicly reported decisions from Daniel Michaelson's litigation practice across Ontario courts and tribunals — including catastrophic impairment, motor vehicle, fire-loss and long-term-care class actions." },
      { property: "og:title", content: "Results & Reported Decisions — DM Counsel" },
      { property: "og:description", content: "Citable decisions from across the Ontario courts and tribunals." },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <section className="pbanner">
        <div className="wrap">
          <p className="crumb"><Link to="/">Home</Link><span className="sep">/</span>Results</p>
          <span className="eyebrow" style={{ marginTop: "1.2rem" }}>The Record</span>
          <h1>Reported decisions, not just numbers.</h1>
          <p className="lead" style={{ color: "rgba(252,250,246,.82)", maxWidth: "62ch" }}>
            Serious cases are won on the record. These are publicly reported matters from Daniel's practice across the Ontario courts — each one citable, and each one a window into how he builds and argues a case.
          </p>
        </div>
      </section>
      <section className="record">
        <div className="wrap">
          {CASES.map((c) => <CaseRow key={c.title} c={c} />)}
          <p className="note">Past results are not a guarantee of the outcome of any future case. Every matter turns on its own facts and evidence. Citations refer to the publicly reported decisions and can be read in full on CanLII.</p>
        </div>
      </section>
      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <span className="eyebrow">For other lawyers &amp; the media</span>
          <h2 className="h2" style={{ marginTop: "1rem" }}>Available for co-counsel, comment, and complex referrals.</h2>
          <p style={{ marginTop: "1rem", color: "var(--slate)" }}>
            Daniel works as co-counsel on systemic and catastrophic matters and is frequently asked to comment on how emerging technology is reshaping civil liability. For referrals, co-counsel arrangements, or media requests, get in touch directly.
          </p>
          <div style={{ marginTop: "1.8rem" }}>
            <Link className="btn btn-navy" to="/contact">Get in touch <span className="ar">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
