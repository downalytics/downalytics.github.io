import React from "react";

export function ImageModal({ open, onClose, src, alt }: { open: boolean; onClose: () => void; src: string; alt: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-4 relative animate-fadein">
        <button
          className="absolute top-2 right-2 text-2xl text-slate-400 hover:text-accent focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <img
          src={src}
          alt={alt}
          className="rounded-lg w-full object-contain border border-slate-200 bg-white"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    </div>
  );
}
