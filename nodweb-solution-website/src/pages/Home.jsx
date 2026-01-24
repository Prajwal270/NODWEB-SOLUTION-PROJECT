import React, { Suspense, lazy } from "react";

import Loader from "../components/Loader"

const Hero = lazy(() => import("../sections-home/Hero"));
const ServiceOverview = lazy(() => import("../sections-home/ServiceOverview"));
const WhyNodWeb = lazy(() => import("../sections-home/WhyNodWeb"));
const OurProcess = lazy(() => import("../sections-home/OurProcess"));
const Technologies = lazy(() => import("../sections-home/Technologies"));
const CallToAction = lazy(() => import("../sections-home/CallToAction"));
const Branding = lazy(() => import("../sections-home/Branding"))

function Home() {
  return (
    <Suspense fallback={<Loader/>}>
      <Hero />
      <ServiceOverview />
      <Branding/>
      <WhyNodWeb />
      <OurProcess />
      <Technologies />
      <CallToAction />
    </Suspense>
  );
}

export default Home;
