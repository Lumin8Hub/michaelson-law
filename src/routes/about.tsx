import { createFileRoute, Link } from "@tanstack/react-router";
import danielAbout from "@/assets/daniel-about.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Daniel Michaelson | DM Counsel" },
      { name: "description", content: "Toronto litigator Daniel Michaelson — nearly two decades acting for catastrophically injured people and grieving families in personal injury, medical malpractice and fire-loss cases across Ontario." },
      { property: "og:title", content: "About Daniel Michaelson — DM Counsel" },
      { property: "og:description", content: "Senior personal-injury and medical-malpractice advocate based in Toronto, acting across Ontario including northern and Indigenous communities." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: danielAbout.url },
      { name: "twitter:image", content: danielAbout.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="wrap">
          <p className="crumb"><Link to="/">Home</Link><span className="sep">/</span>About Daniel</p>
          <div className="about-grid" style={{ marginTop: "2rem" }}>
            <div>
              <figure className="portrait" role="img" aria-label="Portrait of Daniel Michaelson — placeholder">
                <div className="ph"><PortraitIcon /><div>HEADSHOT<br />TO BE REPLACED</div></div>
              </figure>
              <div className="cred-grid">
                <div className="cred"><div className="l">Called to the bar</div><div className="d">Ontario, 2008</div></div>
                <div className="cred"><div className="l">Recognition</div><div className="d">Best Lawyers in Canada, 2024 · Lexpert Directory</div></div>
                <div className="cred"><div className="l">Education</div><div className="d">York University (Hons. BA, cum laude) · Western Law (LLB)</div></div>
                <div className="cred"><div className="l">Memberships</div><div className="d">Law Society of Ontario · The Advocates' Society</div></div>
              </div>
            </div>
            <div>
              <span className="eyebrow">About Daniel Michaelson</span>
              <h1 className="h2" style={{ marginTop: "1rem", fontSize: "clamp(2rem,4vw,3rem)" }}>An advocate for people whose lives changed in an instant.</h1>
              <div className="prose" style={{ marginTop: "1.6rem" }}>
                <p className="first">For nearly two decades, Daniel Michaelson has represented people whose lives were changed in an instant — by a motor vehicle accident, a serious fall, medical negligence, a defective product, a catastrophic fire, or an institution that failed the people who depended on it. His practice rests on a straightforward conviction: that seriously and catastrophically injured people and grieving families deserve an advocate willing to do the meticulous, unglamorous work of reconstructing exactly what happened, and the trial-tested resolve to hold those responsible to account.</p>
                <p>Called to the Ontario bar in 2008, Daniel spent close to two decades — as an associate and then a partner — at one of Canada's leading personal injury and medical-negligence firms before founding DM Counsel to focus directly on seriously and catastrophically injured clients. He acts in motor vehicle accident claims, occupiers' liability and premises cases, fire loss, product liability, wrongful death, statutory accident-benefit disputes, brokers' negligence, short- and long-term disability claims, and complex medical negligence.</p>
                <p>He appears at every level of the Ontario court system — from the Licence Appeal Tribunal and the Superior Court of Justice to the Divisional Court and the Court of Appeal for Ontario — and conducts trials and administrative-tribunal hearings, including at the Workplace Safety and Insurance Appeals Tribunal, where so much of an injured person's long-term recovery and financial security is ultimately decided.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--warm-white)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div className="prose">
            <h3 className="h3">Holding institutions accountable</h3>
            <p>Daniel's work has grown from individual cases toward some of the most consequential systemic litigation in the province and across Canada. As one of a consortium of plaintiffs' counsel — co-counsel with Erik Joffe — he acts for the plaintiffs in <em>Pugliese v. Chartwell</em>, one of a group of eight proposed class actions brought on behalf of residents, families, and visitors affected by COVID-19 outbreaks in Ontario's long-term-care homes. In March 2024, the Superior Court of Justice certified six of those actions — including the Chartwell action — to proceed as class proceedings in negligence, clearing a pivotal hurdle in one of the largest efforts to seek accountability for what happened in long-term care during the pandemic. The litigation is ongoing.</p>
            <p>That work sits alongside a steady record of trial, motion and tribunal advocacy in catastrophic-impairment, motor vehicle, premises-liability, fire-loss, product-liability and medical-negligence matters — cases that turn on careful factual investigation, well-marshalled expert evidence, and a clear-eyed understanding of how insurers and institutional defendants evaluate and defend a claim.</p>

            <h3 className="h3">Northern Ontario and Indigenous communities</h3>
            <p>Daniel's practice has expanded to serve rural, northern and Indigenous communities that have long been underrepresented and that deserve the same calibre of legal representation as anyone else in the country. He acts for clients in Timmins, Sudbury, North Bay, Cochrane, Kenora, Fort Frances and everywhere in between, and takes real pride in travelling to meet clients where they live — the better to understand their communities and their needs, and to be the strongest possible advocate for them.</p>

            <h3 className="h3">A multidisciplinary foundation</h3>
            <p>Daniel's path to law began in the humanities. He completed an Honours Bachelor of Arts at York University, graduating <em>cum laude</em> and earning the Merit Award as the top graduating student in his history and archaeology program, before completing his Bachelor of Laws at the University of Western Ontario. Disciplines built on reconstructing past events from incomplete evidence turned out to be unexpectedly good training for civil litigation, where the outcome so often depends on rebuilding, piece by piece, a record that no one preserved with a lawsuit in mind.</p>

            <h3 className="h3">Thinking ahead about injury law</h3>
            <p>Daniel is known among his peers as someone willing to take on complex arguments, and he is frequently asked to speak and write on the issues facing the personal injury and medical malpractice bar. He has been a consistent voice on how rapid technological change is reshaping civil liability — from robotics and remote surgery in medical malpractice, to vehicle automation and telematics in motor vehicle claims, to the growing role of digital evidence such as dashcam footage and location data in proving what really happened. As he puts it, the legal system is inherently backward-looking, and the profession can no longer afford to be: the technology is coming whether the courts are ready or not.</p>

            <h3 className="h3">Community</h3>
            <p>Outside his practice, Daniel is committed to service. He has served on the Board of Directors of Canadian Young Judaea and supports Lawyers Feed the Hungry and the Nature Conservancy of Canada. He is actively involved in the Jewish-Canadian community and assists Hebrew-speaking clients in their own language as they navigate the Ontario civil justice system.</p>
          </div>
          <div style={{ marginTop: "2.6rem" }}>
            <Link className="btn btn-navy" to="/contact">Talk to Daniel directly <span className="ar">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
