
import React, { useState } from "react";
import { ImageModal } from "./ImageModal";

export function CustomDomainDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const [domainModal, setDomainModal] = useState<null | string>(null);
  return (
    <section id="features" className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 text-center">Features</h2>

{/* Project Management & Release Discovery */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-4 mb-10 items-center">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-primary text-center md:text-left">Project Management & Release Discovery</h3>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>Add a project by entering your GitHub repository (e.g. <span className="font-mono">user/repo</span>).</li>
            <li>Downalytics will then discover all releases for that project and let you track downloads.</li>
            <li>See all your tracked projects and their analytics in one place.</li>
            <li>Switch between projects and domains seamlessly.</li>
            <li>Bulk import and search for repositories.</li>
            <li>Project health and status indicators.</li>
          </ul>
        </div>
        <div className="flex-shrink-0 w-full md:w-[380px] flex items-center justify-center">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => setModalOpen(true)}
            aria-label="Expand add project screenshot"
            style={{ background: 'none', border: 0, padding: 0 }}
          >
            <img
              src="/add_project.png"
              alt="Add project screen with GitHub repo input and discovered releases list"
              className="rounded shadow border border-slate-200 max-h-60 object-contain bg-white cursor-zoom-in"
              style={{ maxWidth: '100%' }}
            />
          </button>
        </div>
      </div>

      {/* Custom Domain Management */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-4 mb-10 items-center">
        <div className="flex flex-col gap-4 w-full md:w-[380px] flex-shrink-0 items-center justify-center">
          <button
            type="button"
            className="focus:outline-none w-full"
            onClick={() => setDomainModal("/add_domain.png")}
            aria-label="Expand add domain screenshot"
            style={{ background: 'none', border: 0, padding: 0 }}
          >
            <img
              src="/add_domain.png"
              alt="Add domain screen"
              className="rounded shadow border border-slate-200 max-h-40 object-contain bg-white cursor-zoom-in w-full"
              style={{ maxWidth: '100%' }}
            />
          </button>
          <button
            type="button"
            className="focus:outline-none w-full"
            onClick={() => setDomainModal("/domain_instructions.png")}
            aria-label="Expand domain instructions screenshot"
            style={{ background: 'none', border: 0, padding: 0 }}
          >
            <img
              src="/domain_instructions.png"
              alt="Domain instructions screen"
              className="rounded shadow border border-slate-200 max-h-40 object-contain bg-white cursor-zoom-in w-full"
              style={{ maxWidth: '100%' }}
            />
          </button>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-primary text-center md:text-left">Custom Domain Management</h3>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>Connect your own domain (like <span className="font-mono">get.yourdomain.com</span>) for branded download links.</li>
            <li>Easy DNS verification and SSL certificate provisioning.</li>
            <li>Manage and switch domains per project in your dashboard.</li>
            <li>All download analytics are available per custom domain.</li>
            <li>See SSL status and DNS health at a glance.</li>
          </ul>
        </div>
      </div>

      

      {/* Analytics */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-4 mb-10 items-center">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-primary text-center md:text-left">Analytics</h3>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>All analytics are available per project and per domain.</li>
            <li>See download trends, referrers, and more in your dashboard.</li>
            <li>Custom download URLs route through Downalytics for tracking and analytics.</li>
            <li>Instant redirect to the correct GitHub release asset.</li>
          </ul>
        </div>
        <div className="flex-shrink-0 w-full md:w-[380px] flex items-center justify-center">
          <button
            type="button"
            className="focus:outline-none w-full"
            onClick={() => setDomainModal("/trends.png")}
            aria-label="Expand analytics trends screenshot"
            style={{ background: 'none', border: 0, padding: 0 }}
          >
            <img
              src="/trends.png"
              alt="Analytics trends graph"
              className="rounded shadow border border-slate-200 max-h-60 object-contain bg-white w-full cursor-zoom-in"
              style={{ maxWidth: '100%' }}
            />
          </button>
        </div>
      </div>

      {/* Security & Reliability */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-4 mb-10 items-center">
        <div className="flex-shrink-0 w-full md:w-[380px] flex items-center justify-center">
          <div className="w-full h-40 bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center text-slate-400 mb-2 rounded">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="36" width="44" height="30" rx="6" fill="#fff" stroke="#64748b" strokeWidth="2.5"/>
              <rect x="30" y="50" width="20" height="10" rx="3" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2"/>
              <path d="M26 36v-8a14 14 0 1 1 28 0v8" stroke="#64748b" strokeWidth="2.5" fill="none"/>
              <circle cx="40" cy="60" r="2.5" fill="#38bdf8"/>
              <path d="M40 62.5v-2.5" stroke="#38bdf8" strokeWidth="2"/>
              <circle cx="62" cy="44" r="7" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
              <path d="M59.5 44.5l2.5 2.5 4-4" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-primary text-center md:text-left">Security & Reliability</h3>
          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>All custom domains are secured with automatic SSL certificates.</li>
            <li>99.9%+ uptime and multi-region infrastructure.</li>
            <li>Privacy-first: no IP tracking, no unnecessary data stored.</li>
            
          </ul>
        </div>
      </div>
      <ImageModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        src="/add_project.png"
        alt="Add project screen with GitHub repo input and discovered releases list"
      />
      <ImageModal
        open={!!domainModal}
        onClose={() => setDomainModal(null)}
        src={domainModal || ""}
        alt={domainModal === "/add_domain.png" ? "Add domain screen" : "Domain instructions screen"}
      />
    </section>
  );
}
