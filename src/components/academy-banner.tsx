import Image from "next/image";

export function AcademyBanner() {
	return (
		<section className="border-b bg-white py-6">
			<div className="container mx-auto max-w-7xl px-4 md:px-6">
				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
					<p className="text-sm font-medium text-gray-600 sm:text-base">
						Organized by:
					</p>
					<div className="flex items-center gap-3">
						<div className="relative h-20 w-full overflow-hidden rounded-full">
							<Image
								src="/academy-logo.png"
								alt="Daar Ibn Amir Online Academy"
								fill
								className="object-cover"
							/>
						</div>
						<span className="text-base font-semibold text-gray-900 sm:text-lg">
							Daar Ibn Amir Online Academy
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
