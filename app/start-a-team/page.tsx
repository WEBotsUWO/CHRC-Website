import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "../components/LeadForm";

export const metadata: Metadata = {
  title: "Start a Team",
  description:
    "Bring CHRC to your university. We will help you recruit students, form a club, and prepare for Canada's humanoid robotics competition.",
};

const steps = [
  {
    number: "01",
    title: "Raise your hand",
    copy: "Tell us who you are and where you're starting—even if you're the whole team today.",
  },
  {
    number: "02",
    title: "Meet a CHRC organizer",
    copy: "We'll walk through club recognition, early recruiting, faculty support, and realistic first milestones.",
  },
  {
    number: "03",
    title: "Build your campus team",
    copy: "Use our launch playbook, connect with the national community, and prepare for registration.",
  },
];

export default function StartATeamPage() {
  return (
    <>
      <section className="subpage-hero team-form-hero">
        <div className="container subpage-hero-grid">
          <div>
            <p className="section-label">Start a team</p>
            <h1>Your university could be next.</h1>
          </div>
          <div>
            <p className="subpage-lede">
              No robot. No lab. No club yet. That&apos;s okay. CHRC will help
              you turn curiosity into a recognized campus team—one practical
              step at a time.
            </p>
            <a href="#interest-form" className="button button-primary">
              Tell us you&apos;re interested <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="team-path">
        <div className="container">
          <p className="section-label">From one person to a team</p>
          <div className="step-grid">
            {steps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="form-section" id="interest-form">
        <div className="container form-layout">
          <aside className="form-aside">
            <p className="section-label light-label">You bring the spark</p>
            <h2>We&apos;ll help with the structure.</h2>
            <ul className="support-list">
              <li>
                <span>01</span>
                Club setup and university recognition
              </li>
              <li>
                <span>02</span>
                Recruiting across engineering disciplines
              </li>
              <li>
                <span>03</span>
                Faculty advisor and sponsor outreach
              </li>
              <li>
                <span>04</span>
                Competition onboarding and milestones
              </li>
            </ul>
            <div className="solo-note">
              <strong>Starting alone?</strong>
              <p>
                That is completely normal. Some of the best student teams begin
                with one person who decides to send the first message.
              </p>
            </div>
          </aside>
          <div className="form-panel">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <p className="section-label">Good questions</p>
            <h2>You don&apos;t need all the answers yet.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Do we need a finished robot to register?</summary>
              <p>
                No. Teams build over the academic year. The inaugural format is
                intentionally scoped to an articulated humanoid arm so new
                groups can enter with a realistic plan.
              </p>
            </details>
            <details>
              <summary>How many students do we need?</summary>
              <p>
                You can contact us by yourself. For competition, a
                multidisciplinary group is helpful, but your first milestone is
                simply finding a few motivated people on campus.
              </p>
            </details>
            <details>
              <summary>Is this only for engineering students?</summary>
              <p>
                No. Great teams also need project managers, designers,
                communicators, fundraisers, and business students alongside
                mechanical, electrical, software, and controls talent.
              </p>
            </details>
            <details>
              <summary>What happens after I submit?</summary>
              <p>
                A CHRC organizer will contact you to understand your campus
                context and help define the next concrete step.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="inline-cta">
        <div className="container inline-cta-inner">
          <div>
            <p className="section-label light-label">See what you&apos;ll build</p>
            <h2>Explore the inaugural challenge.</h2>
          </div>
          <Link href="/competition" className="button button-white">
            2027 competition <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
