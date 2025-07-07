import React from "react";

export function About() {
  return (
    <section id="about" className="mb-16">
      
      <p className="text-lg text-slate-700 mb-4">
        Downalytics provides analytics and custom download URLs for your GitHub repository releases. Track downloads, manage projects, and use custom domains for branded download links.
      </p>
      <p>
        <span className="font-semibold">Note:</span> Downalytics currently works only with <span className="font-semibold">public repositories</span> and <span className="font-semibold">publicly accessible release artifacts</span>. 
        We do not store or track IP addresses, ensuring your privacy is respected.
      </p>

    </section>
  );
}
