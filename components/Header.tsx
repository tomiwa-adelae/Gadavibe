"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNavbar } from "./MobileNavbar";

export const Header = () => {
	const pathname = usePathname();
	return (
		<header className="flex items-center justify-center h-24 py-4">
			<div className="container flex items-center justify-between gap-8">
				<Link href="/">
					<Image
						src={"/assets/images/logo.png"}
						alt="Gadavibe logo"
						width={1000}
						height={1000}
						className="w-14 object-cover"
					/>
				</Link>
				<nav className="flex-1 hidden md:flex items-center justify-start gap-6">
					{navLinks.map((link, idx) => {
						const isActive =
							pathname === link.slug ||
							pathname.startsWith(`${link.slug}/`);
						return (
							<Link
								key={idx}
								href={link.slug}
								className={cn(
									"uppercase text-sm font-medium hover:text-primary transition-all",
									isActive && "text-primary"
								)}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>
				<div className="flex gap-2 items-center justify-center">
					<Button size="md">
						<Link href="#get-started">Get started</Link>
					</Button>
					<div className="md:hidden">
						<MobileNavbar />
					</div>
				</div>
			</div>
		</header>
	);
};
