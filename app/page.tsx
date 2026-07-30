import Link from "next/link";

const roadmap = [
  {
    year: "2026",
    phase: "Dexterity",
    title: "The hand",
    copy: "An accessible entry point: sensing, grasping, actuation, and control.",
    position: "3%",
  },
  {
    year: "2027",
    phase: "Reach",
    title: "The arm",
    copy: "The inaugural challenge adds structure, range of motion, and task scoring.",
    position: "26%",
  },
  {
    year: "2028",
    phase: "Integration",
    title: "The upper body",
    copy: "Two arms, a torso, perception, and systems that have to work together.",
    position: "50%",
  },
  {
    year: "2029",
    phase: "Mobility",
    title: "The biped",
    copy: "Balance and locomotion bring the competition onto its feet.",
    position: "74%",
  },
  {
    year: "2030",
    phase: "Full system",
    title: "The humanoid",
    copy: "A complete humanoid competition: integrated, autonomous, and ambitious.",
    position: "97%",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image-wrap" aria-hidden="true">
          <img
            src="/images/chrc-hero.png"
            alt=""
            className="hero-image"
          />
        </div>
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Canada&apos;s university robotics proving ground
            </div>
            <p className="hero-kicker">C.H.R.C.</p>
            <h1>Canadian Humanoid Robotics Competition</h1>
            <p className="hero-lede">
              Canada&apos;s first university-exclusive competition dedicated to
              building the engineers—and the humanoid systems—of tomorrow.
            </p>
            <div className="hero-actions">
              <Link href="/start-a-team" className="button button-primary">
                Start a team <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/competition" className="button button-quiet">
                Explore the 2027 challenge <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-proof" aria-label="Competition highlights">
              <span>University exclusive</span>
              <span>Beginner welcoming</span>
              <span>Built for Canada</span>
            </div>
          </div>
        </div>
        <div className="hero-rail">
          <span>01</span>
          <span className="hero-rail-line" />
          <span>2030</span>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <div className="section-intro split-intro">
            <div>
              <p className="section-label">Our north star</p>
              <h2>Start with one system. Build toward the whole human form.</h2>
            </div>
            <div>
              <p className="section-copy">
                Humanoid robotics is moving quickly, but student access is not.
                CHRC closes that gap with a competition designed to grow in
                capability every year—and to grow new Canadian teams with it.
              </p>
              <p className="section-copy">
                By 2030, our goal is a full humanoid robot competition with the
                reputation, technical depth, and staying power of the great
                university engineering competitions.
              </p>
            </div>
          </div>
          <div className="vision-stats">
            <article>
              <strong>01</strong>
              <span>national platform</span>
            </article>
            <article>
              <strong>05</strong>
              <span>stages to full humanoid</span>
            </article>
            <article>
              <strong>∞</strong>
              <span>disciplines welcome</span>
            </article>
          </div>
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
              We will raise the technical ceiling as the community grows—so new
              teams can enter today and still have a bold horizon to chase.
            </p>
          </div>
          <div className="roadmap-render">
            <img
              src="/images/roadmap-evolution.png"
              alt="Five stages of a humanoid robot evolving from a hand to a full humanoid"
              className="roadmap-render-image"
            />
            <span className="roadmap-render-caption">
              One platform. Five stages. A national community.
            </span>
          </div>
          <div className="timeline">
            {roadmap.map((item, index) => (
              <article className="timeline-item" key={item.year}>
                <div
                  className="timeline-crop"
                  style={{ "--crop-position": item.position } as React.CSSProperties}
                >
                  <img
                    src="/images/roadmap-evolution.png"
                    alt=""
                    aria-hidden="true"
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
              <p className="section-label light-label">Your campus belongs here</p>
              <h3>Interested? You can start with one person.</h3>
            </div>
            <Link href="/start-a-team" className="button button-white">
              Bring CHRC to your university <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section next-section">
        <div className="container">
          <div className="section-intro split-intro compact-intro">
            <div>
              <p className="section-label">Next competition</p>
              <h2>The first challenge is within reach.</h2>
            </div>
            <p className="section-copy">
              Build an articulated humanoid arm, prove it across a set of
              dexterity tasks, and help establish a new Canadian tradition.
            </p>
          </div>
          <Link href="/competition" className="event-card">
            <div className="event-art">
              <img
                src="/images/arm-challenge.png"
                alt="Robotic arm reaching toward a red maple leaf target"
              />
              <div className="event-art-badge">Inaugural season</div>
            </div>
            <div className="event-details">
              <div>
                <p className="event-overline">CHRC 2027 / Challenge 01</p>
                <h3>The Humanoid Arm Challenge</h3>
                <p>
                  Design, build, and demonstrate a humanoid robotic arm over one
                  academic year. We provide the competition package, milestone
                  support, and a national stage.
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
                  <strong>10:00 AM–5:00 PM</strong>
                  <small>Eastern Time</small>
                </div>
              </div>
              <span className="event-link">
                See challenge details <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section team-section" id="about">
        <div className="container">
          <div className="section-intro split-intro compact-intro">
            <div>
              <p className="section-label">The people starting it</p>
              <h2>Built by students, for students.</h2>
            </div>
            <p className="section-copy">
              CHRC began inside WeBots, Western University&apos;s humanoid
              robotics club, with a simple conviction: ambitious robotics should
              be something students get to build—not just read about.
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
                  connections, and the confidence to keep exploring the future
                  of robotics.”
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
          <p className="section-label light-label">The future needs a team</p>
          <h2>Why not yours?</h2>
          <p>
            Whether you already lead a club or you&apos;re the only person on
            campus thinking about humanoids, we&apos;ll help you take the next
            step.
          </p>
          <Link href="/start-a-team" className="button button-white">
            Start with CHRC <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
