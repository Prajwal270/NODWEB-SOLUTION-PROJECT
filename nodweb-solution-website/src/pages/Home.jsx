import React from "react";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";

import Hero from "../sections-home/Hero";
import ServiceOverview from "../sections-home/ServiceOverview";
import WhyNodWeb from "../sections-home/WhyNodWeb";
import OurProcess from "../sections-home/OurProcess";
import Technologies from "../sections-home/Technologies";
import CallToAction from "../sections-home/CallToAction";
import Branding from "../sections-home/Branding";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

function Home() {
  return (
    <>
      <SEO
        title="NodWeb Solution - Digital Agency | Web Development, App Development & Digital Marketing"
        description="Transform your business with NodWeb Solution. Expert web development, mobile app development, UI/UX design, digital marketing, SEO, and branding services in Nagpur, India. Get a free consultation today!"
        keywords="web development, web development company, web developer, website developer, web design, website design, web company, web agency, app development, app development company, app developer, mobile app, android developer, ios developer, flutter developer, react native developer, app company, digital marketing, digital marketing agency, seo services, seo company, google ads, ppc agency, social media marketing, smm services, marketing agency, ecommerce development, ecommerce website, shopify developer, wordpress developer, Nagpur, India, NodWeb Solution"
        url="/"
      />

      <StructuredData />
      <Hero />
      <ServiceOverview />
      <Branding />
      <WhyNodWeb />
      <OurProcess />
      <Technologies />
      <CallToAction />
      <FloatingWhatsapp />
    </>
  );
}

export default Home;
