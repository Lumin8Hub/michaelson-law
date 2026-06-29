import { Link } from "@tanstack/react-router";
import { PRACTICE, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="wordmark">
              <b>DM COUNSEL</b>
              <small>Daniel Michaelson Law</small>
            </span>
            <p>A boutique Toronto personal-injury and medical-malpractice practice. Senior advocacy, kept small enough to return your call.</p>
          </div>
          <div className="foot-col">
            <h5>Practice</h5>
            <ul>
              {PRACTICE.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/practice-areas/$slug"
                    params={{ slug: p.slug }}
                    dangerouslySetInnerHTML={{ __html: p.title }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h5>Firm</h5>
            <ul>
              <li><Link to="/about">About Daniel</Link></li>
              <li><Link to="/results">Results</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Get in touch</h5>
            <ul>
              <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>111 Peter Street, Suite 700<br />Toronto, ON</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p className="disclaimer">
            The information on this website is provided for general purposes only and is not legal advice. Reading this site or contacting DM Counsel does not create a lawyer–client relationship, which is formed only by a signed written retainer. Limitation periods and notice deadlines are strict — if you may have a claim, speak with a lawyer promptly. Daniel Michaelson is licensed by the Law Society of Ontario.
          </p>
          <p className="copy">© 2026 DM Counsel</p>
        </div>
      </div>
    </footer>
  );
}

export function CallBar() {
  return (
    <div className="callbar">
      <a className="c1" href={`tel:${PHONE_TEL}`}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>{" "}
        Call
      </a>
      <Link className="c2" to="/contact">Free consultation</Link>
    </div>
  );
}
