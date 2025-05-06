import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export const Testimonials = () => {
	return (
		<div>
			<div className="container">
				<SectionHeader
					position={"center"}
					title={"What Our users say about us?"}
					subTitle="Testimonials"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Image
						src={"/assets/images/testimonials-img.png"}
						alt={"3 ellpisis lines with 2 stars"}
						width={1000}
						height={1000}
						className="size-auto aspect-auto"
					/>
					<div className="pb-16 md:pb-0 flex items-center justify-center">
						<div>
							<h4
								style={{ fontFamily: "ClashDisplay" }}
								className="font-semibold text-xl"
							>
								The ultimate event rental experience!
							</h4>
							<p className="text-muted-foreground text-base mt-3">
								Gadavibe made organizing my event so much
								easier. From finding the right vendors to
								tracking delivery updates, the whole process was
								smooth and stress-free. Highly recommend it for
								anyone planning an event!”
							</p>
							<div className="flex items-center justify-start gap-2 mt-4">
								<Image
									src={"/assets/images/user.jpeg"}
									alt=""
									width={1000}
									height={1000}
									className="size-8 object-cover rounded-full"
								/>
								<h5
									style={{ fontFamily: "ClashDisplay" }}
									className="font-semibold text-sm"
								>
									Tomiwa Adelae
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
