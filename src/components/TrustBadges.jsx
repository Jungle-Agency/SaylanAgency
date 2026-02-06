import { motion } from 'framer-motion'

const badges = [
  { icon: '✦', text: 'Service personnalisé' },
  { icon: '◈', text: 'Qualité premium' },
  { icon: '❖', text: 'Délais respectés' },
  { icon: '✧', text: 'Satisfaction garantie' },
]

export default function TrustBadges() {
  return (
    <div className="trust-badges">
      <div className="trust-badges-track">
        {[...badges, ...badges].map((badge, i) => (
          <motion.div
            key={i}
            className="trust-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="trust-badge-icon">{badge.icon}</span>
            <span className="trust-badge-text">{badge.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
