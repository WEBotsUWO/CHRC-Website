import Link from "next/link";
import { CompetitionEventDetails } from "./components/CompetitionEventDetails";
import { ConfirmedCompetitors } from "./components/ConfirmedCompetitors";
import { competition2027, publicAsset, showConfirmedCompetitors } from "./site";

const venueMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11671.068580472293!2d-81.29400164458008!3d43.0042375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eef7ac56ac837%3A0x9095bb6de8916048!2sAmit%20Chakma%20Engineering%20Building!5e0!3m2!1sen!2sca!4v1793932180350!5m2!1sen!2sca";
const venueDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Amit%20Chakma%20Engineering%20Building%2C%20London%2C%20Ontario&destination_place_id=ChIJN8hqxXrvLogRSGCR6G27lZA";

const futureSeasons = [
  {
    year: "2028",
    phase: "Integration",
    title: "The upper body",
    copy: "Two arms, a torso, perception, and systems that have to work together.",
    image: publicAsset("/images/season-2028-upper-body-v4.png"),
    alt: "A standalone humanoid upper-body assembly with a torso, two arms, and two hands",
  },
  {
    year: "2029",
    phase: "Mobility",
    title: "The biped",
    copy: "Balance and locomotion bring the competition onto its feet.",
    image: publicAsset("/images/season-2029-biped-v4.png"),
    alt: "A standalone robotic biped test platform with a pelvis, two articulated legs, and two feet",
  },
  {
    year: "2030",
    phase: "Full system",
    title: "The humanoid",
    copy: "A complete humanoid competition with integrated, autonomous systems.",
    image: publicAsset("/images/season-2030-humanoid-v4.png"),
    alt: "An advanced full-system humanoid robot with white composite panels and exposed precision actuators",
  },
];

function HomeRegistration() {
  return (
    <div className="home-registration">
      <Link
        href="/competition-signup"
        className="button button-primary button-registration"
      >
        Register now
      </Link>
      <p className="registration-deadline">
        Register by {competition2027.registrationDeadline}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy">
            <CompetitionEventDetails />
            <h1 aria-label="Canadian Humanoid Robotics Competition">
              <span className="hero-title-word">
                <span className="hero-title-initial">C</span>anadian
              </span>{" "}
              <span className="hero-title-word">
                <span className="hero-title-initial">H</span>umanoid
              </span>{" "}
              <span className="hero-title-word">
                <span className="hero-title-initial">R</span>obotics
              </span>{" "}
              <span className="hero-title-word">
                <span className="hero-title-initial">C</span>ompetition
              </span>
            </h1>
            <p className="hero-lede">
              Canada&apos;s first humanoid robotics competition built for
              university and college teams, growing from a focused hand
              competition into a full humanoid event by 2030.
            </p>
            <HomeRegistration />
            <div className="hero-proof" aria-label="Competition highlights">
              <span>University + college teams</span>
              <span>Full humanoid target: 2030</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrap" aria-hidden="true">
          <img
            src={publicAsset("/images/chrc-hero-v5.png")}
            alt=""
            className="hero-image"
          />
        </div>
        <div className="hero-rail" aria-hidden="true">
          <span>01</span>
          <span className="hero-rail-line" />
          <span>2030</span>
        </div>
      </section>

      <section className="section roadmap-section" id="roadmap">
        <div className="container">
          <div className="section-intro roadmap-heading">
            <div>
              <p className="section-label light-label">Competition roadmap</p>
              <h2>Every season adds a system.</h2>
            </div>
            <p>
              We will raise the technical ceiling as the community grows,
              allowing new teams to join without facing an unrealistic workload
              from the start.
            </p>
          </div>
          <Link href="/competition" className="event-card roadmap-feature">
            <figure className="event-art">
              <img
                src={publicAsset("/images/season-2027-hand-v4.png")}
                alt="A robotic arm with an articulated hand"
              />
              <div className="event-art-badge">Inaugural season</div>
              <figcaption className="concept-render-label">Concept render</figcaption>
            </figure>
            <div className="event-details">
              <div>
                <p className="event-overline">CHRC 2027</p>
                <h3>Humanoid Hand Competition</h3>
                <p>
                  Design a humanoid hand, build the standard arm from CHRC files,
                  and control both in real time.
                </p>
              </div>
              <div className="event-meta">
                <div>
                  <span>Date</span>
                  <strong>{competition2027.date}</strong>
                  <small>{competition2027.venue}</small>
                </div>
                <div>
                  <span>Time</span>
                  <strong>{competition2027.hours}</strong>
                  <small>{competition2027.hoursNote}</small>
                </div>
              </div>
              <span className="event-link">View CHRC 2027 details</span>
            </div>
          </Link>

          <section className="future-roadmap" aria-labelledby="future-roadmap-heading">
            <p className="section-label light-label">2028–2030</p>
            <h3 id="future-roadmap-heading">Future roadmap</h3>
            <div className="timeline">
              {futureSeasons.map((item) => (
                <article className="timeline-item" key={item.year}>
                  <figure className="timeline-visual">
                    <img src={item.image} alt={item.alt} />
                    <figcaption className="concept-render-label">Concept render</figcaption>
                  </figure>
                  <p className="timeline-year">{item.year}</p>
                  <p className="timeline-phase">{item.phase}</p>
                  <h4>{item.title}</h4>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <div className="section event-community">
        <div className={showConfirmedCompetitors ? "container split-intro" : "container"}>
          {showConfirmedCompetitors && <ConfirmedCompetitors />}
          <section
            className="section-intro industry-partners"
            id="industry-partners"
            aria-labelledby="industry-partners-heading"
          >
            <p className="section-label">Coming soon</p>
            <h2 id="industry-partners-heading">Industry partners</h2>
            <p className="section-copy">
              We plan to bring robotics and engineering companies to CHRC 2027
              so teams can meet industry professionals and make connections
              during the event.
            </p>
          </section>
        </div>
      </div>

      <section className="section team-section" id="about">
        <div className="container">
          <div className="section-intro split-intro compact-intro">
            <div>
              <p className="section-label">The organizing team</p>
              <h2>Built by students, for students.</h2>
            </div>
            <p className="section-copy">
              CHRC began as an initiative within WE Bots, Western University&apos;s
              humanoid robotics club, to give university and college teams a
              long-term technical platform for building humanoid systems.
            </p>
          </div>
          <div className="leader-grid">
            <article className="leader-card">
              <div className="leader-photo">
                <img
                  src={publicAsset("/images/seth-evans.jpg")}
                  alt="Seth Evans, founder of CHRC"
                />
                <span>Founder</span>
              </div>
              <div className="leader-copy">
                <blockquote>
                  “I started the competition to bridge the gap between
                  universities and the rapidly growing humanoid robotics
                  industry, creating an ecosystem where students can learn,
                  contribute, connect with industry, and build a passion for
                  the technology.”
                </blockquote>
                <div>
                  <strong>Seth Evans</strong>
                  <span>Mechatronics Systems Engineering</span>
                </div>
              </div>
            </article>
            <article className="leader-card">
              <div className="leader-photo">
                <img
                  src={publicAsset("/images/vishwa-prajapati.png")}
                  alt="Vishwa Prajapati, president of CHRC"
                />
                <span>President</span>
              </div>
              <div className="leader-copy">
                <blockquote>
                  “I hope every participant leaves with new skills, meaningful
                  connections, and the confidence to keep exploring robotics.”
                </blockquote>
                <div>
                  <strong>Vishwa Prajapati</strong>
                  <span>Electrical Engineering</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <p className="section-label light-label">University + college teams wanted</p>
          <h2>Join the movement.</h2>
          <p>
            Register your university or college team for the inaugural competition.
          </p>
          <HomeRegistration />
        </div>
      </section>

      <section className="section venue-section" id="location" aria-labelledby="venue-heading">
        <div className="container venue-layout">
          <div className="section-intro compact-intro">
            <p className="section-label">Event location</p>
            <h2 id="venue-heading">{competition2027.venue}</h2>
            <address className="venue-address">
              <strong>{competition2027.building}</strong>
              <br />
              1151 Richmond Street
              <br />
              London, ON N6A 3K7, Canada
            </address>
            <a
              href={venueDirectionsUrl}
              className="button button-quiet"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          </div>
          <iframe
            className="venue-map"
            src={venueMapUrl}
            title="Google Maps showing the Amit Chakma Engineering Building at Western University"
            width={600}
            height={450}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
