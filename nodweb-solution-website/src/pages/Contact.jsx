import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

function Contact() {
  const WHATSAPP_NUMBER = '917841061453' // international format without +
  const EMAIL_ADDRESS = 'nodwebsolutionpvtltd@gmail.com'
  const mapRef = React.useRef(null)
  const [mapVisible, setMapVisible] = React.useState(false)
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
    function onDocClick(e) {
      if (!expertiseRef.current) return
      if (!expertiseRef.current.contains(e.target)) setExpertiseOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  React.useEffect(() => {
    if (!mapRef.current) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setMapVisible(true)
          obs.disconnect()
        }
      })
    }, { rootMargin: '200px' })
    obs.observe(mapRef.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault()
    const form = e.target
    const name = form.fullName.value || ''
    const email = form.email.value || ''
    const phone = form.phone.value || ''
    const expertise = form.expertise?.value || ''
    const message = form.message.value || ''
    const bodyText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nExpertise: ${expertise}\n\n${message}`
    const encoded = encodeURIComponent(bodyText)
    // Open WhatsApp chat to the provided number with the form content
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
  }, [WHATSAPP_NUMBER])

  return (
    <main className="bg-[#05070F] text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-left mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Connect with Our Team of Experts</h1>
          <p className="text-gray-300 mt-3 max-w-2xl">Contact our team of excellence-driven experts today to bring your project to life.</p>
        </motion.header>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-start">
          {/* Left: contact info & CTA */}
          <div className="space-y-6">
            <div className="p-4 md:p-6 rounded-lg bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 p-2 rounded-full bg-indigo-800/30 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-indigo-200" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-sm text-gray-300">Call us</div>
                  <div className="text-lg font-semibold">+91 7841061453</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 p-2 rounded-full bg-indigo-800/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-200" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-sm text-gray-300">Email</div>
                  <div className="text-lg font-semibold">nodwebsolutionpvtltd@gmail.com</div>
                </div>
              </div>

              <div className="mt-4">
                <button onClick={() => window.location.href = '/career'} className="block md:inline-flex w-full md:w-auto text-center items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md">
                  Visit our Job Board
                </button>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[rgba(255,255,255,0.02)] flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Want to Join Our Talented Team?</h3>
                <p className="text-gray-300 mt-2">Explore internships and full-time roles. We hire driven learners and team players.</p>
              </div>
              <div>
                <a href="/career" className="block md:inline-flex w-full md:w-auto text-center items-center gap-2 px-3 py-2 bg-transparent border border-indigo-600 text-indigo-400 rounded">View Openings</a>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[rgba(255,255,255,0.02)]">
              <h4 className="text-sm text-gray-300">Office Address</h4>
              <p className="mt-2 text-white">Wardaman Nagar, Friend Colony Road<br/>Butibori, Nagpur — 441108</p>
              <div className="mt-4">
                <a href="https://wa.me/917841061453?text=Hi%20NodWeb%20team" target="_blank" rel="noreferrer" className="block md:inline-flex w-full md:w-auto items-center gap-3 bg-green-500 px-4 py-2 rounded text-white text-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.39 1.78.8 2.6a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.48-1.48a2 2 0 0 1 2.11-.45c.82.41 1.7.68 2.6.8A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="text-sm">Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-[#07264b] to-[#0b3a6a] p-4 md:p-6 rounded-lg shadow-lg border" style={{borderColor: accent}}>
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-300 mb-4">Start a conversation — we usually reply within one business day. We keep your details private and secure.</p>

              <form onSubmit={handleSubmit} className="grid gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="sr-only">Full Name</span>
                    <input name="fullName" placeholder="Full Name" required className="w-full px-3 py-3 rounded bg-transparent border border-gray-600 focus:outline-none transition-all duration-200 ease-in-out text-white placeholder-gray-400" />
                  </label>

                  <label className="block">
                    <span className="sr-only">Email Address</span>
                    <input name="email" type="email" placeholder="Email Address" required className="w-full px-3 py-3 rounded bg-transparent border border-gray-600 focus:outline-none transition-all duration-200 ease-in-out text-white placeholder-gray-400" />
                  </label>

                  <label className="block">
                    <span className="sr-only">Phone Number</span>
                    <input name="phone" placeholder="Phone Number (optional, include country code)" className="w-full px-3 py-3 rounded bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-white placeholder-gray-400" />
                    <div className="text-xs text-gray-400 mt-1">Optional — including country code helps us reply quickly.</div>
                  </label>

                  {/* location removed as requested */}
                </div>

                <label className="block relative" ref={expertiseRef}>
                  <span className="sr-only">What Expertise You're Interested In</span>
                  <div onClick={() => setExpertiseOpen(v => !v)} className="w-full px-3 py-3 rounded bg-[rgba(255,255,255,0.02)] text-white border border-gray-600 focus:outline-none flex items-center justify-between cursor-pointer transition-all duration-200 ease-in-out">
                    <span>{selectedExpertise ? (EXPERTISE_OPTIONS.find(x => x.value === selectedExpertise)?.label) : 'What Expertise You\'re Interested In'}</span>
                    <svg className="w-4 h-4 text-gray-300" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <input type="hidden" name="expertise" value={selectedExpertise} />

                  {expertiseOpen && (
                    <div className="absolute left-0 right-0 mt-1 bg-[#071129] border border-gray-700 rounded shadow-lg max-h-48 overflow-auto z-50">
                      {EXPERTISE_OPTIONS.map(opt => (
                        <div key={opt.value} onClick={() => { setSelectedExpertise(opt.value); setAccent(opt.color); setExpertiseOpen(false) }} className="px-3 py-2 hover:bg-indigo-700 cursor-pointer text-white transition-all duration-200 ease-in-out">{opt.label}</div>
                      ))}
                    </div>
                  )}
                </label>

                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea name="message" placeholder="Describe your project, timeline, budget, or paste a portfolio link" rows="6" className="w-full px-3 py-3 rounded bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-white placeholder-gray-400" />
                  <div className="text-xs text-gray-400 mt-1">Short summaries help us reply faster — links to designs or portfolios are welcome.</div>
                </label>

                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                  <button type="submit" style={{background: `linear-gradient(90deg, ${accent}, #2563EB)`}} className="w-full md:w-auto px-6 py-3 rounded-md font-medium text-white transition transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-1">Start a conversation</button>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-sm text-gray-300 text-center md:text-left">Or email {EMAIL_ADDRESS}</a>
                </div>

                <div className="mt-3 text-xs text-gray-400">🔒 We typically reply within one business day. Your details will be kept private and never shared.</div>
              </form>
            </div>
          </div>
        </div>

        {/* Visit Our Office (stylish map card + overlay) */}
        <section className="mt-12">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
            <p className="text-gray-400 mb-4">We're based in Butibori, Nagpur. Visits by appointment — remote collaboration is available worldwide.</p>

            <div ref={mapRef} className="relative rounded-xl overflow-hidden border border-indigo-700/10 bg-gradient-to-br from-[#041229]/40 to-[#06203a]/40 shadow-lg">
              {/* overlay card (glass-like) */}
              <div className="absolute top-4 left-4 z-20 p-3 rounded-md bg-white/6 backdrop-blur-sm border border-white/6 max-w-xs">
                <div className="text-sm font-semibold">NodWeb Solution</div>
                <div className="text-xs text-gray-300">Butibori, Nagpur</div>
                <div className="text-xs text-gray-300 mt-1">Mon–Fri: 10:00–18:00</div>
                <div className="text-xs text-gray-300">Remote-friendly • By appointment</div>
              </div>

              {/* simple branded marker (visual only) */}
              <div className="pointer-events-none absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shadow-xl border-2 border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z" fill="#fff" opacity="0.95"/><circle cx="12" cy="9" r="2.2" fill="#2563EB"/></svg>
                </div>
              </div>

              {mapVisible ? (
                <iframe title="office-map" src="https://www.google.com/maps?q=Wardaman+Nagar+Friend+Colony+Road+Butibori+Nagpur+441108&output=embed" className="w-full h-64 md:h-96" style={{border:0}} allowFullScreen loading="lazy" />
              ) : (
                <div className="w-full h-64 md:h-96 bg-gradient-to-br from-[#061a39] to-[#07284b] flex items-center justify-center text-gray-400">Map will load when visible</div>
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default React.memo(Contact)