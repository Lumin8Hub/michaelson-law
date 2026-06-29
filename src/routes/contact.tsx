import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Consultation | DM Counsel" },
      { name: "description", content: "Tell Daniel Michaelson what happened — free, confidential personal-injury and medical-malpractice consultation, usually within one business day. Service in English and Hebrew across Ontario." },
      { property: "og:title", content: "Free Consultation — DM Counsel" },
      { property: "og:description", content: "Free, confidential consultation. No fees unless your case succeeds." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("name") || !data.get("phone") || !data.get("email")) {
      alert("Please add your name, phone, and email so Daniel can reach you.");
      return;
    }
    setSent(true);
  }

  return (
    <>
      <section className="pbanner">
        <div className="wrap">
          <p className="crumb"><Link to="/">Home</Link><span className="sep">/</span>Contact</p>
          <span className="eyebrow" style={{ marginTop: "1.2rem" }}>Free &amp; Confidential</span>
          <h1>Tell Daniel what happened.</h1>
          <p className="lead" style={{ color: "rgba(252,250,246,.82)", maxWidth: "58ch" }}>
            There's no cost and no obligation. Share a few details and Daniel — not an intake desk — will review your situation and get back to you, usually within one business day.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap contact-grid">
          <div>
            <div className="form-card">
              <h2 className="h3" style={{ marginBottom: "1.4rem" }}>Request your free consultation</h2>
              {sent ? (
                <div className="form-ok">
                  <h3>Thank you — your message is on its way.</h3>
                  <p style={{ color: "rgba(252,250,246,.8)" }}>
                    Daniel reviews new inquiries personally and will get back to you, usually within one business day. If your matter is urgent, please call{" "}
                    <a href={`tel:${PHONE_TEL}`} style={{ color: "var(--gold)" }}>{PHONE_DISPLAY}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="field">
                    <label htmlFor="f-name">Full name <span className="req">*</span></label>
                    <input id="f-name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="field" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label htmlFor="f-phone">Phone <span className="req">*</span></label>
                      <input id="f-phone" name="phone" type="tel" autoComplete="tel" required />
                    </div>
                    <div>
                      <label htmlFor="f-email">Email <span className="req">*</span></label>
                      <input id="f-email" name="email" type="email" autoComplete="email" required />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="f-type">What kind of injury or claim?</label>
                    <select id="f-type" name="type" defaultValue="Motor vehicle accident">
                      <option>Motor vehicle accident</option>
                      <option>Medical malpractice / negligence</option>
                      <option>Slip &amp; fall / premises</option>
                      <option>Fire loss / property damage</option>
                      <option>Catastrophic injury (brain / spinal)</option>
                      <option>Wrongful death</option>
                      <option>Accident benefits dispute</option>
                      <option>Long-term / short-term disability (LTD / STD)</option>
                      <option>Product liability</option>
                      <option>Long-term care / class action</option>
                      <option>Not sure / something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="f-msg">Briefly, what happened?</label>
                    <textarea id="f-msg" name="message" placeholder="A few sentences is plenty — when, where, and what kind of injury. You don't need to have everything figured out." />
                    <p className="form-note">Please don't share confidential details until we've confirmed there's no conflict and you're a client.</p>
                  </div>
                  <label className="consent">
                    <input type="checkbox" name="consent" />
                    I understand that submitting this form does not create a lawyer–client relationship, and that no such relationship exists until a written retainer is signed.
                  </label>
                  <button className="btn btn-gold" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                    Send to Daniel <span className="ar">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <div className="contact-detail">
              <ContactItem
                label="Phone"
                value={<a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>}
                sub="Call or text — answered every business day"
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>}
              />
              <ContactItem
                label="Email"
                value={<a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
                sub="For general inquiries and referrals"
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>}
              />
              <ContactItem
                label="Office"
                value="Downtown Toronto"
                sub="111 Peter Street, Suite 700, Toronto, ON · By appointment. Daniel meets clients across the GTA and, where needed, will come to you."
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>}
              />
              <ContactItem
                label="Languages"
                value="English & Hebrew"
                sub="Daniel assists Hebrew-speaking clients in their own language."
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>}
              />
              <ContactItem
                label="Fees"
                value="No fees unless you win"
                sub="Most cases run on a contingency-fee basis, explained in writing before any work begins."
                icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6z" /></svg>}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: React.ReactNode; sub: string }) {
  return (
    <div className="cd-item">
      <div className="cd-icon">{icon}</div>
      <div>
        <div className="l">{label}</div>
        <div className="d">{value}</div>
        <div className="sub">{sub}</div>
      </div>
    </div>
  );
}
