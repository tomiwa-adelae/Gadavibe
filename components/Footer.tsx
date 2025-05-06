import { footerDetails } from "@/constants";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-white text-black dark:bg-black dark:text-white">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 py-10">
					<div className="col-span-2 md:col-span-1 lg:col-span-2">
						<Link href="/">
							<Image
								src={"/assets/images/logo.png"}
								alt="Gadavibe logo"
								width={1000}
								height={1000}
								className="w-14 object-cover"
							/>
						</Link>
						<div className="grid gap-4 mt-4 text-sm lg:text-base text-black">
							<a
								href="mailto:help@gadavibe.com"
								className="hover:text-primary"
							>
								<Mail className="text-[#FF5555] size-5 mr-2 inline" />
								<span>help@gadavibe.com</span>
							</a>
							<a
								href="tel:234124252522"
								className="hover:text-primary"
							>
								<Phone className="text-[#FF5555] size-5 mr-2 inline" />
								<span>+234 123 456 7372</span>
							</a>
						</div>
					</div>
					{footerDetails.map(({ title, links }, index) => (
						<div key={index} className="col-span-2 md:col-span-1">
							<h3
								style={{ fontFamily: "ClashDisplay" }}
								className="text-lg lg:text-xl font-semibold tracking-wider"
							>
								{title}
							</h3>
							<ul className="mt-4 space-y-4">
								{links.map(({ slug, label }, idx) => (
									<li key={idx}>
										<Link
											className="text-sm lg:text-base hover:text-primary"
											href={slug}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className="col-span-2 w-full">
						<h3
							style={{ fontFamily: "ClashDisplay" }}
							className="text-lg lg:text-xl font-semibold tracking-wider"
						>
							Newsletter
						</h3>
						<div className="mt-4">
							<p className="text-sm lg:text-base hover:text-primary">
								Stay up to date
							</p>
							<div className="mt-2 flex w-full items-center space-x-2 relative">
								<Input type="email" placeholder="Your email" />
								<Button
									variant={"black"}
									size="md"
									className="absolute top-[50%] right-[2%] translate-x-[-2%] translate-y-[-50%] "
									type="submit"
								>
									Subscribe
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<Separator />
			</div>
			<div className="transition-all py-8 text-center font-medium uppercase text-xs">
				<p style={{ fontFamily: "ClashDisplay" }} className="container">
					&copy; {year} Gadavibe. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
