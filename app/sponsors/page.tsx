import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Review CHRC sponsorship levels, fund uses, benefits, and in-kind contribution opportunities for the inaugural 2027 competition.",
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
      "Dedicated social media recognition",
    ],
  },
  {
    name: "Gold",
    price: "$500 to $1,000",
    className: "tier-gold",
    benefits: [
      "Large logo placement on materials and merchandise",
      "Exhibitor booth at the competition",
      "Introduce your organization to participants",
      "Event-space banners and posters",
      "Dedicated social media recognition",
    ],
  },
  {
    name: "Silver",
    price: "$200 to $500",
    className: "tier-silver",
    benefits: [
      "Medium logo placement on event materials",
      "Exhibitor booth at the competition",
      "Introduce your organization to participants",
    ],
  },
  {
    name: "Bronze",
    price: "$100 to $200",
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
        <div className="sponsor-hero-art" aria-hidden="true">
          <img src="/images/sponsor-hardware-v6.png" alt="" />
        </div>
        <div className="container sponsor-hero-grid">
          <div>
            <p className="section-label">Sponsorship 2026-27</p>
            <h1>Sponsor CHRC 2027.</h1>
            <p>
              Sponsorship funds competition equipment, event operations, and
              technical development for the inaugural university competition.
            </p>
            <div className="hero-actions">
              <a
                href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%20Sponsorship%20Information"
                className="button button-primary"
              >
                Request sponsor information
              </a>
              <a
                href="/CHRC-sponsorship-package-2026-27.pdf"
                download
                className="button button-quiet"
              >
                Download sponsorship package
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section sponsor-value">
        <div className="container">
          <div className="section-intro split-intro">
            <div>
              <p className="section-label">Use of funds</p>
              <h2>Where sponsorship funding goes.</h2>
            </div>
            <p className="section-copy">
              Contributions support the shared equipment and event
              infrastructure required to run CHRC 2027 for university teams.
            </p>
          </div>
          <div className="value-grid">
            <article>
              <span>01</span>
              <h3>Competition equipment</h3>
              <p>
                Standardized hardware, testing objects, field materials, tools,
                and safety equipment.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Event operations</h3>
              <p>
                Venue logistics, signage, judging materials, participant
                support, and technical operations.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Competition development</h3>
              <p>
                Rules, evaluation systems, technical documentation, and the
                infrastructure needed to grow each season.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="tier-section">
        <div className="container">
          <div className="tier-heading">
            <div>
              <p className="section-label">2026-27 sponsorship</p>
              <h2>Sponsorship levels.</h2>
            </div>
            <p>
              Benefits scale with contribution level and include direct access
              to participating students, event visibility, and recognition.
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
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%20${tier.name}%20Sponsorship`}
                  className="tier-link"
                >
                  Discuss {tier.name} sponsorship
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="in-kind-section">
        <div className="container in-kind-grid">
          <div>
            <p className="section-label light-label">Non-cash support</p>
            <h2>In-kind contributions.</h2>
          </div>
          <div>
            <p>
              CHRC accepts components, tools, manufacturing support, participant
              merchandise, professional services, and competition prizes. We
              will document the agreed contribution and corresponding sponsor
              recognition.
            </p>
            <a
              href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%20In-kind%20Contribution"
              className="button button-white"
            >
              Discuss an in-kind contribution
            </a>
          </div>
        </div>
      </section>

      <section className="sponsor-contact">
        <div className="container sponsor-contact-inner">
          <p className="section-label">Sponsorship contact</p>
          <h2>Contact the CHRC sponsorship team.</h2>
          <p>
            Tell us which contribution level or in-kind support you are
            considering. We will respond with the current package and next
            steps.
          </p>
          <a
            href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%20Sponsorship"
            className="button button-primary"
          >
            Email CHRC sponsorship
          </a>
          <a
            href="/CHRC-sponsorship-package-2026-27.pdf"
            download
            className="text-link"
          >
            Download the 2026-27 package
          </a>
        </div>
      </section>
    </>
  );
}
