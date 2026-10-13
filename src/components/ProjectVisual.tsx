import { projects, type ProjectKey } from "../data/projects";

export default function ProjectVisual({ kind }: { kind: ProjectKey }) {
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
