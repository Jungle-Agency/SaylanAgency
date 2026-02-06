import { motion } from 'framer-motion'

const words = [
  'Création visuelle',
  'Storytelling',
  'Photographie',
  'Vidéo',
  'Community Management',
  'Direction artistique',
  'Stratégie digitale',
  'Branding',
]

export default function Marquee() {
  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {[...words, ...words].map((word, i) => (
          <span key={i} className="marquee-item">
            {word}
            <span className="marquee-separator">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
