import Image from "next/image";
import { Button } from "./ui/button";

export const GetStarted = () => {
	return (
		<div id="get-started" className="py-16 relative">
			<Image
				src={"/assets/images/get-started-bg.png"}
				alt="bg-image"
				width={1000}
				height={1000}
				className="absolute top-[-15%] left-[-10%] -z-10 aspect-auto size-auto"
			/>
			<div className="bg-black rounded-lg text-white grid grid-cols-1 md:grid-cols-2 gap-4 container">
				<div className="flex items-center justify-center pt-16 md:pt-0">
					<div className="container">
						<h2
							style={{ fontFamily: "ClashDisplay" }}
							className="text-3xl lg:text-4xl font-semibold"
						>
							Ready to Get Started?
						</h2>
						<p className="text-gray-200 text-base mt-2">
							Download the gadavibe app from the app Store
						</p>
						<div className="flex flex-col sm:flex-row items-start justify start gap-4 w-full mt-8">
							<Button
								className="flex items-center w-full sm:w-auto justify-center"
								variant={"white"}
								size={"lg"}
							>
								<span>
									Download from{" "}
									<br className="hidden sm:block" /> Apple
									Store{" "}
								</span>
								<Image
									src={"/assets/icons/apple.svg"}
									alt="Apple icon"
									width={1000}
									height={1000}
									className="size-6"
								/>
							</Button>
							<Button
								className="flex items-center  w-full sm:w-auto justify-center"
								variant={"white"}
								size={"lg"}
							>
								<span>
									Download from{" "}
									<br className="hidden sm:block" />
									Play Store{" "}
								</span>
								<Image
									src={"/assets/icons/playstore.svg"}
									alt="Playstore icon icon"
									width={1000}
									height={1000}
									className="size-6"
								/>
							</Button>
						</div>
					</div>
				</div>
				<Image
					src={"/assets/images/get-started-img.png"}
					alt={"3 ellpisis lines with 2 stars"}
					width={1000}
					height={1000}
					className="size-auto aspect-auto"
				/>
			</div>
		</div>
	);
};
