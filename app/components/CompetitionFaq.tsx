import Link from "next/link";
import { competition2027 } from "../site";

export function CompetitionFaq() {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-layout">
        <h2 id="faq-heading">Frequently asked questions</h2>
        <div className="faq-list">
          <details>
            <summary>Who can enter? Do I need a robotics club?</summary>
            <p>
              Students enrolled at a Canadian university or college during the
              2026–27 academic year can enter solo or in teams of up to 20.
              Club membership is optional but encouraged.
            </p>
          </details>
          <details>
            <summary>How do I register and pay?</summary>
            <p>
              Submit the <Link href="/competition-signup">registration form</Link>
              {" "}by {competition2027.registrationDeadline}. CHRC will email
              your primary contact with instructions for paying the required
              registration fee.
            </p>
          </details>
          <details>
            <summary>What happens after I submit the form?</summary>
            <p>
              You&apos;ll see a confirmation on the page. The CHRC team will
              contact your primary representative with next steps and updates
              on the competition package.
            </p>
          </details>
          <details>
            <summary>What do teams need to build?</summary>
            <p>
              Teams design and build the humanoid hand, assemble the standard
              arm from CHRC build files, and integrate a system for a team
              member to control the robot with their own arm and hand movements.
            </p>
          </details>
          <details>
            <summary>What is the build budget?</summary>
            <p>
              The maximum build budget is {competition2027.maxBuildBudget}.
              The competition package will explain which costs count toward it.
            </p>
          </details>
          <details>
            <summary>When and where is CHRC 2027?</summary>
            <p>
              The event is on {competition2027.date} at the{" "}
              {competition2027.building} at {competition2027.venue}. The planned
              hours are {competition2027.hours}, subject to change. See the{" "}
              <Link href="/#location">venue and directions</Link>.
            </p>
          </details>
          <details>
            <summary>When will the full rules and build files be available?</summary>
            <p>
              The competition package is coming soon. Registered teams will
              receive the full rules, build information, and season milestones
              when it&apos;s released.
            </p>
          </details>
          <details>
            <summary>How can my company support CHRC?</summary>
            <p>
              The <Link href="/sponsors">sponsors page</Link> lists sponsorship
              levels and ways to contribute components, fabrication, or event
              equipment.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
