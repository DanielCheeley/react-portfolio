import Botanical from "../components/Botanical";
import { image } from "../data/assets";
export default function BackgroundSection() {
  return (
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
          <span className="item-label">EDUCATION · EXPECTED MAY 2027</span>
          <h3>Ranken Technical College</h3>
          <p className="item-subtitle">Application & Web Development (AWD)</p>
          <p>
            Building my foundation in full-stack development through coursework
            and hands-on projects, including a deployed MERN issue tracker.
          </p>
        </article>
        <article>
          <span className="item-label">EXPERIENCE · 5 YEARS</span>
          <h3>Imo’s Pizza</h3>
          <p className="item-subtitle">
            Kitchen team · 3 years / Delivery driver · 2 years
          </p>
          <p>
            Five years of practical work experience alongside my development
            journey, from working in the kitchen to making deliveries.
          </p>
        </article>
        <article>
          <span className="item-label">PERSONAL PROJECT</span>
          <h3>A motorcycle, rebuilt</h3>
          <p>
            Rebuilt my bike from the frame up—a hands-on project in patience,
            problem-solving, and seeing a challenging task through.
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
  );
}
