import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { client } from "./contentful/client";
import MainLayout from "./components/MainLayout";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Careers = React.lazy(() => import("./pages/Careers"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ServiceDetail = React.lazy(() => import("./components/ServiceDetail"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogInDetail = React.lazy(() => import("./components/BlogInDetail"));

function App() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({ content_type: "blog" });
        setBlogs(entries.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route
              path="blog"
              element={<Blog blogs={blogs} loading={loading} />}
            />
            <Route path="blog/:id" element={<BlogInDetail blogs={blogs} />} />
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
