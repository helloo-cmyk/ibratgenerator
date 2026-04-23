"use client";

import { useEffect } from "react";

export default function HomeScrollReveal() {
  useEffect(() => {
    const selectors = [
      ".hp-page-section",
      ".hp-feature-card",
      ".hp-step-card",
      ".hp-tool-link",
      ".hp-color-card",
      ".hp-blog-link",
      ".hp-bridge",
    ];

    const elements = document.querySelectorAll(selectors.join(", "));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(20px)";
      htmlEl.style.transition = `opacity 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
