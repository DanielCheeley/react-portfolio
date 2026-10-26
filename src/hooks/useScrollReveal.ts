import { useEffect } from "react";

// Animate each content block once, without hiding content before JS loads.
export function useScrollReveal(page: string | undefined) {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          const animation = entry.target.animate(
            [
              { opacity: 0, transform: "translateY(16px)" },
              { opacity: 1, transform: "translateY(0)" }
            ],
            { duration: 550, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        }
      },
      { threshold: 0.08 }
    );

    document
      .querySelectorAll(
        ".section-heading, .project-row, .about-copy, .photo-story, .background > div, .case-sections section, .contact h2, .contact-actions"
      )
      .forEach((element) => observer.observe(element));

    const stop = () => {
      if (!motion.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    motion.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      motion.removeEventListener("change", stop);
    };
  }, [page]);
}
