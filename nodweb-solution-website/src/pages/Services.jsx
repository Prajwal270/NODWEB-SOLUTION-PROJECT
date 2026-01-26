import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
const ServiceCard = React.lazy(() => import('../components/ServiceCardpop'))
const PerfVisual = React.lazy(() => import('../components/PerfVisual'))
import { Code, Smartphone, Megaphone, PenTool, Search, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/services.css'

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Modern, fast, and responsive websites using latest technologies.',
    icon: Code,
    benefits: ['Responsive & accessible design', 'Performance & SEO best practices', 'CMS & e‑commerce integrations'],
    details: 'We build production-ready websites that are fast, accessible, and easy to maintain — from marketing sites to complex platforms. We handle architecture, integrations, and deployment so you get a stable, fast product that scales.',
    modal: {
      title: 'Web Development Services',
      shortStatement: 'We design and build fast, accessible, and secure web applications that scale. From marketing sites to complex platforms, our work emphasizes performance, SEO, and maintainability.',
      deliverables: ['Custom responsive websites', 'E‑commerce and headless CMS implementations', 'API and third‑party integrations', 'Server-side rendering and performance optimizations', 'Deployment, CI/CD, and monitoring'],
      bestSuitedFor: 'Startups, SMBs and enterprises looking for production-ready web platforms with a focus on performance and conversion.',
      stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Headless CMS', 'AWS'],
      approach: 'Sprint-based delivery with architecture reviews, automated testing, and performance budgets. We include accessibility and SEO as part of the architecture.',
      outcomes: ['Faster page loads and better SEO', 'Higher conversion rates', 'Lower maintenance overhead', 'Easier content management and integrations'],
      qa: 'Automated tests, accessibility audits, performance profiling, and security reviews ensure stable, production-ready releases.',
      cta: { heading: 'Ready to launch your website?', sub: 'We’ll map a plan that balances speed, design, and long-term maintainability.' }
    }
  },
  {
    title: 'App Development',
    description: 'Android and iOS apps with smooth performance and great UI.',
    icon: Smartphone,
    benefits: ['Native-like performance', 'Cross-platform frameworks', 'App store submission & support'],
    details: 'Native and cross-platform mobile apps focused on performance and delightful UX. We prototype, iterate, and ship store-ready apps with analytics and CI/CD in place.',
    modal: {
      title: 'App Development Services',
      shortStatement: 'We design and develop high-performance mobile and web applications that are secure, scalable, and built for real business growth. Our focus is on clean architecture, smooth user experience, and long-term reliability.',
      deliverables: [
        'Custom mobile and web applications tailored to business needs',
        'Scalable architecture designed for future growth',
        'Clean, maintainable, and well-documented code',
        'Performance-optimized UI with seamless user experience',
        'Secure authentication and data protection standards'
      ],
      bestSuitedFor: 'Startups, growing businesses, and enterprises looking to build reliable digital products or modernize existing applications.',
      stack: ['React', 'Next.js', 'Node.js', 'Flutter', 'Firebase', 'AWS', 'REST APIs'],
      approach: 'We follow an agile development process with clear milestones, weekly progress updates, and continuous testing to ensure transparency, speed, and quality throughout the project lifecycle.',
      outcomes: ['Faster time-to-market', 'Improved user engagement', 'Scalable systems that grow with your business', 'Reduced long-term maintenance costs'],
      qa: 'Every project goes through structured testing, code reviews, and performance checks to ensure stability, security, and production-ready delivery.',
      cta: { heading: 'Ready to build your application?', sub: 'Let’s discuss your idea and create a solution that fits your goals.' }
    }
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns across channels to increase awareness, engagement, and measurable ROI.',
    icon: Megaphone,
    benefits: ['Channel & creative strategy', 'Data-driven campaign optimization', 'Clear KPI and reporting'],
    details: 'Holistic digital marketing covering content, paid acquisition, and retention. We set measurable KPI, run tests, and scale the strategies that work for your business.',
    modal: {
      title: 'Digital Marketing Services',
      shortStatement: 'Data-driven campaigns that grow traffic and revenue across acquisition and retention channels.',
      deliverables: ['Paid search & social campaigns', 'Content strategy & production', 'Conversion rate optimization (CRO)', 'Email & lifecycle marketing', 'Analytics implementation and dashboards'],
      bestSuitedFor: 'E-commerce, SaaS, and businesses that want measurable growth and predictable acquisition costs.',
      stack: ['Google Ads', 'Meta Ads', 'Google Analytics', 'SEMrush', 'HubSpot'],
      approach: 'A test-and-learn, hypothesis-driven process with A/B testing, iterative optimization, and monthly performance reviews that scale what works.',
      outcomes: ['Lower acquisition costs', 'Higher lifetime value', 'Improved conversion rates', 'Clear attribution and reporting'],
      qa: 'Robust tracking audits and rigorous reporting to validate impact and reduce wasted spend.',
      cta: { heading: 'Ready to grow?', sub: 'Let’s design campaigns and reporting that move your KPIs.' }
    }
  },
  {
    title: 'UI / UX Design',
    description: 'Clean, modern and user-friendly interface designs.',
    icon: PenTool,
    benefits: ['User research & prototyping', 'Design systems & component libraries', 'High-fidelity deliverables for development'],
    details: 'Designs that focus on usability and conversion — from user research and flows to polished visual systems and handoffs that make implementation straightforward.',
    modal: {
      title: 'UI / UX Design Services',
      shortStatement: 'Human-centered design that combines user research with polished visual systems to deliver measurable product improvements.',
      deliverables: ['User research & validated personas', 'Information architecture & wireframes', 'Interactive prototypes and usability testing', 'Design systems and component libraries', 'High-fidelity production assets for development'],
      bestSuitedFor: 'Product teams, startups, and companies aiming to improve usability, retention, and user satisfaction.',
      stack: ['Figma', 'Storybook', 'Design Systems', 'React'],
      approach: 'We run discovery and rapid prototyping cycles with user testing and iterative design reviews, ensuring designs are validated before development.',
      outcomes: ['Improved retention and engagement', 'Faster design-to-development handoff', 'Reduced support and development back-and-forth'],
      qa: 'Usability testing, accessibility audits, and design reviews ensure designs are validated and implementable.',
      cta: { heading: 'Ready to improve UX?', sub: 'We’ll align product goals with user needs and deliver a validated design system.' }
    }
  },
  {
    title: 'SEO & Branding',
    description: 'Improve your visibility and build a strong online brand.',
    icon: Search,
    benefits: ['Technical SEO audits', 'Content & keyword strategy', 'Paid acquisition and CRO'],
    details: 'We align content strategy, technical SEO, and branding to increase discoverability and conversion across search and paid channels.',
    modal: {
      title: 'SEO & Branding Services',
      shortStatement: 'A research-led approach to brand and SEO that increases discoverability, trust, and conversion over time.',
      deliverables: ['Brand identity and visual guidelines', 'Technical SEO audits and fixes', 'Content strategy & editorial calendars', 'Performance and conversion optimization'],
      bestSuitedFor: 'Companies launching or repositioning a brand and organizations seeking sustainable organic growth.',
      stack: ['Google Search Console', 'Semrush', 'Google Analytics', 'Brand Guidelines'],
      approach: 'We combine brand research with technical SEO and content to build a consistent, discoverable brand experience across channels.',
      outcomes: ['Increased organic traffic', 'Stronger brand recall', 'Higher-quality leads and conversions'],
      qa: 'Ongoing audits, content reviews, and monitoring keep brand and SEO work aligned with measurable KPIs.',
      cta: { heading: 'Ready to strengthen your brand?', sub: 'We’ll combine brand thinking with SEO to deliver measurable results.' }
    }
  },
  {
    title: 'Maintenance & Support',
    description: 'Keep your website fast, secure, and always running smoothly.',
    icon: Wrench,
    benefits: ['Ongoing updates & security', 'Performance monitoring', 'Priority support & SLAs'],
    details: 'Post-launch support to keep systems healthy and performant with fast response times and continuous improvements.',
    modal: {
      title: 'Maintenance & Support Services',
      shortStatement: 'Continuous care for your live products — maintenance, monitoring and fast response to incidents so your systems stay reliable.',
      deliverables: ['Security updates & patching', 'Automated backups and restore tests', 'Performance monitoring & tuning', 'Priority support with SLAs', 'Incident response and post-mortems'],
      bestSuitedFor: 'Launched products that require predictable operations and rapid response for production incidents.',
      stack: ['Sentry', 'Datadog', 'AWS CloudWatch', 'UptimeRobot'],
      approach: 'We define SLAs, run scheduled health checks, automate backups, and maintain clear incident processes to reduce risk.',
      outcomes: ['Higher uptime and reliability', 'Faster incident resolution', 'Lower operational risk and predictable costs'],
      qa: 'Monitoring, automated alerts, incident post-mortems and backup verification ensure service quality.',
      cta: { heading: 'Need reliable support?', sub: 'We’ll tailor an SLA and support plan to your operational needs.' }
    }
  },
]

export default function Services() {
  const [qod, setQod] = useState(null)
  const [qLoading, setQLoading] = useState(false)
  const [qError, setQError] = useState(null)
  const perfRef = React.useRef(null)
  const [showPerf, setShowPerf] = React.useState(false)
  const reduceMotion = useReducedMotion()
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    function update() { setIsSmall(window.innerWidth < 768) }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const fetchQuote = async () => {
    const API_KEY = 'SBrWkhQKYazVLsUe42xEQg==ihKm34WG4wFk7SMr'
    try {
      setQLoading(true)
      setQError(null)
      const res = await fetch('https://api.api-ninjas.com/v2/quoteoftheday', { headers: { 'X-Api-Key': API_KEY } })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      const data = await res.json()
      const quote = data.quote || data[0]?.quote || ''
      const author = data.author || data[0]?.author || ''
      setQod({ quote, author })
    } catch (err) {
      setQError(err.message || 'Failed to load quote')
    } finally {
      setQLoading(false)
    }
  }

  React.useEffect(() => {
    if (!perfRef.current) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShowPerf(true)
          obs.disconnect()
        }
      })
    }, { rootMargin: '200px' })
    obs.observe(perfRef.current)
    return () => obs.disconnect()
  }, [])

  const itemMotionProps = (reduceMotion || isSmall) ? {} : { whileHover: { y: -3 }, transition: { duration: 0.12 } }

  return (
  <main className="services-page bg-[#05070F] text-white">

      {/* Hero / Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-semibold mb-4 text-white"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services — Tailored for your digital growth
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              We design and build products that turn ideas into powerful digital experiences. Choose a service and start a conversation with our team.
            </motion.p>

            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.12 }} className="flex gap-4">
              <button onClick={fetchQuote} className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md font-medium">Get Quote</button>
              <Link to="/contact" className="inline-block border border-indigo-600 text-indigo-600 px-5 py-3 rounded-md font-medium">Contact Us</Link>
            </motion.div>
            {qLoading ? (
              <div className="mt-3 text-sm text-gray-400">Loading quote…</div>
            ) : qError ? (
              <div className="mt-3 text-sm text-red-400">{qError}</div>
            ) : qod ? (
              <blockquote className="mt-3 text-sm text-gray-300 italic max-w-xl">“{qod.quote}” <span className="not-italic font-semibold">— {qod.author}</span></blockquote>
            ) : null}
          </div>

          <motion.div className="hidden md:flex items-center justify-center" initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}>
            <motion.img loading="lazy" src="/vecteezy_ai-generated-manager-man-present-successful-group-business_39323012.png" alt="Team" className="w-72 md:w-96 lg:w-[520px] rounded-md shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">What we do</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2">Complete digital services from product design to growth.</p>
        </div>

        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {SERVICES.map((s) => (
            <motion.div key={s.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}>
              <React.Suspense fallback={<div className="h-36 bg-transparent" />}>
                <ServiceCard {...s} />
              </React.Suspense>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Annual Performance section */}
      <section className="container mx-auto px-6 py-8 md:py-24 min-h-screen" style={{background: 'linear-gradient(180deg, rgba(8,10,15,0.04), transparent)'}}>
        <header className="max-w-3xl mx-auto text-center pt-0 mb-28">
          <span className="inline-block bg-gradient-to-r from-teal-500 to-cyan-400 text-white text-sm rounded-full px-3 py-1 mb-4">Built on Consistency &amp; Quality</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-normal mb-3">Consistent Performance. <span className="text-indigo-400">Reliable Delivery.</span></h2>
          <p className="mt-0 text-gray-300 max-w-xl mx-auto leading-relaxed">A high-level view of how NodWeb Solution maintains quality, transparency, and dependable execution across every engagement.</p>
          <p className="mt-2 text-sm text-gray-400">Trusted by businesses focused on long-term digital growth.</p>
        </header>

  <section className="perf-section grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-56 items-center mt-12 md:mt-20">

          {/* left: perf visual */}
          <motion.div className="perf-visual order-1 hidden md:flex justify-end md:pr-8 z-30 self-center" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div ref={perfRef} className="perf-visual overflow-visible md:mr-8">
            <div className="w-72 sm:w-[28rem] md:w-[720px]">
              {showPerf ? (
                <React.Suspense fallback={<div className="w-full h-[720px] bg-transparent" />}>
                  <div className="md:w-[720px] w-full">
                    <PerfVisual />
                  </div>
                </React.Suspense>
              ) : (
                <div className="w-full h-[720px] bg-transparent" />
              )}
            </div>
          </div>
          </motion.div>

          {/* right: stacked performance points */}
          <motion.div className="perf-list order-2 md:pl-16 lg:pl-24 flex items-center" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.06 }}>
            <div className="max-w-full md:max-w-md">
              <div className="mt-4 space-y-6">
                <motion.div {...itemMotionProps} className="flex items-start gap-4 py-4 border-b border-[#111827]">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-medium text-sm">1</div>
                  <div>
                    <h4 className="text-md font-semibold"> Proven Technical Expertise</h4>
                    <p className="text-sm text-gray-300 mt-1">We apply industry best practices, modern frameworks, and clean architecture to deliver reliable, future-ready digital solutions.</p>
                  </div>
                </motion.div>

                <motion.div {...itemMotionProps} className="flex items-start gap-4 py-4 border-b border-[#111827]">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-medium text-sm">2</div>
                  <div>
                    <h4 className="text-md font-semibold"> Performance-Driven Delivery</h4>
                    <p className="text-sm text-gray-300 mt-1">Every project is optimized for speed, scalability, and user experience, ensuring measurable improvements and real business impact.</p>
                  </div>
                </motion.div>

                <motion.div {...itemMotionProps} className="flex items-start gap-4 py-4 border-b border-[#111827]">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-medium text-sm">3</div>
                  <div>
                    <h4 className="text-md font-semibold"> Transparent Process</h4>
                    <p className="text-sm text-gray-300 mt-1">Clear communication, structured workflows, and regular updates keep clients informed and confident at every stage.</p>
                  </div>
                </motion.div>

                <motion.div {...itemMotionProps} className="flex items-start gap-4 py-4">
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-medium text-sm">4</div>
                  <div>
                    <h4 className="text-md font-semibold"> Long-Term Support</h4>
                    <p className="text-sm text-gray-300 mt-1">Our commitment doesn’t end at launch — we provide continuous optimization, maintenance, and strategic support.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </section>

      {/* CTA footer */}
      <section className="bg-[#0B0F19] border-t border-[#1F2933] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[#F9FAFB] mb-2">Ready to start your project?</h2>
          <p className="text-[#D1D5DB] mb-6">Tell us about your requirements and we'll send a proposal.</p>
          <Link to="/contact" className="inline-block bg-[#2563EB] text-white px-6 py-3 rounded-md font-medium">Contact Us</Link>
        </div>
      </section>

    </main>
  )
}