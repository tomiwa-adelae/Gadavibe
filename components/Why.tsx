import { features } from "@/constants";
import { Bell, Sparkle } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export const Why = () => {
	return (
		<div id="why">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="flex items-center justify-center">
						<div>
							<SectionHeader
								position={"left"}
								title={"Why Choose Gadavibe?"}
								subTitle="Advantages"
							/>

							<div className="mt-8">
								<div className="flex items-center justify-start gap-2">
									<div className="rounded-full p-2 bg-[#FF5555] inline-block">
										<Bell className="size-4 text-white" />
									</div>
									<h4
										style={{ fontFamily: "ClashDisplay" }}
										className="font-semibold text-lg lg:text-2xl"
									>
										Smart event alerts
									</h4>
								</div>
								<p className="text-muted-foreground text-base mt-3">
									Get real-time notifications on equipment
									availability, booking confirmations,
									delivery updates, and last-minute changes—so
									you're always in control of your event.
								</p>
							</div>
						</div>
					</div>
					<Image
						src={"/assets/images/why-img.png"}
						alt={"3 ellpisis lines with 2 stars"}
						width={1000}
						height={1000}
						className="size-auto aspect-auto"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Image
						src={"/assets/images/why-img-2.png"}
						alt={"3 ellpisis lines with 2 stars"}
						width={1000}
						height={1000}
						className="size-auto aspect-auto order-2 md:order-1"
					/>
					<div className="flex items-center justify-center order-1">
						<div>
							<div className="flex items-center justify-start gap-2">
								<div className="rounded-full p-2 bg-[#FF5555] inline-block">
									<Sparkle className="size-4 text-white" />
								</div>
								<h4
									style={{ fontFamily: "ClashDisplay" }}
									className="font-semibold text-lg lg:text-2xl"
								>
									Seamless Customization
								</h4>
							</div>
							<p className="text-muted-foreground text-base mt-3">
								Whether you're planning a wedding or a corporate
								event, easily customize your rental packages and
								services to match your unique vision and budget.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
