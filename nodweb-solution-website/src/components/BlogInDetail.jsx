import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { client } from "../contentful/client";
import Loader from "./Loader";
import SEO from "./SEO";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Hard-coded case study data duplicate (in a real app, move to a shared constant file)
const STATIC_CASE_STUDIES = [
  {
    sys: { id: "case-study-solar-200-percent" },
    fields: {
      blogTitle: "How We Built a Solar Website That Increased Leads by 200%",
      smallDescription: "A deep dive into how we transformed a local solar business from 'invisible' to 'unignorable' using Next.js and Local SEO.",
      author: "Kritika",
      date: "2024-03-10",
      content: { 
        nodeType: 'document',
        data: {},
        content: [
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                { nodeType: 'text', value: 'Imagine running a successful offline business but hearing crickets online. That was the reality for our client, a local solar installation company. They were relying entirely on word-of-mouth while their competitors were scooping up leads from Google every single day.', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'heading-2',
             data: {},
             content: [
                 { nodeType: 'text', value: 'The Problem: Invisible to High-Intent Buyers', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                { nodeType: 'text', value: 'They didn\'t just have a "bad" website—they had NO website. In 2024, if you don\'t exist on Google, you don\'t exist for 70% of your market. They were completely invisible to high-intent buyers actively searching for "solar panels near me" or "best solar installers". They were leaving thousands of dollars on the table.', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'heading-2',
             data: {},
             content: [
                 { nodeType: 'text', value: 'Our Strategy: Building a Lead Engine', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                { nodeType: 'text', value: 'We didn\'t want to just build a digital brochure. We wanted a sales machine. We chose Next.js for lightning-fast load times—because Google loves speed—and built a custom design that established immediate trust. But the real magic was under the hood.', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                { nodeType: 'text', value: 'We implemented a hyper-local SEO strategy. We targeted specific neighborhoods, optimized for "near me" queries, and created dedicated service pages. We also set up clear, high-contrast Call-to-Actions (CTAs) that guided visitors to "Get a Quote" in under 30 seconds.', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'heading-2',
             data: {},
             content: [
                 { nodeType: 'text', value: 'The Results: 200% Growth', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                { nodeType: 'text', value: 'The transformation was night and day. Within 3 months of launching, they went from zero online leads to a consistent stream of 20+ qualified inquiries per month—a 200% increase compared to their best offline referral months. They are now ranking #1 in their district and expanding their team to handle the demand.', marks: [], data: {} }
             ]
           }
        ]
      },
      coverPhoto: {
        fields: {
          file: {
            url: "//images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60"
          }
        }
      }
    }
  },
  {
    sys: { id: "instagram-vs-google-roi" },
    fields: {
      blogTitle: "Why Instagram Followers Aren't Enough: Turning Likes into Customers",
      smallDescription: "You're killing it on social media, but are you making money? Discover why 70% of your customers are missing if you ignore Google.",
      author: "Kritika",
      date: "2024-03-24",
      content: {
        nodeType: 'document',
        data: {},
        content: [
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                 { nodeType: 'text', value: 'You\'re already doing great on Instagram. Your reels are getting views, your follower count is ticking up, and the comments are flowing. But ask yourself this: Are you getting enough paying customers from it? Or just likes?', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'heading-2',
             data: {},
             content: [
                 { nodeType: 'text', value: 'The Hard Truth: Vanity Metrics vs. Real ROI', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                 { nodeType: 'text', value: 'Social media is amazing for brand awareness, but it is "interruptive" marketing. People aren\'t scrolling Instagram to buy your service; they\'re there to be entertained. Google, on the other hand, is "intent" marketing. When someone types "best digital marketing agency" or "buy ergonomic chair", they are holding their credit card, ready to buy.', marks: [], data: {} }
             ]
           },
           {
             nodeType: 'heading-2',
             data: {},
             content: [
                 { nodeType: 'text', value: 'The Opportunity Cost', marks: [], data: {} }
             ]
           },
           {
            nodeType: 'paragraph',
            data: {},
            content: [
                { nodeType: 'text', value: 'Most businesses miss out on 60-70% of potential customers simply because they rely 100% on social media. They are invisible to the customers who are actively searching for a solution right now. If you aren\'t visible beyond social media, you are handing money directly to your competitors.', marks: [], data: {} }
            ]
           },
           {
             nodeType: 'heading-2',
             data: {},
             content: [
                 { nodeType: 'text', value: 'The NodWeb Solution', marks: [], data: {} }
             ]
           },
           {
            nodeType: 'paragraph',
            data: {},
            content: [
                { nodeType: 'text', value: 'We bridge that gap. We don\'t just give you a website; we give you a 24/7 salesperson. Our holistic approach combines high-performance Website Development, aggressive SEO for Google Ranking, and targeted Paid Ads (Meta & Google) to capture demand, not just generate noise.', marks: [], data: {} }
            ]
           },
           {
            nodeType: 'paragraph',
            data: {},
            content: [
                { nodeType: 'text', value: 'Your Instagram brings followers. We bring you CUSTOMERS. Don\'t leave money on the table. If you want to turn those likes into signed contracts, you need a presence where the intent is highest.', marks: [{type: 'bold'}], data: {} }
            ]
           },
           {
             nodeType: 'paragraph',
             data: {},
             content: [
                 { nodeType: 'text', value: 'Want a FREE audit of your online presence? Contact us today and let\'s build your empire on solid ground.', marks: [{type: 'italic'}], data: {} }
             ]
           }
        ]
      },
      coverPhoto: {
         fields: {
          file: {
             // Business/Growth metaphor image
            url: "//images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60"
          }
        }
      }
    }
  }
];

const BlogInDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
          {documentToReactComponents((blog.fields.content || blog.fields.blogContent || { nodeType: 'document', data: {}, content: [] }), options)}
        </div>
      </div>
    </div>
  );
}

export default BlogInDetail;
