import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, CirclePlay } from "lucide-react";
import Image from "next/image";

export const Showcase = () => {
	return (
		<div className="py-8">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<div className="relative">
						<h1
							style={{ fontFamily: "ClashDisplay" }}
							className={`capitalize text-4xl md:text-5xl lg:text-6xl font-bold `}
						>
							Plan your Perfect Event, Stress-Free
						</h1>
						<Image
							src={"/assets/images/home-bg.png"}
							alt="bg-image"
							width={1000}
							height={1000}
							className="absolute top-[50%] translate-y-[-50%] right-[20%]  -z-10 aspect-auto size-auto"
						/>
					</div>
					<p className="text-muted-foreground text-base mt-4">
						Gadavibe connects you to top-tier event services and
						rental equipment—all in one app.
					</p>
					<div className="flex items-center justify start gap-4 mt-4 w-full">
						<Button size={"lg"} asChild>
							<Link href="#get-started">
								Get Started <ArrowRight />
							</Link>
						</Button>
						<Button variant={"ghost"} size={"lg"} asChild>
							<Link href="/">
								<CirclePlay /> Watch video
							</Link>
						</Button>
					</div>
					<Image
						src={"/assets/images/showcase-zigzag.png"}
						alt={"a zigzag line"}
						width={1000}
						height={1000}
						className="size-auto aspect-auto"
					/>
				</div>
				<Image
					src={"/assets/images/showcase-img.png"}
					alt={"3 ellpisis lines with 2 stars"}
					width={1000}
					height={1000}
					className="size-auto aspect-auto"
				/>
			</div>
		</div>
	);
};
