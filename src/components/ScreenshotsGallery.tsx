import React, { useState } from "react";

const screenshots = [
  {
    src: "/dashboard.png",
    alt: "Dashboard Overview"
  },
  {
    src: "/domains.png",
    alt: "Custom Domain Management"
  },
  {
    src: "/projects.png",
    alt: "Projects"
  }
];

export function ScreenshotsGallery() {
  const [modal, setModal] = useState<null | { src: string; alt: string }>(null);
  return (
    <section className="mt-16" id="screenshots">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 text-center">Product Screenshots</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {screenshots.map((shot) => (
          <div
            key={shot.src}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 w-full max-w-xs transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setModal(shot)}
            tabIndex={0}
            role="button"
            aria-label={`View screenshot: ${shot.alt}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModal(shot); }}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-2 text-slate-600 text-sm text-center border-t">{shot.alt}</div>
          </div>
        ))}
      </div>
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-4 flex flex-col items-center animate-fadein"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-primary-600 focus:outline-none"
              onClick={() => setModal(null)}
              aria-label="Close modal"
              autoFocus
            >
              &times;
            </button>
            <div className="w-full flex flex-col items-center">
              <img
                src={modal.src}
                alt={modal.alt}
                className="max-h-[90vh] w-full object-contain rounded-t-2xl"
                style={{ background: '#f8fafc', maxWidth: '100%' }}
              />
              <div
                className="p-6 text-slate-700 text-lg text-center border-t w-full"
              >
                {modal.alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
