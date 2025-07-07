import React from "react";

export function DashboardModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  // Close modal if click on backdrop
  function handleBackdrop(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === e.currentTarget) onClose();
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={handleBackdrop}>
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full p-4 relative animate-fadein">
        <button
          className="absolute top-2 right-2 text-2xl text-slate-400 hover:text-accent focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <img
          src="/dashboard.png"
          alt="Downalytics Dashboard Full Preview"
          className="rounded-lg w-full object-contain border border-slate-200"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    </div>
  );
}
