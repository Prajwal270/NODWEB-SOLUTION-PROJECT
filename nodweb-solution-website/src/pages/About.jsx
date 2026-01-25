import React, {Suspense, lazy} from "react";
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
    <Suspense fallback={<Loader/>}>
      <Objective/>
      <OurProjects/>
      <WhoWeAre/>
      <OurMission/>
      <OurVision/>
      <CoreValues/>
      <WhyChooseNodWeb/>
    </Suspense>
  );
}

export default About;
