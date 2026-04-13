"use client";

import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const reveal = (el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.transitionDelay = `${delay}ms`;
      el.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const observed = new WeakSet();
    const attach = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          reveal(el);
        } else {
          observer.observe(el);
        }
      });
    };

    attach();

    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
