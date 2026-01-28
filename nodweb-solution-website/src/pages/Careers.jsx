import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Trophy, Rocket, Users, Clock, BookOpen, Heart } from 'lucide-react'

const VALUES = [
	{ title: 'Professional growth', desc: 'Mentorship, training budgets, and clear advancement paths.', icon: Trophy },
	{ title: 'Real-world impact', desc: 'Work on customer-facing products used by real users.', icon: Rocket },
	{ title: 'Supportive team', desc: 'Collaborative teams, pair programming, and peer reviews.', icon: Users },
	{ title: 'Flexible work', desc: 'Remote-friendly policies and flexible hours.', icon: Clock },
	{ title: 'Learning culture', desc: 'Tech talks, workshops, and project ownership for growth.', icon: BookOpen },
	{ title: 'Healthy benefits', desc: 'Competitive compensation and employee wellbeing programs.', icon: Heart },
]

// Animation variants
const cardVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } } }

// FUTURE JOB TEMPLATE (add new entries to the JOBS array):
// { title: 'Job Title', type: 'Full-time', location: 'Remote', summary: 'One-line role summary' },

const JOBS = [
	{ title: 'Digital Marketing Intern', type: 'Internship (Unpaid)', location: 'Remote', summary: 'Assist with campaign execution, content creation, and analytics. Hands-on internship with mentorship.' },
]

export default function Careers() {
	const reduceMotion = useReducedMotion()
	const [isSmall, setIsSmall] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false))

	useEffect(() => {
		function update() {
			setIsSmall(window.innerWidth < 768)
		}
		update()
		window.addEventListener('resize', update)
		return () => window.removeEventListener('resize', update)
	}, [])

	const handleApply = React.useCallback((e) => {
		e.preventDefault()
		const form = e.target
		const name = encodeURIComponent(form.name?.value || '')
		const email = encodeURIComponent(form.email?.value || '')
		const role = encodeURIComponent(form.role?.value || '')
		const message = encodeURIComponent(form.message?.value || '')
		// send to WhatsApp number (already configured elsewhere)
		const WHATSAPP_NUMBER = '917841061453'
		const text = `Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\nRole: ${decodeURIComponent(role)}\n\n${decodeURIComponent(message)}`
		window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
	}, [])

	const scrollToApply = React.useCallback((roleTitle) => {
		const el = document.getElementById('apply-form')
		if (!el) return
		const roleSelect = el.querySelector('select[name="role"]')
		if (roleSelect) {
			// try to match the exact option
			for (const opt of roleSelect.options) {
				if (opt.text === roleTitle) {
					opt.selected = true
					break
				}
			}
		}
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		const nameInput = el.querySelector('input[name="name"]')
		if (nameInput) nameInput.focus()
	}, [])

	return (
		<main className="bg-[#111827] text-white min-h-screen">
			{/* Hero */}
			<section className="pt-12 md:pt-20 pb-8">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<motion.h1 initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold">Build Your Career with NodWeb Solution</motion.h1>
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-300 mt-4 max-w-3xl mx-auto">We value innovation, learning, and long-term growth — join a friendly, future-driven company where you’ll work on real products and level up fast.</motion.p>
					<div className="mt-6 h-0.5 w-36 mx-auto rounded bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 opacity-90" />
				</div>
			</section>

			{/* Why Work With Us */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<div className="text-center mb-6">
					<h2 className="text-2xl font-semibold">Why Work With Us</h2>
					<p className="text-gray-400 mt-2">A collaborative, learning-first culture focused on impact, growth, and balance.</p>
				</div>
				<motion.div {...(reduceMotion || isSmall ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 }, variants: containerVariants })} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{VALUES.map((v) => {
						const motionProps = (reduceMotion || isSmall) ? {} : { variants: cardVariants, whileHover: { y: -6, scale: 1.02 }, transition: { type: 'spring', stiffness: 300, damping: 20 } }
						return (
							<motion.div key={v.title} {...motionProps} className="p-6 rounded-lg bg-[rgba(255,255,255,0.02)]">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-xl">
										<v.icon className="w-6 h-6 text-indigo-400" />
									</div>
									<div>
										<h3 className="font-semibold text-white">{v.title}</h3>
										<p className="text-gray-300 mt-1 text-sm">{v.desc}</p>
									</div>
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</section>

			{/* Current Openings */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<div className="flex items-center justify-between mb-6">
					<div>
						<h2 className="text-2xl font-semibold">Current Openings</h2>
						<p className="text-gray-400 mt-1">Explore open roles and find the right fit for your career.</p>
					</div>
					<a href="mailto:nodwebsolutionpvtltd@gmail.com" className="text-indigo-400 hover:underline">Send general resume</a>
				</div>
				<motion.div {...(reduceMotion || isSmall ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 }, variants: containerVariants })} className="grid gap-4 md:grid-cols-2">
					{JOBS.map((job) => {
						const motionProps = (reduceMotion || isSmall) ? {} : { variants: cardVariants, whileHover: { y: -6, scale: 1.01 }, transition: { duration: 0.18 } }
						return (
							<motion.div key={job.title} {...motionProps} className="p-5 rounded-lg bg-[rgba(255,255,255,0.02)] flex flex-col justify-between">
								<div>
									<div className="flex items-center justify-between">
										<h3 className="font-semibold text-white">{job.title}</h3>
										<span className="text-sm text-gray-300">{job.type}</span>
									</div>
									<div className="text-sm text-gray-400 mt-1">{job.location}</div>
									<p className="text-gray-300 mt-3 text-sm">{job.summary}</p>
								</div>

								<div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
									<button aria-label={`Apply for ${job.title}`} type="button" onClick={() => scrollToApply(job.title)} className="w-full sm:w-auto px-3 py-2 bg-indigo-600 rounded text-white text-sm text-center">Apply Now</button>
									<button aria-label={`View details for ${job.title}`} type="button" onClick={() => scrollToApply(job.title)} className="w-full sm:w-auto text-sm text-gray-300 underline text-center">View details</button>
								</div>
							</motion.div>
						)
					})}

					{/* Placeholder for future roles */}
					<motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.18 }} className="p-5 rounded-lg border-dashed border border-gray-700 bg-transparent flex items-center justify-center text-gray-400">
						<div className="text-center">
							<div className="font-semibold">More roles coming soon</div>
							<div className="mt-2 text-sm">Check back later or send your resume to <a href="mailto:nodwebsolutionpvtltd@gmail.com" className="text-indigo-400">nodwebsolutionpvtltd@gmail.com</a></div>
						</div>
					</motion.div>
				</motion.div>
			</section>

			{/* Internship & Freshers Opportunities */}
			<section className="max-w-6xl mx-auto px-6 py-12">
				<motion.div {...(reduceMotion || isSmall ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 }, variants: containerVariants })} whileHover={{ y: -4 }} transition={{ duration: 0.18 }} className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
					<div className="grid md:grid-cols-2 gap-6 items-center">
						<div>
							<h2 className="text-2xl font-semibold">Internship & Fresher Opportunities</h2>
							<p className="text-gray-300 mt-2">We welcome motivated students and early-career candidates. Our internships are hands-on, mentored, and designed to help you ship real product features.</p>
							<ul className="mt-4 text-gray-300 space-y-2">
								<li>• Unpaid internships with structured mentorship</li>
								<li>• Dedicated mentors and project-based learning</li>
								<li>• Potential pathways to full-time roles for strong performers</li>
							</ul>
						</div>

						<div className="text-center md:text-right">
							<button type="button" onClick={() => scrollToApply('Internship')} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded w-full md:w-auto justify-center md:justify-start">Apply for Internship</button>
						</div>
					</div>
				</motion.div>
			</section>

			{/* Simple Application Form */}
			<section className="max-w-4xl mx-auto px-6 py-12">
				<motion.div {...(reduceMotion || isSmall ? {} : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 }, variants: containerVariants })}>
					<div className="text-center mb-4">
					<h2 className="text-2xl font-semibold">Apply — quick form</h2>
					<p className="text-gray-400 mt-2">Short form to send your interest — keep it simple and we’ll follow up.</p>
					</div>

					<form id="apply-form" onSubmit={handleApply} className="grid gap-3 bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
					<label className="block">
						<span className="sr-only">Full name</span>
						<input name="name" placeholder="Full name" required className="w-full px-3 py-3 rounded bg-transparent border border-gray-700" />
					</label>

					<label className="block">
						<span className="sr-only">Email</span>
						<input name="email" type="email" placeholder="Email" required className="w-full px-3 py-3 rounded bg-transparent border border-gray-700" />
					</label>

					<label className="block">
						<span className="sr-only">Role interested in</span>
						{/* dark-themed select consistent with black theme */}
						<select name="role" className="w-full px-3 py-3 rounded bg-[#0B0F19] text-white border border-gray-700">
							<option>Role interested in</option>
							<option>Digital Marketing Intern</option>
							<option>Frontend Engineer</option>
							<option>Full-stack Developer</option>
							<option>Product Designer</option>
							<option>Internship</option>
						</select>
					</label>

					<label className="block">
						<span className="sr-only">Message</span>
						<textarea name="message" placeholder="Short message / link to portfolio" rows="4" className="w-full px-3 py-3 rounded bg-transparent border border-gray-700" />
					</label>

					<div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
						<button type="submit" className="w-full md:w-auto px-4 py-2 bg-indigo-600 rounded text-white">Send application</button>
						<a href="mailto:nodwebsolutionpvtltd@gmail.com" className="text-sm text-gray-300 text-center md:text-left">Or email nodwebsolutionpvtltd@gmail.com</a>
					</div>
				</form>
				</motion.div>
				</section>

			<section className="py-12" />
		</main>
	)
}
