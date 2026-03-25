import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

import SEO from "../components/SEO";

// Hard-coded "Elite" case study blogs
const STATIC_CASE_STUDIES = [
	{
		sys: { id: "case-study-solar-200-percent" },
		fields: {
			blogTitle: "How We Built a Solar Website That Increased Leads by 200%",
			smallDescription: "A deep dive into how we transformed a local solar business from 'invisible' to 'unignorable' using Next.js and Local SEO.",
			author: "Kritika",
			date: "2024-03-10",
			content: { // Minimal content structure 
				nodeType: "document",
				data: {},
				content: [
					{
						nodeType: "paragraph",
						data: {},
						content: [
							{ nodeType: "text", value: "Imagine running a successful offline business but hearing crickets online. The client approached us with absolutely no online presence. They didn\'t have a website, and most importantly, no SEO was integrated. They were completely invisible to high-intent buyers.", marks: [], data: {} }
						]
					},
					{
						nodeType: "paragraph",
						data: {},
						content: [
							{ nodeType: "text", value: "We focused on creating a fast, user-friendly platform and integrated a comprehensive SEO strategy from the ground up. Within 3 months, they went from zero to consistent qualified leads, growing by over 200%.", marks: [], data: {} }
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
				nodeType: 'document', // Simplified for list preview extraction if needed
				data: {},
				content: [
					{
						nodeType: 'paragraph',
						data: {},
						content: [
							{ nodeType: 'text', value: 'You\'re already doing great on Instagram. Your reels are getting views, your follower count is ticking up. But are you getting enough paying customers from it? Or just likes?', marks: [], data: {} }
						]
					}
				]
			},
			coverPhoto: {
				fields: {
					file: {
						// App/Data analytics dashboard image used here (or new business one)
						url: "//images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60"
					}
				}
			}
		}
	}
];

function Blog({ blogs, loading }) {
	const [currentPage, setCurrentPage] = useState(1);
	const blogsPerPage = 6; // 6 blogs per page

	if (loading) return <Loader />;

	// Merge static constant with prop blogs
	const displayBlogs = [...STATIC_CASE_STUDIES, ...(blogs || [])];

	if (!loading && (!displayBlogs || displayBlogs.length === 0)) {
		return (
			<section className="w-full bg-[#0B0F19] text-amber-100 py-16 pt-25 px-4">
				<div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<SEO
						title="Blog - NodWeb Solution | Web Development & Digital Marketing"
						description="Read NodWeb Solution's blog for tips, case studies, and insights on web development, app development, and digital marketing."
						url="/blog"
					/>
					<h2 className="text-2xl text-white font-semibold mb-4">
						No blog posts yet
					</h2>
					<p className="text-gray-400">
						We're working on new content — please check back soon.
					</p>
				</div>
			</section>
		);
	}

	const totalPages = Math.ceil(displayBlogs.length / blogsPerPage);

	// Get blogs for current page
	const indexOfLastBlog = currentPage * blogsPerPage;
	const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
	const currentBlogs = displayBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

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
		<>
			<SEO
				title="Blog - NodWeb Solution | Web Development & Digital Marketing"
				description="Read NodWeb Solution's blog for tips, case studies, and insights on web development, app development, and digital marketing."
				url="/blog"
			/>
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
						Explore the latest trends, tips, and strategies in tech and
						development
					</p>
					<div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
				</div>

				<div className="px-4 sm:px-6 lg:px-8 mt-10">
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{currentBlogs.map((item) => {
              // Extract fields safely
              const fields = item.fields || {};
							const blogTitle = fields.blogTitle || "Untitled Blog";
              const smallDescription = fields.smallDescription || "";
              const author = fields.author || "NodWeb Team";
              const date = fields.date || new Date().toISOString();
              const coverPhoto = fields.coverPhoto;

							const imageUrl = coverPhoto?.fields?.file?.url || "";
							
							// Handle both //domain.com and full https:// URLs
							let safeImageUrl = imageUrl;
							if (imageUrl && imageUrl.startsWith("//")) {
								safeImageUrl = `https:${imageUrl}`;
							}
							
							let finalSrc = safeImageUrl;
							// Only add optimization params if it's likely a Contentful image URL
							if (safeImageUrl && (safeImageUrl.includes('images.ctfassets.net') || safeImageUrl.includes('contentful.com'))) {
								finalSrc = `${safeImageUrl}${safeImageUrl.includes('?') ? '&' : '?'}w=800&fm=webp&q=75`;
							}
              // If static Unsplash URL, it already has params usually, or we leave it.

							return (
								<div key={item.sys.id} className="h-full">
									<Link to={`/blog/${item.sys.id}`} className="block group h-full">
										<div className="h-full flex flex-col bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-blue-500/40 hover:shadow-blue-600/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
											<img
												src={finalSrc}
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
												<span className="text-blue-400 text-sm mt-4 font-medium underline inline-block group-hover:text-blue-300 transition-colors">
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
		</>
	);
}

export default Blog;
