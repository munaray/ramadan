import { Card, CardContent } from "@/components/ui/card";

export function About() {
	return (
		<section id="about" className="bg-white py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						About Our Program
					</h2>
					<p className="mb-12 text-lg text-gray-600">
						A community-driven initiative to help Muslims perfect
						their Quran recitation during the blessed month of
						Ramadan
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<Card className="border-emerald-100 transition-shadow hover:shadow-lg">
						<CardContent className="p-6">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
								<svg
									className="h-6 w-6 text-emerald-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">
								Our Mission
							</h3>
							<p className="text-gray-600">
								To bring Muslims together and facilitate
								collaborative Quran learning during Ramadan,
								ensuring everyone has access to guidance
								regardless of their location or background.
							</p>
						</CardContent>
					</Card>

					<Card className="border-emerald-100 transition-shadow hover:shadow-lg">
						<CardContent className="p-6">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
								<svg
									className="h-6 w-6 text-amber-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">
								Community Driven
							</h3>
							<p className="text-gray-600">
								We pair participants based on language and skill
								level, creating small WhatsApp groups where
								experienced reciters guide learners through
								proper Tajweed, pronunciation, and may organize
								Tafsir sessions in your native language.
							</p>
						</CardContent>
					</Card>

					<Card className="border-emerald-100 transition-shadow hover:shadow-lg md:col-span-2 lg:col-span-1">
						<CardContent className="p-6">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
								<svg
									className="h-6 w-6 text-emerald-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">
								Transformative Experience
							</h3>
							<p className="text-gray-600">
								Make this Ramadan count by dedicating time to
								perfecting your recitation. Whether you&apos;re
								leading or learning, every session brings you
								closer to mastering the Book of Allah.
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-linear-to-br from-emerald-50 to-amber-50 p-8 text-center">
					<p className="text-lg leading-relaxed text-gray-700">
						<span className="font-semibold text-emerald-700">
							&quot;The best among you are those who learn the
							Quran and teach it.&quot;
						</span>
						<br />
						<span className="text-sm text-gray-600">
							- Prophet Muhammad (ﷺ)
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}
