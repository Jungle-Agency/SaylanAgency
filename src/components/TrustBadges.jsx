import { motion } from 'framer-motion'
import { Shield, Star, Clock, Heart } from 'lucide-react'

const badges = [
  { icon: Shield, text: 'Service personnalisé' },
  { icon: Star, text: 'Qualité premium' },
  { icon: Clock, text: 'Délais respectés' },
  { icon: Heart, text: 'Satisfaction garantie' },
]

export default function TrustBadges() {
  return (
    <div className="trust-badges">
      <div className="trust-badges-track">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            className="trust-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <badge.icon size={16} className="trust-badge-icon" />
            <span className="trust-badge-text">{badge.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
