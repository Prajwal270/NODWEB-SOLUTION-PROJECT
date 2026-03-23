import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Loader from "../components/Loader";
import { client } from "../contentful/client";
import SEO from "../components/SEO";

/* ── Estimate words → read time ── */
function getReadTime(richDoc) {
  try {
    const text = JSON.stringify(richDoc);
    const words = text.split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  } catch {
    return null;
  }
}

/* ── Rich-text render options ── */
const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-white leading-snug">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-white relative pl-4 before:absolute before:left-0 before:top-1 before:h-[1.1em] before:w-0.75 before:rounded before:bg-blue-500">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-100">
        {children}
      </h3>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-gray-300 leading-[1.85] mb-4 text-[1.05rem]">
        {children}
      </p>
    ),
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="border-l-4 border-blue-500 bg-blue-500/5 pl-5 pr-4 py-3 my-6 rounded-r-lg italic text-gray-300 text-[1.05rem] leading-relaxed">
        {children}
      </blockquote>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="ml-2 list-none my-3 space-y-1 text-gray-300 text-[1.05rem]">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="ml-2 list-decimal list-inside my-3 space-y-1 text-gray-300 text-[1.05rem]">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => (
      <li className="flex items-start gap-2 leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
        <span>{children}</span>
      </li>
    ),
    [BLOCKS.HR]: () => (
      <hr className="my-10 border-none h-px bg-linear-to-r from-transparent via-gray-600 to-transparent" />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title } = node.data.target.fields;
      if (!file) return null;
      const url = `https:${file.url}?fm=webp&q=80`;
      return (
        <figure className="my-8">
          <img
            src={url}
            alt={title || ""}
            className="w-full rounded-xl object-cover shadow-lg shadow-black/40"
            loading="lazy"
          />
          {title && (
            <figcaption className="text-center text-gray-500 text-sm mt-2 italic">
              {title}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

/* ── Main component ── */
function BlogInDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const entry = await client.getEntry(id);
        setBlog(entry);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <Loader />;
  if (!blog)
    return <div className="text-white text-center py-20">Blog not found</div>;

  const readTime = getReadTime(blog.fields.blogContent);
  const formattedDate = new Date(blog.fields.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-[#0B0F19] min-h-screen text-white">
        <SEO
          title={blog.fields.blogTitle}
          description={blog.fields.displayTitle}
          url={`https://www.nodwebsolution.in/blog/${blog.sys.id}`}
          image={`https:${blog.fields.coverPhoto.fields.file.url}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.fields.blogTitle,
            description: blog.fields.displayTitle,
            image: `https:${blog.fields.coverPhoto.fields.file.url}`,
            author: {
              "@type": "Person",
              name: blog.fields.author || "NodWeb Solution",
            },
            datePublished: blog.fields.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.nodwebsolution.in/blog/${blog.sys.id}`,
            },
          })}
        </script>

        {/* ── Hero cover image with overlay ── */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] overflow-hidden">
          <img
            src={`https:${blog.fields.coverPhoto.fields.file.url}?w=900&fm=webp&q=65&fit=fill`}
            alt={blog.fields.blogTitle}
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />

          {/* back button inside hero */}
          <div className="absolute top-8 left-4 sm:left-10 pt-16">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition bg-black/30 backdrop-blur-sm px-3 py-1.5 border border-white/10 hover:border-white/30 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
        </div>

        {/* ── Article body ── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-24 relative z-10 pb-20">

          {/* Title block */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
              {blog.fields.blogTitle}
            </h1>
            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
              {blog.fields.displayTitle}
            </p>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400 border-y border-gray-700/50 py-4 mb-10">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-400" />
              {blog.fields.author || "NodWeb Solution"}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              {formattedDate}
            </span>
            {readTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {readTime} min read
              </span>
            )}
          </div>

          {/* Rich text content */}
          <article className="prose-blog">
            {documentToReactComponents(blog.fields.blogContent, options)}
          </article>

          {/* ── Author card footer ── */}
          <div className="mt-16 p-5 rounded-2xl border border-gray-700/50 bg-white/3 backdrop-blur-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shrink-0 uppercase">
              {(blog.fields.author || "N")[0]}
            </div>
            <div>
              <p className="font-semibold text-white text-sm">
                {blog.fields.author || "NodWeb Solution"}
              </p>
              <p className="text-gray-400 text-xs mt-0.5">
                Published on {formattedDate} · NodWeb Solution Blog
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default BlogInDetail;