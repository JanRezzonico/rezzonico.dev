"use client";

import { useEffect } from "react";

const sectionIds = ["skills", "testimonials", "projects"];
const anchorChangeEvent = "scroll-anchor-change";

export const ScrollAnchor = () => {
  useEffect(() => {
    let frame: number | undefined;

    const updateAnchor = () => {
      frame = undefined;
      const midpoint = window.innerHeight / 2;
      const activeSection = sectionIds.reduce<string | undefined>(
        (active, id) => {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= midpoint) {
            return id;
          }
          return active;
        },
        undefined,
      );
      const nextHash = activeSection ? `#${activeSection}` : "";
      const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`;

      if (currentUrl !== nextUrl) {
        window.history.replaceState(null, "", nextUrl);
        window.dispatchEvent(new Event(anchorChangeEvent));
      }
    };

    const onScroll = () => {
      if (frame === undefined) {
        frame = window.requestAnimationFrame(updateAnchor);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== undefined) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
};

export { anchorChangeEvent };
