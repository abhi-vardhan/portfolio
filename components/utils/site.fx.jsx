import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

/**
 * SiteFX
 *
 * Site-wide premium interaction layer:
 *  - Top scroll-progress bar
 *  - Film-grain overlay
 *  - Back-to-top floating button
 *  - IntersectionObserver driven [data-reveal] scroll animations
 *
 * Purely presentational / progressive enhancement — renders nothing
 * meaningful for users with JS disabled and respects reduced motion.
 *
 * @returns {jsx} <SiteFX />
 */
export default function SiteFX() {
  const router = useRouter();
  const progressRef = useRef(null);
  const topRef = useRef(null);

  /* Scroll progress + back-to-top visibility */
  useEffect(() => {
    const progress = progressRef.current;
    const top = topRef.current;
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0;

      if (progress) progress.style.transform = `scaleX(${ratio})`;
      if (top) top.classList.toggle("is-visible", scrollTop > 600);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [router.asPath]);

  /* Scroll reveal observer — re-binds on route change for new DOM */
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const els = Array.from(document.querySelectorAll("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [router.asPath]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="fx-progress" ref={progressRef} aria-hidden="true" />
      <div className="fx-grain" aria-hidden="true" />
      <button
        type="button"
        className="fx-top"
        ref={topRef}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 19V5M12 5l-6 6M12 5l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
