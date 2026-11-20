
import { useState } from "react";
import "./navbar.css";

const links = [
  { label: "Expériences", href: "#experiences" },
  { label: "Freelance", href: "#freelance" },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("#experiences");

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

       <a href="#accueil" className="navbar-logo">
  <span className="logo-name">AT.</span>
</a>

        <div className="navbar-center">
          <div className="navbar-links">

            <span
              className="nav-indicator"
              style={{
                transform: `translateX(${
                  links.findIndex(
                    (link) => link.href === activeLink
                  ) * 130
                }px)`,
              }}
            />

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-link ${
                  activeLink === link.href ? "active" : ""
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>

        <a href="#contact" className="navbar-contact">
          <span>Contactez-moi ! </span>
          <span>↗</span>
        </a>

      </nav>
    </header>
  );
}

export default Navbar;
