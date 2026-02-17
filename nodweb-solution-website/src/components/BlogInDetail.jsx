import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { ArrowLeft } from "lucide-react";
import Loader from "../components/Loader";

function BlogInDetail({ blogs }) {
  const { id } = useParams();

  const navigate = useNavigate();

  if (!blogs || blogs.length === 0) {
    return <Loader />;
  }

  const blog = blogs.find((b) => b.sys.id === id);

  if (!blog) {
    return <div className="text-white text-center py-20">Blog not found</div>;
  }

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
            src={`https:${blog.fields.coverPhoto.fields.file.url}`}
            alt={blog.fields.blogTitle}
            className="w-full max-w-3xl h-auto rounded-xl object-cover"
            loading="lazy"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          {documentToReactComponents(blog.fields.blogContent, options)}
        </div>
      </div>
    </div>
  );
}

export default BlogInDetail;
