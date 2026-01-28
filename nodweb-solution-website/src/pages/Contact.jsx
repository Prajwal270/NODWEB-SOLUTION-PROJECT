import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

function Contact() {
  const WHATSAPP_NUMBER = '917841061453'
  const EMAIL_ADDRESS = 'nodwebsolutionpvtltd@gmail.com'
  const mapRef = useRef(null)
  const [mapVisible, setMapVisible] = useState(false)
  const [accent, setAccent] = useState('#6366F1')

  const EXPERTISE_OPTIONS = [
    { value: 'web', label: 'Web Development', color: '#6366F1' },
    { value: 'app', label: 'App Development', color: '#06B6D4' },
    { value: 'marketing', label: 'Digital Marketing', color: '#10B981' },
    { value: 'design', label: 'UI / UX Design', color: '#A78BFA' },
    { value: 'seo', label: 'SEO & Branding', color: '#F59E0B' },
    { value: 'support', label: 'Maintenance & Support', color: '#0EA5A4' },
  ]

  const [selectedExpertise, setSelectedExpertise] = useState('')
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const expertiseRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (!expertiseRef.current?.contains(e.target)) setExpertiseOpen(false)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  useEffect(() => {
    if (!mapRef.current) return
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setMapVisible(true)
        obs.disconnect()
      }
    }, { rootMargin: '200px' })
    obs.observe(mapRef.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    const body = `Name: ${f.fullName.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\nExpertise: ${f.expertise.value}\n\n${f.message.value}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`, '_blank')
  }

  return (
    <main className="bg-[#05070F] text-white min-h-screen overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">

        <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold">Connect with Our Team of Experts</h1>
          <p className="text-gray-300 mt-3 max-w-2xl">Contact our team of excellence-driven experts today to bring your project to life.</p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2">

          {/* LEFT */}
          <div className="space-y-6">

            {/* Contact Card */}
            <div className="p-4 md:p-6 rounded-lg bg-white/5 space-y-4">

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-800/30 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-indigo-200" />
                </div>
                <div>
                  <div className="text-sm text-gray-300">Call us</div>
                  <div className="text-lg font-semibold">+91 7841061453</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-800/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-200" />
                </div>
                <div className="break-all">
                  <div className="text-sm text-gray-300">Email</div>
                  <div className="text-sm font-semibold">nodwebsolutionpvtltd@gmail.com</div>
                </div>
              </div>

              <button
                onClick={() => window.location.href = '/career'}
                className="w-full text-center px-4 py-2 bg-indigo-600 rounded-md"
              >
                Visit our Job Board
              </button>
            </div>

            {/* Join Card */}
            <div className="p-4 md:p-6 rounded-lg bg-white/5 space-y-3">
              <h3 className="font-semibold">Want to Join Our Team?</h3>
              <p className="text-gray-300 text-sm">Explore internships and full-time roles.</p>
              <a href="/career" className="block w-full text-center border border-indigo-600 text-indigo-400 py-2 rounded">
                View Openings
              </a>
            </div>

            {/* Address */}
            <div className="p-4 md:p-6 rounded-lg bg-white/5">
              <p>Wardaman Nagar, Friend Colony Road<br />Butibori, Nagpur — 441108</p>

              <a
                href="https://wa.me/917841061453"
                className="block mt-4 w-full text-center bg-green-500 py-2 rounded"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-linear-to-br from-[#07264b] to-[#0b3a6a] p-4 md:p-6 rounded-lg border" style={{ borderColor: accent }}>
            <form onSubmit={handleSubmit} className="space-y-3">

              <input name="fullName" placeholder="Full Name" required className="w-full px-3 py-3 rounded bg-transparent border border-gray-600" />
              <input name="email" placeholder="Email" required className="w-full px-3 py-3 rounded bg-transparent border border-gray-600" />
              <input name="phone" placeholder="Phone (optional)" className="w-full px-3 py-3 rounded bg-transparent border border-gray-600" />

              <textarea name="message" rows="5" placeholder="Your message" className="w-full px-3 py-3 rounded bg-transparent border border-gray-600" />

              <button type="submit" className="w-full py-3 rounded-md bg-indigo-600">
                Start a Conversation
              </button>

              <div className="text-xs text-gray-400 text-center">
                🔒 We reply within one business day.
              </div>

            </form>
          </div>

        </div>

        {/* MAP */}
        <section className="mt-12" ref={mapRef}>
          <div className="rounded-xl overflow-hidden border border-indigo-700/20">
            {mapVisible ? (
              <iframe
                title="office-map"
                src="https://www.google.com/maps?q=Wardaman+Nagar+Friend+Colony+Road+Butibori+Nagpur+441108&output=embed"
                className="w-full h-64 md:h-96 border-0"
                loading="lazy"
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-400">Loading map...</div>
            )}
          </div>
        </section>

      </section>
    </main>
  )
}

export default React.memo(Contact)
