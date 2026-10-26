import Botanical from "../components/Botanical";
import { image, resume } from "../data/assets";
export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="portrait-wrap">
          <img
            className="portrait"
            src={image("charcoal-suit")}
            alt="Daniel Cheeley wearing an olive jacket among green trees"
          />
          <Botanical />
          <span className="photo-caption">A little more at home outdoors.</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> FULL-STACK DEVELOPER IN THE MAKING
          </p>
          <h1>
            Curious by nature.
            <br />A builder <em>at heart.</em>
          </h1>
          <p className="hero-description">
            I’m Daniel, a full-stack development student who loves turning ideas
            into working software—and figuring out how things work along the
            way.
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
  );
}
