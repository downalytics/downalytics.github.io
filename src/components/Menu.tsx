import React, { useState } from "react";

export function Menu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <nav className="w-full max-w-[80rem] mx-auto flex items-center justify-between px-2 sm:px-6 py-4">
        {/* Logo and name, only logo on mobile */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Downalytics Logo" className="w-8 h-8" />
          <span className="font-bold text-lg text-primary hidden sm:inline">Downalytics</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-slate-700 font-medium">
            <li><a href="#about" className="hover:text-accent transition">About</a></li>
            <li><a href="#features" className="hover:text-accent transition">Features</a></li>
            <li><a href="#tiers" className="hover:text-accent transition">Tiers</a></li>
            <li><a href="#faq" className="hover:text-accent transition">FAQ</a></li>
          </ul>
          <a
            href="https://dashboard.downalytics.dev"
            className="ml-4 bg-accent text-white font-semibold px-4 py-2 rounded shadow hover:bg-sky-500 transition whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dashboard
          </a>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none transition hover:bg-slate-100"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#fff" />
            <g>
              <rect x="8" y="11" width="16" height="2.5" rx="1.25" fill="#334155" />
              <rect x="8" y="16" width="16" height="2.5" rx="1.25" fill="#334155" />
              <rect x="8" y="21" width="16" height="2.5" rx="1.25" fill="#334155" />
            </g>
          </svg>
        </button>
      </nav>
      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden w-full bg-white shadow-lg border-t border-slate-200 transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0'}`}
        style={{ position: 'absolute', left: 0, top: '100%', zIndex: 50 }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          <button
            className="self-end p-2 rounded focus:outline-none transition hover:bg-slate-100 mb-2"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="7" fill="#fff" />
              <path d="M9 9l10 10M9 19L19 9" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
          <ul className="flex flex-col gap-4 text-slate-700 font-medium w-full text-center">
            <li><a href="#about" className="hover:text-accent transition" onClick={() => setMobileOpen(false)}>About</a></li>
            <li><a href="#features" className="hover:text-accent transition" onClick={() => setMobileOpen(false)}>Features</a></li>
            <li><a href="#tiers" className="hover:text-accent transition" onClick={() => setMobileOpen(false)}>Tiers</a></li>
            <li><a href="#faq" className="hover:text-accent transition" onClick={() => setMobileOpen(false)}>FAQ</a></li>
          </ul>
          <a
            href="https://dashboard.downalytics.dev"
            className="mt-2 bg-accent text-white font-semibold px-4 py-2 rounded shadow hover:bg-sky-500 transition whitespace-nowrap text-center w-full"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            Dashboard
          </a>
        </div>
      </div>
    </header>
  );
}
