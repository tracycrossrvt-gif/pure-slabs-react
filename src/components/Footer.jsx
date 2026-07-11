import logo from "../assets/pure-slabs-logo.png";
import { businessInfo } from "../data/businessInfo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__brand">
          <a
            href="#landing"
            className="footer__logo"
            aria-label="Return to the top of the page"
          >
            <img
              src={logo}
              alt="Pure Slabs Creations"
              className="footer__logo-image"
            />
          </a>

          <p className="footer__tagline">
            Custom woodworking built with care, character, and purpose.
          </p>
        </div>

        <nav className="footer__navigation" aria-label="Footer navigation">
          <p className="footer__heading">Explore</p>

          <ul className="footer__links">
            {businessInfo.navigation.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <p className="footer__heading">Start a Project</p>

          <p className="footer__contact-text">
            Have an idea for a custom piece?
          </p>

          <a href="#quote" className="footer__quote-link">
            Request a Quote →
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {currentYear} {businessInfo.name}. All rights reserved.
        </p>

        <p>Handcrafted custom woodworking.</p>
      </div>
    </footer>
  );
}

export default Footer;