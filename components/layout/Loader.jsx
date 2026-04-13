"use client";

import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const MIN_DURATION = 700;

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_DURATION - elapsed);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 450);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      const fallback = setTimeout(finish, 3500);
      return () => {
        window.removeEventListener("load", finish);
        clearTimeout(fallback);
      };
    }
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      aria-hidden={fadeOut}
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#000319] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#CBACF9] rounded-full blur-[180px] opacity-[0.08]" />
        <div className="absolute bottom-1/3 right-1/3 w-[320px] h-[320px] bg-[#8A6CF4] rounded-full blur-[160px] opacity-[0.06]" />
      </div>

      <div className="relative flex flex-col items-center gap-6">
        {/* Logo ring */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-2 border-[#CBACF9]/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#CBACF9] border-r-[#8A6CF4] animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">
              <span className="text-[#CBACF9]">A</span>
              <span className="text-white">N</span>
            </span>
          </div>
        </div>

        {/* Label */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.4em] uppercase gradient-text font-semibold">
            Loading
          </span>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBACF9] animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBACF9] animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#CBACF9] animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
