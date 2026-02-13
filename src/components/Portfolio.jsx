import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    client: 'Grand Brasserie',
    category: 'Création de contenu',
    location: 'New York City',
    type: 'image',
    src: '/media/Grande_brasserie.webp',
    aspect: '4/5',
  },
  {
    client: 'Hôtel Paramount',
    category: 'Création de contenu',
    location: 'Dubai',
    type: 'video',
    src: '/media/Paramount_hotel.mp4',
    aspect: '4/5',
  },
  {
    client: 'Dognroll',
    category: 'Community Management',
    location: 'Genève',
    type: 'image',
    src: '/media/DOGNROLL.webp',
    aspect: '4/5',
  },
  {
    client: 'Saveurs Abidjanaises',
    category: 'Community Management',
    location: 'Ferney',
    type: 'image',
    src: '/media/SAVEURS_ABIDJANAISES.webp',
    aspect: '4/5',
  },
  {
    client: 'Bahja',
    category: 'Logo',
    location: 'Paris',
    type: 'image',
    src: '/media/Bahja_Paris.webp',
    aspect: '4/5',
  },
  {
    client: 'Royal Hair Swiss',
    category: 'Création de contenu',
    location: 'Lausanne',
    type: 'image',
    src: '/media/Royal_Hair_Swiss.webp',
    aspect: '4/5',
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
                      loading="lazy"
                    />
                  )}
                  <video
                    className="portfolio-card-media portfolio-card-video"
                    src={project.src}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={`Vidéo : ${project.client}`}
                  />
                </>
              ) : project.type === 'image' ? (
                <img
                  className="portfolio-card-media"
                  src={project.src}
                  alt={project.client}
                  loading="lazy"
                />
              ) : (
                <div
                  className="portfolio-card-bg"
                  style={{ background: project.gradient }}
                />
              )}
              <div className="portfolio-card-info">
                <h3 className="portfolio-card-client">{project.client}</h3>
                <div className="portfolio-card-hover-details">
                  <span className="portfolio-card-category">{project.category}</span>
                  {project.location && (
                    <span className="portfolio-card-location-text">{project.location}</span>
                  )}
                </div>
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
