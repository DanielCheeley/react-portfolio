import { useEffect, useState } from "react";
import "./App.css";

const image = (name: string) => `${import.meta.env.BASE_URL}images/${name}.jpg`;
const resume = `${import.meta.env.BASE_URL}documents/Daniel-Cheeley-Resume.pdf`;
const projects = {
  nova: {
    name: "Nova",
    number: "01",
    category: "AI APPLICATION · PERSONAL PROJECT",
    summary: "An AI assistant built to do more than talk.",
    description:
      "An ongoing project exploring conversational interfaces, tool use, and the full-stack systems that turn a conversation into useful actions.",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    sections: [
      [
        "The idea",
        "Build an assistant that connects a conversational interface to useful tools and actions. Nova is an ongoing exploration of how those pieces work together."
      ],
      [
        "Across the stack",
        "The project brings together a React frontend and a TypeScript / Express backend. Work spans the chat experience, streamed responses, and coordination between the assistant and its tools."
      ],
      [
        "A work in progress",
        "Nova continues to evolve. A deeper technical walkthrough, real screenshots, and repository links will be added to this case study."
      ]
    ]
  },
  tracker: {
    name: "Issue tracker",
    number: "02",
    category: "FULL-STACK APPLICATION · SCHOOL PROJECT",
    summary: "From a React interface to a complete REST API.",
    description:
      "A deployed MERN application for tracking issues, connecting a web interface to an Express API and MongoDB persistence.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    sections: [
      [
        "The idea",
        "Create a deployed issue tracker with a full REST API as part of my school work at Ranken Technical College."
      ],
      [
        "Across the stack",
        "The application uses MongoDB, Express, React, and Node.js. It connects a frontend experience to API endpoints and persistent data."
      ],
      [
        "Current state",
        "The project is deployed and still in development, with parts of the functionality unfinished. Screenshots, deployment links, and a precise breakdown of completed features will be added next."
      ]
    ]
  }
};
type ProjectKey = keyof typeof projects;

function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`botanical ${className}`}
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
    >
      <path d="M38 248C63 186 76 114 139 14" />
      <path d="M62 190C15 173 22 128 62 190ZM65 181C108 193 129 158 65 181ZM80 144C36 130 48 95 80 144ZM85 130C132 141 149 99 85 130ZM105 92C62 82 73 45 105 92ZM113 76C151 87 168 50 113 76ZM133 37C111 20 130 4 133 37Z" />
    </svg>
  );
}

function ProjectVisual({ kind }: { kind: ProjectKey }) {
  return (
    <div
      className={`project-visual ${kind}`}
      aria-label={`${projects[kind].name} conceptual illustration`}
    >
      <span className="visual-label">
        PROJECT EXPLORATION / {projects[kind].number}
      </span>
      {kind === "nova" ? (
        <>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="nova-mark">
            n<span>✳</span>
          </div>
          <div className="visual-bottom">
            <span>Conversation → action</span>
            <span>NOVA</span>
          </div>
        </>
      ) : (
        <>
          <div className="tracker-window">
            <div className="window-bar">
              <i />
              <i />
              <i />
              <span>Issue tracker</span>
            </div>
            <div className="board">
              {["Open", "In progress", "Resolved"].map((label, index) => (
                <div key={label}>
                  <span>{label}</span>
                  <div className="ticket">
                    <b />
                    <i />
                    <i />
                    <small>{["API", "Frontend", "Database"][index]}</small>
                  </div>
                  {index === 0 && (
                    <div className="ticket short">
                      <b />
                      <i />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="visual-bottom">
            <span>Interface → API → database</span>
            <span>MERN</span>
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const update = () => {
      setHash(window.location.hash);
      if (window.location.hash.startsWith("#/")) window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const key = hash.replace("#/projects/", "");
  const selected = Object.hasOwn(projects, key)
    ? (key as ProjectKey)
    : undefined;
  useEffect(() => {
    document.title = selected
      ? `${projects[selected].name} — Daniel Cheeley`
      : "Daniel Cheeley — Full-stack developer";
  }, [selected]);
  useEffect(() => {
    if (!selected && hash.startsWith("#") && !hash.startsWith("#/")) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, selected]);
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home">
          Daniel Cheeley<span> / Developer</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#background">Background</a>
          <a className="nav-contact" href="#contact">
            Get in touch <span>↗</span>
          </a>
        </nav>
      </header>
      <main>
        {selected ? (
          <article className="case-study">
            <a className="text-link" href="#work">
              ← Back to selected work
            </a>
            <p className="eyebrow">{projects[selected].category}</p>
            <h1>{projects[selected].name}</h1>
            <p className="case-intro">{projects[selected].description}</p>
            <div className="tags">
              {projects[selected].stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <ProjectVisual kind={selected} />
            <p className="illustration-note">
              Conceptual project illustration. Product screenshots coming in the
              next draft.
            </p>
            <div className="case-sections">
              {projects[selected].sections.map(([title, body]) => (
                <section key={title}>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </section>
              ))}
            </div>
            <a className="button dark-button" href="#contact">
              Let’s talk about the project ↗
            </a>
          </article>
        ) : (
          <>
            <section id="home" className="hero">
              <div className="hero-inner">
                <div className="portrait-wrap">
                  <img
                    className="portrait"
                    src={image("portrait")}
                    alt="Daniel Cheeley wearing an olive jacket among green trees"
                  />
                  <Botanical />
                  <span className="photo-caption">
                    A little more at home outdoors.
                  </span>
                </div>
                <div className="hero-copy">
                  <p className="eyebrow">
                    <span className="status-dot" /> FULL-STACK DEVELOPER IN THE
                    MAKING
                  </p>
                  <h1>
                    Curious by nature.
                    <br />A builder <em>at heart.</em>
                  </h1>
                  <p className="hero-description">
                    I’m Daniel, a full-stack development student who loves
                    turning ideas into working software—and figuring out how
                    things work along the way.
                  </p>
                  <div className="hero-actions">
                    <a className="button light-button" href="#work">
                      Explore my work <span>↘</span>
                    </a>
                    <a
                      className="quiet-link"
                      href={resume}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View résumé / CV ↗
                    </a>
                  </div>
                  <div className="hero-meta">
                    <span>Ranken Technical College</span>
                    <span>Graduating May 2027</span>
                  </div>
                </div>
              </div>
              <div className="hero-footer">
                <span>CODE. CREATE. KEEP LEARNING.</span>
                <a href="#work">SCROLL TO EXPLORE ↓</a>
              </div>
            </section>
            <section id="work" className="section work">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">01 / SELECTED WORK</p>
                  <h2>
                    Ideas taking <em>shape.</em>
                  </h2>
                </div>
                <p>
                  Two projects, different challenges.
                  <br />A growing perspective across the stack.
                </p>
              </div>
              {(Object.keys(projects) as ProjectKey[]).map((kind) => (
                <article className={`project-row ${kind}`} key={kind}>
                  <a
                    className="visual-link"
                    href={`#/projects/${kind}`}
                    aria-label={`Read about ${projects[kind].name}`}
                  >
                    <ProjectVisual kind={kind} />
                  </a>
                  <div className="project-copy">
                    <p className="eyebrow">{projects[kind].category}</p>
                    <h3>
                      <a href={`#/projects/${kind}`}>
                        {projects[kind].name} <span>↗</span>
                      </a>
                    </h3>
                    <h4>{projects[kind].summary}</h4>
                    <p>{projects[kind].description}</p>
                    <div className="tags">
                      {projects[kind].stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    <a className="text-link" href={`#/projects/${kind}`}>
                      Explore the project <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </section>
            <section id="about" className="about">
              <div className="section about-inner">
                <div className="about-copy">
                  <p className="eyebrow">02 / BEYOND THE KEYBOARD</p>
                  <h2>
                    Same curiosity.
                    <br />
                    <em>Different tools.</em>
                  </h2>
                  <p>
                    I like building things, understanding them, and making them
                    work better. Sometimes that means code. Sometimes it means
                    taking a motorcycle down to its frame and rebuilding it.
                  </p>
                  <p>
                    Outside of software, I tinker with circuitry, play guitar
                    and piano, and spend time outdoors. Snowboarding is one of
                    my favorite ways to step away from the screen.
                  </p>
                  <div className="interest-list">
                    <span>Mechanics & circuitry</span>
                    <span>Guitar & piano</span>
                    <span>Snowboarding & outdoors</span>
                  </div>
                </div>
                <div className="photo-story">
                  <figure className="bike-photo">
                    <img
                      src={image("motorcycle")}
                      loading="lazy"
                      alt="Daniel with his motorcycle outdoors"
                    />
                    <figcaption>A rebuild from the frame up.</figcaption>
                  </figure>
                  <figure className="snow-photo">
                    <img
                      src={`${import.meta.env.BASE_URL}images/snowboarding.png`}
                      loading="lazy"
                      alt="Daniel sitting on a snowy slope with his snowboard"
                    />
                    <figcaption>Room to recharge.</figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section id="background" className="section background">
              <div>
                <p className="eyebrow">03 / THE FOUNDATION</p>
                <h2>
                  Learning.
                  <br />
                  Working.
                  <br />
                  <em>Growing.</em>
                </h2>
                <Botanical />
              </div>
              <div className="background-items">
                <article>
                  <span className="item-label">
                    EDUCATION · EXPECTED MAY 2027
                  </span>
                  <h3>Ranken Technical College</h3>
                  <p className="item-subtitle">
                    Application & Web Development (AWD)
                  </p>
                  <p>
                    Building my foundation in full-stack development through
                    coursework and hands-on projects, including a deployed MERN
                    issue tracker.
                  </p>
                </article>
                <article>
                  <span className="item-label">EXPERIENCE · 5 YEARS</span>
                  <h3>Imo’s Pizza</h3>
                  <p className="item-subtitle">
                    Kitchen team · 3 years / Delivery driver · 2 years
                  </p>
                  <p>
                    Five years of practical work experience alongside my
                    development journey, from working in the kitchen to making
                    deliveries.
                  </p>
                </article>
                <article>
                  <span className="item-label">PERSONAL PROJECT</span>
                  <h3>A motorcycle, rebuilt</h3>
                  <p>
                    Rebuilt my bike from the frame up—a hands-on project in
                    patience, problem-solving, and seeing a challenging task
                    through.
                  </p>
                  <details>
                    <summary>
                      See where it started <span>↗</span>
                    </summary>
                    <img
                      src={image("bike-before")}
                      loading="lazy"
                      alt="Motorcycle halfway through the rebuild, with exposed components"
                    />
                    <p>
                      This photo was taken halfway through the rebuild, with the
                      components still exposed.
                    </p>
                  </details>
                </article>
              </div>
            </section>
          </>
        )}
      </main>
      <footer id="contact" className="contact">
        <Botanical />
        <p className="eyebrow">ALWAYS CURIOUS ABOUT WHAT’S NEXT</p>
        <h2>
          Let’s build
          <br />
          <em>something useful.</em>
        </h2>
        <p>
          I’m working toward a career in full-stack development.
          <br />
          Explore my code, connect on LinkedIn, or find me elsewhere online.
        </p>
        <div className="contact-actions">
          <a
            className="button light-button"
            href="https://github.com/danielcheeley"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="quiet-link"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            View résumé / CV ↗
          </a>
          <a
            className="quiet-link"
            href={resume}
            download="Daniel-Cheeley-Resume.pdf"
          >
            Download résumé ↓
          </a>
        </div>
        <nav className="social-links" aria-label="Social profiles">
          <a
            href="https://www.linkedin.com/in/daniel-cheeley-7119aa310/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.facebook.com/daniel.cheeley.3/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>
          <a
            href="https://www.instagram.com/daniel_cheeley/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Daniel Cheeley</span>
          <span>Built with React. Rooted in curiosity.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
export default App;
