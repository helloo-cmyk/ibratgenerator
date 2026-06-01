"use client";

import { useEffect, useState } from "react";
import AdBanner from "./AdBanner";

export default function DownloadInterstitial({ onDownload, onClose }: { onDownload: () => void, onClose: () => void }) {
  const [canDownload, setCanDownload] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    // 10 second countdown for ad visibility
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanDownload(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-[400px] w-full flex flex-col items-center animate-in fade-in zoom-in duration-200">
        <h2 className="text-xl font-black italic uppercase tracking-tighter mb-2">Generating Image...</h2>
        <p className="text-sm text-zinc-500 text-center mb-6">Please wait while we prepare your high-resolution Brat image.</p>
        
        {/* Adsterra 300x250 Ad */}
        <div className="w-[300px] h-[250px] bg-zinc-100 flex items-center justify-center mb-6 overflow-hidden">
          <AdBanner adKey="c08f3c01b8d75d9f5c29d292ee34c7e2" format="iframe" height={250} width={300} />
        </div>

        <div className="flex gap-3 w-full">
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-zinc-100 hover:bg-zinc-200 text-black font-bold rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              onDownload();
              onClose();
            }}
            disabled={!canDownload}
            className="flex-1 py-3 px-4 bg-[#89cc04] hover:bg-[#7abd03] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {canDownload ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Now
              </>
            ) : (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-zinc-400 border-t-black animate-spin"></div>
                Please Wait... {timeLeft}s
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
