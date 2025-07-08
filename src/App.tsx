import React from "react";
import { Hero } from "./components/Hero";
import { ScreenshotsGallery } from "./components/ScreenshotsGallery";
import { TierCards } from "./components/TierCards";
// import { AnalyticsInfo } from "./components/AnalyticsInfo";
import { FAQ } from "./components/FAQ";
import { CustomDomainDetails } from "./components/CustomDomainDetails";
import { About } from "./components/About";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Menu />
      <Hero />
      <main className="flex-1 w-full max-w-[80rem] mx-auto px-2 sm:px-6 py-8">
        <About />
        <ScreenshotsGallery />
        <CustomDomainDetails />
        <section id="tiers" className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Tiers</h2>
          <TierCards />
        </section>
        <section id="faq" className="mt-16">
        <FAQ />
        </section>
      </main>
      <footer className="text-center text-slate-400 py-8 text-sm">
        &copy; {new Date().getFullYear()} Downalytics. Not affiliated with GitHub.
      </footer>
    </div>
  );
}
