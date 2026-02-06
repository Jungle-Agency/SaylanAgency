import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Crown, Puzzle } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const packs = [
  {
    id: 'emergence',
    icon: Sparkles,
    name: 'Pack Émergence',
    featured: false,
    tagline: '(Re)poser les fondations de votre image avec élégance et impact.',
    paragraphs: [
      'Ce pack s\'adresse aux marques, entrepreneurs et prestataires qui souhaitent construire ou rafraîchir leur image de manière intentionnelle. À travers une direction artistique précise, un shooting professionnel et un contenu sur-mesure, nous créons un univers cohérent qui vous ressemble.',
      'Qu\'il s\'agisse d\'un lancement, d\'une nouvelle offre ou d\'un besoin ponctuel de visibilité, nous vous livrons une base de contenu esthétique, stratégique et directement exploitable sur vos canaux digitaux.',
      'Ce pack est idéal si vous débutez ou si vous avez besoin d\'un nouveau souffle dans votre communication visuelle.'
    ]
  },
  {
    id: 'presence',
    icon: TrendingUp,
    name: 'Pack Présence',
    featured: true,
    tagline: 'Ancrer votre identité sur le long terme, avec régularité, cohérence et stratégie.',
    paragraphs: [
      'Le pack Présence est conçu pour celles et ceux qui souhaitent maintenir une image professionnelle et engageante sur leurs réseaux sociaux, sans avoir à gérer eux-mêmes la partie créative.',
      'Nous vous accompagnons chaque mois dans la création de contenu visuel et éditorial, en adaptant chaque élément à vos besoins du moment, à vos objectifs de visibilité et à l\'évolution de votre audience.',
      'Notre approche mêle esthétique, storytelling et stratégie : chaque visuel est pensé pour incarner votre identité, chaque message pour renforcer votre positionnement. Ce pack est idéal pour les marques en croissance qui souhaitent gagner en cohérence et en impact.'
    ]
  },
  {
    id: 'signature',
    icon: Crown,
    name: 'Pack Signature',
    featured: false,
    tagline: 'Une prise en charge complète de votre communication, pour une image alignée, professionnelle et sans compromis.',
    paragraphs: [
      'Le pack Signature est notre accompagnement le plus complet. Il s\'adresse aux marques et entreprises qui souhaitent confier entièrement leur stratégie digitale et la gestion de leurs réseaux sociaux à une équipe experte.',
      'Nous nous occupons de tout : création de contenu visuel et rédactionnel, direction artistique, community management (réponses aux messages, stories, veille concurrentielle), stratégie, calendrier éditorial, reporting simplifié.',
      'Nous devenons un véritable prolongement de votre équipe, en vous offrant un accompagnement fluide, personnalisé et réactif. Ce pack est idéal pour celles et ceux qui veulent se concentrer sur leur c\u0153ur de métier tout en sachant que leur image est entre de bonnes mains.'
    ]
  }
]

export default function Packs() {
  const [ref, inView] = useInView({ threshold: 0.05 })
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="packs" className="section packs" ref={ref}>
      <div className="packs-inner">
        <motion.div
          className="packs-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Community management & marketing</p>
          <h2 className="section-title">
            Nos <em>packs</em>
          </h2>
        </motion.div>

        <div className="packs-grid">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.id}
              className={`pack-card ${expanded === pack.id ? 'expanded' : ''} ${pack.featured ? 'pack-card-featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              {pack.featured && <span className="pack-card-badge">Populaire</span>}
              <div className="pack-card-icon">
                <pack.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="pack-card-name">{pack.name}</h3>
              <p className="pack-card-tagline">{pack.tagline}</p>

              <div className={`pack-card-details ${expanded === pack.id ? 'open' : ''}`}>
                {pack.paragraphs.map((p, j) => (
                  <p key={j} className="pack-card-paragraph">{p}</p>
                ))}
              </div>

              <button
                className="pack-card-toggle"
                onClick={() => setExpanded(expanded === pack.id ? null : pack.id)}
              >
                {expanded === pack.id ? 'Voir moins' : 'En savoir plus'}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* A la carte */}
        <motion.div
          className="alacarte"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="alacarte-header">
            <div className="alacarte-icon">
              <Puzzle size={24} strokeWidth={1.5} />
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: '0.5rem' }}>Des solutions adaptées à vos besoins</p>
              <h3 className="alacarte-title">À la carte</h3>
              <p className="alacarte-subtitle">
                Des prestations ponctuelles, sur-mesure, selon vos besoins du moment.
              </p>
            </div>
          </div>
          <p className="alacarte-text">
            Parce que chaque projet est unique, nous proposons également des services à la carte
            pour répondre à des demandes ciblées. Que vous ayez besoin d&apos;un shooting produit,
            d&apos;une couverture d&apos;événement, de stories percutantes pour une campagne spécifique,
            ou simplement d&apos;un audit stratégique de vos réseaux sociaux, nous vous accompagnons
            avec la même exigence et la même créativité.
          </p>
          <div className="alacarte-items">
            {[
              'Shooting photo ou vidéo',
              'Création de Reels / stories',
              'Création de feed harmonisé',
              'Audit de vos réseaux sociaux',
              'Direction artistique d\'un lancement',
              'Accompagnement ponctuel sur une campagne',
              'Valorisation d\'un événement',
            ].map((item) => (
              <span key={item} className="alacarte-item">{item}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="packs-cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="#contact"
            className="packs-contact-btn"
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
