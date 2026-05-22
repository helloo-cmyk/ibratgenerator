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
                    <div className="brat-controls-inner" style={{ padding: 10 }}>
                      <textarea
                        id="brat-text"
                        rows={4}
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
                            marginTop: 10, 
                            marginBottom: 10, 
                            background: '#CCFF00', 
                            color: '#000', 
                            fontWeight: 'bold',
                            display: 'block'
                          }}
                        >
                          Generate Random Name
                        </button>
                      )}

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div>
                          <label className="brat-label" htmlFor="brat-fontSize">
                            Font size
                          </label>
                          <input type="range" id="brat-fontSize" min={24} max={220} defaultValue={180} />
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
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                        <div style={{ opacity: lockBg ? 0.4 : 1, pointerEvents: lockBg ? 'none' : 'auto' }}>
                          <label className="brat-label" htmlFor="brat-bgColor">
                            Background {lockBg && <span style={{ fontSize: '10px', color: '#666', textTransform: 'lowercase' }}>(locked)</span>}
                          </label>
                          <input type="color" id="brat-bgColor" defaultValue="#89cc04" disabled={lockBg} />
                        </div>
                        <div style={{ opacity: lockFg ? 0.4 : 1, pointerEvents: lockFg ? 'none' : 'auto' }}>
                          <label className="brat-label" htmlFor="brat-fgColor">
                            Text {lockFg && <span style={{ fontSize: '10px', color: '#666', textTransform: 'lowercase' }}>(locked)</span>}
                          </label>
                          <input type="color" id="brat-fgColor" defaultValue="#0a0a0a" disabled={lockFg} />
                        </div>
                      </div>
                      <div className="brat-row">
                        <div className="brat-help">
                          Contrast check: <span id="brat-contrastLabel">-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="brat-acc" id="brat-acc-canvas">
                  <button type="button" className="brat-acc-h" data-acc="canvas">
                    Canvas
                  </button>
                  <div className="brat-acc-b" style={{ display: hideAspectRatio ? "none" : undefined }}>
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
                  <div className="brat-acc-b" style={{ display: hideSelfieMode ? "none" : undefined }}>
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
              <div className="brat-preview-header">
                <div className="brat-undo-redo">
                  <button type="button" id="brat-undo" className="brat-btn" disabled>
                    Undo
                  </button>
                  <button type="button" id="brat-redo" className="brat-btn" disabled>
                    Redo
                  </button>
                </div>
                <div className="brat-preview-actions">
                  <button type="button" id="brat-copy-desktop" className="brat-btn">
                    Copy Image
                  </button>
                  <button type="button" id="brat-download-desktop" className="brat-btn">
                    Save PNG
                  </button>
                </div>
              </div>
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
