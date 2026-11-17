import type { Metadata } from "next";
import Link from "next/link";
import { CompetitionEventDetails } from "../components/CompetitionEventDetails";
import { CompetitionFaq } from "../components/CompetitionFaq";
import { ConfirmedCompetitors } from "../components/ConfirmedCompetitors";
import { competition2027, publicAsset, showConfirmedCompetitors } from "../site";

export const metadata: Metadata = {
  title: "CHRC 2027 Humanoid Hand Competition",
  description:
    "CHRC 2027 is a humanoid hand competition for university and college teams using a standardized open-source robotic arm.",
};

export default function CompetitionPage() {
  return (
    <>
      <section className="competition-hero">
        <div className="container competition-hero-content">
          <CompetitionEventDetails />
          <h1>Humanoid Hand Competition</h1>
          <p>
            Teams design and build a humanoid hand and assemble a standardized
            open-source arm using build files from CHRC. In each event, a team
            member controls the robot in real time by moving their own arm and hand.
          </p>
          <p className="registration-deadline">
            Register by {competition2027.registrationDeadline}
          </p>
          <div className="hero-actions">
            <Link
              href="/competition-signup"
              className="button button-primary button-registration"
            >
              Register now
            </Link>
            <a
              href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%202027%20competition%20question"
              className="button button-quiet"
            >
              Ask a question
            </a>
          </div>
        </div>
        <figure className="competition-hero-art">
          <img
            src={publicAsset("/images/hand-competition-v9.png")}
            alt="An articulated robotic hand mounted to a robotic arm"
          />
          <figcaption className="concept-render-label">Concept render</figcaption>
        </figure>
      </section>

      <section className="section competition-events" aria-labelledby="competition-events-heading">
        <div className="container">
          <div className="section-intro compact-intro">
            <h2 id="competition-events-heading">What teams will do</h2>
          </div>
          <div className="competition-events-grid">
            <article>
              <h3>Object Relay</h3>
              <p>Transfer objects of different shapes, sizes, and weights from one tray to another.</p>
            </article>
            <article>
              <h3>Domino Challenge</h3>
              <p>Pick up dominoes lying flat and place them upright on marked targets.</p>
            </article>
            <article>
              <h3>Block Tower</h3>
              <p>Stack delicate blocks into a stable tower without damaging them.</p>
            </article>
          </div>
        </div>
      </section>

      {showConfirmedCompetitors && (
        <div className="section event-community">
          <div className="container">
            <ConfirmedCompetitors showSlots />
          </div>
        </div>
      )}

      <CompetitionFaq />

      <section className="competition-package">
        <div className="container competition-package-inner">
          <p className="section-label">Rules and technical details</p>
          <h2>Competition package coming soon.</h2>
          <p>
            Registered teams will receive the full rules, standardized arm
            specification, judging criteria, and season milestones.
          </p>
        </div>
      </section>
    </>
  );
}
