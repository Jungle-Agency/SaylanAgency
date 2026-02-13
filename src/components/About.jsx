import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="about" className="section about" ref={ref}>

      <div className="about-inner">
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="about-image-reveal"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              className="about-image"
              src="/media/jihanesalma.webp"
              alt="Jihane & Salma — Fondatrices de Saylan Agency"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Qui sommes nous ?
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Jihane <em>&</em> Salma
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Saylan Agency est une agence créative fondée par Salma et Jihane, spécialisée dans la production
            de contenu visuel authentique. Nous transformons des idées en créations visuelles qui marquent
            les esprits, en alliant esthétique et impact.
          </motion.p>
          <motion.p
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Basées à Genève avec une vision internationale, nous collaborons avec nos clients pour raconter
            leur histoire de manière unique — à travers la photo, la vidéo et les campagnes numériques.
          </motion.p>

          <motion.blockquote
            className="about-blockquote"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Nous ne capturons pas simplement des moments, nous créons des histoires
            qui vivent à travers les visuels.
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
