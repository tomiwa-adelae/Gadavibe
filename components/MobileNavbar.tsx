"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

export function MobileNavbar() {
	const router = useRouter();
	const pathname = usePathname();

	const isMobile = useIsMobile(); // detect mobile

	const [openMobile, setOpenMobile] = useState(false);

	const handleClick = () => {
		if (isMobile && setOpenMobile) {
			console.log("yes");
			setOpenMobile(false);
		}
	};

	return (
		<Sheet open={openMobile} onOpenChange={setOpenMobile}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="hover:bg-transparent"
					size={"icon"}
				>
					<MenuIcon className="size-8" />
				</Button>
			</SheetTrigger>
			<SheetContent className="h-screen py-10 px-4" side={"left"}>
				<ScrollArea className="h-full">
					<div className="container">
						<div className="flex flex-1 flex-col overflow-x-hidden">
							<Link href="/">
								<Image
									src={"/assets/images/logo.png"}
									alt="Gadavibe logo"
									width={1000}
									height={1000}
									className="lg:w-16 w-14 object-cover"
								/>
							</Link>
							<div className="mt-8 flex flex-col gap-3">
								{navLinks.map((link, idx) => {
									const isActive =
										pathname === link.slug ||
										pathname.startsWith(`${link.slug}/`);
									return (
										<Link
											key={idx}
											href={link.slug}
											className={`group flex items-center justify-start gap-2 group/sidebar py-2
                            ${
								isActive
									? "text-primary"
									: "text-black dark:text-white text-sm"
							} hover:text-primary
                            `}
											onClick={handleClick}
										>
											<span className="text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 uppercase font-medium">
												{link.label}
											</span>
										</Link>
									);
								})}
							</div>
							<Button className="mt-8" asChild size="lg">
								<Link href="#get-started">Get Started</Link>
							</Button>
						</div>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
