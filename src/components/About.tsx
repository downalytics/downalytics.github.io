import React from "react";

export function About() {
  return (
    <section id="about" className="mb-16">
      <h1 className="text-4xl font-extrabold text-primary mb-4">Downalytics</h1>
      <p className="text-lg text-slate-700 mb-4 max-w-2xl">
        Downalytics provides analytics and custom download URLs for your GitHub repository releases. Track downloads, manage projects, and use custom domains for branded download links.
      </p>
      <div className="bg-card rounded-lg p-6 shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">GitHub Login & Privacy</h2>
        <p className="text-slate-700 mb-2">
          We use GitHub login <span className="font-semibold">only</span> to access your account details (username, email, avatar). We do <span className="font-semibold">not</span> request access to your code or private repositories.
        </p>
        <p className="text-slate-700">
          <span className="font-semibold">Note:</span> Downalytics currently works only with <span className="font-semibold">public repositories</span> and <span className="font-semibold">publicly accessible release artifacts</span>.
        </p>
      </div>
    </section>
  );
}
