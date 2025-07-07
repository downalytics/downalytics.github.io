import React, { useState } from "react";

const faqs = [
  {
    question: "How does GitHub login work and what about privacy?",
    answer: (
      <div>
        <p className="mb-2 text-slate-700">
          We use GitHub login <span className="font-semibold">only</span> to access your account details (username, email, avatar). We do <span className="font-semibold">not</span> request access to your code or private repositories.
        </p>
        <p className="text-slate-700">
          <span className="font-semibold">Note:</span> Downalytics currently works only with <span className="font-semibold">public repositories</span> and <span className="font-semibold">publicly accessible release artifacts</span>.
        </p>
      </div>
    ),
  },
  {
    question: "What does Downalytics track?",
    answer: (
      <ul className="list-disc pl-5 space-y-1 text-slate-700">
        <li>Download counts for each GitHub release asset</li>
        <li>Referrer (where the download came from, when available)</li>
        <li>Timestamp of each download</li>
        <li>Custom domain and project analytics</li>
        <li>We do <b>not</b> store or track IP addresses</li>
        <li>And more, depending on your plan</li>
      </ul>
    ),
  },
  {
    question: "How does it work?",
    answer:
      "Downalytics provides you with a custom download URL that redirects to your GitHub release asset. This URL tracks the download and provides analytics without changing your existing GitHub releases.",
  },
  {
    question: "Do I need to change my GitHub release URLs?",
    answer:
      "No, you don't need to change your existing GitHub release URLs. Downalytics generates a custom URL that you can use instead, which will redirect to your GitHub asset.",
  },
  {
question: "Is the service reliable and available?",
    answer:
      "Yes, Downalytics is built on a reliable infrastructure with high availability and multi region deployment",
  },
  {
  question: "Do you store the binaries and serve them?",
    answer: "No, Downalytics does not store or serve your release binaries. We only provide a custom download URL that redirects to your GitHub release asset, allowing you to track downloads without hosting the files ourselves.",
  },
  {
    question: "Do I need to change my GitHub releases?",
    answer:
      "No, you don't need to change your GitHub releases. Downalytics works by providing you with a custom download URL that redirects to your GitHub release asset and tracks the download.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes! Paid plans let you use your own custom domain for download links, like get.yourdomain.com.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes, the Free tier lets you track one project using a downalytics.dev subdomain.",
  },
  {
    question: "How is my data stored?",
    answer:
      "We store only the minimum data needed for analytics and never share your data with third parties.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg bg-white shadow-sm">
            <button
              className="w-full text-left px-6 py-4 font-semibold text-slate-800 flex justify-between items-center focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-panel-${i}`}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-accent text-xl">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div
                id={`faq-panel-${i}`}
                className="px-6 pb-4 text-slate-700 transition-opacity duration-400 opacity-100"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
