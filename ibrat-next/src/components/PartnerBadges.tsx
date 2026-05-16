import React from 'react';

const PartnerBadges = () => {
  return (
    <section className="w-full bg-white border-t-2 border-black/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter mb-16 text-center leading-none">
            Featured On <span className="text-[#89CC04]">&</span> Partnerships
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-8 max-w-[1000px] mx-auto">
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
                style={{ 
                  height: '40px', 
                  width: 'auto'
                }}
              />
            </a>
 
            {/* All in AI Tools */}
            <a 
              href="https://allinai.tools" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="All The Best AI Tools" 
              className="flex items-center gap-2 text-xl font-black italic uppercase tracking-tighter transition-all duration-300"
              style={{ 
                height: '40px'
              }}
            >
              <span className="text-2xl">⚡</span>
              All The Best AI Tools
            </a>
 
            {/* ToolPilot */}
            <a 
              href="https://www.toolpilot.ai/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Featured on ToolPilot" 
              className="transition-all duration-300"
            >
              <img 
                src="/toolpilot-badge.png" 
                alt="Featured on ToolPilot" 
                style={{ 
                  height: '40px', 
                  width: 'auto'
                }}
              />
            </a>
 
            {/* OpenHunts */}
            <a 
              href="https://openhunts.com" 
              target="_blank" 
              rel="noopener noreferrer"
              title="OpenHunts Club" 
              className="transition-all duration-300"
            >
              <img 
                alt="OpenHunts Club Member" 
                src="https://cdn.openhunts.com/badges/club.webp" 
                style={{ 
                  height: '40px', 
                  width: 'auto'
                }}
              />
            </a>

            {/* BacklinkLog */}
            <a 
              href="https://backlinklog.com/listing/ibratgenerator.com?utm_source=backlinklog&utm_medium=badge"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <img 
                src="https://backlinklog.com/badge/ibratgenerator.com.svg" 
                alt="Listed on BacklinkLog"
                style={{ 
                  height: '40px', 
                  width: 'auto'
                }}
              />
            </a>

            {/* Dang.ai */}
            <a 
              href="https://dang.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <img 
                src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" 
                alt="Dang.ai" 
                style={{ 
                  height: '40px', 
                  width: 'auto'
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
