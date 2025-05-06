import { features } from "@/constants";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export const Features = () => {
	return (
		<div id="features" className="relative">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
				<Image
					src={"/assets/images/features-img.png"}
					alt={"3 ellpisis lines with 2 stars"}
					width={1000}
					height={1000}
					className="size-auto aspect-auto order-2 md:order-1"
				/>
				<div className="relative flex items-center justify-center order-1">
					<div>
						<SectionHeader position={"left"} subTitle="Features" />
						<h4
							className="uppercase font-medium text-primary text-base lg:text-lg"
							style={{ fontFamily: "ClashDisplay" }}
						></h4>
						<div className="mt-4 grid gap-6">
							{features.map(
								({ title, icon, description }, index) => {
									const Icon = icon;
									return (
										<div key={index}>
											<h3
												style={{
													fontFamily: "ClashDisplay",
												}}
												className="font-semibold text-lg capitalize"
											>
												<Icon className="text-[#FF5555] size-6 inline mr-2" />
												{title}
											</h3>
											<p className="text-muted-foreground text-base mt-2">
												{description}
											</p>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
			</div>
			<Image
				src={"/assets/images/features-bg.png"}
				alt="bg-image"
				width={1000}
				height={1000}
				className="absolute top-[50%] translate-y-[-50%] right-[0%] -z-10 aspect-auto size-auto"
			/>
		</div>
	);
};
