import type { Metadata } from "next";
import { CompetitionRegistrationForm } from "../components/CompetitionRegistrationForm";
import { competition2027, publicAsset } from "../site";

export const metadata: Metadata = {
  title: "CHRC 2027 Registration",
  description:
    "Register your university or college team for the CHRC 2027 Humanoid Hand Competition.",
};

export default function CompetitionSignupPage() {
  return (
    <section className="form-section competition-signup-page">
      <div className="container form-layout">
        <aside className="form-aside">
          <p className="section-label light-label">Competition registration</p>
          <h2>CHRC 2027 Humanoid Hand Competition</h2>
          <p className="form-aside-copy">
            Submit your team&apos;s information to receive registration updates
            and the competition package when it is released.
          </p>
          <figure className="signup-hand-visual">
            <img
              src={publicAsset("/images/hand-competition-v9.png")}
              alt="An articulated robotic hand mounted to a robotic arm"
            />
            <figcaption className="concept-render-label">Concept render</figcaption>
          </figure>
          <div className="registration-facts">
            <div>
              <span>Registration deadline</span>
              <strong>{competition2027.registrationDeadline}</strong>
            </div>
            <div>
              <span>System</span>
              <strong>Humanoid hand</strong>
            </div>
            <div>
              <span>Date</span>
              <strong>{competition2027.date}</strong>
            </div>
            <div>
              <span>Venue</span>
              <strong>{competition2027.building}, {competition2027.venue}</strong>
            </div>
            <div>
              <span>Maximum build budget</span>
              <strong>{competition2027.maxBuildBudget}</strong>
            </div>
          </div>
        </aside>
        <div className="form-panel">
          <CompetitionRegistrationForm />
        </div>
      </div>
    </section>
  );
}
