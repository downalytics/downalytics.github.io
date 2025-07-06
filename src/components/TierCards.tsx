import React from "react";

const tiers = [
  {
	name: "🆓 Free",
	description: "Perfect for open source and testing",
	features: [
	  "1 project",
	  "No custom domains",
	  "Use your xyz.downalytics.dev subdomain",
	  "Basic download analytics",
	  "→ Ideal for OSS maintainers and solo devs",
	],
	cta: {
	  label: "Get Started Free",
	  href: "https://dashboard.downalytics.dev",
	  comingSoon: false,
	},
	highlight: true,
  },
  {
	name: "💡 Starter — $5/mo",
	description: "For solo projects that need a custom domain",
	features: [
	  "1 project",
	  "✅ 1 custom domain",
	  "Full analytics & GitHub integration",
	  "Custom download URLs like get.yourdomain.com",
	  "→ Great for indie apps and SaaS side projects",
	],
	cta: {
	  label: "Upgrade to Starter",
	  href: "#",
	  comingSoon: true,
	},
	highlight: false,
  },
  {
	name: "🚀 Pro — $9/mo",
	description: "More projects, more flexibility",
	features: [
	  "Up to 5 projects",
	  "✅ 2 custom domains",
	  "Priority analytics sync",
	  "Ideal for devs managing multiple tools or clients",
	],
	cta: {
	  label: "Go Pro",
	  href: "#",
	  comingSoon: true,
	},
	highlight: false,
  },
  {
	name: "🧑‍💼 Team — $25/mo",
	description: "Built for startups and teams",
	features: [
	  "Up to 15 projects",
	  "✅ 5 custom domains",
	  "API access (coming soon)",
	  "Multi-user/team support (coming soon)",
	  "→ Best for orgs, consultants, and tool vendors",
	],
	cta: {
	  label: "Start with Team",
	  href: "#",
	  comingSoon: true,
	},
	highlight: false,
  },
];

export function TierCards() {
  return (
  <div className="w-full flex justify-center">
	<div className="w-full max-w-[90rem] px-2 sm:px-6">
	  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
		  {tiers.map((tier) => (
			<div
			  key={tier.name}
			  className={`rounded-xl shadow bg-white p-6 flex flex-col border-2 h-full ${
				tier.highlight ? "border-accent" : "border-transparent"
			  }`}
			  style={{ minHeight: 420 }}
			>
			  <h3 className="text-xl font-bold mb-2 text-primary">{tier.name}</h3>
			  <p className="text-slate-700 mb-4">{tier.description}</p>
			  <ul className="mb-6 space-y-1 text-slate-600 text-sm">
				{tier.features.map((f) => (
				  <li key={f} className="flex items-center gap-2">
					<span className="inline-block w-2 h-2 rounded-full bg-accent" />
					{f}
				  </li>
				))}
			  </ul>
			  <div className="mt-auto">
				{tier.cta.comingSoon ? (
				  <button
					className="bg-muted text-slate-400 font-semibold py-2 rounded w-full cursor-not-allowed"
					disabled
				  >
					{tier.cta.label}
				  </button>
				) : (
				  <a
					href={tier.cta.href}
					className="bg-accent text-white font-semibold py-2 rounded w-full text-center block hover:bg-sky-500 transition"
				  >
					{tier.cta.label}
				  </a>
				)}
			  </div>
			</div>
		  ))}
		</div>
	  </div>
	</div>
  );
}
