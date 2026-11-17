import Link from "next/link";
import { publicAsset } from "../site";
import { MobileMenu } from "./MobileMenu";

const nav = [
  { href: "/competition", label: "CHRC 2027" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/competition#faq", label: "FAQ" },
  { href: "/#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="CHRC home">
          <img
            src={publicAsset("/images/chrc-logo.jpeg")}
            alt=""
            width={46}
            height={46}
            className="brand-mark"
          />
          <span className="brand-type">
            <strong>CHRC</strong>
            <small>Canadian Humanoid Robotics Competition</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            href="/competition-signup"
            className="button button-primary"
          >
            Sign up
          </Link>
        </div>
        <MobileMenu>
          {nav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/competition-signup">Sign up</Link>
        </MobileMenu>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <img
              src={publicAsset("/images/chrc-logo.jpeg")}
              alt=""
              width={52}
              height={52}
              className="brand-mark"
            />
            <span className="brand-type">
              <strong>CHRC</strong>
              <small>Canadian Humanoid Robotics Competition</small>
            </span>
          </Link>
          <p className="footer-note">
            Canada&apos;s first humanoid robotics competition built for university
            and college teams.
          </p>
        </div>
        <div className="footer-links">
          <p>Explore</p>
          <Link href="/competition">CHRC 2027</Link>
          <Link href="/#competitors">Competitors</Link>
          <Link href="/#location">Event location</Link>
          <Link href="/#roadmap">2030 Roadmap</Link>
          <Link href="/competition-signup">Competition registration</Link>
          <Link href="/competition#faq">FAQ</Link>
          <Link href="/sponsors">Sponsors</Link>
        </div>
        <div className="footer-links">
          <p>Connect</p>
          <a href="mailto:canadianhumanoidroboticscomp@gmail.com">
            Email the team
          </a>
          <a
            href="https://www.instagram.com/chrcompetition"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href={publicAsset("/CHRC-sponsorship-package-2026-27.pdf")} download>
            Sponsorship package
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Canadian Humanoid Robotics Competition</span>
        <span>Humanoid robotics for university and college teams.</span>
      </div>
    </footer>
  );
}
