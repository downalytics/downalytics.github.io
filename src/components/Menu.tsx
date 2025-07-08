import React from "react";

export function Menu() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <nav className="w-full max-w-[80rem] mx-auto flex items-center justify-between px-2 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Downalytics Logo" className="w-8 h-8" />
          <span className="font-bold text-lg text-primary">Downalytics</span>
        </div>
        <div className="flex items-center gap-6">
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
      </nav>
    </header>
  );
}
