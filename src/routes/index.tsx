import { createFileRoute, Link } from "@tanstack/react-router";
import { PRACTICE, CASES, FAQS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";
import danielHome from "@/assets/daniel-home.jpg.asset.json";
import { assetUrl } from "@/lib/asset-url";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DM Counsel | Daniel Michaelson — Personal Injury & Medical Malpractice Lawyer, Toronto" },
      { name: "description", content: "Toronto personal injury and medical malpractice lawyer. Catastrophic injury, motor vehicle, medical-negligence and fire-loss cases across Ontario. Free consultation. No fees unless you win." },
      { property: "og:title", content: "DM Counsel — Personal Injury & Medical Malpractice Lawyer, Toronto" },
      { property: "og:description", content: "A senior injury and medical-malpractice advocate who takes your case on directly — start to finish." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Personal Injury &amp; Medical Malpractice · Toronto &amp; Ontario</span>
              <h1 className="display">
                A serious injury deserves a senior advocate — <em>not a file passed down the hall.</em>
              </h1>
              <p className="lead">
                For nearly two decades — including years as a partner at one of Canada's leading personal injury and medical-negligence firms — Daniel Michaelson has built catastrophic-injury, medical-negligence and fire-loss cases. DM Counsel is where he now takes them on directly, for a smaller number of clients who get his full attention from the first call to the last.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-gold" to="/contact">Request a free consultation <span className="ar">→</span></Link>
                <a className="btn btn-ghost on-dark" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
              </div>
              <div className="hero-reassure">
                <span>No fees unless you win</span>
                <span>Free &amp; confidential</span>
                <span>Service in English &amp; Hebrew</span>
              </div>
            </div>
            <div>
              <figure className="plate">
                <img src={assetUrl(danielHome)} alt="Daniel Michaelson, founder of DM Counsel — Toronto personal injury and medical malpractice lawyer" loading="eager" />
              </figure>
              <div className="plate-cap">Plate 01 — <b>Daniel Michaelson</b>, Toronto</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust" style={{ paddingBlock: 0 }}>
        <div className="wrap">
          <div className="trust-item"><span className="k">2008</span><span className="v">Called to the Ontario bar</span></div>
          <div className="trust-item"><span className="k">18+ yrs</span><span className="v">Personal injury, medical malpractice &amp; fire-loss litigation</span></div>
          <div className="trust-item"><span className="k">2024</span><span className="v">The Best Lawyers in Canada — Personal Injury Litigation</span></div>
          <div className="trust-item"><span className="k">ONCA</span><span className="v">Appears to the Court of Appeal for Ontario</span></div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="diff">
        <div className="wrap diff-grid">
          <div>
            <span className="eyebrow">Why DM Counsel</span>
            <h2 className="h2" style={{ marginTop: "1rem" }}>The lawyer who assesses your case is the one who argues it.</h2>
            <div className="pull">
              <p className="q">"Seriously injured people deserve an advocate willing to do the meticulous, unglamorous work of reconstructing exactly what happened."</p>
              <p className="a">— Daniel Michaelson</p>
            </div>
          </div>
          <div>
            <ul className="diff-list">
              {[
                ["01", "You get Daniel — start to finish", "At big firms, the senior lawyer wins the meeting and a junior runs the file. Here, the person you meet is the person who builds your case, negotiates it, and stands up for it in court."],
                ["02", "Big-firm pedigree, boutique attention", "The same calibre of catastrophic-injury and medical-negligence work that Ontario's leading firms are known for — delivered by a practice deliberately kept small enough to return your call."],
                ["03", "No fees unless your case succeeds", "Most cases are handled on a contingency-fee basis. You pay nothing up front, and no legal fees at all unless your claim is successful. The terms are in writing before any work begins."],
                ["04", "Built on reconstructing the record", "Daniel's background in history and archaeology turned into a litigator's instinct: rebuild, piece by piece, the record no one preserved with a lawsuit in mind — then hold the responsible party to it."],
                ["05", "For all of Ontario — not just downtown", "Daniel acts for injured people across the province and regularly travels to represent clients in northern, rural and Indigenous communities — from Timmins and Sudbury to Kenora and Fort Frances — who deserve the same senior advocacy as anyone in the city."],
              ].map(([n, h, p]) => (
                <li key={n}>
                  <span className="num">{n}</span>
                  <div><h4>{h}</h4><p>{p}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Practice Areas</span>
            <h2 className="h2">When an institution or another person failed you, these are the claims we take on.</h2>
            <p>Every injury — and every family — is different. Daniel acts across the full range of serious personal-injury and medical-negligence matters in Ontario. Choose the area closest to your situation.</p>
          </div>
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

      {/* THE RECORD */}
      <section className="record">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The Record</span>
            <h2 className="h2">Reported decisions from across the Ontario courts and tribunals.</h2>
            <p>A selection of matters from Daniel's litigation practice — each one a public, citable decision rather than a number on a page.</p>
          </div>
          <div style={{ marginTop: "2.4rem" }}>
            {CASES.slice(0, 3).map((c) => (
              <CaseRow key={c.title} c={c} />
            ))}
          </div>
          <p className="note">Past results are not a guarantee of the outcome of any future case. Citations link to the publicly reported decisions. Outcomes depend on the specific facts and evidence of each matter.</p>
          <div style={{ marginTop: "2rem" }}>
            <Link className="btn btn-ghost on-dark" to="/results">See the full record <span className="ar">→</span></Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="diff">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow no-rule">What happens next</span>
            <h2 className="h2">From the first call to a resolution.</h2>
            <p>You should never feel lost in your own case. Here is the path, in plain terms.</p>
          </div>
          <div className="steps">
            {[
              ["01", "Free consultation", "Tell Daniel what happened. He'll give you a straight read on whether you have a claim and what to expect — at no cost and in confidence."],
              ["02", "We build the record", "Medical records, accident reports, expert evidence, witnesses. The careful reconstruction that decides serious cases."],
              ["03", "We make the claim", "We deal with the insurer and the defendants so you can focus on recovery — through negotiation, and through trial when that's what it takes."],
              ["04", "Resolution", "A settlement or judgment that reflects what was actually lost — the care, income, and security you're entitled to."],
            ].map(([n, h, p]) => (
              <div className="step" key={n}>
                <span className="n">{n}</span>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testi">
        <div className="wrap">
          <div className="testi-card">
            <p className="q">"Client stories belong here. Once DM Counsel has signed consents in hand, this space holds two or three short, real testimonials — kept compliant with Law Society of Ontario advertising rules."</p>
            <p className="ph-tag">Placeholder — replace with approved client testimonials</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Common Questions</span>
            <h2 className="h2">Straight answers, before you ever call.</h2>
          </div>
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="ans"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark" style={{ justifyContent: "center" }}>No obligation · No fees unless you win</span>
          <h2 className="h2" style={{ marginTop: "1rem" }}>If you or someone you love has been seriously hurt, start with a conversation.</h2>
          <p>It costs nothing to find out where you stand. Tell Daniel what happened, and he'll tell you honestly whether and how he can help.</p>
          <div className="hero-cta">
            <Link className="btn btn-gold" to="/contact">Request a free consultation <span className="ar">→</span></Link>
            <a className="btn btn-ghost on-dark" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>
    </>
  );
}

export function CaseRow({ c }: { c: (typeof CASES)[number] }) {
  return (
    <div className="case">
      <div>
        <div className="yr">{c.yr}</div>
        <div className="ex">{c.ex}</div>
      </div>
      <div>
        <h3>{c.title}</h3>
        <div className="cite">{c.cite}</div>
        <p>{c.desc}</p>
        <div><span className="role">{c.role}</span></div>
      </div>
      <div></div>
    </div>
  );
}
