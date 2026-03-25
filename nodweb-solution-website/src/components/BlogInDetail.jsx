import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { client } from "../contentful/client";
import Loader from "./Loader";
import SEO from "./SEO";
import { motion } from "framer-motion";

// Hard-coded case study data duplicate (in a real app, move to a shared constant file)
const STATIC_CASE_STUDIES = [
  {
    sys: { id: "case-study-solar-200-percent" },
    fields: {
      blogTitle: "How We Built a Solar Website That Increased Leads by 200%",
      smallDescription: "A deep dive into the UX/UI overhaul and SEO strategy that transformed a local solar business into a lead-generating machine.",
      author: "Kritika",
      date: "2024-03-10",
      content: { 
        nodeType: 'document',
        data: {},
        content: [
           {
             nodeType: 'paragraph',
             content: [
                { nodeType: 'text', value: 'The Client Challenge: A local solar installation company approached us with a site that was 5 years old. It was slow, not mobile-friendly, and generated near-zero leads.' }
             ]
           },
           {
             nodeType: 'paragraph',
             content: [
                { nodeType: 'text', value: 'Our Solution: We rebuilt the site on Next.js 14 for speed, optimized all images, and implemented a strict local SEO strategy targeting high-intent keywords like "solar panel installation near me". We also added clear, persistent CTAs for quote requests.' }
             ]
           },
           {
             nodeType: 'paragraph',
             content: [
                { nodeType: 'text', value: 'The Results: Within 3 months, organic traffic grew by 150% and form submissions (leads) increased by over 200%.' }
             ]
           }
        ]
      },
      coverPhoto: {
        fields: {
          file: {
            url: "//images.unsplash.com/photo-1508514177221-188b1cf2f26f?w=800&auto=format&fit=crop&q=60"
          }
        }
      }
    }
  },
  {
    sys: { id: "case-study-idea-to-app" },
    fields: {
      blogTitle: "From Idea to App: Our Client Success Story",
      smallDescription: "Tracing the journey of a fintech startup from a napkin sketch to a fully scalable mobile application with thousands of users.",
      author: "Kritika",
      date: "2024-02-28",
      content: {
        nodeType: 'document',
        data: {},
        content: [
           {
             nodeType: 'paragraph',
             content: [
                 { nodeType: 'text', value: 'Inception: The client had a brilliant idea for micro-finance management but no technical co-founder. They needed a partner to turn requirements into a working prototype quickly.' }
             ]
           },
           {
             nodeType: 'paragraph',
             content: [
                 { nodeType: 'text', value: 'Execution: Using React Native (Expo), we sprinted through a 4-week MVP phase. This allowed early user testing. We iterated on feedback rapidly, refining both the UI and the backend logic.' }
             ]
           },
           {
            nodeType: 'paragraph',
            content: [
                { nodeType: 'text', value: 'Outcome: The app launched on both stores seamlessly. It now supports thousands of daily active users with 99.9% uptime.' }
            ]
           }
        ]
      },
      coverPhoto: {
         fields: {
          file: {
            url: "//images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=60"
          }
        }
      }
    }
  }
];

const BlogInDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    // Check if it's a static case study first
    const staticStudy = STATIC_CASE_STUDIES.find(b => b.sys.id === id);
    if (staticStudy) {
      setBlog(staticStudy);
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        const entry = await client.getEntry(id);
        setBlog(entry);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Loader />;

  if (!loading && (!blog || !blog.fields)) {
    return (
      <div className="bg-[#0B0F19] min-h-screen text-amber-100 py-16 pt-25 px-4 flex items-center justify-center">
        <p className="text-xl">Blog post not found.</p>
      </div>
    );
  }

  // Helper to safely get image URL
  const getSafeImageUrl = (url) => {
    if (!url) return "";
    let safeUrl = url;
    if (url.startsWith("//")) {
      safeUrl = `https:${url}`;
    }
    // Only append Contentful params if it's a Contentful URL
    if (safeUrl.includes('ctfassets.net')) {
        return safeUrl; // Usually we might want ?w=... here too but keeping it simple for detail view to avoid double params
    }
    return safeUrl;
  };
  
  const coverUrl = blog.fields.coverPhoto?.fields?.file?.url;
  const safeCoverUrl = getSafeImageUrl(coverUrl);

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children, index) => (
        <h2
          key={index}
          className="text-xl sm:text-2xl  font-semibold mt-8 mb-4 text-blue-400"
        >
          {children}
        </h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children, index) => (
        <p
          key={index}
          className="text-gray-300 leading-relaxed mb-4 text-base sm:text-lg"
        >
          {children}
        </p>
      ),
    },
  };

  return (
    <div className="bg-[#0B0F19] text-white pt-25 py-12 px-4 sm:px-6 md:px-12">
      <SEO
        title={blog.fields.blogTitle}
        description={blog.fields.smallDescription || blog.fields.displayTitle}
        url={`https://www.nodwebsolution.in/blog/${blog.sys.id}`}
        image={safeCoverUrl}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.fields.blogTitle,
          "description": blog.fields.smallDescription || "",
          "image": safeCoverUrl,
          "author": {
            "@type": "Person",
            "name": blog.fields.author || "NodWeb Solution"
          },
          "datePublished": blog.fields.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.nodwebsolution.in/blog/${blog.sys.id}`
          }
        })}
      </script>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition px-1.5 py-0.5 border border-gray-400/20 hover:border-gray-400/80 rounded-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3">
          {blog.fields.blogTitle}
        </h1>
        <h4 className="text-gray-400 text-base sm:text-lg font-light mb-6">
          {blog.fields.displayTitle}
        </h4>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-400 text-sm mb-8 gap-2">
          <p>Author: {blog.fields.author}</p>
          <p>
            Published:{" "}
            {new Date(blog.fields.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <img
            src={safeCoverUrl}
            alt={blog.fields.blogTitle}
            className="w-full max-w-3xl h-auto rounded-xl object-cover"
            loading="lazy"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          {documentToReactComponents((blog.fields.content || blog.fields.blogContent), options)}
        </div>
      </div>
    </div>
  );
}

export default BlogInDetail;
