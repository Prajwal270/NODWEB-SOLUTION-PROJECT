import React, { Suspense, lazy } from "react";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import Loader from "../components/Loader"

const Hero = lazy(() => import("../sections-home/Hero"));
const ServiceOverview = lazy(() => import("../sections-home/ServiceOverview"));
const WhyNodWeb = lazy(() => import("../sections-home/WhyNodWeb"));
const OurProcess = lazy(() => import("../sections-home/OurProcess"));
const Technologies = lazy(() => import("../sections-home/Technologies"));
const CallToAction = lazy(() => import("../sections-home/CallToAction"));
const Branding = lazy(() => import("../sections-home/Branding"));

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
      <Suspense fallback={<Loader/>}>
        <Hero />
        <ServiceOverview />
        <Branding/>
        <WhyNodWeb />
        <OurProcess />
        <Technologies />
        <CallToAction />
      </Suspense>
    </>
  );
}

export default Home;
