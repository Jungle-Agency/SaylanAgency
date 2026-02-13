import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const mediaRects = [
  {
    id: 1,
    label: 'Shooting',
    type: 'video',
    src: '/media/shootingroyalhairswiss.mp4',
    style: { top: '3%', left: '2%', width: '300px', height: '420px', rotate: -4 },
    delay: 0.3,
  },
  {
    id: 2,
    label: 'Reels',
    type: 'video',
    src: '/media/Reelritz.mp4',
    style: { top: '6%', right: '3%', width: '260px', height: '380px', rotate: 3 },
    delay: 0.5,
  },
  {
    id: 4,
    label: 'Branding',
    type: 'image',
    src: '/media/branding.webp',
    style: { bottom: '8%', right: '1%', width: '240px', height: '340px', rotate: -5 },
    delay: 0.4,
  },
  {
    id: 3,
    label: 'Content',
    type: 'image',
    src: '/media/contenttheperfectcoffee.webp',
    style: { bottom: '4%', left: '6%', width: '340px', height: '220px', rotate: 2, zIndex: 20 },
    delay: 0.7,
  },
]

export default function Hero() {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollDown = (e) => {
    e.preventDefault()
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero" role="banner">
      {/* Decorative floating elements */}
      <div className="deco-circle deco-circle-1" aria-hidden="true" />
      <div className="deco-circle deco-circle-2" aria-hidden="true" />

      {/* Floating media rectangles - desktop only */}
      <div className="hero-video-grid" aria-hidden="true">
        {mediaRects.map((rect) => (
          <div
            key={rect.id}
            style={{
              position: 'absolute',
              top: rect.style.top,
              left: rect.style.left,
              right: rect.style.right,
              bottom: rect.style.bottom,
              width: rect.style.width,
              height: rect.style.height,
              zIndex: rect.style.zIndex || 1,
            }}
          >
          <motion.div
            className="hero-video-rect"
            style={{
              width: '100%',
              height: '100%',
              transform: `rotate(${rect.style.rotate}deg)`,
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: rect.delay, ease: 'easeOut' }}
          >
            <div className="hero-video-rect-inner">
              {rect.type === 'video' ? (
                <video
                  className="hero-rect-media"
                  src={rect.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={`Vidéo : ${rect.label}`}
                />
              ) : (
                <img
                  className="hero-rect-media"
                  src={rect.src}
                  alt={rect.label}
                  loading="lazy"
                />
              )}
              <div className="hero-rect-overlay">
                <span className="hero-video-rect-label">{rect.label}</span>
              </div>
            </div>
          </motion.div>
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Saylan Agency — Geneva, Switzerland
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Votre agence de <em>marketing</em> & de <em>communication</em> à Genève
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Nous créons une véritable identité visuelle, un univers cohérent,
          fort, et surtout fidèle à vos valeurs.
        </motion.p>

        <motion.a
          href="#services"
          className="hero-cta"
          onClick={handleClick}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Découvrez nos services</span>
          <ArrowRight size={16} />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={handleScrollDown}
        style={{ cursor: 'pointer' }}
      >
        <span>Découvrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
