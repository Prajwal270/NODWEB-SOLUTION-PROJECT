import React, {Suspense, lazy} from "react";
import SEO from "../components/SEO";
import Loader from "../components/Loader";

const Objective = lazy(() => import("../section-about/Objective"))
const WhoWeAre = lazy(() => import("../section-about/WhoWeAre"))
const OurMission = lazy(() => import("../section-about/OurMission"))
const OurVision = lazy(() => import("../section-about/OurVision"))
const CoreValues = lazy(() => import("../section-about/CoreValues"))
const WhyChooseNodWeb = lazy(() => import("../section-about/WhyChooseNodWeb"))
const OurProjects = lazy(() => import("../section-about/OurProjects"))

function About() {
  return (
    <>
      <SEO 
        title="About Us - NodWeb Solution | Digital Agency in Nagpur"
        description="Learn about NodWeb Solution - a leading digital agency in Nagpur, India. Discover our mission, vision, core values, and commitment to delivering innovative digital solutions that drive business growth."
        keywords="about NodWeb Solution, digital agency Nagpur, web development company, app development company, digital marketing agency, seo company, company mission, vision, values, who we are, Nagpur software company, web company, app company, marketing agency"
        url="/about"
      />
      <Suspense fallback={<Loader/>}>
        <Objective/>
        <OurProjects/>
        <WhoWeAre/>
        <OurMission/>
        <OurVision/>
        <CoreValues/>
        <WhyChooseNodWeb/>
      </Suspense>
    </>
  );
}

export default About;