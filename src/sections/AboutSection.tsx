import { image } from "../data/assets";
export default function AboutSection() {
  return (
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
            I like building things, understanding them, and seeing how they
            work. Sometimes that means code. Sometimes it involves getting my
            hands dirty a bit.
          </p>
          <p>
            Outside of software, I tinker with circuitry, play guitar and piano,
            play with 3D modeling and spend time outdoors. Snowboarding is one
            of my favorite ways to step away from the screen.
          </p>
          <div className="interest-list">
            <span>Mechanics & circuitry</span>
            <span>Guitar & piano</span>
            <span>3D Modeling</span>
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
            <figcaption>Chasing the crisp air.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
