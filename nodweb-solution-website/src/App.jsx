import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import LazyWrapper from "./components/LazyWrapper";

import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogInDetail = lazy(() => import("./components/BlogInDetail"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<LazyWrapper><About /></LazyWrapper>} />
          <Route path="services" element={<LazyWrapper><Services /></LazyWrapper>} />
          <Route path="career" element={<LazyWrapper><Careers /></LazyWrapper>} />
          <Route path="contact" element={<LazyWrapper><Contact /></LazyWrapper>} />
          <Route path="blog" element={<LazyWrapper><Blog /></LazyWrapper>} />
          <Route path="blog/:id" element={<LazyWrapper><BlogInDetail /></LazyWrapper>} />
          <Route path="services/:slug" element={<LazyWrapper><ServiceDetail /></LazyWrapper>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;