"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { verifyPasscode } from "@/lib/auth";
import Link from "next/link";

export default function PasscodePage() {
	const [passcode, setPasscode] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			const isValid = await verifyPasscode(passcode);

			if (isValid) {
				router.push("/dashboard");
				router.refresh();
			} else {
				setError("Invalid passcode. Please try again.");
				setPasscode("");
			}
		} catch {
			setError("An error occurred. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-linear-to-br from-emerald-50 via-white to-amber-50">
			<div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl">
				<div className="text-center">
					<div className="mb-4 flex justify-center">
						<Image
							src="/logo.svg"
							alt="Ramadan Quran Logo"
							width={80}
							height={80}
						/>
					</div>
					<h1 className="text-2xl font-bold text-gray-900">
						Admin Access
					</h1>
					<p className="mt-2 text-sm text-gray-600">
						Enter your passcode to access the dashboard
					</p>
				</div>

				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div className="space-y-2">
						<Label htmlFor="passcode">Passcode</Label>
						<Input
							id="passcode"
							type="password"
							value={passcode}
							onChange={(e) => setPasscode(e.target.value)}
							placeholder="Enter passcode"
							className="w-full"
							required
							disabled={isLoading}
						/>
					</div>

					{error && (
						<div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
							{error}
						</div>
					)}

					<Button
						type="submit"
						className="w-full bg-emerald-600 hover:bg-emerald-700"
						disabled={isLoading}>
						{isLoading ? "Verifying..." : "Access Dashboard"}
					</Button>
				</form>

				<div className="text-center">
					<Link
						href="/"
						className="text-sm text-emerald-600 hover:text-emerald-700">
						← Back to home
					</Link>
				</div>
			</div>
		</div>
	);
}
