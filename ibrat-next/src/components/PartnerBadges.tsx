import React from 'react';

const PartnerBadges = () => {
  return (
    <section className="w-full bg-slate-50/50 border-t border-border-soft py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 mb-8">
            Featured On & Partnerships
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {/* Startup Fame */}
            <a 
              href="https://startupfa.me/s/ibrat?utm_source=ibratgenerator.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
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
              className="inline-flex items-center gap-2 rounded-lg border border-[#d4d0c8] px-4 text-[13px] font-semibold tracking-wide text-[#4a4637] opacity-70 hover:opacity-100 transition-opacity" 
              style={{ 
                height: '36px', 
                width: '224px', 
                background: 'linear-gradient(180deg, #faf8f4 0%, #ede9e0 100%)', 
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.08)' 
              }}
            >
              <span style={{ fontSize: '15px', lineHeight: 1 }}>⚡</span>
              All The Best AI Tools
            </a>

            {/* ToolPilot */}
            <a 
              href="https://www.toolpilot.ai/" 
              target="_blank" 
              rel="noopener" 
              title="Featured on ToolPilot" 
              className="inline-flex items-center justify-center rounded-lg border border-[#d4d0c8] px-4 opacity-70 hover:opacity-100 transition-opacity" 
              style={{ 
                height: '36px', 
                width: '224px', 
                background: 'linear-gradient(180deg, #faf8f4 0%, #ede9e0 100%)', 
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.08)' 
              }}
            >
              <img 
                src="/toolpilot-badge.png" 
                alt="Featured on ToolPilot" 
                className="h-[20px] w-auto brightness-90 contrast-125" 
              />
            </a>

            {/* OpenHunts */}
            <a 
              href="https://openhunts.com" 
              target="_blank" 
              title="OpenHunts Club" 
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <img 
                alt="OpenHunts Club Member" 
                height="105" 
                src="https://cdn.openhunts.com/badges/club.webp" 
                style={{ width: "195px", height: "auto" }} 
                width="486" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
