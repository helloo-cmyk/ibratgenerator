import React from 'react';

const PartnerBadges = () => {
  return (
    <section className="w-full bg-white border-t-2 border-black/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter mb-16 text-center leading-none">
            Featured On <span className="text-[#89CC04]">&</span> Partnerships
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            {/* Startup Fame */}
            <a 
              href="https://startupfa.me/s/ibrat?utm_source=ibratgenerator.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <img 
                src="https://startupfa.me/badges/featured-badge-small.webp" 
                alt="Brat Generator - Featured on Startup Fame" 
                width="224" 
                height="36" 
              />
            </a>
 
            {/* All in AI Tools */}
            <a 
              href="https://allinai.tools" 
              target="_blank" 
              rel="noopener" 
              title="All The Best AI Tools" 
              className="flex items-center gap-2 text-xl font-black italic uppercase tracking-tighter transition-all duration-300"
            >
              <span className="text-2xl">⚡</span>
              All The Best AI Tools
            </a>
 
            {/* ToolPilot */}
            <a 
              href="https://www.toolpilot.ai/" 
              target="_blank" 
              rel="noopener" 
              title="Featured on ToolPilot" 
              className="transition-all duration-300"
            >
              <img 
                src="/toolpilot-badge.png" 
                alt="Featured on ToolPilot" 
                className="h-[30px] w-auto" 
              />
            </a>
 
            {/* OpenHunts */}
            <a 
              href="https://openhunts.com" 
              target="_blank" 
              title="OpenHunts Club" 
              className="transition-all duration-300"
            >
              <img 
                alt="OpenHunts Club Member" 
                src="https://cdn.openhunts.com/badges/club.webp" 
                style={{ width: "220px", height: "auto" }} 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
