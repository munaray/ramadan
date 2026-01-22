export function HowItWorks() {
	const steps = [
		{
			number: "01",
			title: "Register Your Interest",
			description:
				"Fill out our simple form choosing your role (Reciter or Listener) and preferred language. Provide your WhatsApp number for group coordination.",
			icon: (
				<svg
					className="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
					/>
				</svg>
			),
		},
		{
			number: "02",
			title: "Get Paired by Language",
			description:
				"Our team carefully matches participants based on language preference and skill level, ensuring you're paired with compatible partners for effective learning.",
			icon: (
				<svg
					className="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			),
		},
		{
			number: "03",
			title: "Join WhatsApp Group",
			description:
				"Receive an invitation to your dedicated WhatsApp group. Connect with your reciter or listeners and coordinate session times that work for everyone.",
			icon: (
				<svg
					className="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/>
				</svg>
			),
		},
		{
			number: "04",
			title: "Start Reciting Together",
			description:
				"Begin your Ramadan journey! Follow along during live sessions, practice with your group, and track progress throughout the blessed month.",
			icon: (
				<svg
					className="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
			),
		},
	];

	return (
		<section id="how-it-works" className="bg-gray-50 py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						How It Works
					</h2>
					<p className="mb-16 text-lg text-gray-600">
						Join our program in four simple steps and start your
						Quran learning journey this Ramadan
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{steps.map((step, index) => (
						<div
							key={index}
							className="group relative flex flex-col items-center text-center">
							{index < steps.length - 1 && (
								<div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-emerald-200 lg:block" />
							)}

							<div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-emerald-50 transition-all group-hover:scale-110 group-hover:ring-emerald-100">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-emerald-600 to-emerald-700 text-white">
									{step.icon}
								</div>
							</div>

							<div className="mb-3 text-4xl font-bold text-emerald-600/20">
								{step.number}
							</div>

							<h3 className="mb-3 text-xl font-semibold text-gray-900">
								{step.title}
							</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
