import ProjectVisual from "../components/ProjectVisual";
import { projects, type ProjectKey } from "../data/projects";

export default function ProjectPage({
  projectKey
}: {
  projectKey: ProjectKey;
}) {
  const project = projects[projectKey];
  return (
    <article className="case-study">
      <a className="text-link" href="#work">
        ← Back to selected work
      </a>
      <p className="eyebrow">{project.category}</p>
      <h1>{project.name}</h1>
      <p className="case-intro">{project.description}</p>
      <div className="tags">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      {projectKey === "nova" && (
        <a
          className="button project-code-button"
          target="_blank"
          href="https://github.com/DanielCheeley/NovaAgentReAct"
          aria-label="View the project code on GitHub (opens in a new tab)"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
          </svg>
          <span>View the project code</span>
          <span className="project-code-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      )}
      {projectKey === "tracker" && (
        <a
          className="button dark-button"
          href="https://issue-tracker-979147028817.us-central1.run.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Try the live Issue Tracker (opens in a new tab)"
        >
          Try the live Issue Tracker ↗
        </a>
      )}
      <ProjectVisual kind={projectKey} fullView />
      <p className="illustration-note">
        {projectKey === "nova"
          ? "Nova’s workspace — a conversational interface with starting points for ideas, code, and writing."
          : "Conceptual illustration of the project’s stack. Explore the deployed application using the live link above."}
      </p>
      <div className="case-sections">
        {project.sections.map(([title, body]) => (
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
  );
}
