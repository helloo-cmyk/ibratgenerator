"use client";

import { useEffect, useRef, useState } from "react";
import { initBratGenerator } from "./brat-generator-init";


type BratGeneratorMode = 'full' | 'text-only' | 'font-only' | 'album' | 'name' | 'color-variant';

interface BratGeneratorProps {
  defaultBg?: string;
  defaultFg?: string;
  mode?: BratGeneratorMode;
  defaultTab?: 'text' | 'style' | 'stickers';
  defaultRatio?: '1:1' | '4:5' | '9:16' | '16:9';
  defaultResolution?: '1024' | '1500' | '2048' | '3000';
  defaultPlaceholder?: string;
  defaultBlur?: number;
  lockBg?: boolean;
  lockFg?: boolean;
  hideSelfieMode?: boolean;
  hideAspectRatio?: boolean;
  hidePresets?: boolean;
  showRandomButton?: boolean;
}

export default function BratGenerator({ 
  defaultBg, 
  defaultFg, 
  mode = 'full',
  defaultTab,
  defaultRatio,
  defaultResolution,
  defaultPlaceholder,
  defaultBlur,
  lockBg,
  lockFg,
  hideSelfieMode,
  hideAspectRatio,
  hidePresets,
  showRandomButton
}: BratGeneratorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [blurAmount, setBlurAmount] = useState(defaultBlur ?? 1.5);
  const [bgFilename, setBgFilename] = useState<string | null>(null);

  useEffect(() => {
    if (rootRef.current) {
      cleanupRef.current = initBratGenerator({ 
        defaultBg, 
        defaultFg, 
        defaultTab,
        defaultRatio,
        defaultResolution,
        defaultPlaceholder,
        defaultBlur: defaultBlur ?? 1.5
      });
    }
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [defaultBg, defaultFg, defaultTab, defaultRatio, defaultResolution, defaultPlaceholder, defaultBlur]);

  return (
    <div id="brat-embed-root" ref={rootRef} style={{ all: "initial" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;500;600;700;900&family=Montserrat:wght@700;900&family=Playfair+Display:wght@700;900&family=Poppins:wght@700;900&display=swap"
        rel="stylesheet"
      />
      
      
      {/* TAB DIFFERENTIATION LOGIC */}
      {(mode === 'text-only' || mode === 'font-only' || mode === 'color-variant') && (
        <style dangerouslySetInnerHTML={{ __html: `
          [data-tab="stickers"], #brat-acc-stickers { display: none !important; }
        ` }} />
      )}
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
              </div>
              <div className="brat-tab-panel active" data-tab="text">
                <section className="brat-acc open" id="brat-acc-text">
                  <button type="button" className="brat-acc-h" data-acc="text">
                    Text
                  </button>
                  <div className="brat-acc-b">
                    <div className="brat-controls-inner" style={{ padding: '12px 10px' }}>
                      <textarea
                        id="brat-text"
                        rows={4}
                        className="brat-modern-textarea"
                        placeholder={defaultPlaceholder ?? 'brat'}
                        defaultValue={defaultPlaceholder ?? 'brat'}
                      />

                      {(mode === 'name' || showRandomButton === true) && (
                        <button 
                          type="button" 
                          id="brat-randomBtn" 
                          className="brat-btn"
                          style={{ 
                            width: '100%', 
                            margin: '8px 0', 
                            background: '#CCFF00', 
                            color: '#000', 
                            fontWeight: 'bold',
                            display: 'block'
                          }}
                        >
                          Generate Random Name
                        </button>
                      )}

                      <div className="brat-control-card" style={{ padding: '10px 12px' }}>
                        <label className="brat-control-label" htmlFor="brat-fontSelect" style={{ marginBottom: 6 }}>
                          Font
                        </label>
                        <select id="brat-fontSelect" defaultValue="'Inter', sans-serif" className="brat-modern-select">
                          <option value="'Inter', sans-serif">Inter</option>
                          <option value="'Poppins', sans-serif">Poppins</option>
                          <option value="'Montserrat', sans-serif">Montserrat</option>
                          <option value="'Bebas Neue', sans-serif">Bebas Neue</option>
                          <option value="'Anton', sans-serif">Anton</option>
                          <option value="'Playfair Display', serif">Playfair Display</option>
                        </select>
                      </div>

                      <div className="brat-typography-grid">
                        <div className="brat-control-card">
                          <div className="brat-control-header">
                            <label className="brat-control-label" htmlFor="brat-fontSize">Font size</label>
                            <span className="brat-control-value" id="fontSizeVal">180</span>
                          </div>
                          <input type="range" id="brat-fontSize" className="brat-modern-slider" min={24} max={220} defaultValue={180} onInput={(e) => {
                            const valEl = document.getElementById('fontSizeVal');
                            if (valEl) valEl.innerText = e.currentTarget.value;
                          }} />
                        </div>

                        <div className="brat-control-card">
                          <div className="brat-control-header">
                            <label className="brat-control-label" htmlFor="brat-lineHeight">Line spacing</label>
                            <span className="brat-control-value" id="lineHeightVal">1.00</span>
                          </div>
                          <input type="range" id="brat-lineHeight" className="brat-modern-slider" min={0.8} max={1.6} defaultValue={1} step={0.05} onInput={(e) => {
                            const valEl = document.getElementById('lineHeightVal');
                            if (valEl) valEl.innerText = Number(e.currentTarget.value).toFixed(2);
                          }}/>
                        </div>

                        <div className="brat-control-card">
                          <div className="brat-control-header">
                            <label className="brat-control-label" htmlFor="brat-letterSpacing">Letter spacing</label>
                            <span className="brat-control-value" id="letterSpacingVal">0.0</span>
                          </div>
                          <input type="range" id="brat-letterSpacing" className="brat-modern-slider" min={-4} max={10} defaultValue={0} step={0.5} onInput={(e) => {
                            const valEl = document.getElementById('letterSpacingVal');
                            if (valEl) valEl.innerText = Number(e.currentTarget.value).toFixed(1);
                          }}/>
                        </div>

                        <div className="brat-control-card">
                          <div className="brat-control-header">
                            <label className="brat-control-label">Align</label>
                          </div>
                          <div className="brat-segmented-control">
                            <button type="button" className="brat-segment-btn" onClick={(e) => {
                              e.currentTarget.parentElement?.querySelectorAll('.brat-segment-btn').forEach(b => b.classList.remove('active'));
                              e.currentTarget.classList.add('active');
                              const select = document.getElementById('brat-align') as HTMLSelectElement;
                              if (select) { select.value = 'left'; select.dispatchEvent(new Event('change', { bubbles: true })); }
                            }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="15" y1="12" x2="3" y2="12"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
                            </button>
                            <button type="button" className="brat-segment-btn active" onClick={(e) => {
                              e.currentTarget.parentElement?.querySelectorAll('.brat-segment-btn').forEach(b => b.classList.remove('active'));
                              e.currentTarget.classList.add('active');
                              const select = document.getElementById('brat-align') as HTMLSelectElement;
                              if (select) { select.value = 'center'; select.dispatchEvent(new Event('change', { bubbles: true })); }
                            }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="19" y1="12" x2="5" y2="12"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
                            </button>
                            <button type="button" className="brat-segment-btn" onClick={(e) => {
                              e.currentTarget.parentElement?.querySelectorAll('.brat-segment-btn').forEach(b => b.classList.remove('active'));
                              e.currentTarget.classList.add('active');
                              const select = document.getElementById('brat-align') as HTMLSelectElement;
                              if (select) { select.value = 'right'; select.dispatchEvent(new Event('change', { bubbles: true })); }
                            }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="12" x2="9" y2="12"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
                            </button>
                          </div>
                          <select id="brat-align" defaultValue="center" style={{ display: 'none' }}>
                            <option value="left">left</option>
                            <option value="center">center</option>
                            <option value="right">right</option>
                          </select>
                        </div>
                      </div>

                      <div className="blur-control">
                        <label className="brat-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          Softness
                          <span className="blur-value">{blurAmount}px</span>
                        </label>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                          <input
                            id="brat-blur"
                            type="range"
                            min={0}
                            max={5}
                            step={0.5}
                            value={blurAmount}
                            onChange={(e) => setBlurAmount(Number(e.target.value))}
                            style={{ margin: '8px 0' }}
                          />
                          <div 
                            className="blur-marker"
                            title="Authentic brat softness (1.5px)"
                            style={{
                              position: 'absolute',
                              left: 'calc(30% - 0.5px)',
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: blurAmount === 1.5 ? '#CCFF00' : '#000000',
                              border: '1.5px solid #ffffff',
                              pointerEvents: 'none',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                              transition: 'background 0.2s ease',
                            }}
                          />
                        </div>
                        <div className="blur-hints" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginTop: '-4px' }}>
                          <span style={{ cursor: 'pointer' }} onClick={() => {
                            const el = document.getElementById("brat-blur") as HTMLInputElement;
                            if (el) { el.value = "0"; el.dispatchEvent(new Event("input", { bubbles: true })); }
                          }}>Sharp</span>
                          <span 
                            style={{ 
                              cursor: 'pointer', 
                              fontWeight: blurAmount === 1.5 ? '700' : '500',
                              color: blurAmount === 1.5 ? '#000000' : '#94a3b8',
                              background: blurAmount === 1.5 ? '#CCFF00' : 'transparent',
                              padding: blurAmount === 1.5 ? '1px 6px' : '0',
                              borderRadius: '4px',
                              fontSize: '10px',
                              transition: 'all 0.15s ease'
                            }} 
                            onClick={() => {
                              const el = document.getElementById("brat-blur") as HTMLInputElement;
                              if (el) { el.value = "1.5"; el.dispatchEvent(new Event("input", { bubbles: true })); }
                            }}
                          >
                            Authentic
                          </span>
                          <span style={{ cursor: 'pointer' }} onClick={() => {
                            const el = document.getElementById("brat-blur") as HTMLInputElement;
                            if (el) { el.value = "5"; el.dispatchEvent(new Event("input", { bubbles: true })); }
                          }}>Heavy</span>
                        </div>
                      </div>
                      <div className="brat-section-divider">
                        <span className="brat-section-label">EFFECTS</span>
                      </div>
                      <div className="brat-effects-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        
                        {/* Outline Effect Card */}
                        <div className="brat-effect-card">
                          <div className="brat-effect-header">
                            <span className="brat-effect-title">Outline</span>
                            <label className="brat-toggle" htmlFor="brat-outlineToggle">
                              <input type="checkbox" id="brat-outlineToggle" />
                              <span className="brat-toggle-slider"></span>
                            </label>
                          </div>
                          <div id="brat-outlineColorContainer" className="brat-effect-color-row" style={{ display: "none" }}>
                            <span className="brat-effect-label">Color</span>
                            <div className="brat-color-picker-wrapper">
                              <input type="color" id="brat-outlineColor" defaultValue="#ffffff" />
                            </div>
                          </div>
                        </div>

                        {/* Shadow Effect Card */}
                        <div className="brat-effect-card">
                          <div className="brat-effect-header">
                            <span className="brat-effect-title">Soft shadow</span>
                            <label className="brat-toggle" htmlFor="brat-shadowToggle">
                              <input type="checkbox" id="brat-shadowToggle" />
                              <span className="brat-toggle-slider"></span>
                            </label>
                          </div>
                          <div id="brat-shadowColorContainer" className="brat-effect-color-row" style={{ display: "none" }}>
                            <span className="brat-effect-label">Color</span>
                            <div className="brat-color-picker-wrapper">
                              <input type="color" id="brat-shadowColor" defaultValue="#000000" />
                            </div>
                          </div>
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
                      <div style={{ display: hidePresets ? "none" : "flex", gap: 8, flexWrap: "wrap" }}>
                        <div className="brat-pill" data-bg="#89cc04" data-fg="#0a0a0a">
                          <span
                            style={{
                              display: "inline-block",
                              width: 18,
                              height: 18,
                              borderRadius: 4,
                              background: "#89cc04",
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
                      <div className="brat-color-controls">
                        <div className="brat-color-card" style={{ opacity: lockBg ? 0.5 : 1, pointerEvents: lockBg ? 'none' : 'auto' }}>
                          <span className="brat-color-card-title">
                            Background {lockBg && <span className="brat-locked-badge">Locked</span>}
                          </span>
                          <div className="brat-color-picker-wrapper">
                            <input type="color" id="brat-bgColor" defaultValue="#89cc04" disabled={lockBg} />
                          </div>
                        </div>

                        <div className="brat-color-card" style={{ opacity: lockFg ? 0.5 : 1, pointerEvents: lockFg ? 'none' : 'auto' }}>
                          <span className="brat-color-card-title">
                            Text {lockFg && <span className="brat-locked-badge">Locked</span>}
                          </span>
                          <div className="brat-color-picker-wrapper">
                            <input type="color" id="brat-fgColor" defaultValue="#0a0a0a" disabled={lockFg} />
                          </div>
                        </div>
                      </div>
                      <div className="brat-contrast-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        <span>Contrast: <span id="brat-contrastLabel" style={{ fontWeight: 600 }}>-</span></span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="brat-acc" id="brat-acc-canvas">
                  <button type="button" className="brat-acc-h" data-acc="canvas">
                    Canvas
                  </button>
                  <div className="brat-acc-b" style={{ display: hideAspectRatio ? "none" : undefined }}>
                    <div className="brat-controls-inner" style={{ padding: '12px 10px' }}>
                      <div className="brat-typography-grid" style={{ marginBottom: '12px' }}>
                        <div className="brat-control-card" style={{ padding: '10px 12px' }}>
                          <label className="brat-control-label" htmlFor="brat-ratio">
                            Aspect Ratio
                          </label>
                          <select id="brat-ratio" defaultValue="1:1" className="brat-modern-select">
                            <option value="1:1">Square 1:1</option>
                            <option value="4:5">Instagram 4:5</option>
                            <option value="9:16">Story/Reel 9:16</option>
                            <option value="16:9">Wide 16:9</option>
                          </select>
                        </div>
                        <div className="brat-control-card" style={{ padding: '10px 12px' }}>
                          <label className="brat-control-label" htmlFor="brat-res">
                            Resolution
                          </label>
                          <select id="brat-res" defaultValue="1500" className="brat-modern-select">
                            <option value="1024">1024 px</option>
                            <option value="1500">1500 px</option>
                            <option value="2048">2048 px</option>
                            <option value="3000">3000 px</option>
                          </select>
                        </div>
                      </div>

                      <div className="brat-effect-card">
                        <div className="brat-effect-header">
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>
                            <span className="brat-effect-title">Show safe margins</span>
                          </div>
                          <label className="brat-toggle" htmlFor="brat-safeToggle">
                            <input type="checkbox" id="brat-safeToggle" />
                            <span className="brat-toggle-slider"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="brat-acc" id="brat-acc-selfie">
                  <button type="button" className="brat-acc-h" data-acc="selfie">
                    Background Image
                  </button>
                  <div className="brat-acc-b" style={{ display: hideSelfieMode ? "none" : undefined }}>
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <div 
                        className="brat-upload-area" 
                        id="brat-upload-trigger"
                        onClick={() => {
                          document.getElementById('brat-bgUpload')?.click();
                        }}
                        style={{ display: bgFilename ? 'none' : 'block' }}
                      >
                        <div className="brat-upload-icon">↑</div>
                        <div className="brat-upload-text">Upload Background Image</div>
                        <div className="brat-upload-hint">JPG, PNG or WebP. Image fills canvas. Text stays on top.</div>
                      </div>
                      <input 
                        type="file" 
                        id="brat-bgUpload" 
                        accept="image/*" 
                        style={{ display: "none" }} 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setBgFilename(file.name);
                        }}
                      />
                      <div 
                        className="brat-upload-preview" 
                        id="brat-upload-preview" 
                        style={{ display: bgFilename ? 'flex' : 'none' }}
                      >
                        <span id="brat-upload-filename">{bgFilename || 'filename.jpg'}</span>
                        <button 
                          type="button" 
                          id="brat-clearBg" 
                          className="brat-remove-btn"
                          onClick={() => {
                            setBgFilename(null);
                            const input = document.getElementById('brat-bgUpload') as HTMLInputElement;
                            if (input) input.value = '';
                          }}
                        >
                          Remove
                        </button>
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
              {/* Hidden utility buttons, required by init.ts for download/copy/batch/random logic */}
              <div style={{ display: "none" }} aria-hidden="true">
                <button type="button" id="brat-download" />
                <button type="button" id="brat-copy" />
                <button type="button" id="brat-altBtn" />
                {!(mode === 'name' || showRandomButton === true) && <button type="button" id="brat-randomBtn" />}
                <button type="button" id="brat-batchBtn" />
                <textarea id="brat-batch" />
              </div>
            </aside>
            <main className="brat-card" id="brat-preview">
              <div className="brat-preview-header-modern">
                <div className="brat-history-controls">
                  <button type="button" id="brat-undo" className="brat-icon-btn" disabled aria-label="Undo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg>
                  </button>
                  <button type="button" id="brat-redo" className="brat-icon-btn" disabled aria-label="Redo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path></svg>
                  </button>
                </div>
                <div className="brat-export-controls">
                  <button type="button" id="brat-copy-desktop" className="brat-export-btn secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>Copy</span>
                  </button>
                  <button type="button" id="brat-download-desktop" className="brat-export-btn primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Save PNG</span>
                  </button>
                </div>
              </div>
              <div className="brat-toolbar-modern">
                <div className="brat-toolbar-title">Canvas Preview</div>
                <div className="brat-toolbar-tips">
                  <span className="brat-tip-icon">💡</span>
                  <span><kbd>Shift</kbd> + scroll to zoom · Double-click sticker to delete</span>
                </div>
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
          <span className="brat-tab-icon">✏️</span>
          <span>Text</span>
        </button>
        <button type="button" className="brat-tab-btn" data-tab="style">
          <span className="brat-tab-icon">🎨</span>
          <span>Style</span>
        </button>
        <button type="button" className="brat-tab-btn" data-tab="stickers">
          <span className="brat-tab-icon">✨</span>
          <span>Stickers</span>
        </button>
        <button type="button" id="brat-download-nav" className="brat-tab-btn brat-nav-save">
          <span className="brat-tab-icon brat-save-icon">⬇️</span>
          <span>Save PNG</span>
        </button>
      </nav>
    </div>
  );
}
