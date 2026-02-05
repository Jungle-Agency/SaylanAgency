import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="navbar-logo" onClick={(e) => handleNavClick(e, 'top')}>
        <span className="navbar-logo-main">SAYLAN</span>
        <span className="navbar-logo-sub">AGENCY</span>
      </a>

      <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
        <a href="#" onClick={(e) => handleNavClick(e, 'top')}>Accueil</a>
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Qui sommes nous ?</a>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Nos services</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="navbar-cta">Contact</a>
      </div>

      <div
        className={`navbar-mobile-toggle ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  )
}
