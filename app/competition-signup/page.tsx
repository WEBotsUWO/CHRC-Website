import type { Metadata } from "next";
import Link from "next/link";
import { CompetitionRegistrationForm } from "../components/CompetitionRegistrationForm";
import { publicAsset } from "../site";

export const metadata: Metadata = {
  title: "CHRC 2027 Sign Up",
  description:
    "Register your university team's interest in the CHRC 2027 Humanoid Hand Competition.",
};

export default function CompetitionSignupPage() {
  return (
    <section className="form-section competition-signup-page">
      <div className="container form-layout">
        <aside className="form-aside">
          <p className="section-label light-label">Competition registration</p>
          <h2>CHRC 2027 is for university teams.</h2>
          <p className="form-aside-copy">
            Submit your team&apos;s information to receive registration updates
            and the competition package when it is released.
          </p>
          <div className="signup-hand-visual" aria-hidden="true">
            <img src={publicAsset("/images/hand-competition-v9.png")} alt="" />
          </div>
          <div className="registration-facts">
            <div>
              <span>System</span>
              <strong>Humanoid hand</strong>
            </div>
            <div>
              <span>Target date</span>
              <strong>May 15, 2027</strong>
            </div>
            <div>
              <span>Arm platform</span>
              <strong>Standardized and supplied</strong>
            </div>
          </div>
        </aside>
        <div className="form-panel">
          <CompetitionRegistrationForm />
        </div>
      </div>
      <Link
        href="/start-a-team"
        className="form-switcher form-switcher-team"
        aria-label="Need a team first? Start a university team"
      >
        <span>Need a team first?</span>
        <strong>Start a university team</strong>
      </Link>
    </section>
  );
}
