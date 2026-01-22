import { Badge } from "@/components/ui/badge";

export function Languages() {
	const languages = [
		{
			name: "Yoruba",
			flag: "🇳🇬",
			speakers: "40M+",
			color: "bg-emerald-100 text-emerald-700 border-emerald-200",
		},
		{
			name: "Hausa",
			flag: "🇳🇬",
			speakers: "70M+",
			color: "bg-blue-100 text-blue-700 border-blue-200",
		},
		{
			name: "Igbo",
			flag: "🇳🇬",
			speakers: "30M+",
			color: "bg-purple-100 text-purple-700 border-purple-200",
		},
		{
			name: "Arabic",
			flag: "🇸🇦",
			speakers: "420M+",
			color: "bg-amber-100 text-amber-700 border-amber-200",
		},
		{
			name: "English",
			flag: "🌍",
			speakers: "1.5B+",
			color: "bg-rose-100 text-rose-700 border-rose-200",
		},
	];

	return (
		<section id="languages" className="bg-gray-50 py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						Multiple Languages Supported
					</h2>
					<p className="mb-4 text-lg text-gray-600">
						While Quran recitation is always in Arabic, receive
						instruction, explanations, and Tafsir in your native
						language
					</p>
					<p className="mb-16 text-sm text-gray-500">
						Learning in your mother tongue makes Tajweed rules and
						Quranic meanings easier to understand
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
					{languages.map((language, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
							<div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-gray-50 opacity-50" />

							<div className="relative z-10 text-center">
								<div className="mb-3 text-5xl">
									{language.flag}
								</div>
								<h3 className="mb-1 text-xl font-semibold text-gray-900">
									{language.name}
								</h3>
								<p className="text-sm text-gray-600">
									{language.speakers} speakers
								</p>
								<Badge
									className={`mt-3 ${language.color} border transition-all group-hover:scale-105`}>
									Available
								</Badge>
							</div>
						</div>
					))}
				</div>

				<div className="mx-auto mt-16 max-w-4xl">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="rounded-2xl bg-white p-8">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
								<svg
									className="h-6 w-6 text-emerald-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
									/>
								</svg>
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-900">
								Why Language Matters
							</h3>
							<p className="text-gray-600">
								While recitation is always in Arabic, receiving
								Tajweed corrections, Tafsir explanations, and
								guidance in your mother tongue makes learning
								more effective and helps you ask questions
								comfortably.
							</p>
						</div>

						<div className="rounded-2xl bg-linear-to-br from-emerald-600 to-emerald-700 p-8 text-white">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
								<svg
									className="h-6 w-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 4v16m8-8H4"
									/>
								</svg>
							</div>
							<h3 className="mb-3 text-xl font-semibold">
								More Languages Coming Soon
							</h3>
							<p className="text-emerald-100">
								Don&apos;t see your language? Register your
								interest anyway! As our community grows,
								we&apos;ll add support for more languages
								including Fulani, Kanuri, Efik, and others.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
