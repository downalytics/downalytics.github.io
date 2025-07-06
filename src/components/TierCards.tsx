import React from "react";

const tiers = [
	{
		name: "Free",
		description:
			"Start tracking downloads for a single public GitHub project. Includes 1 custom domain and 1 project.",
		features: [
			"1 public project",
			"1 custom domain (with DNS verification)",
			"Custom download URLs",
			"Basic analytics dashboard",
			"GitHub OAuth login",
		],
		cta: {
			label: "Log in with GitHub",
			href: "https://dashboard.downalytics.dev",
			comingSoon: false,
		},
		highlight: true,
	},
	{
		name: "Pro",
		description:
			"More projects, custom domains, and advanced analytics for serious developers.",
		features: [
			"Up to 5 projects",
			"Up to 2 custom domains",
			"Advanced analytics & reporting",
			"Webhook notifications",
			"Priority support",
		],
		cta: {
			label: "Coming soon",
			href: "#",
			comingSoon: true,
		},
		highlight: false,
	},
	{
		name: "Teams",
		description: "Multi-project support with custom domains and dedicated infrastructure.",
		features: [
			"Up to 15 projects",
			"Up to 5 custom domains",
			"Custom integrations",
			"SLA & support",
			"Dedicated infrastructure",
			"Custom analytics",
		],
		cta: {
			label: "Coming soon",
			href: "#",
			comingSoon: true,
		},
		highlight: false,
	},
];

export function TierCards() {
	return (
		<div className="grid md:grid-cols-3 gap-8">
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
	);
}
