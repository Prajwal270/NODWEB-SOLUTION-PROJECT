import React from 'react'
import SEO from '../../components/SEO'
import { Helmet } from 'react-helmet-async'

export default function Nagpur() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NodWeb Solution Pvt Ltd - Nagpur",
    "image": "https://nodwebsolution.com/og-image.png",
    "@id": "https://www.nodwebsolution.in/nagpur",
    "url": "https://www.nodwebsolution.in/nagpur",
    "telephone": "+91-7841061453",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wardaman Nagar, Friend Colony Road",
      "addressLocality": "Butibori",
      "addressRegion": "Nagpur",
      "postalCode": "441108",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "21.1458", "longitude": "79.0882" },
    "areaServed": "IN"
  }

  return (
    <>
      <SEO
        title="Web Development Company in Nagpur — NodWeb Solution"
        description="NodWeb Solution is a Nagpur-based web and app development company offering SEO and digital marketing services for local businesses."
        url="/nagpur"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </Helmet>

      <section className="max-w-5xl mx-auto py-20 px-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Web Development Company in Nagpur</h1>
        <p className="text-gray-300 mb-6">Based in Nagpur, we build websites and apps that help local businesses grow online. Get a free consultation today.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local case studies</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li className="mb-2">Nagpur hospitality website — increased bookings via optimized UX (<a href="/projects" className="text-indigo-400 underline">case study</a>)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Local services</h2>
        <p className="text-gray-300">We offer: <a href="/services" className="text-indigo-400 underline">Web Development</a>, <a href="/services" className="text-indigo-400 underline">SEO</a>, and <a href="/services" className="text-indigo-400 underline">Digital Marketing</a>.</p>

        <div className="mt-8">
          <a href="/contact" className="inline-block bg-indigo-600 px-4 py-2 rounded">Contact Us</a>
        </div>
      </section>
    </>
  )
}
