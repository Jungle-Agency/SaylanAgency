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
  const repeated = [...words, ...words, ...words]

  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {repeated.map((word, i) => (
          <span key={i} className="marquee-item">
            {word}
            <span className="marquee-separator">&#10022;</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
