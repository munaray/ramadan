"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-amber-50 py-20 md:py-32">
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-600 blur-3xl" />
				<div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-amber-500 blur-3xl" />
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="flex flex-col gap-6 text-center lg:text-left">
						<Badge className="w-fit self-center bg-emerald-100 text-emerald-700 hover:bg-emerald-200 lg:self-start">
							Ramadan 2026
						</Badge>

						<h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
							Journey With Us to read a{" "}
							<span className="bg-linear-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
								Complete Qur’an
							</span>
						</h1>

						<p className="text-lg text-gray-600 md:text-xl">
							Daar Ibn Amir Online Academy invites you to
							reconnect with the Noble Qur’an this blessed month
							of Ramadan. Learn with experienced reciters or help
							others complete their Qur’an recitation during this
							month of mercy and forgiveness.
						</p>

						<div className="flex flex-col gap-4 sm:flex-row lg:justify-start">
							<Button
								size="lg"
								onClick={() => scrollToSection("register")}
								className="bg-emerald-600 text-base hover:bg-emerald-700">
								Register Your Interest
							</Button>
							<Button
								size="lg"
								variant="outline"
								onClick={() => scrollToSection("how-it-works")}
								className="border-emerald-600 text-base text-emerald-700 hover:bg-emerald-50">
								Learn More
							</Button>
						</div>

						<div className="flex flex-wrap justify-center gap-8 pt-4 lg:justify-start">
							<div>
								<div className="text-3xl font-bold text-emerald-700">
									100+
								</div>
								<div className="text-sm text-gray-600">
									Expected Participants
								</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-emerald-700">
									5+
								</div>
								<div className="text-sm text-gray-600">
									Languages Supported
								</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-emerald-700">
									30
								</div>
								<div className="text-sm text-gray-600">
									Days of Learning
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
							<Image
								src="/ramadan.jpg"
								alt="Mosque during Ramadan"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-linear-to-t from-emerald-900/20 to-transparent" />
						</div>

						<div className="absolute -right-8 -top-8 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-b from-[#F9FCFB] to-[#749F93] shadow-xl">
							<span className="text-4xl">☪️</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
