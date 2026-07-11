import logo from "../assets/pure-slabs-logo.png";
import { businessInfo } from "../data/businessInfo";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__row">
        <a
          href="#landing"
          className="navbar__logo"
          aria-label="Pure Slabs Creations home"
        >
          <img
            src={logo}
            alt="Pure Slabs Creations"
            className="navbar__logo-image"
          />
        </a>

        <ul className="navbar__links">
          {businessInfo.navigation.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
      </div>
    </nav>
  );
}

export default Navbar;