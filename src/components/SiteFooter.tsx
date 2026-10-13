import Botanical from "./Botanical";
import { resume } from "../data/assets";
export default function SiteFooter() {
  return (
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
  );
}
