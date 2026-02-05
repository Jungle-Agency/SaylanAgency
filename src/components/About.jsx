import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="about-inner">
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            className="about-image"
            src="/media/image-proxy.jpeg"
            alt="Saylan Agency — Behind the scenes"
          />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="section-label">Qui sommes nous ?</p>
          <h2 className="section-title">
            Jihane <em>&</em> Salma
          </h2>

          <p className="about-text">
            Saylan Agency est une agence créative fondée par Salma et Jihane, spécialisée dans la production
            de contenu visuel authentique. Nous transformons des idées en créations visuelles qui marquent
            les esprits, en alliant esthétique et impact.
          </p>
          <p className="about-text">
            Basées à Genève avec une vision internationale, nous collaborons avec nos clients pour raconter
            leur histoire de manière unique — à travers la photo, la vidéo et les campagnes numériques.
          </p>

          <blockquote className="about-blockquote">
            Nous ne capturons pas simplement des moments, nous créons des histoires
            qui vivent à travers les visuels.
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
