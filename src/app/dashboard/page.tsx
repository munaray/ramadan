import { redirect } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/auth";
import { getRegistrations, Registration } from "@/lib/api";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegistrationStats } from "@/components/dashboard/registration-stats";
import { RegistrationsTable } from "@/components/dashboard/registrations-table";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DashboardPage() {
	const authenticated = await isAuthenticated();

	if (!authenticated) {
		redirect("/passcode");
	}

	let registrations: Registration[] = [];
	let fetchError = false;

	try {
		registrations = await getRegistrations();
	} catch (error) {
		console.error("Failed to fetch registrations:", error);
		fetchError = true;
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="border-b bg-white">
				<div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
					<div className="flex items-center gap-2">
						<Image
							src="/logo.svg"
							alt="Ramadan Quran Logo"
							width={40}
							height={40}
						/>
						<span className="text-xl font-bold text-emerald-700">
							Admin Dashboard
						</span>
					</div>

					<form action={logout}>
						<Button
							type="submit"
							variant="outline"
							className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
							Logout
						</Button>
					</form>
				</div>
			</header>

			<main className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900">
						Welcome to Dashboard
					</h1>
					<p className="mt-2 text-gray-600">
						Manage Ramadan Quran recitation program
					</p>
				</div>

				{fetchError ? (
					<div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
						<div className="mb-4 flex justify-center">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
								<svg
									className="h-6 w-6 text-red-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
						</div>
						<h3 className="mb-2 text-lg font-semibold text-red-900">
							Failed to Load Registrations
						</h3>
						<p className="mb-4 text-sm text-red-700">
							Unable to connect to the API. Please check your internet
							connection or try again later.
						</p>
						<Button
							onClick={() => window.location.reload()}
							className="bg-red-600 hover:bg-red-700"
						>
							Retry
						</Button>
					</div>
				) : (
					<>
						<RegistrationStats registrations={registrations} />

						<div className="mt-8">
							<RegistrationsTable registrations={registrations} />
						</div>
					</>
				)}
			</main>
		</div>
	);
}
