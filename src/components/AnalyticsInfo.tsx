import React from "react";

export function AnalyticsInfo() {
  return (
    <div className="bg-card rounded-lg p-6 shadow text-slate-700">
      <p className="mb-2">
        Downalytics tracks download events for your GitHub release artifacts, providing insights into:
      </p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li><span className="font-semibold">Version</span> of the release downloaded</li>
        <li><span className="font-semibold">Operating System</span> (e.g., Windows, macOS, Linux)</li>
        <li><span className="font-semibold">Architecture</span> (e.g., x64, arm64)</li>
        <li><span className="font-semibold">Downloader Location</span> (country/city, based on IP geolocation)</li>
        <li><span className="font-semibold">Timestamp</span> of each download</li>
      </ul>
      <p className="text-sm text-slate-500">
        No personal data is collected from downloaders. Analytics are aggregated and anonymized.
      </p>
    </div>
  );
}
