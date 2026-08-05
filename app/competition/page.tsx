import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CHRC 2027 Humanoid Hand Competition",
  description:
    "CHRC 2027 is a university-exclusive humanoid hand competition using a standardized open-source robotic arm.",
};

export default function CompetitionPage() {
  return (
    <>
      <section className="competition-hero">
        <div className="competition-hero-art">
          <img
            src="/images/hand-competition-v3.png"
            alt="A dexterous humanoid robot hand mounted to a standardized robotic arm"
          />
        </div>
        <div className="container competition-hero-content">
          <p className="section-label">CHRC 2027 / Competition 01</p>
          <h1>Humanoid Hand Competition</h1>
          <p>
            Teams will receive the same open-source arm and engineer the hand
            that mounts to it. The arm positions the hand; the hand design,
            sensing, actuation, and control are the team&apos;s work.
          </p>
          <div className="competition-date">
            <div>
              <span>Target date</span>
              <strong>May 15, 2027</strong>
            </div>
            <div>
              <span>Time</span>
              <strong>10:00 AM to 5:00 PM ET</strong>
            </div>
            <div>
              <span>Eligibility</span>
              <strong>Canadian university teams</strong>
            </div>
          </div>
          <div className="hero-actions">
            <Link href="/competition-signup" className="button button-primary">
              Sign up for CHRC 2027
            </Link>
            <a
              href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%202027%20competition%20question"
              className="button button-quiet"
            >
              Ask a question
            </a>
          </div>
          <small className="provisional-note">
            The final date and venue will be confirmed in the official
            competition package.
          </small>
        </div>
      </section>

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
