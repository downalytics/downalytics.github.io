import React from "react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#38BDF8" fillOpacity="0.08" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 z-10 drop-shadow-lg">GitHub Release Download Analytics</h1>
      <p className="text-lg md:text-xl text-slate-700 mb-8 z-10 max-w-2xl mx-auto">
        Track, analyze, and brand your GitHub release downloads. Custom download URLs, analytics, and more.
      </p>
      <a
        href="#tiers"
        className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-sky-500 transition z-10"
      >
        Get Started Free
      </a>
      <div className="mt-12 w-full flex justify-center z-10">
        <img
          src="/dashboard.png"
          alt="Downalytics Dashboard Screenshot"
          className="rounded-xl shadow-2xl border-4 border-white w-full max-w-3xl object-cover animate-fadein"
          style={{ minHeight: 220 }}
        />
      </div>
    </section>
  );
}
