import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Features() {
	const reciterFeatures = [
		"Lead live Quran recitation sessions in Arabic",
		"Organize Tafsir sessions in native language",
		"Guide and correct Tajweed pronunciation",
		"Share your expertise with the community",
		"Earn rewards by teaching others",
	];

	const listenerFeatures = [
		"Learn from experienced reciters",
		"Master proper Tajweed rules",
		"Practice in a supportive environment",
		"Receive personalized feedback",
		"Track your progress throughout Ramadan",
	];

	return (
		<section id="features" className="bg-white py-20 md:py-32">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
						Choose Your Role
					</h2>
					<p className="mb-16 text-lg text-gray-600">
						Whether you&apos;re experienced in recitation or eager
						to learn, there&apos;s a place for you in our community
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					<Card className="relative overflow-hidden border-2 border-emerald-200 transition-all hover:shadow-xl">
						<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-emerald-100 opacity-50" />
						<CardHeader>
							<div className="mb-4 flex items-center justify-between">
								<Badge className="bg-emerald-600 hover:bg-emerald-700">
									Lead & Guide
								</Badge>
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
									<svg
										className="h-6 w-6 text-emerald-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
										/>
									</svg>
								</div>
							</div>
							<CardTitle className="text-2xl">
								Become a Reciter (Leader)
							</CardTitle>
							<p className="text-gray-600">
								Share your knowledge and help others perfect
								their Quran recitation
							</p>
						</CardHeader>
						<CardContent>
							<ul className="space-y-3">
								{reciterFeatures.map((feature, index) => (
									<li
										key={index}
										className="flex items-start gap-3">
										<svg
											className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-gray-700">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card className="relative overflow-hidden border-2 border-amber-200 transition-all hover:shadow-xl">
						<div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-amber-100 opacity-50" />
						<CardHeader>
							<div className="mb-4 flex items-center justify-between">
								<Badge className="bg-amber-600 hover:bg-amber-700">
									Learn & Grow
								</Badge>
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
									<svg
										className="h-6 w-6 text-amber-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
								</div>
							</div>
							<CardTitle className="text-2xl">
								Become a Listener (Learner)
							</CardTitle>
							<p className="text-gray-600">
								Learn from experts and improve your Quran
								recitation skills
							</p>
						</CardHeader>
						<CardContent>
							<ul className="space-y-3">
								{listenerFeatures.map((feature, index) => (
									<li
										key={index}
										className="flex items-start gap-3">
										<svg
											className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-gray-700">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>

				<div className="mx-auto mt-12 max-w-2xl rounded-xl bg-linear-to-r from-emerald-50 to-amber-50 p-6 text-center">
					<p className="text-gray-700">
						<span className="font-semibold">Important:</span> Choose
						the role that best fits your current level. Reciters may
						also organize Tafsir (Quranic explanation) sessions in
						your native language to deepen understanding alongside
						recitation practice.
					</p>
				</div>
			</div>
		</section>
	);
}
