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

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const entries = await client.getEntries({ content_type: "blog" });
        setBlogs(entries.items);
      } catch (err) {
        console.log(err);
      }
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
                <Blog blogs={blogs} />
              </LazyWrapper>
            }
          />

          <Route
            path="blog/:id"
            element={
              <LazyWrapper>
                <BlogInDetail blogs={blogs} />
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

        </Route>
      </Routes>
    </>
  );
}

export default App;
