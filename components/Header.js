"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import * as particles from "@/assets/particles.json";

export default function Header() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <header className="px-8 py-20 md:py-32 flex flex-col items-center justify-center relative overflow-hidden">
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 right-0 bottom-0 z-10 overflow-hidden"
        options={particles}
      />
      <div className="max-w-4xl text-center z-20">
        <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Custom web, mobile and desktop development in Hilliard, Ohio.
        </h1>
      </div>
      <div className="max-w-xl text-center mb-8 z-20">
        <p className="text-lg md:text-xl font-sans text-center tracking-tight text-slate-400">
          We take your projects from idea to beautifully designed, modern
          applications.
        </p>
      </div>
      <a
        href="https://forms.gle/NH2Bv81rhuzXdiDT8"
        target="_blank"
        className="rounded-lg px-6 py-3 text-sm z-20 font-bold hover:ring transition-all font-sans text-center text-slate-300 bg-slate-800 flex flex-row items-center gap-2 border-slate-700 border shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          ariaHidden="true"
          data-slot="icon"
          className="w-5 h-5"
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
