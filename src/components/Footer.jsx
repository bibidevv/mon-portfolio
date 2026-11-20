
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <span className="footer-logo">AT.</span>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/abissetou-tounkara-718365193/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href="https://github.com/bibidevv" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AT. — Tous droits réservés.</span>
          <span>Codé avec ♥ et beaucoup de curiosité.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
