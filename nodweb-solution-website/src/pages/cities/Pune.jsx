import React from 'react'
import SEO from '../../components/SEO'
import { Helmet } from 'react-helmet-async'

export default function Pune() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NodWeb Solution Pvt Ltd - Pune",
    "image": "https://nodwebsolution.com/og-image.png",
    "@id": "https://www.nodwebsolution.in/pune",
    "url": "https://www.nodwebsolution.in/pune",
    "telephone": "+91-7841061453",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "(Office address in Pune)",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411001",
      "addressCountry": "IN"
    },
    "areaServed": "IN"
  }

  return (
    <>
      <SEO
        title="Web Development Company in Pune — NodWeb Solution"
        description="NodWeb Solution offers web and mobile app development, SEO and digital marketing services in Pune. Fast, secure websites tailored for your business."
        url="/pune"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Helmet>

      <section className="max-w-5xl mx-auto py-20 px-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Web Development Company in Pune</h1>
        <p className="text-gray-300 mb-6">Custom web development and digital marketing for Pune businesses. We focus on usability, performance, and search visibility.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local case studies</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li className="mb-2">Website redesign for a Pune startup — improved session duration by 50% (<a href="/projects" className="text-indigo-400 underline">case study</a>)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local services</h2>
        <p className="text-gray-300">We offer: <a href="/services" className="text-indigo-400 underline">Web Development</a>, <a href="/services" className="text-indigo-400 underline">App Development</a>, and <a href="/services" className="text-indigo-400 underline">SEO</a> for Pune businesses.</p>

        <div className="mt-8">
          <a href="/contact" className="inline-block bg-indigo-600 px-4 py-2 rounded">Contact Us</a>
        </div>
      </section>
    </>
  )
}
