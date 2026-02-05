import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    question: 'Quels types de services proposez-vous ?',
    answer:
      'Nous proposons du shooting photo, de la création de réels et vidéos, la couverture d\'événements intimes, du community management & marketing, ainsi que du storytelling. Nous avons également des packs adaptés à vos besoins (Émergence, Présence, Signature) et des prestations à la carte.',
  },
  {
    question: 'Comment se déroule une collaboration avec Saylan ?',
    answer:
      'Tout commence par un appel découverte pour comprendre votre univers, vos besoins et vos objectifs. Ensuite, nous vous envoyons une proposition sur-mesure. Une fois validée, nous passons à la réalisation. Enfin, nous vous livrons l\'ensemble des contenus finalisés, prêts à être utilisés.',
  },
  {
    question: 'Travaillez-vous uniquement à Genève ?',
    answer:
      'Nous sommes basées à Genève, mais nous intervenons dans toute la Suisse romande et au-delà selon les projets. N\'hésitez pas à nous contacter pour discuter de votre localisation.',
  },
  {
    question: 'Comment choisir le pack qui me correspond ?',
    answer:
      'Le Pack Émergence est idéal si vous débutez et avez besoin de poser les bases de votre image. Le Pack Présence convient à ceux qui veulent affirmer leur identité et gagner en visibilité. Le Pack Signature est pensé pour une stratégie complète et un accompagnement haut de gamme. Vous pouvez aussi opter pour des prestations à la carte.',
  },
  {
    question: 'Quels sont vos délais de livraison ?',
    answer:
      'Les délais varient selon la nature et l\'ampleur du projet. Nous définissons ensemble un calendrier clair dès le début de la collaboration, et nous nous engageons à le respecter. En général, comptez entre 1 et 3 semaines selon la prestation.',
  },
  {
    question: 'Puis-je voir des exemples de vos réalisations ?',
    answer:
      'Bien sûr ! Vous pouvez consulter notre portfolio sur cette page ou découvrir notre travail directement sur notre compte Instagram @saylanagency. Chaque projet reflète notre engagement pour la qualité et l\'authenticité.',
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section faq" ref={ref}>
      <div className="faq-inner">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">FAQ</p>
          <h2 className="section-title">
            Questions <em>fréquentes</em>
          </h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Tout ce que vous devez savoir avant de travailler avec nous.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <ChevronDown size={18} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
