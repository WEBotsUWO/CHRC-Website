import Link from "next/link";

const roadmap = [
  {
    year: "2027",
    phase: "Dexterity",
    title: "The hand",
    copy: "Teams receive a standardized arm and focus their engineering on sensing, grasping, actuation, and control.",
    image: "/images/season-2027-hand-v4.png",
    alt: "A complete robotic arm from its shoulder base to an attached articulated hand",
  },
  {
    year: "2028",
    phase: "Integration",
    title: "The upper body",
    copy: "Two arms, a torso, perception, and systems that have to work together.",
    image: "/images/season-2028-upper-body-v4.png",
    alt: "A standalone humanoid upper-body assembly with a torso, two arms, and two hands",
  },
  {
    year: "2029",
    phase: "Mobility",
    title: "The biped",
    copy: "Balance and locomotion bring the competition onto its feet.",
    image: "/images/season-2029-biped-v4.png",
    alt: "A standalone robotic biped test platform with a pelvis, two articulated legs, and two feet",
  },
  {
    year: "2030",
    phase: "Full system",
    title: "The humanoid",
    copy: "A complete humanoid competition with integrated, autonomous systems.",
    image: "/images/season-2030-humanoid-v4.png",
    alt: "An advanced full-system humanoid robot with white composite panels and exposed precision actuators",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image-wrap" aria-hidden="true">
          <img
            src="/images/chrc-hero-v5.png"
            alt=""
            className="hero-image"
          />
        </div>
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="hero-kicker">C.H.R.C.</p>
            <h1>Canadian Humanoid Robotics Competition</h1>
            <p className="hero-lede">
              The first university-exclusive humanoid robotics competition in
              Canada, built to grow from a focused hand competition into a full
              humanoid event by 2030.
            </p>
            <div className="hero-actions">
              <Link href="/start-a-team" className="button button-primary">
                Start a team
              </Link>
              <Link href="/competition-signup" className="button button-quiet">
                CHRC 2027 - sign up
              </Link>
            </div>
            <div className="hero-proof" aria-label="Competition highlights">
              <span>University exclusive</span>
              <span>Inaugural event: 2027</span>
              <span>Full humanoid target: 2030</span>
            </div>
          </div>
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
              <p className="section-label light-label">The 2030 roadmap</p>
              <h2>Every season adds a system.</h2>
            </div>
            <p>
              We will raise the technical ceiling as the community grows,
              allowing new teams to join without facing an unrealistic workload
              from the start.
            </p>
          </div>
          <div className="timeline">
            {roadmap.map((item, index) => (
              <article className="timeline-item" key={item.year}>
                <div className="timeline-visual">
                  <img
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
                <div className="timeline-index">0{index + 1}</div>
                <p className="timeline-year">{item.year}</p>
                <p className="timeline-phase">{item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="roadmap-cta">
            <div>
              <p className="section-label light-label">Bring CHRC to your campus</p>
              <h3>Interested? Start a team at your university.</h3>
            </div>
            <Link href="/start-a-team" className="button button-white">
              Start a team
            </Link>
          </div>
        </div>
      </section>

      <section className="section next-section">
        <div className="container">
          <div className="section-intro split-intro compact-intro">
            <div>
              <p className="section-label">Next competition</p>
              <h2>CHRC 2027</h2>
            </div>
            <p className="section-copy">
              Every team starts with the same open-source arm. Your job is to
              design the humanoid hand, integrate it with the arm, and
              demonstrate controlled manipulation.
            </p>
          </div>
          <Link href="/competition" className="event-card">
            <div className="event-art">
              <img
                src="/images/hand-competition-v6.png"
                alt="An articulated robot hand mounted to a research-grade robotic arm"
              />
              <div className="event-art-badge">Inaugural season</div>
            </div>
            <div className="event-details">
              <div>
                <p className="event-overline">CHRC 2027 / Competition 01</p>
                <h3>Humanoid Hand Competition</h3>
                <p>
                  Design and build a dexterous humanoid hand, then integrate it
                  with the supplied arm for the first CHRC competition.
                </p>
              </div>
              <div className="event-meta">
                <div>
                  <span>Date</span>
                  <strong>May 15, 2027</strong>
                  <small>Provisional</small>
                </div>
                <div>
                  <span>Time</span>
                  <strong>10:00 AM to 5:00 PM</strong>
                  <small>Eastern Time</small>
                </div>
              </div>
              <span className="event-link">View CHRC 2027 details</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section team-section" id="about">
        <div className="container">
          <div className="section-intro split-intro compact-intro">
            <div>
              <p className="section-label">The organizing team</p>
              <h2>Built by students, for students.</h2>
            </div>
            <p className="section-copy">
              CHRC began inside WeBots, Western University&apos;s humanoid
              robotics club, to give university teams a long-term technical
              platform for building humanoid systems.
            </p>
          </div>
          <div className="leader-grid">
            <article className="leader-card">
              <div className="leader-photo">
                <img
                  src="/images/seth-evans.jpg"
                  alt="Seth Evans, founder of CHRC"
                />
                <span>Founder</span>
              </div>
              <div className="leader-copy">
                <blockquote>
                  “I hope CHRC brings together students from across Canada to
                  build a community united by robotics, innovation, and
                  engineering.”
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
                  src="/images/vishwa-prajapati.png"
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
          <p className="section-label light-label">University teams wanted</p>
          <h2>Join the movement.</h2>
          <p>
            Start a new club with support from CHRC, or register an existing
            university team for the inaugural competition.
          </p>
          <div className="hero-actions">
            <Link href="/start-a-team" className="button button-white">
              Start a team
            </Link>
            <Link href="/competition-signup" className="button button-outline-white">
              CHRC 2027 - sign up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
