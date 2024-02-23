"use client";

import { useEffect, useRef } from "react";

export default function Header() {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (window && typeof window !== "undefined") setupParticles();
  }, [particlesRef]);

  const setupParticles = async () => {
    await import("@/assets/particles.min.js");
    window.particlesJS.load("particles-js", "/particles.json", function () {});
  };

  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden px-8 py-20 md:py-32">
      <div
        id="particles-js"
        className="absolute bottom-0 left-0 right-0 top-0 z-10 overflow-hidden"
        ref={particlesRef}
      />
      <div className="z-20 max-w-4xl text-center">
        <h1 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-5xl">
          Custom web, mobile and desktop development in Hilliard, Ohio.
        </h1>
      </div>
      <div className="z-20 mb-8 max-w-xl text-center">
        <p className="text-center font-sans text-lg tracking-tight text-slate-400 md:text-xl">
          We take your projects from idea to beautifully designed, modern
          applications.
        </p>
      </div>
      <a
        href="https://forms.gle/NH2Bv81rhuzXdiDT8"
        target="_blank"
        className="z-20 flex flex-row items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 text-center font-sans text-sm font-bold text-slate-300 shadow-sm transition-all hover:ring"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        Get a quote
      </a>
    </header>
  );
}
