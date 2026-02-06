import { motion } from 'framer-motion'
import { ArrowUpRight, Instagram } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    client: 'The Perfect Coffee',
    category: 'Réels & vidéos',
    type: 'video',
    src: '/media/portfolio1.mp4',
    poster: '/media/theperfectcoffee.png',
    aspect: '4/5',
  },
  {
    client: 'Boutique Éclat',
    category: 'Réels & vidéos',
    type: 'gradient',
    gradient: 'linear-gradient(135deg, #c9a87c 0%, #4a3728 100%)',
    aspect: '1/1',
  },
  {
    client: 'Maison Nour',
    category: 'Storytelling',
    type: 'gradient',
    gradient: 'linear-gradient(135deg, #b5a08a 0%, #6d5540 100%)',
    aspect: '4/5',
  },
  {
    client: 'Atelier Genève',
    category: 'Community Management',
    type: 'gradient',
    gradient: 'linear-gradient(135deg, #e6dbd0 0%, #a88b62 100%)',
    aspect: '1/1',
  },
  {
    client: 'Événements Luxe SA',
    category: 'Événement intime',
    type: 'gradient',
    gradient: 'linear-gradient(135deg, #8b6f56 0%, #2c2118 100%)',
    aspect: '4/5',
  },
  {
    client: 'Maison Dorée',
    category: 'Shooting photo',
    type: 'gradient',
    gradient: 'linear-gradient(135deg, #a88b62 0%, #d4c4b0 100%)',
    aspect: '1/1',
  },
]

export default function Portfolio() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="portfolio" className="section portfolio" ref={ref}>
      <div className="portfolio-inner">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            Nos <em>réalisations</em>
          </h2>
          <p className="section-description">
            Chaque projet est une histoire unique. Découvrez comment nous
            transformons la vision de nos clients en identités visuelles fortes.
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="portfolio-card"
              style={{ '--aspect': project.aspect }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video')
                if (video) video.play()
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video')
                if (video) {
                  video.pause()
                  video.currentTime = 0
                }
              }}
            >
              {project.type === 'video' ? (
                <>
                  {project.poster && (
                    <img
                      className="portfolio-card-poster"
                      src={project.poster}
                      alt={project.client}
                    />
                  )}
                  <video
                    className="portfolio-card-media portfolio-card-video"
                    src={project.src}
                    loop
                    muted
                    playsInline
                  />
                </>
              ) : project.type === 'image' ? (
                <img
                  className="portfolio-card-media"
                  src={project.src}
                  alt={project.client}
                />
              ) : (
                <div
                  className="portfolio-card-bg"
                  style={{ background: project.gradient }}
                />
              )}
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-category">
                  {project.category}
                </span>
                <h3 className="portfolio-card-client">{project.client}</h3>
                <ArrowUpRight size={18} className="portfolio-card-arrow" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="https://www.instagram.com/saylan.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-instagram-btn"
          >
            <Instagram size={16} />
            Voir plus sur Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
