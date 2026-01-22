"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
			<div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
				<div className="flex items-center gap-2">
					<Image
						src="/logo.svg"
						alt="Ramadan Quran Logo"
						width={40}
						height={40}
						priority
					/>
					<span className="text-xl font-bold text-emerald-700">
						Ramadan Quran
					</span>
				</div>

				<nav className="hidden items-center gap-6 md:flex">
					<button
						onClick={() => scrollToSection("about")}
						className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600">
						About
					</button>
					<button
						onClick={() => scrollToSection("how-it-works")}
						className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600">
						How It Works
					</button>
					<button
						onClick={() => scrollToSection("features")}
						className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600">
						Features
					</button>
					<button
						onClick={() => scrollToSection("languages")}
						className="text-sm font-medium text-gray-700 transition-colors hover:text-emerald-600">
						Languages
					</button>
					<Button
						onClick={() => scrollToSection("register")}
						className="bg-emerald-600 hover:bg-emerald-700">
						Register Now
					</Button>
				</nav>

				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="flex flex-col gap-1 md:hidden"
					aria-label="Toggle menu">
					<span
						className={`h-0.5 w-6 bg-gray-700 transition-all ${
							isMenuOpen ? "translate-y-1.5 rotate-45" : ""
						}`}
					/>
					<span
						className={`h-0.5 w-6 bg-gray-700 transition-all ${
							isMenuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`h-0.5 w-6 bg-gray-700 transition-all ${
							isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
						}`}
					/>
				</button>
			</div>

			{isMenuOpen && (
				<div className="border-t bg-white md:hidden">
					<nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
						<button
							onClick={() => scrollToSection("about")}
							className="text-left text-sm font-medium text-gray-700">
							About
						</button>
						<button
							onClick={() => scrollToSection("how-it-works")}
							className="text-left text-sm font-medium text-gray-700">
							How It Works
						</button>
						<button
							onClick={() => scrollToSection("features")}
							className="text-left text-sm font-medium text-gray-700">
							Features
						</button>
						<button
							onClick={() => scrollToSection("languages")}
							className="text-left text-sm font-medium text-gray-700">
							Languages
						</button>
						<Button
							onClick={() => scrollToSection("register")}
							className="w-full bg-emerald-600 hover:bg-emerald-700">
							Register Now
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
}
