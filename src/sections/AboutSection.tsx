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
            I’m Daniel Cheeley, an Application & Web Development student at
            Ranken Technical College, working toward graduation in May 2027. I
            like building things, understanding how the pieces fit together, and
            working through the problems that show up along the way. In
            software, that curiosity has led me to full-stack projects like
            Nova, my AI assistant, and a deployed MERN issue tracker. I enjoy
            connecting what happens on the screen with the systems and data
            behind it.
          </p>
          <p>
            That same curiosity follows me away from the keyboard. Rebuilding my
            motorcycle from the frame up gave me a different kind of
            problem-solving project: figuring out how individual parts work
            together and staying patient when progress takes time. I also tinker
            with circuitry, experiment with 3D modeling, and play guitar and
            piano. Those interests give me room to try ideas, make adjustments,
            and keep learning through practice.
          </p>
          <p>
            When I need a change of pace, I head outdoors. Snowboarding is one
            of my favorite ways to step away from the screen and focus on
            something completely different. Whether I’m working on an
            application, a mechanical project, or a new piece of music, I like
            having something concrete to work toward and seeing it improve over
            time.
          </p>
          <div className="interest-list">
            <span>Mechanics & circuitry</span>
            <span>Guitar & piano</span>
            <span>3D Modeling</span>
            <span>Snowboarding & outdoors</span>
          </div>
        </div>
        <div className="about-photos">
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
          <figure className="atv-photo">
            <img
              src={`${import.meta.env.BASE_URL}images/atv-mudding.png`}
              loading="lazy"
              alt="Daniel covered in mud while riding an ATV outdoors"
              width="1152"
              height="2064"
            />
            <figcaption>Taking the muddy route.</figcaption>
          </figure>
          <figure className="mountain-photo">
            <div className="mountain-photo-crop">
              <img
                src={`${import.meta.env.BASE_URL}images/mountain-overlook.png`}
                loading="lazy"
                alt="Daniel at a mountain overlook with forested ridges beneath a cloudy sky"
                width="2880"
                height="2160"
              />
            </div>
            <figcaption>Taking in the mountain air.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
