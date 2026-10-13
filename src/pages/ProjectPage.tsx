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
      <ProjectVisual kind={projectKey} />
      <p className="illustration-note">
        Conceptual project illustration. Product screenshots coming in the next
        draft.
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
