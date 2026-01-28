import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Careers = React.lazy(() => import("./pages/Careers"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ServiceDetail = React.lazy(() => import("./components/ServiceDetail"))

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="career" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
