import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Blog({ blogs, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // 6 blogs per page

  if (loading) return <Loader/>;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get blogs for current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  return (
    <section className="w-full bg-[#0B0F19] text-amber-100 py-16 pt-25 px-4">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Our <span className="text-blue-500">Blogs</span>
        </motion.h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Explore the latest trends, tips, and strategies in tech and development
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((item) => {
            const { blogTitle, smallDescription, author, date, coverPhoto } = item.fields;
            return (
              <div key={item.sys.id}>
                <Link to={`/blog/${item.sys.id}`} className="block group h-full">
                  <div className="h-full flex flex-col bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-blue-500/40 hover:shadow-blue-600/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={`https:${coverPhoto?.fields?.file?.url}?w=800&fm=webp&q=75`}
                      alt={blogTitle}
                      loading="lazy"
                      width="800"
                      height="500"
                      decoding="async"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-medium text-white mb-1 line-clamp-2">
                        {blogTitle}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed grow line-clamp-3 font-light">
                        {smallDescription}
                      </p>
                      <div className="mt-2 text-gray-400">
                        <p className="text-sm font-light">Author: {author}</p>
                        <p className="text-sm font-light">
                          Published:{" "}
                          <span className="text-gray-200">
                            {new Date(date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </p>
                      </div>
                      <span className="text-blue-400 text-sm mt-2 font-medium underline">
                        Read More
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 items-center space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                : "bg-white/10 text-gray-300 hover:bg-blue-500 hover:text-white transition"
            }`}
          >
            Prev
          </button>

          {/* Only show pages 1 and 2 */}
          {Array.from({ length: Math.min(2, totalPages) }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-blue-500 hover:text-white transition"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                : "bg-white/10 text-gray-300 hover:bg-blue-500 hover:text-white transition"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
