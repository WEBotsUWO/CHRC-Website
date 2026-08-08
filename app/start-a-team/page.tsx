import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "../components/LeadForm";

export const metadata: Metadata = {
  title: "Start a Team",
  description:
    "Tell CHRC about your university or college and get direct help recruiting students, forming a club, and preparing for the competition.",
};

export default function StartATeamPage() {
  return (
    <>
      <section className="form-section team-form-page" id="interest-form">
        <div className="container form-layout">
          <aside className="form-aside">
            <p className="section-label light-label">Start a team</p>
            <h2>One student is enough to begin.</h2>
            <p className="form-aside-copy">
              Tell us where you are starting. A CHRC organizer can help with
              campus recognition, recruiting, faculty outreach, and a realistic
              first plan.
            </p>
            <div className="team-form-graphic" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <ul className="support-list">
              <li>
                <span>01</span>
                Club setup and campus recognition
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
                That is completely fine. Enter an expected team size of one and
                we will help you plan the next step.
              </p>
            </div>
          </aside>
          <div className="form-panel">
            <LeadForm />
          </div>
        </div>
        <Link
          href="/competition-signup"
          className="form-switcher form-switcher-signup"
          aria-label="Already have a team? Sign up for CHRC 2027"
        >
          <span>Already have a team?</span>
          <strong>Sign up for CHRC 2027</strong>
        </Link>
      </section>

      <section className="faq-section">
        <div className="container faq-layout">
          <div>
            <p className="section-label">Common questions</p>
            <h2>You do not need a finished club or robot.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Do we need a finished robot to register?</summary>
              <p>
                No. Teams build over the academic year. CHRC 2027 is scoped to a
                humanoid hand mounted on a standardized arm.
              </p>
            </details>
            <details>
              <summary>How many students do we need?</summary>
              <p>
                You can contact us by yourself. A multidisciplinary group is
                helpful later, but one student can start the club process.
              </p>
            </details>
            <details>
              <summary>Is this only for engineering students?</summary>
              <p>
                No. Teams also need project managers, designers, communicators,
                fundraisers, and business students alongside mechanical,
                electrical, software, and controls talent.
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
    </>
  );
}
