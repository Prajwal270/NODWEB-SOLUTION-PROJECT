import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NodWeb Solution Pvt Ltd",
    "url": "https://nodwebsolution.com",
    "logo": "https://nodwebsolution.com/images/logos/nodweb_favicon.png",
    "description": "NodWeb Solution is a leading digital agency offering web development, mobile app development, UI/UX design, digital marketing, and SEO services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wardaman Nagar, Friend Colony Road",
      "addressLocality": "Butibori",
      "addressRegion": "Nagpur",
      "postalCode": "441108",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7841061453",
      "contactType": "Customer Service",
      "email": "nodwebsolutionpvtltd@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/nodweb-solution",
      "https://twitter.com/nodwebsolution",
      "https://www.facebook.com/nodwebsolution"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NodWeb Solution Pvt Ltd",
    "image": "https://nodwebsolution.com/og-image.png",
    "url": "https://nodwebsolution.com",
    "telephone": "+91-7841061453",
    "email": "nodwebsolutionpvtltd@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wardaman Nagar, Friend Colony Road",
      "addressLocality": "Butibori",
      "addressRegion": "Nagpur",
      "postalCode": "441108",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1458",
      "longitude": "79.0882"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NodWeb Solution",
    "url": "https://nodwebsolution.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nodwebsolution.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
