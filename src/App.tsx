import React from "react";
import { Hero } from "./components/Hero";
import { ScreenshotsGallery } from "./components/ScreenshotsGallery";
import { TierCards } from "./components/TierCards";
import { AnalyticsInfo } from "./components/AnalyticsInfo";
import { About } from "./components/About";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Menu />
      <Hero />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
        <About />
        <ScreenshotsGallery />
        <section id="tiers" className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Tiers</h2>
          <TierCards />
        </section>
        <section id="analytics" className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">What We Track</h2>
          <AnalyticsInfo />
        </section>
      </main>
      <footer className="text-center text-slate-400 py-8 text-sm">
        &copy; {new Date().getFullYear()} Downalytics. Not affiliated with GitHub.
      </footer>
    </div>
  );
}
