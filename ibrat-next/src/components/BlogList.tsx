"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import BLOG_POSTS from "@/lib/blogPosts.json";

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  const filteredPosts = BLOG_POSTS.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="hp-page-section px-4 pt-0">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Simple Search Bar */}
        <div className="mb-16 max-w-xl">
          <input
            type="text"
            className="w-full bg-white border-2 border-black/10 px-6 py-4 text-lg focus:outline-none focus:border-black transition-colors rounded-none"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(20);
            }}
          />
        </div>

        {/* 2-Column Articles Grid */}
        {displayedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {displayedPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
                className="group flex flex-col"
              >
                {/* Card Image */}
                <div className="w-full aspect-[16/9] relative mb-8 overflow-hidden border border-black/5 bg-zinc-50">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#89CC04]">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-bold opacity-30 uppercase tracking-widest">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter leading-tight mb-6 group-hover:text-black transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-[16px] opacity-60 leading-relaxed mb-8 line-clamp-2">
                    {post.description}
                  </p>
                  
                  <div className="text-[12px] font-bold opacity-30 uppercase tracking-widest">
                    {post.date}
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
          <div className="mt-24 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-12 py-5 bg-black text-white text-sm font-black uppercase tracking-[0.2em] hover:bg-[#89CC04] hover:text-black transition-all shadow-[10px_10px_0px_rgba(0,0,0,0.1)]"
            >
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
