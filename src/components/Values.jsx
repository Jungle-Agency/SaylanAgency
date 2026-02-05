import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const values = [
  {
    title: 'L\'exigence, d\'abord',
    desc: 'Nous apportons une attention particulière à chaque détail, du brief à la livraison, pour garantir un rendu professionnel et soigné.',
  },
  {
    title: 'La créativité, ensuite',
    desc: 'Nous n\'aimons pas le contenu générique. Chaque projet est une nouvelle page blanche, une nouvelle vision à mettre en scène avec originalité.',
  },
  {
    title: 'La fiabilité, évidemment',
    desc: 'Nous respectons nos engagements, les délais, les attentes, et restons toujours disponibles pour nos clients.',
  },
  {
    title: 'L\'authenticité, toujours',
    desc: 'Nous cherchons à comprendre la personnalité de chaque client, son parcours, ses valeurs, pour en faire une communication sincère et marquante.',
  },
  {
    title: 'Et enfin, l\'élégance',
    desc: 'Dans l\'esthétique que nous créons, mais aussi dans notre manière de collaborer, toujours avec transparence, bienveillance et professionnalisme.',
  },
]

export default function Values() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section className="section values" ref={ref}>
      <div className="values-inner">
        <motion.div
          className="values-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Nos valeurs</p>
          <h2 className="section-title">
            Ce qui nous <em>guide</em>
          </h2>
          <p className="section-description" style={{ margin: '0 auto' }}>
            Ces valeurs sont le socle de Saylan, et ce sont elles qui nous guident dans toutes nos collaborations.
          </p>
        </motion.div>

        <div className="values-list">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="value-item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              <div className="value-item-marker" />
              <div>
                <h3 className="value-item-title">{value.title}</h3>
                <p className="value-item-desc">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
