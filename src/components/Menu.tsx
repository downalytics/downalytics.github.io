import React from "react";

export function Menu() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Downalytics Logo" className="w-8 h-8" />
          <span className="font-bold text-lg text-primary">Downalytics</span>
        </div>
        <ul className="flex gap-6 text-slate-700 font-medium">
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#tiers" className="hover:text-accent transition">Tiers</a></li>
          <li><a href="#analytics" className="hover:text-accent transition">Analytics</a></li>
        </ul>
      </nav>
    </header>
  );
}
