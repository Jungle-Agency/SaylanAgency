import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { number: 50, suffix: '+', label: 'Projets réalisés' },
  { number: 100, suffix: '%', label: 'Clients satisfaits' },
  { number: 3, suffix: ' ans', label: "D'expérience" },
  { number: 24, suffix: 'h', label: 'Réponse garantie' },
]

function AnimatedNumber({ value, suffix, inView }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="stats-number">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section className="stats" ref={ref}>
      <div className="stats-inner">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stats-item"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <AnimatedNumber value={stat.number} suffix={stat.suffix} inView={inView} />
            <span className="stats-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
