"use client";

import { useEffect, useRef } from "react";
import { initBratGenerator } from "./brat-generator-init";

const BRAT_STYLES = `
/* ===== RESET & FOUNDATION ===== */
#brat-embed-root {
  all: initial;
  display: block;
  width: 100%;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#brat-widget {
  all: unset;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 400px;
  z-index: 1000;
  padding: 28px;
  background: #ffffff;
  color: #0f172a;
  overflow: visible;
  box-sizing: border-box;
}

:root {
  --bg: #c1ff00;
  --fg: #0a0a0a;
  --ui: #0f172a;
  --muted: #64748b;
  --card: #ffffff;
  --ring: #6366f1;
  --border: rgba(0, 0, 0, .06);
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, .04);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .03);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, .05), 0 1px 4px rgba(0, 0, 0, .03);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, .08), 0 2px 8px rgba(0, 0, 0, .04);
  --radius-xl: 20px;
  --radius: 14px;
  --radius-sm: 10px;
  --radius-xs: 8px;
  --transition: .2s cubic-bezier(.4, 0, .2, 1);
}

/* ===== LAYOUT ===== */
#brat-wrap {
  max-width: 1240px;
  margin: 0 auto;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
}

#brat-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

#brat-topbar h1 {
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -.03em;
}

#brat-topbar .muted {
  color: var(--muted);
  font-size: 13px;
}

#brat-close {
  border: 1px solid var(--border);
  background: var(--card);
  color: #0f172a;
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  transition: all var(--transition);
  box-shadow: var(--shadow-xs);
}

#brat-close:hover {
  background: #f8fafc;
  box-shadow: var(--shadow-sm);
}

.brat-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  overflow: visible;
  min-height: 0;
}

@media(min-width:1000px) {
  .brat-grid {
    flex-direction: row;
    gap: 24px;
  }
}

.brat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 16px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  min-height: 0;
}

@media(min-width:640px) {
  .brat-card {
    padding: 24px;
  }
}

.brat-controls-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* ===== TYPOGRAPHY ===== */
.brat-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  display: block;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: .05em;
}

/* ===== FORM CONTROLS ===== */
#brat-embed-root input[type="text"],
#brat-embed-root textarea,
#brat-embed-root select {
  width: 100%;
  background: #f8fafc;
  color: #0f172a;
  border: 1px solid rgba(0, 0, 0, .08);
  border-radius: var(--radius-xs);
  padding: 10px 12px;
  box-sizing: border-box;
  transition: border-color var(--transition), box-shadow var(--transition);
  font-size: 14px;
  line-height: 1.5;
}

#brat-embed-root input[type="text"]:focus,
#brat-embed-root textarea:focus,
#brat-embed-root select:focus {
  outline: none;
  border-color: #a5b4fc;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, .08);
}

#brat-embed-root input[type="color"] {
  width: 44px;
  height: 38px;
  border: 2px solid rgba(0, 0, 0, .08);
  background: transparent;
  padding: 3px;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: border-color var(--transition);
}

#brat-embed-root input[type="color"]:hover {
  border-color: var(--border-soft);
}

/* ===== RANGE SLIDER ===== */
#brat-embed-root input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e2e8f0;
  outline: none;
  transition: background var(--transition);
  margin: 8px 0;
}

#brat-embed-root input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #6366f1;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .15);
  cursor: pointer;
  transition: all var(--transition);
}

#brat-embed-root input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 2px 8px rgba(99, 102, 241, .3);
}

#brat-embed-root input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #6366f1;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .15);
  cursor: pointer;
}

#brat-embed-root input[type="range"]::-moz-range-track {
  height: 6px;
  border-radius: 3px;
  background: #e2e8f0;
}

#brat-embed-root input,
#brat-embed-root button,
#brat-embed-root select,
#brat-embed-root textarea {
  font-family: inherit;
  font-size: 14px;
}

/* ===== ROWS ===== */
.brat-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

/* ===== BUTTONS ===== */
.brat-btn {
  border: 1px solid rgba(0, 0, 0, .08);
  background: var(--card);
  color: #0f172a;
  border-radius: var(--radius);
  padding: 11px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: -.01em;
  transition: all var(--transition);
  box-shadow: var(--shadow-xs);
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}

.brat-btn:hover {
  background: #f8fafc;
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.brat-btn:active {
  transform: translateY(0);
  box-shadow: none;
}

.brat-btn:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.brat-btn.primary {
  background: #111;
  color: white;
  border-color: #111;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
}

.brat-btn.primary:hover {
  opacity: 0.9;
}

.brat-btn.primary:active {
  background: #111;
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
}

.brat-btn.green {
  background: #111;
  color: white;
  border-color: #111;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .15);
}

.brat-btn.green:hover {
  opacity: 0.9;
}

/* ===== TOOLBAR ===== */
.brat-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: var(--muted);
  font-size: 13px;
}

.brat-toolbar>span:first-child {
  font-weight: 600;
  color: #0f172a;
  font-size: 14px;
}

/* ===== CANVAS STAGE ===== */
.brat-stage {
  position: relative;
  background: #ffffff;
  border-radius: 0.75rem;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, .04);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  overflow: hidden;
}

.brat-canvas {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  background: var(--bg);
  display: block;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .06);
  object-fit: contain;
}

.brat-safe {
  position: absolute;
  inset: 16px;
  border: 2px dashed rgba(0, 0, 0, .08);
  border-radius: 12px;
  pointer-events: none;
}

/* ===== ACCORDIONS ===== */
.brat-acc {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--card);
  margin-bottom: 8px;
  transition: box-shadow var(--transition);
}

.brat-acc:hover {
  box-shadow: var(--shadow-xs);
}

.brat-acc-h {
  width: 100%;
  text-align: left;
  padding: 14px 16px;
  background: transparent;
  border: 0;
  color: #0f172a;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: background var(--transition);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brat-acc-h::after {
  content: '';
  width: 7px;
  height: 7px;
  border-right: 1.5px solid var(--muted);
  border-bottom: 1.5px solid var(--muted);
  transform: rotate(45deg);
  transition: transform var(--transition);
  flex-shrink: 0;
  margin-left: 8px;
}

.brat-acc.open .brat-acc-h::after {
  transform: rotate(-135deg);
}

.brat-acc-h:hover {
  background: #f8fafc;
}

.brat-acc-b {
  max-height: 0;
  overflow: hidden;
  transition: max-height .3s ease;
}

.brat-acc.open .brat-acc-b {
  max-height: 1200px;
}

/* ===== TOAST ===== */
.brat-toast {
  position: fixed;
  right: 20px;
  bottom: 80px;
  background: #0f172a;
  color: #fff;
  padding: 12px 20px;
  border-radius: var(--radius);
  z-index: 2147483647;
  font-size: 13px;
  font-weight: 500;
  box-shadow: var(--shadow-lg);
  animation: brat-toast-in .3s ease;
}

@keyframes brat-toast-in {
  from { opacity: 0; transform: translateY(8px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.brat-kbd {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  background: rgba(0, 0, 0, .05);
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, .06);
}

.brat-pill {
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, .08);
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  background: var(--card);
  transition: all var(--transition);
  box-shadow: var(--shadow-xs);
}

.brat-pill:hover {
  border-color: var(--border-soft);
  box-shadow: var(--shadow-sm);
  transform: translateY(-1px);
}

.brat-pill:active {
  transform: translateY(0);
  box-shadow: none;
}

.brat-help {
  font-size: 12px;
  color: var(--muted);
}

#brat-canvas { cursor: default; }
#brat-canvas.sticker-move { cursor: move; }
#brat-canvas.sticker-resize { cursor: nwse-resize; }
#brat-canvas.sticker-rotate { cursor: grab; }

.brat-tab-panel { display: none; }
.brat-tab-panel.active { display: block; }
.brat-bottom-nav { display: none; }
.brat-sheet-handle { display: none; }
.brat-desktop-tabs { display: none; }

.brat-export-sticky {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 4px 0 16px;
  flex-wrap: wrap;
}

.brat-export-sticky .brat-btn {
  flex: 1;
  text-align: center;
  justify-content: center;
}

.brat-tab-btn {
  flex: 1;
  min-height: 48px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  transition: all var(--transition);
  position: relative;
  border-radius: 8px;
  margin: 4px 2px;
}

.brat-tab-btn.active {
  color: #0f172a;
  background: rgba(15, 23, 42, .05);
}

.brat-tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 30%;
  right: 30%;
  height: 2.5px;
  border-radius: 2px;
  background: #0f172a;
}

.brat-tab-btn:hover {
  color: #0f172a;
  background: rgba(0, 0, 0, .03);
}

.brat-tab-icon {
  font-size: 18px;
  line-height: 1;
}

.brat-sticker-cats {
  display: flex;
  gap: 2px;
  padding: 4px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  margin-bottom: 10px;
}

.brat-sticker-cat {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 18px;
  padding: 8px 0;
  cursor: pointer;
  border-radius: 8px;
  transition: all var(--transition);
  line-height: 1;
  font-family: inherit;
}

.brat-sticker-cat:hover {
  background: rgba(0, 0, 0, .04);
}

.brat-sticker-cat.active {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .08);
}

.brat-sticker-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  max-height: 220px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
}

.brat-sticker-grid button {
  border: none;
  background: transparent;
  font-size: 24px;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: all var(--transition);
  line-height: 1;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brat-sticker-grid button:hover {
  background: #f1f5f9;
  transform: scale(1.15);
}

.brat-sticker-grid button:active {
  transform: scale(0.95);
}

#brat-embed-root label {
  font-size: 13px;
  color: #475569;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color var(--transition);
}

#brat-embed-root label:hover {
  color: #0f172a;
}

#brat-controls::-webkit-scrollbar {
  width: 3px;
}

#brat-controls::-webkit-scrollbar-track {
  background: transparent;
}

#brat-controls::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, .08);
  border-radius: 3px;
}

#brat-controls::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, .15);
}

.brat-acc-b .brat-row+.brat-row {
  margin-top: 4px;
}

@media(max-width:999px) {
  #brat-topbar { display: none; }
  #brat-widget {
    padding: 0;
    background: #ffffff;
    overflow: visible;
    display: block;
  }
  #brat-wrap {
    width: 100%;
    max-width: 100%;
    display: block;
    overflow: visible;
  }
  .brat-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
    overflow: visible;
  }
  #brat-preview {
    order: 0;
    display: block;
    margin: 8px 8px 12px;
    border-radius: 0.75rem;
    border: none;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    padding: 12px;
    background: #ffffff;
    overflow: visible;
  }
  .brat-stage {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    padding: 0;
    border-radius: 0.75rem;
    overflow: hidden;
  }
  .brat-canvas {
    width: auto !important;
    height: auto !important;
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
    box-shadow: var(--shadow-md);
    object-fit: contain;
  }
  .brat-toolbar { display: none; }
  #brat-controls {
    order: 1;
    position: relative;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height .35s cubic-bezier(.4, 0, .2, 1);
    z-index: 1001;
    border-radius: 16px;
    box-shadow: none;
    padding: 0;
    margin: 0 8px;
    width: calc(100% - 16px);
    border: none;
    background: #fff;
  }
  #brat-controls.sheet-open {
    max-height: 500px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .06);
    margin-top: 8px;
  }
  .brat-sheet-handle {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    min-height: 44px;
  }
  .brat-sheet-handle span {
    width: 36px;
    height: 4px;
    background: rgba(0, 0, 0, .12);
    border-radius: 4px;
  }
  .brat-tab-panel { display: none !important; }
  .brat-tab-panel.active { display: block !important; }
  .brat-bottom-nav {
    display: flex;
    position: relative;
    width: 100%;
    height: 52px;
    margin-top: 8px;
    background: #ffffff;
    border-top: 1px solid rgba(0, 0, 0, .06);
    box-shadow: none;
    z-index: 1002;
    padding: 0 4px;
  }
  .brat-tab-btn {
    min-height: 52px;
    margin: 0;
    border-radius: 0;
  }
  .brat-tab-btn.active {
    background: transparent;
    font-weight: 600;
    color: #020617;
  }
  .brat-tab-btn.active::after {
    bottom: 0;
    left: 20%;
    right: 20%;
    height: 3.5px;
    background: #020617;
    border-radius: 2px;
  }
  .brat-btn { min-height: 44px; }
  .brat-acc-h { min-height: 48px; }
  .brat-pill { min-height: 44px; }
  .brat-export-sticky {
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 1;
    border-bottom: 1px solid var(--border);
    padding: 16px;
  }
  .brat-acc {
    margin-bottom: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
  .brat-acc+.brat-acc { border-top: none; }
  .brat-acc-h { padding: 16px; }
  .brat-acc-b>div { padding: 16px !important; }
  .brat-sticker-grid {
    grid-template-columns: repeat(4, 1fr);
    max-height: 180px;
  }
}

@media(min-width:1000px) {
  .brat-tab-panel.active { display: block; }
  .brat-export-sticky { padding: 4px 0 16px; }
  .brat-acc-b>div { padding: 16px !important; }
  #brat-controls {
    overflow-y: auto;
    width: 380px;
    flex-shrink: 0;
    max-height: none;
    padding: 24px;
  }
  #brat-preview {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 0;
  }
  .brat-desktop-tabs {
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
    padding: 4px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 12px;
  }
  .brat-desktop-tabs .brat-tab-btn {
    flex: 1;
    min-height: 38px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    flex-direction: row;
    gap: 0;
    padding: 8px 0;
    background: transparent;
    color: var(--muted);
    margin: 0;
    transition: all var(--transition);
  }
  .brat-desktop-tabs .brat-tab-btn::after { display: none; }
  .brat-desktop-tabs .brat-tab-btn.active {
    background: #fff;
    color: #0f172a;
    box-shadow: var(--shadow-sm);
  }
  .brat-desktop-tabs .brat-tab-btn:hover:not(.active) {
    color: #0f172a;
    background: rgba(255, 255, 255, .5);
  }
  .brat-tab-panel.active .brat-acc .brat-acc-b { max-height: 1200px; }
  .brat-tab-panel.active .brat-acc {
    border: none;
    background: transparent;
    margin-bottom: 0;
    box-shadow: none;
  }
  .brat-tab-panel.active .brat-acc:hover { box-shadow: none; }
  .brat-tab-panel.active .brat-acc-h {
    cursor: default;
    pointer-events: none;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: .05em;
    color: var(--muted);
    font-weight: 600;
    padding: 20px 0 8px 0;
    background: transparent;
    min-height: auto;
  }
  .brat-tab-panel.active .brat-acc-h::after { display: none; }
  .brat-tab-panel .brat-acc:only-child .brat-acc-h { display: none; }
}
`;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof document === "undefined") {
      reject(new Error("Document not available"));
      return;
    }
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export default function BratGenerator() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const runInit = async () => {
      try {
        await Promise.all([
          loadScript("https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"),
          loadScript("https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js"),
        ]);
        if (rootRef.current) {
          cleanupRef.current = initBratGenerator();
        }
      } catch (err) {
        console.error("BratGenerator init failed:", err);
      }
    };
    runInit();
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, []);

  return (
    <div id="brat-embed-root" ref={rootRef} style={{ all: "initial" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;500;600;700;900&family=Montserrat:wght@700;900&family=Playfair+Display:wght@700;900&family=Poppins:wght@700;900&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: BRAT_STYLES }} />
      <div id="brat-widget" aria-live="polite">
        <div id="brat-wrap">
          <div className="brat-grid">
            <aside className="brat-card" id="brat-controls" aria-hidden="false">
              <div className="brat-sheet-handle">
                <span />
              </div>
              <div className="brat-desktop-tabs">
                <button type="button" className="brat-tab-btn active" data-tab="text">
                  Text
                </button>
                <button type="button" className="brat-tab-btn" data-tab="style">
                  Style
                </button>
                <button type="button" className="brat-tab-btn" data-tab="stickers">
                  Stickers
                </button>
                <button type="button" className="brat-tab-btn" data-tab="export">
                  Export
                </button>
              </div>
              <div className="brat-tab-panel active" data-tab="text">
                <section className="brat-acc open" id="brat-acc-text">
                  <button type="button" className="brat-acc-h" data-acc="text">
                    Text
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <textarea
                        id="brat-text"
                        rows={4}
                        placeholder="write your brat text here (it will be lowercased)"
                        defaultValue="brat"
                      />
                      <div className="brat-row">
                        <label>
                          <input type="checkbox" id="brat-forceLower" defaultChecked /> force lowercase
                        </label>
                        <label>
                          <input type="checkbox" id="brat-autoBreak" defaultChecked /> smart line breaks
                        </label>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div>
                          <label className="brat-label" htmlFor="brat-fontSize">
                            Font size
                          </label>
                          <input type="range" id="brat-fontSize" min={24} max={220} defaultValue={120} />
                        </div>
                        <div>
                          <label className="brat-label" htmlFor="brat-lineHeight">
                            Line spacing
                          </label>
                          <input type="range" id="brat-lineHeight" min={0.8} max={1.6} defaultValue={1} step={0.05} />
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div>
                          <label className="brat-label" htmlFor="brat-letterSpacing">
                            Letter spacing
                          </label>
                          <input type="range" id="brat-letterSpacing" min={-4} max={10} defaultValue={0} step={0.5} />
                        </div>
                        <div>
                          <label className="brat-label" htmlFor="brat-align">
                            Align
                          </label>
                          <select id="brat-align" defaultValue="center">
                            <option value="left">left</option>
                            <option value="center">center</option>
                            <option value="right">right</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="brat-label" htmlFor="brat-fontSelect">
                          Font
                        </label>
                        <select id="brat-fontSelect" defaultValue="'Inter', sans-serif">
                          <option value="'Inter', sans-serif">Inter</option>
                          <option value="'Poppins', sans-serif">Poppins</option>
                          <option value="'Montserrat', sans-serif">Montserrat</option>
                          <option value="'Bebas Neue', sans-serif">Bebas Neue</option>
                          <option value="'Anton', sans-serif">Anton</option>
                          <option value="'Playfair Display', serif">Playfair Display</option>
                        </select>
                      </div>
                      <div className="brat-row" style={{ alignItems: "center" }}>
                        <label>
                          <input type="checkbox" id="brat-outlineToggle" /> outline
                        </label>
                        <div id="brat-outlineColorContainer" style={{ display: "none", marginLeft: 8, gap: 12, alignItems: "center" }}>
                          <span className="tag">Outline color</span>
                          <input type="color" id="brat-outlineColor" defaultValue="#ffffff" />
                        </div>
                        <label style={{ marginLeft: 8 }}>
                          <input type="checkbox" id="brat-shadowToggle" /> soft shadow
                        </label>
                        <div id="brat-shadowColorContainer" style={{ display: "none", marginLeft: 8, gap: 12, alignItems: "center" }}>
                          <span className="tag">Shadow color</span>
                          <input type="color" id="brat-shadowColor" defaultValue="#000000" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="brat-tab-panel" data-tab="style">
                <section className="brat-acc" id="brat-acc-colors">
                  <button type="button" className="brat-acc-h" data-acc="colors">
                    Colors
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <div className="brat-pill" data-bg="#c1ff00" data-fg="#0a0a0a">
                          <span
                            style={{
                              display: "inline-block",
                              width: 18,
                              height: 18,
                              borderRadius: 4,
                              background: "#c1ff00",
                              border: "1px solid rgba(0,0,0,.06)",
                            }}
                          />
                          brat
                        </div>
                        <div className="brat-pill" data-bg="#0a0a0a" data-fg="#ffffff">
                          <span
                            style={{
                              display: "inline-block",
                              width: 18,
                              height: 18,
                              borderRadius: 4,
                              background: "#0a0a0a",
                            }}
                          />
                          deluxe
                        </div>
                        <div className="brat-pill" data-bg="#ff90e8" data-fg="#0a0a0a">
                          <span
                            style={{
                              display: "inline-block",
                              width: 18,
                              height: 18,
                              borderRadius: 4,
                              background: "#ff90e8",
                            }}
                          />
                          crash
                        </div>
                        <div className="brat-pill" data-bg="#ffffff" data-fg="#0a0a0a">
                          <span
                            style={{
                              display: "inline-block",
                              width: 18,
                              height: 18,
                              borderRadius: 4,
                              background: "#ffffff",
                              border: "1px solid rgba(0,0,0,.06)",
                            }}
                          />
                          white
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                        <div>
                          <label className="brat-label" htmlFor="brat-bgColor">
                            Background
                          </label>
                          <input type="color" id="brat-bgColor" defaultValue="#c1ff00" />
                        </div>
                        <div>
                          <label className="brat-label" htmlFor="brat-fgColor">
                            Text
                          </label>
                          <input type="color" id="brat-fgColor" defaultValue="#0a0a0a" />
                        </div>
                      </div>
                      <div className="brat-row">
                        <div className="brat-help">
                          Contrast check: <span id="brat-contrastLabel">—</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="brat-acc" id="brat-acc-canvas">
                  <button type="button" className="brat-acc-h" data-acc="canvas">
                    Canvas
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div>
                          <label className="brat-label" htmlFor="brat-ratio">
                            Aspect Ratio
                          </label>
                          <select id="brat-ratio" defaultValue="1:1">
                            <option value="1:1">Square 1:1</option>
                            <option value="4:5">Instagram 4:5</option>
                            <option value="9:16">Story/Reel 9:16</option>
                            <option value="16:9">Wide 16:9</option>
                          </select>
                        </div>
                        <div>
                          <label className="brat-label" htmlFor="brat-res">
                            Resolution
                          </label>
                          <select id="brat-res" defaultValue="1500">
                            <option value="1024">1024 px</option>
                            <option value="1500">1500 px</option>
                            <option value="2048">2048 px</option>
                            <option value="3000">3000 px</option>
                          </select>
                        </div>
                      </div>
                      <div className="brat-row">
                        <label>
                          <input type="checkbox" id="brat-safeToggle" /> show safe margins
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="brat-acc" id="brat-acc-selfie">
                  <button type="button" className="brat-acc-h" data-acc="selfie">
                    Selfie Mode
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <div className="brat-row">
                        <input type="file" id="brat-bgUpload" accept="image/*" />
                        <button type="button" className="brat-btn" id="brat-clearBg">
                          Remove
                        </button>
                      </div>
                      <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6 }}>
                        Upload a photo as background (auto cover). Text stays on top.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="brat-tab-panel" data-tab="stickers">
                <section className="brat-acc" id="brat-acc-stickers">
                  <button type="button" className="brat-acc-h" data-acc="stickers">
                    Stickers
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <div className="brat-sticker-cats" id="brat-sticker-cats" />
                      <div className="brat-sticker-grid" id="brat-sticker-grid" />
                      <div style={{ fontSize: 12, color: "#94a3b8" }}>
                        Tap to place · drag to move · corners to resize · top handle to rotate · double-click to delete
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="brat-tab-panel" data-tab="export">
                <div className="brat-export-sticky">
                  <button type="button" id="brat-download" className="brat-btn primary">
                    Download PNG
                  </button>
                  <button type="button" id="brat-copy" className="brat-btn">
                    Copy to Clipboard
                  </button>
                </div>
                <section className="brat-acc" id="brat-acc-batch">
                  <button type="button" className="brat-acc-h" data-acc="batch">
                    Batch (ZIP)
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <textarea
                        id="brat-batch"
                        rows={4}
                        placeholder="one caption per line to batch generate"
                      />
                      <div className="brat-row">
                        <button type="button" id="brat-batchBtn" className="brat-btn green">
                          Generate ZIP
                        </button>
                        <span style={{ fontSize: 13, color: "#6b7280" }}>Creates images for all lines above.</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="brat-acc" id="brat-acc-share">
                  <button type="button" className="brat-acc-h" data-acc="share">
                    Share / Meta
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <div className="brat-row">
                        <button type="button" id="brat-altBtn" className="brat-btn">
                          Copy ALT text
                        </button>
                        <button type="button" id="brat-randomBtn" className="brat-btn">
                          Random brat phrase
                        </button>
                      </div>
                      <div style={{ fontSize: 13, color: "#6b7280", marginTop: 6 }}>
                        ALT text is generated from your caption + colors + ratio.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
            <main className="brat-card" id="brat-preview">
              <div className="brat-toolbar">
                <span>Canvas preview</span>
                <span style={{ marginLeft: "auto", color: "#6b7280" }}>
                  Tips: <span className="brat-kbd">Shift</span> + scroll = zoom text · Double-click a sticker to delete
                  · Drag text to move
                </span>
              </div>
              <div className="brat-stage">
                <canvas
                  id="brat-canvas"
                  width={1500}
                  height={1500}
                  className="brat-canvas"
                  aria-label="brat canvas"
                />
                <div id="brat-safe" className="brat-safe" hidden />
              </div>
            </main>
          </div>
        </div>
      </div>
      <nav className="brat-bottom-nav" id="brat-bottom-nav">
        <button type="button" className="brat-tab-btn" data-tab="text">
          <span className="brat-tab-icon">Aa</span>
          <span>Text</span>
        </button>
        <button type="button" className="brat-tab-btn" data-tab="style">
          <span className="brat-tab-icon">🎨</span>
          <span>Style</span>
        </button>
        <button type="button" className="brat-tab-btn" data-tab="stickers">
          <span className="brat-tab-icon">⭐</span>
          <span>Stickers</span>
        </button>
        <button type="button" className="brat-tab-btn" data-tab="export">
          <span className="brat-tab-icon">📥</span>
          <span>Export</span>
        </button>
      </nav>
    </div>
  );
}
