import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [form, setForm] = useState({
    instagram: '',
    company: '',
    email: '',
    phone: '',
    pack: '',
    alacarte: false,
    message: '',
    consent: false,
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formsubmit.co/ajax/saylanagency@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Nouveau projet - Saylan Agency',
          Instagram: form.instagram,
          Entreprise: form.company,
          Email: form.email,
          Téléphone: form.phone,
          Pack: form.pack || 'Non spécifié',
          'À la carte': form.alacarte ? 'Oui' : 'Non',
          Message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ instagram: '', company: '', email: '', phone: '', pack: '', alacarte: false, message: '', consent: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="contact-inner">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Ce qu&apos;on apporte de plus avec <em>Saylan Agency</em>
          </h2>
          <p className="contact-intro">
            Saylan Agency se distingue par son approche globale, humaine et sur-mesure.
          </p>
          <p className="contact-text">
            Nous ne sommes pas simplement des créatrices de contenu ou des gestionnaires de page :
            nous sommes une extension de votre équipe, un regard extérieur expert qui s&apos;implique
            réellement dans votre projet.
          </p>
          <p className="contact-text">
            Notre force, c&apos;est notre capacité à tout orchestrer de A à Z : de la recherche du lieu
            de shooting à la mise en scène du produit, de la sélection des modèles jusqu&apos;au montage
            des vidéos, en passant par la création d&apos;un feed harmonieux et stratégique.
          </p>
          <p className="contact-text">
            Ce que nous apportons de plus, c&apos;est la tranquillité d&apos;esprit, l&apos;élégance
            dans l&apos;exécution, et surtout des résultats concrets.
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="form-group">
            <label htmlFor="instagram">@instagram *</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
              required
              placeholder="@votre_compte"
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Nom de l&apos;entreprise *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              placeholder="Votre entreprise"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Adresse de messagerie</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@exemple.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Téléphone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+41 XX XXX XX XX"
            />
          </div>

          <div className="form-group">
            <label>Vous êtes intéressé par le :</label>
            <div className="form-radio-group">
              {['Pack Émergence', 'Pack Présence', 'Pack Signature'].map(pack => (
                <label key={pack} className="form-radio">
                  <input
                    type="radio"
                    name="pack"
                    value={pack}
                    checked={form.pack === pack}
                    onChange={handleChange}
                  />
                  <span className="form-radio-custom" />
                  {pack}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <div className="form-checkbox-wrapper">
              <span>Vous êtes intéressé par des prestations à la carte</span>
              <input
                type="checkbox"
                name="alacarte"
                checked={form.alacarte}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Dites nous en plus sur votre demande :</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Décrivez votre projet..."
            />
          </div>

          <div className="form-group">
            <div className="form-checkbox-wrapper">
              <span>Je suis d&apos;accord avec les conditions générales de ventes et la politique de confidentialité *</span>
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="form-submit" disabled={!form.consent || status === 'sending'} aria-busy={status === 'sending'}>
            <Send size={16} aria-hidden="true" />
            {status === 'sending' ? 'Envoi en cours...' : status === 'sent' ? 'Message envoyé !' : 'Envoyer'}
          </button>

          {status === 'sent' && (
            <p className="form-success" role="status" aria-live="polite">Merci ! Votre message a bien été envoyé. Nous vous recontacterons rapidement.</p>
          )}
          {status === 'error' && (
            <p className="form-error" role="alert" aria-live="assertive">Une erreur est survenue. Veuillez réessayer ou nous contacter directement.</p>
          )}

          <a
            href="#packs"
            className="form-revoir-packs"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Revoir nos packs
          </a>
        </motion.form>
      </div>
    </section>
  )
}
