"use client";

import { useState, useMemo } from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { Registration } from "@/lib/api";

interface RegistrationsTableProps {
	registrations: Registration[];
}

const ROLE_COLORS = {
	Instructor: "bg-emerald-100 text-emerald-700",
	"Lead-Reader": "bg-blue-100 text-blue-700",
	Student: "bg-purple-100 text-purple-700",
};

const LEVEL_COLORS = {
	beginner: "bg-green-100 text-green-700",
	intermediate: "bg-yellow-100 text-yellow-700",
	advanced: "bg-red-100 text-red-700",
};

export function RegistrationsTable({ registrations }: RegistrationsTableProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortField, setSortField] =
		useState<keyof Registration>("created_at");
	const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

	const filteredAndSorted = useMemo(() => {
		const result = registrations.filter(
			(reg) =>
				reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				reg.state_country
					.toLowerCase()
					.includes(searchTerm.toLowerCase()) ||
				reg.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
				reg.level.toLowerCase().includes(searchTerm.toLowerCase()),
		);

		result.sort((a, b) => {
			const aVal = a[sortField];
			const bVal = b[sortField];

			if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
			if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
			return 0;
		});

		return result;
	}, [registrations, searchTerm, sortField, sortDirection]);

	const handleSort = (field: keyof Registration) => {
		if (sortField === field) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortField(field);
			setSortDirection("asc");
		}
	};

	const exportToCSV = () => {
		const headers = [
			"Name",
			"State/Country",
			"Role",
			"Gender",
			"Level",
			"Preferred Language",
			"WhatsApp Number",
			"Registered Date",
		];

		const rows = filteredAndSorted.map((reg) => [
			reg.name,
			reg.state_country,
			reg.role,
			reg.gender,
			reg.level,
			reg.preferred_language,
			reg.whatsapp_number,
			format(new Date(reg.created_at), "MMM dd, yyyy"),
		]);

		const csvContent = [
			headers.join(","),
			...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
		].join("\n");

		const blob = new Blob([csvContent], { type: "text/csv" });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `registrations-${format(new Date(), "yyyy-MM-dd")}.csv`;
		a.click();
		window.URL.revokeObjectURL(url);
	};

	if (registrations.length === 0) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Recent Registrations</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-center py-8 text-gray-500">
						No registrations yet. Share the landing page to get
						started!
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<CardTitle>
						Registrations ({filteredAndSorted.length})
					</CardTitle>
					<div className="flex gap-2">
						<Input
							placeholder="Search name, country, role..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="max-w-xs"
						/>
						<Button onClick={exportToCSV} variant="outline">
							Export CSV
						</Button>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className="hidden md:block overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("name")}>
									Name{" "}
									{sortField === "name" &&
										(sortDirection === "asc" ? "↑" : "↓")}
								</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("state_country")}>
									State/Country{" "}
									{sortField === "state_country" &&
										(sortDirection === "asc" ? "↑" : "↓")}
								</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("role")}>
									Role{" "}
									{sortField === "role" &&
										(sortDirection === "asc" ? "↑" : "↓")}
								</TableHead>
								<TableHead>Gender</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("level")}>
									Level{" "}
									{sortField === "level" &&
										(sortDirection === "asc" ? "↑" : "↓")}
								</TableHead>
								<TableHead>Language</TableHead>
								<TableHead>WhatsApp</TableHead>
								<TableHead
									className="cursor-pointer"
									onClick={() => handleSort("created_at")}>
									Registered{" "}
									{sortField === "created_at" &&
										(sortDirection === "asc" ? "↑" : "↓")}
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filteredAndSorted.map((reg) => (
								<TableRow key={reg.id}>
									<TableCell className="font-medium">
										{reg.name}
									</TableCell>
									<TableCell>{reg.state_country}</TableCell>
									<TableCell>
										<Badge
											className={ROLE_COLORS[reg.role]}>
											{reg.role}
										</Badge>
									</TableCell>
									<TableCell className="capitalize">
										{reg.gender}
									</TableCell>
									<TableCell>
										<Badge
											className={LEVEL_COLORS[reg.level]}>
											{reg.level}
										</Badge>
									</TableCell>
									<TableCell>
										{reg.preferred_language}
									</TableCell>
									<TableCell>{reg.whatsapp_number}</TableCell>
									<TableCell>
										{format(
											new Date(reg.created_at),
											"MMM dd, yyyy",
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>

				<div className="md:hidden space-y-4">
					{filteredAndSorted.map((reg) => (
						<Card key={reg.id} className="p-4">
							<div className="space-y-2">
								<div className="flex justify-between items-start">
									<div>
										<p className="font-semibold">
											{reg.name}
										</p>
										<p className="text-sm text-gray-600">
											{reg.state_country}
										</p>
									</div>
									<Badge className={ROLE_COLORS[reg.role]}>
										{reg.role}
									</Badge>
								</div>
								<div className="grid grid-cols-2 gap-2 text-sm">
									<div>
										<span className="text-gray-600">
											Gender:
										</span>{" "}
										<span className="capitalize">
											{reg.gender}
										</span>
									</div>
									<div>
										<Badge
											className={LEVEL_COLORS[reg.level]}
											variant="outline">
											{reg.level}
										</Badge>
									</div>
									<div>
										<span className="text-gray-600">
											Language:
										</span>{" "}
										{reg.preferred_language}
									</div>
									<div>
										<span className="text-gray-600">
											WhatsApp:
										</span>{" "}
										{reg.whatsapp_number}
									</div>
								</div>
								<div className="text-xs text-gray-500 pt-2 border-t">
									Registered:{" "}
									{format(
										new Date(reg.created_at),
										"MMM dd, yyyy",
									)}
								</div>
							</div>
						</Card>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
