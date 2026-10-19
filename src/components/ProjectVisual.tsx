import { projects, type ProjectKey } from "../data/projects";

export default function ProjectVisual({
  kind,
  fullView = false
}: {
  kind: ProjectKey;
  fullView?: boolean;
}) {
  if (kind === "nova") {
    return (
      <div className={`project-visual nova${fullView ? " full-view" : ""}`}>
        <div className="nova-browser">
          <div className="nova-browser-bar" aria-hidden="true">
            <span className="browser-dots">
              <i />
              <i />
              <i />
            </span>
            <span>Nova / AI workspace</span>
          </div>
          <div className="nova-screenshot">
            <img
              src={`${import.meta.env.BASE_URL}images/nova-interface.png`}
              alt="Nova’s dark AI workspace with a welcome message and prompts to explore an idea, build something, or find the words"
              loading="lazy"
              width="1905"
              height="940"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`project-visual ${kind}`}
      aria-label={`${projects[kind].name} conceptual illustration`}
    >
      <span className="visual-label">
        PROJECT EXPLORATION / {projects[kind].number}
      </span>
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
    </div>
  );
}
