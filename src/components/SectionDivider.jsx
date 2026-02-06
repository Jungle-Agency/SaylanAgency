import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function SectionDivider() {
  const [ref, inView] = useInView({ threshold: 0.5 })

  return (
    <div className="section-divider" ref={ref}>
      <motion.div
        className="section-divider-line"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.div
        className="section-divider-dot"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      <motion.div
        className="section-divider-line"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  )
}
