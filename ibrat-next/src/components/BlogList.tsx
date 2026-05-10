"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import BLOG_POSTS from "@/lib/blogPosts.json";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts = BLOG_POSTS.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="hp-page-section px-4 pt-0">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Search Bar */}
        <div className="mb-10 relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-11 pr-4 py-4 bg-white border border-[var(--hp-border)] rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--hp-accent)] focus:border-transparent shadow-sm text-[var(--hp-ink)] text-lg placeholder-gray-400 transition-shadow"
            placeholder="Search articles, guides, and trends..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(6); // Reset pagination on new search
            }}
          />
        </div>

        {/* Articles Grid */}
        {displayedPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {displayedPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
                className="group flex flex-col bg-[var(--hp-surface-warm)] border border-[var(--hp-border)] hover:border-[var(--hp-border-dark)] rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white/50"
              >
                {/* Card Image */}
                <div className="w-full aspect-[16/9] relative border-b border-[var(--hp-border)] overflow-hidden bg-[var(--hp-surface)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="inline-block px-3 py-1.5 bg-[var(--hp-accent)]/95 backdrop-blur-sm text-black text-[11px] font-extrabold uppercase tracking-widest rounded-md shadow-sm border border-black/5">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-[11px] font-bold text-[var(--hp-ink)] tracking-widest uppercase opacity-60 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-[22px] sm:text-[24px] font-serif font-medium text-[var(--hp-ink)] leading-[1.25] mb-4 group-hover:text-[var(--hp-primary)] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="hp-body-text text-[15px] sm:text-[16px] opacity-80 leading-relaxed mb-8 flex-grow">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-[13px] font-bold text-[var(--hp-ink)] tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity mt-auto pt-4 border-t border-[var(--hp-border)]">
                    Read article 
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-[var(--hp-ink)] mb-2">No articles found</h3>
            <p className="text-gray-500">We couldn't find any articles matching "{searchQuery}"</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[var(--hp-accent)] text-black text-[14px] font-extrabold tracking-[0.2em] uppercase rounded-full hover:bg-[#9ae605] transition-all focus:outline-none focus:ring-4 focus:ring-[var(--hp-accent)] focus:ring-opacity-50 shadow-[0_10px_20px_rgba(138,206,0,0.3)] hover:shadow-[0_15px_30px_rgba(138,206,0,0.4)] hover:-translate-y-1 transform duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Load More Articles
                <svg className="ml-3 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
