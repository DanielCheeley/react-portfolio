export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home">
        Daniel Cheeley<span> / Developer</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#background">Background</a>
        <a className="nav-contact" href="#contact">
          Get in touch <span>↗</span>
        </a>
      </nav>
    </header>
  );
}
