import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2027 Humanoid Arm Challenge",
  description:
    "Explore the inaugural CHRC challenge: design, build, and demonstrate a humanoid robotic arm over the 2026–27 academic year.",
};

const milestones = [
  ["SEP 2026", "Registration opens", "Build your roster and declare your university team."],
  ["OCT 2026", "Registration closes", "Receive the official rules, scoring, and design package."],
  ["NOV 2026", "Check-in 01", "A live support session for planning, architecture, and early risks."],
  ["FEB 2027", "Check-in 02", "Review progress, testing strategy, and competition readiness."],
  ["MAY 2027", "Competition day", "Demonstrate your system on a national university stage."],
];

export default function CompetitionPage() {
  return (
    <>
      <section className="competition-hero">
        <div className="competition-hero-art">
          <img
            src="/images/arm-challenge.png"
            alt="A humanoid robotic arm reaching toward a Canadian maple leaf target"
          />
        </div>
        <div className="container competition-hero-content">
          <p className="section-label">CHRC 2027 / Challenge 01</p>
          <h1>The Humanoid Arm Challenge</h1>
          <p>
            One academic year. One articulated system. A new Canadian
            competition begins.
          </p>
          <div className="competition-date">
            <div>
              <span>Target date</span>
              <strong>May 15, 2027</strong>
            </div>
            <div>
              <span>Time</span>
              <strong>10:00 AM–5:00 PM ET</strong>
            </div>
            <div>
              <span>Eligibility</span>
              <strong>Canadian university teams</strong>
            </div>
          </div>
          <div className="hero-actions">
            <Link href="/start-a-team" className="button button-primary">
              Start your team <span aria-hidden="true">↗</span>
            </Link>
            <a
              href="mailto:canadianhumanoidroboticscomp@gmail.com?subject=CHRC%202027%20competition%20question"
              className="button button-quiet"
            >
              Ask a question
            </a>
          </div>
          <small className="provisional-note">
            The final competition date and venue will be confirmed in the
            official registration package.
          </small>
        </div>
      </section>

      <section className="section challenge-brief">
        <div className="container challenge-grid">
          <div>
            <p className="section-label">The brief</p>
            <h2>Build an arm that can do more than move.</h2>
          </div>
          <div className="challenge-copy">
            <p>
              Teams will design, build, and demonstrate a humanoid robotic arm
              across an academic year. The system will be assessed through
              practical tasks that reward mechanical design, control,
              repeatability, and thoughtful systems integration.
            </p>
            <p>
              Registered teams receive the official competition package with
              rules, judging criteria, scoring, and design requirements, plus
              two live support check-ins with the CHRC team.
            </p>
          </div>
        </div>
        <div className="container capability-grid">
          <article>
            <span>01</span>
            <h3>Mechanism</h3>
            <p>Structure, joints, actuation, manufacturability, and safety.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Control</h3>
            <p>Accurate motion, repeatability, sensing, and reliable execution.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Dexterity</h3>
            <p>Purposeful interaction with objects and the competition field.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Engineering story</h3>
            <p>Clear decisions, testing evidence, iteration, and teamwork.</p>
          </article>
        </div>
      </section>

      <section className="season-section">
        <div className="container">
          <div className="section-intro split-intro compact-intro">
            <div>
              <p className="section-label light-label">Your competition year</p>
              <h2>Supported from signup to showdown.</h2>
            </div>
            <p>
              The inaugural season is structured to keep new teams moving. You
              will know what comes next—and when to ask for help.
            </p>
          </div>
          <div className="season-timeline">
            {milestones.map(([date, title, copy], index) => (
              <article key={date}>
                <div className="season-marker">
                  <span>0{index + 1}</span>
                </div>
                <p>{date}</p>
                <h3>{title}</h3>
                <div>{copy}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section who-section">
        <div className="container who-grid">
          <div>
            <p className="section-label">Who this is for</p>
            <h2>Serious ambition. Any starting point.</h2>
          </div>
          <div className="who-points">
            <article>
              <strong>New clubs</strong>
              <p>
                A focused first challenge and direct support make CHRC a reason
                to organize on campus.
              </p>
            </article>
            <article>
              <strong>Established robotics teams</strong>
              <p>
                Apply existing skills to a fast-growing field and a new class of
                integrated problems.
              </p>
            </article>
            <article>
              <strong>Universities and faculty</strong>
              <p>
                Give students a visible, multidisciplinary project connected to
                the future of Canadian robotics.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="competition-cta">
        <div className="container">
          <p className="section-label light-label">Registration starts on campus</p>
          <h2>Your first build is the team.</h2>
          <p>
            Tell us where you&apos;re studying. We&apos;ll help you take the
            next step.
          </p>
          <Link href="/start-a-team" className="button button-white">
            Bring CHRC to your university <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
