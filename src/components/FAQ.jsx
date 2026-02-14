import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    question: 'Quels types de services proposez-vous ?',
    answer: (
      <>
        <p>Chez Saylan Agency, nous accompagnons les marques, restaurants et concepts lifestyle dans le développement de leur image et de leur communication digitale.</p>
        <p>Nos services incluent :</p>
        <ul>
          <li>Shooting photo professionnel</li>
          <li>Création de Reels et contenus vidéo</li>
          <li>Couverture d'événements (lancements, événements privés, activations)</li>
          <li>Community management &amp; stratégie marketing</li>
          <li>Branding &amp; storytelling</li>
          <li>Direction artistique et accompagnement stratégique</li>
        </ul>
        <p>Nous proposons des packs structurés (Émergence, Présence, Signature), ainsi que des prestations sur mesure adaptées aux besoins spécifiques de chaque client.</p>
        <p>Notre objectif : transformer votre image en véritable levier de visibilité et d'attractivité.</p>
      </>
    ),
  },
  {
    question: 'Comment se déroule une collaboration avec Saylan Agency ?',
    answer: (
      <>
        <p>Chaque collaboration débute par un premier échange, qui peut se faire par appel ou lors d'un rendez-vous physique, afin de comprendre votre univers, votre positionnement, vos objectifs et vos besoins.</p>
        <p>Cette rencontre nous permet d'analyser votre concept en profondeur et d'identifier les axes d'amélioration stratégiques.</p>
        <p>À la suite de cet échange, nous vous transmettons une proposition personnalisée, adaptée à votre image et à votre vision.</p>
        <p>Une fois la collaboration validée, nous passons à la phase de mise en place :</p>
        <ul>
          <li>Définition ou ajustement de la stratégie</li>
          <li>Direction artistique</li>
          <li>Production de contenus (photo, vidéo, Reels)</li>
          <li>Planification éditoriale</li>
          <li>Accompagnement et recommandations continues</li>
        </ul>
        <p>Nous assurons ensuite un suivi régulier, afin de garantir cohérence, évolution et performance sur le long terme.</p>
        <p>Chez Saylan Agency, nous privilégions un accompagnement structuré et humain, fondé sur l'écoute, la proximité et la vision stratégique.</p>
      </>
    ),
  },
  {
    question: 'Travaillez-vous uniquement à Genève ?',
    answer: (
      <>
        <p>Saylan Agency est basée à Genève, mais nous accompagnons des clients en Suisse et à l'international.</p>
        <p>Nous intervenons régulièrement en Suisse romande, ainsi qu'à Dubaï, au Maroc, à Paris et à New York, selon les projets et collaborations.</p>
        <p>Nous nous déplaçons pour les shootings, les accompagnements stratégiques et les lancements de marque, en adaptant chaque intervention aux besoins spécifiques du client.</p>
        <p>Chaque collaboration étant unique, nous vous invitons à nous contacter afin d'échanger sur votre localisation et les modalités adaptées à votre projet.</p>
      </>
    ),
  },
  {
    question: 'Comment choisir le pack qui me correspond ?',
    answer: (
      <>
        <p>Le choix du pack dépend avant tout de votre stade de développement, de vos objectifs et du niveau d'accompagnement souhaité.</p>
        <ul>
          <li>Le <strong>Pack Émergence</strong> est idéal si vous lancez votre activité ou souhaitez structurer les bases de votre image et de votre communication.</li>
          <li>Le <strong>Pack Présence</strong> s'adresse aux marques qui souhaitent affirmer leur identité, renforcer leur visibilité et bénéficier d'un accompagnement plus stratégique.</li>
          <li>Le <strong>Pack Signature</strong> est conçu pour les concepts ambitieux recherchant une stratégie complète, une direction artistique poussée et un accompagnement haut de gamme sur le long terme.</li>
        </ul>
        <p>Lors de notre premier échange (appel ou rendez-vous physique), nous vous orientons vers l'accompagnement le plus adapté à votre situation.</p>
        <p>Il est également possible d'opter pour des prestations à la carte ou une offre entièrement personnalisée selon vos besoins spécifiques.</p>
      </>
    ),
  },
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: (
      <>
        <p>Les délais varient en fonction de la nature du projet et du volume de contenus à produire.</p>
        <p>Dès le début de la collaboration, nous établissons un calendrier précis, afin d'assurer une organisation fluide et une livraison dans les délais convenus.</p>
        <p>À titre indicatif :</p>
        <ul>
          <li>Pour un shooting photo / vidéo : la livraison intervient généralement sous <strong>5 à 6 jours ouvrés</strong>.</li>
          <li>Pour un projet plus structuré (stratégie, branding, accompagnement global) : comptez en moyenne <strong>jusqu'à 10 jours</strong>, selon la complexité du projet.</li>
        </ul>
        <p>Nous accordons une grande importance à la réactivité tout en maintenant un niveau d'exigence élevé en matière de qualité.</p>
      </>
    ),
  },
  {
    question: 'Puis-je voir des exemples de vos réalisations ?',
    answer: (
      <>
        <p>Bien sûr.</p>
        <p>Vous pouvez découvrir une sélection de nos projets directement sur notre portfolio, ainsi que sur notre compte Instagram <a href="https://www.instagram.com/saylan.agency/" target="_blank" rel="noopener noreferrer">@saylanagency</a>, où nous partageons régulièrement nos collaborations, shootings et accompagnements stratégiques.</p>
        <p>Chaque réalisation reflète notre exigence en matière d'esthétique, de cohérence et de performance.</p>
        <p>Si vous souhaitez voir des exemples spécifiques liés à votre secteur (restaurant, beauté, lifestyle, traiteur, etc.), nous pouvons également vous transmettre des références adaptées lors de notre échange.</p>
      </>
    ),
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="section faq" ref={ref}>
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
              <h3>
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={18} className="faq-chevron" />
                </button>
              </h3>
              <div className="faq-answer" id={`faq-answer-${i}`} role="region">
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
