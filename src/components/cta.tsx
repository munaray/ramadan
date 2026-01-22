"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CTA() {
	const [registered, setRegistered] = useState(false);

	const handleRegister = () => {
		setRegistered(true);
		setTimeout(() => setRegistered(false), 3000);
	};

	return (
		<section
			id="register"
			className="relative overflow-hidden bg-linear-to-br from-emerald-600 via-emerald-700 to-emerald-800 py-20 md:py-32">
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
				<div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-amber-400 blur-3xl" />
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<div className="mb-6 flex justify-center">
						<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
							<svg
								className="h-10 w-10 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
								/>
							</svg>
						</div>
					</div>

					<h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
						Ready to Transform Your Ramadan?
					</h2>

					<p className="mb-10 text-lg text-emerald-100 md:text-xl">
						Join hundreds of Muslims committed to mastering Quran
						recitation this blessed month. Registration closes soon!
					</p>

					{!registered ? (
						<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
							<Button
								size="lg"
								onClick={handleRegister}
								className="bg-white text-lg text-emerald-700 hover:bg-gray-100">
								Register Your Interest Now
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white bg-transparent text-lg text-white hover:bg-white/10"
								onClick={() => {
									const element =
										document.getElementById("about");
									element?.scrollIntoView({
										behavior: "smooth",
									});
								}}>
								Learn More First
							</Button>
						</div>
					) : (
						<div className="rounded-2xl bg-white/20 p-6 backdrop-blur-sm">
							<div className="flex items-center justify-center gap-3 text-white">
								<svg
									className="h-6 w-6"
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
								<p className="text-lg font-semibold">
									Thank you for your interest! We&aos;ll be in
									touch soon.
								</p>
							</div>
						</div>
					)}

					<div className="mt-12 grid gap-6 text-left md:grid-cols-3">
						<div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
							<div className="mb-2 text-3xl font-bold text-white">
								Free
							</div>
							<p className="text-sm text-emerald-100">
								No cost to participate. This is purely for the
								sake of Allah.
							</p>
						</div>
						<div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
							<div className="mb-2 text-3xl font-bold text-white">
								30 Days
							</div>
							<p className="text-sm text-emerald-100">
								Throughout Ramadan, with flexible scheduling to
								fit your routine.
							</p>
						</div>
						<div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
							<div className="mb-2 text-3xl font-bold text-white">
								All Levels
							</div>
							<p className="text-sm text-emerald-100">
								Whether beginner or advanced, everyone is
								welcome.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
