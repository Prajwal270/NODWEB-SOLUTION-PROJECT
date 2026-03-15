import React, { useEffect, useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { client } from "./contentful/client";
import MainLayout from "./components/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import LazyWrapper from "./components/LazyWrapper";

import Home from "./pages/Home"; // NOT lazy

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogInDetail = lazy(() => import("./components/BlogInDetail"));
const CityMumbai = lazy(() => import("./pages/cities/Mumbai"));
const CityPune = lazy(() => import("./pages/cities/Pune"));
const CityThane = lazy(() => import("./pages/cities/Thane"));
const CityNavimumbai = lazy(() => import("./pages/cities/Navimumbai"));
const CityNagpur = lazy(() => import("./pages/cities/Nagpur"));

function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const entries = await client.getEntries({ content_type: "blog" });
        setBlogs(entries.items);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>

          {/* HOME — no Suspense anywhere */}
          <Route index element={<Home />} />

          <Route
            path="about"
            element={
              <LazyWrapper>
                <About />
              </LazyWrapper>
            }
          />

          <Route
            path="services"
            element={
              <LazyWrapper>
                <Services />
              </LazyWrapper>
            }
          />

          <Route
            path="career"
            element={
              <LazyWrapper>
                <Careers />
              </LazyWrapper>
            }
          />

          <Route
            path="contact"
            element={
              <LazyWrapper>
                <Contact />
              </LazyWrapper>
            }
          />

          <Route
            path="blog"
            element={
                <LazyWrapper>
                <Blog blogs={blogs} loading={loading} />
              </LazyWrapper>
            }
          />

          <Route
            path="blog/:id"
            element={
              <LazyWrapper>
                <BlogInDetail blogs={blogs} loading={loading} />
              </LazyWrapper>
            }
          />

          <Route
            path="services/:slug"
            element={
              <LazyWrapper>
                <ServiceDetail />
              </LazyWrapper>
            }
          />

          {/* City landing pages for Maharashtra */}
          <Route path="mumbai" element={<LazyWrapper><CityMumbai/></LazyWrapper>} />
          <Route path="pune" element={<LazyWrapper><CityPune/></LazyWrapper>} />
          <Route path="thane" element={<LazyWrapper><CityThane/></LazyWrapper>} />
          <Route path="navimumbai" element={<LazyWrapper><CityNavimumbai/></LazyWrapper>} />
          <Route path="nagpur" element={<LazyWrapper><CityNagpur/></LazyWrapper>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
