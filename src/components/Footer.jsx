import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault()
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <span className="footer-logo-main">SAYLAN</span>
              <span className="footer-logo-sub">AGENCY</span>
            </div>
            <p className="footer-brand-desc">
              Nous voulons que chaque projet que nous accompagnons gagne en visibilité,
              en crédibilité et en impact &ndash; dans le fond comme dans la forme.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/saylanagency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:saylanagency@gmail.com"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <a href="#" onClick={(e) => handleNavClick(e, 'top')}>Accueil</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Qui sommes nous ?</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Nos services</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Shooting photo</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Réels & vidéos</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Community Management</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Storytelling</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <p>
              <Mail size={12} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
              saylanagency@gmail.com
            </p>
            <p>Geneva, Switzerland</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Copyright &copy; 2026 Saylan Agency | Fait avec le c&oelig;ur</span>
          <div className="footer-bottom-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
