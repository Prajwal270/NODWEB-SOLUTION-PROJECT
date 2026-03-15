import React from 'react'
import SEO from '../../components/SEO'
import { Helmet } from 'react-helmet-async'

export default function Navimumbai() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NodWeb Solution Pvt Ltd - Navi Mumbai",
    "image": "https://nodwebsolution.com/og-image.png",
    "@id": "https://www.nodwebsolution.in/navimumbai",
    "url": "https://www.nodwebsolution.in/navimumbai",
    "telephone": "+91-7841061453",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "(Office address in Navi Mumbai)",
      "addressLocality": "Navi Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400701",
      "addressCountry": "IN"
    },
    "areaServed": "IN"
  }

  return (
    <>
      <SEO
        title="Web Development Company in Navi Mumbai — NodWeb Solution"
        description="NodWeb Solution delivers web development, app development and digital marketing solutions in Navi Mumbai. Tailored websites that convert."
        url="/navimumbai"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Helmet>

      <section className="max-w-5xl mx-auto py-20 px-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Web Development Company in Navi Mumbai</h1>
        <p className="text-gray-300 mb-6">Local expertise for Navi Mumbai businesses — web, app and marketing to reach more customers online.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local case studies</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li className="mb-2">Navi Mumbai commerce site — improved page speed and mobile conversions (<a href="/projects" className="text-indigo-400 underline">case study</a>)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local services</h2>
        <p className="text-gray-300">We offer: <a href="/services" className="text-indigo-400 underline">Web Development</a>, <a href="/services" className="text-indigo-400 underline">App Development</a>, and <a href="/services" className="text-indigo-400 underline">SEO</a>.</p>

        <div className="mt-8">
          <a href="/contact" className="inline-block bg-indigo-600 px-4 py-2 rounded">Contact Us</a>
        </div>
      </section>
    </>
  )
}
