"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { parsePhoneNumber } from "libphonenumber-js";
import { toast } from "sonner";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createRegistration } from "@/lib/api";

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	state_country: z.string().min(1, "State/Country is required"),
	role: z.enum(["Instructor", "Lead-Reader", "Student"]),
	gender: z.enum(["male", "female"]),
	level: z.enum(["beginner", "intermediate", "advanced"]),
	preferred_language: z.string().min(1, "Preferred language is required"),
	whatsapp_number: z
		.string()
		.min(10, "Phone number must be at least 10 digits")
		.refine(
			(val) => {
				const digitsOnly = val.replace(/\D/g, "");
				if (digitsOnly.length >= 10 && digitsOnly.length <= 15) {
					return true;
				}
				try {
					const phoneNumber = parsePhoneNumber(val);
					return phoneNumber.isValid();
				} catch {
					return false;
				}
			},
			{
				message:
					"Invalid phone number (e.g. 08012345678 or +234801234567)",
			},
		),
});

type FormValues = z.infer<typeof formSchema>;

interface RegistrationFormProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	isMobile?: boolean;
}

function RegistrationFormContent({ onClose }: { onClose: () => void }) {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			state_country: "",
			preferred_language: "",
			whatsapp_number: "",
		},
	});

	async function onSubmit(values: FormValues) {
		setIsLoading(true);
		try {
			await createRegistration(values);
			toast.success("Registration successful!", {
				description: "We'll contact you soon via WhatsApp.",
			});
			form.reset();
			onClose();
		} catch {
			toast.error("Registration failed", {
				description: "Please try again later.",
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input placeholder="John Doe" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="state_country"
					render={({ field }) => (
						<FormItem>
							<FormLabel>State/Country</FormLabel>
							<FormControl>
								<Input
									placeholder="Lagos, Nigeria"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="role"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Role</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select your role" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Instructor">
										Instructor
									</SelectItem>
									<SelectItem value="Lead-Reader">
										Lead-Reader
									</SelectItem>
									<SelectItem value="Student">
										Student
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>Gender</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex gap-4">
									<FormItem className="flex items-center space-x-2 space-y-0">
										<FormControl>
											<RadioGroupItem value="male" />
										</FormControl>
										<FormLabel className="font-normal">
											Male
										</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-2 space-y-0">
										<FormControl>
											<RadioGroupItem value="female" />
										</FormControl>
										<FormLabel className="font-normal">
											Female
										</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="level"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Level</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select your level" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="beginner">
										Beginner
									</SelectItem>
									<SelectItem value="intermediate">
										Intermediate
									</SelectItem>
									<SelectItem value="advanced">
										Advanced
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="preferred_language"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Preferred Language</FormLabel>
							<FormControl>
								<Input
									placeholder="English, Yoruba, Hausa, etc."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="whatsapp_number"
					render={({ field }) => (
						<FormItem>
							<FormLabel>WhatsApp Number</FormLabel>
							<FormControl>
								<Input
									type="tel"
									placeholder="08012345678 or +234801234567"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="w-full bg-emerald-600 hover:bg-emerald-700"
					disabled={isLoading}>
					{isLoading ? "Submitting..." : "Register"}
				</Button>
			</form>
		</Form>
	);
}

export function RegistrationForm({
	open,
	onOpenChange,
	isMobile,
}: RegistrationFormProps) {
	if (isMobile) {
		return (
			<Drawer open={open} onOpenChange={onOpenChange}>
				<DrawerContent className="px-4 pb-8">
					<DrawerHeader>
						<DrawerTitle>Register Your Interest</DrawerTitle>
						<DrawerDescription>
							Join our Ramadan Quran recitation program
						</DrawerDescription>
					</DrawerHeader>
					<div className="mt-4">
						<RegistrationFormContent
							onClose={() => onOpenChange(false)}
						/>
					</div>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-125">
				<DialogHeader>
					<DialogTitle>Register Your Interest</DialogTitle>
					<DialogDescription>
						Join our Ramadan Quran recitation program
					</DialogDescription>
				</DialogHeader>
				<RegistrationFormContent onClose={() => onOpenChange(false)} />
			</DialogContent>
		</Dialog>
	);
}
