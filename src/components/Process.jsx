import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Découverte',
    desc: 'Découverte de vos besoins lors d\'un premier échange.',
  },
  {
    number: '02',
    title: 'Proposition',
    desc: 'Propositions personnalisées et validation du projet.',
  },
  {
    number: '03',
    title: 'Réalisation',
    desc: 'Réalisation du shooting et création des contenus.',
  },
  {
    number: '04',
    title: 'Livraison',
    desc: 'Rapidité et optimisation pour les réseaux sociaux.',
  }
]

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="process" className="section process" ref={ref}>
      <div className="process-inner">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Notre processus de collaboration</p>
          <h2 className="section-title">
            Une approche simple, efficace et <em>orientée résultat</em>
          </h2>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <div className="process-step-number">{step.number}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="#contact"
            className="process-cta-btn"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Travaillons ensemble
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
