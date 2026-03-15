import React from 'react'
import SEO from '../../components/SEO'
import { Helmet } from 'react-helmet-async'

export default function Mumbai() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NodWeb Solution Pvt Ltd - Mumbai",
    "image": "https://nodwebsolution.com/og-image.png",
    "@id": "https://www.nodwebsolution.in/mumbai",
    "url": "https://www.nodwebsolution.in/mumbai",
    "telephone": "+91-7841061453",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "(Office address in Mumbai)",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "areaServed": "IN",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "10:00",
      "closes": "18:00"
    }]
  }

  return (
    <>
      <SEO
        title="Web Development Company in Mumbai — NodWeb Solution"
        description="NodWeb Solution provides web development, app development and digital marketing services in Mumbai. Fast, secure, and SEO-friendly websites."
        url="/mumbai"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Helmet>

      <section className="max-w-5xl mx-auto py-20 px-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Web Development Company in Mumbai</h1>
        <p className="text-gray-300 mb-6">We build high-performance websites and apps for businesses in Mumbai. Our services include custom web development, e‑commerce, SEO, and digital marketing.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local case studies</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li className="mb-2">E‑commerce launch for a Mumbai retailer — increased online sales by 45% (<a href="/projects" className="text-indigo-400 underline">case study</a>)</li>
          <li className="mb-2">Lead generation website for a law firm in Mumbai — improved conversions by 30% (<a href="/projects" className="text-indigo-400 underline">case study</a>)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local services</h2>
        <p className="text-gray-300">We offer: <a href="/services" className="text-indigo-400 underline">Web Development</a>, <a href="/services" className="text-indigo-400 underline">SEO & Branding</a>, and <a href="/services" className="text-indigo-400 underline">Digital Marketing</a> tailored for Mumbai businesses.</p>

        <div className="mt-8">
          <a href="/contact" className="inline-block bg-indigo-600 px-4 py-2 rounded">Contact Us</a>
        </div>
      </section>
    </>
  )
}
