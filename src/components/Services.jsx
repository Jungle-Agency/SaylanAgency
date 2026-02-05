import { motion } from 'framer-motion'
import { Camera, Video, PartyPopper, Users, BookOpen } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: Camera,
    title: 'Shooting photo',
    desc: 'Immortalisez vos produits, votre image ou lifestyle.',
  },
  {
    icon: Video,
    title: 'Réels et vidéos dynamiques',
    desc: 'Créez des vidéos percutantes pour engager votre audience.',
  },
  {
    icon: PartyPopper,
    title: 'Événements intimes',
    desc: 'Anniversaires, baptêmes, ou gender reveals, nous sublimons vos moments uniques.',
  },
  {
    icon: Users,
    title: 'Community Management & Marketing',
    desc: 'Nous gérons votre page Instagram à 100 %.',
  },
  {
    icon: BookOpen,
    title: 'Storytelling',
    desc: 'Une narration captivante au service de votre marque.',
  },
]

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="services-inner">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Nos services</p>
          <h2 className="section-title">
            Des prestations <em>sur-mesure</em>
          </h2>
        </motion.div>

        <div className="services-grid-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card-5"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <div className="service-card-5-icon">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="service-card-5-title">{service.title}</h3>
              <p className="service-card-5-desc">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="services-contact-btn"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Prendre contact avec nous
          </a>
        </motion.div>
      </div>
    </section>
  )
}
