import React from 'react'
import SEO from '../../components/SEO'
import { Helmet } from 'react-helmet-async'

export default function Thane() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NodWeb Solution Pvt Ltd - Thane",
    "image": "https://nodwebsolution.com/og-image.png",
    "@id": "https://www.nodwebsolution.in/thane",
    "url": "https://www.nodwebsolution.in/thane",
    "telephone": "+91-7841061453",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "(Office address in Thane)",
      "addressLocality": "Thane",
      "addressRegion": "Maharashtra",
      "postalCode": "400601",
      "addressCountry": "IN"
    },
    "areaServed": "IN"
  }

  return (
    <>
      <SEO
        title="Web Development Company in Thane — NodWeb Solution"
        description="NodWeb Solution provides web development and digital marketing services in Thane. Build faster, secure websites that rank locally."
        url="/thane"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Helmet>

      <section className="max-w-5xl mx-auto py-20 px-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Web Development Company in Thane</h1>
        <p className="text-gray-300 mb-6">We help Thane businesses grow online with websites, SEO and marketing tailored to local needs.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local case studies</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li className="mb-2">Local services portal for Thane — improved local leads and map visibility (<a href="/projects" className="text-indigo-400 underline">case study</a>)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local services</h2>
        <p className="text-gray-300">We offer: <a href="/services" className="text-indigo-400 underline">Web Development</a>, <a href="/services" className="text-indigo-400 underline">SEO</a>, and <a href="/services" className="text-indigo-400 underline">Local Marketing</a>.</p>

        <div className="mt-8">
          <a href="/contact" className="inline-block bg-indigo-600 px-4 py-2 rounded">Contact Us</a>
        </div>
      </section>
    </>
  )
}
