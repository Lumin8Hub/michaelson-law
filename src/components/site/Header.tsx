import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Daniel" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/results", label: "Results" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <header className="site">
        <div className="wrap nav">
          <Link to="/" className="brand" aria-label="DM Counsel — home" onClick={close}>
            <span className="mark"><span>DM</span></span>
            <span className="wordmark">
              <b>DM COUNSEL</b>
              <small>Daniel Michaelson Law</small>
            </span>
          </Link>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    activeProps={{ className: "is-active", "aria-current": "page" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <a className="nav-phone" href={`tel:${PHONE_TEL}`}>
              <PhoneIcon /> {PHONE_DISPLAY}
            </a>
            <Link className="btn btn-gold" to="/contact">Free consultation</Link>
          </div>
          <button
            className="menu-btn"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobileNav"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <nav className={`mobile-nav${open ? " open" : ""}`} id="mobileNav" aria-label="Mobile">
        {NAV.map((n) => (
          <Link key={n.to} to={n.to} onClick={close}>{n.label}</Link>
        ))}
        <div className="mn-cta">
          <a className="btn btn-gold" href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
          <Link className="btn btn-ghost on-dark" to="/contact" onClick={close}>
            Request a free consultation
          </Link>
        </div>
      </nav>
    </>
  );
}
