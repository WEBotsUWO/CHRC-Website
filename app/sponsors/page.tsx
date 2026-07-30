import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Help launch Canada's first university humanoid robotics competition and connect with the next generation of robotics talent.",
};

const tiers = [
  {
    name: "Diamond",
    price: "$1,000+",
    className: "tier-diamond",
    benefits: [
      "Premier logo placement on event materials and merchandise",
      "Exhibitor booth and major event-space signage",
      "Welcome address at the opening ceremony",
      "Present awards to competition winners",
      "Introduce your organization to participants",
      "Dedicated social media thank-you",
    ],
  },
  {
    name: "Gold",
    price: "$500–$1,000",
    className: "tier-gold",
    benefits: [
      "Large logo placement on materials and merchandise",
      "Exhibitor booth at the competition",
      "Introduce your organization to participants",
      "Event-space banners and posters",
      "Dedicated social media thank-you",
    ],
  },
  {
    name: "Silver",
    price: "$200–$500",
    className: "tier-silver",
    benefits: [
      "Medium logo placement on event materials",
      "Exhibitor booth at the competition",
      "Introduce your organization to participants",
    ],
  },
  {
    name: "Bronze",
    price: "$100–$200",
    className: "tier-bronze",
    benefits: [
      "Logo placement on event materials",
      "Introduce your organization to participants",
    ],
  },
];

export default function SponsorsPage() {
  return (
    <>
      <section className="sponsor-hero">
        <div className="container sponsor-hero-grid">
          <div>
            <p className="section-label light-label">Partner with CHRC</p>
            <h1>Back the people who will build what&apos;s next.</h1>
          </div>
          <div>
            <p>
              Your support helps launch Canada&apos;s first university
              humanoid robotics competition—and puts your organization beside
              the multidisciplinary students moving the field forward.
            </p>
            <div className="hero-actions">
              <a
                href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%20Sponsorship"
                className="button button-white"
              >
                Become a sponsor <span aria-hidden="true">↗</span>
              </a>
              <a
                href="/CHRC-sponsorship-package-2026-27.pdf"
                download
                className="button button-outline-white"
              >
                Download package ↓
              </a>
            </div>
          </div>
        </div>
        <div className="sponsor-marquee" aria-hidden="true">
          <span>INDUSTRY × UNIVERSITY × THE FUTURE OF ROBOTICS</span>
          <span>INDUSTRY × UNIVERSITY × THE FUTURE OF ROBOTICS</span>
        </div>
      </section>

      <section className="section sponsor-value">
        <div className="container">
          <div className="section-intro split-intro">
            <div>
              <p className="section-label">Why CHRC</p>
              <h2>Early support creates lasting impact.</h2>
            </div>
            <p className="section-copy">
              Sponsors become part of the inaugural story. Funding goes directly
              toward competition materials, prizes, event logistics, and an
              accessible experience for student teams across Canada.
            </p>
          </div>
          <div className="value-grid">
            <article>
              <span>01</span>
              <h3>Meet emerging talent</h3>
              <p>
                Connect with motivated mechanical, electrical, software,
                controls, and systems students.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Shape a new platform</h3>
              <p>
                Help establish the standards, culture, and staying power of a
                Canadian competition.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Be seen building the future</h3>
              <p>
                Earn visibility through event branding, student engagement, and
                national social content.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="tier-section">
        <div className="container">
          <div className="tier-heading">
            <div>
              <p className="section-label">2026–27 sponsorship</p>
              <h2>Choose your level of impact.</h2>
            </div>
            <p>
              Every tier helps students turn engineering theory into an
              integrated humanoid system.
            </p>
          </div>
          <div className="tier-grid">
            {tiers.map((tier) => (
              <article className={`tier-card ${tier.className}`} key={tier.name}>
                <div className="tier-top">
                  <span>{tier.name}</span>
                  <strong>{tier.price}</strong>
                </div>
                <ul>
                  {tier.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span aria-hidden="true">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%20${tier.name}%20Sponsorship`}
                  className="tier-link"
                >
                  Sponsor at {tier.name} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="in-kind-section">
        <div className="container in-kind-grid">
          <div>
            <p className="section-label light-label">More ways to contribute</p>
            <h2>Hardware. Prizes. Expertise.</h2>
          </div>
          <div>
            <p>
              We welcome in-kind contributions such as components, tools,
              manufacturing support, participant merchandise, and competition
              prizes. These contributions improve the student experience and
              put useful technology directly into builders&apos; hands.
            </p>
            <a
              href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%20In-kind%20Partnership"
              className="button button-white"
            >
              Propose an in-kind partnership <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="sponsor-contact">
        <div className="container sponsor-contact-inner">
          <p className="section-label">A first-year opportunity</p>
          <h2>Put your name beside the starting line.</h2>
          <p>
            Let&apos;s build a partnership around your goals and the
            opportunities you want to create for Canadian students.
          </p>
          <a
            href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=Let's%20talk%20about%20CHRC"
            className="button button-primary"
          >
            Talk with the CHRC team <span aria-hidden="true">↗</span>
          </a>
          <Link href="/competition" className="text-link">
            Explore the inaugural challenge →
          </Link>
        </div>
      </section>
    </>
  );
}
