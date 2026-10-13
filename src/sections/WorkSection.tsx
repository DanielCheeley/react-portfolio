import ProjectVisual from "../components/ProjectVisual";
import { projects, type ProjectKey } from "../data/projects";
export default function WorkSection() {
  return (
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
  );
}
