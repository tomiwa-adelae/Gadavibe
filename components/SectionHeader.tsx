import { cn } from "@/lib/utils";

interface Props {
	title?: string;
	subTitle: string;
	position: string;
}
export const SectionHeader = ({
	title,
	subTitle,
	position = "left",
}: Props) => {
	return (
		<div className={cn(position === "left" ? "text-left" : "text-center")}>
			<h4
				className="uppercase font-medium text-primary  text-base lg:text-lg"
				style={{ fontFamily: "ClashDisplay" }}
			>
				{subTitle}
			</h4>
			<h2
				style={{ fontFamily: "ClashDisplay" }}
				className="font-bold mt-1 text-2xl lg:text-4xl capitalize"
			>
				{title}
			</h2>
		</div>
	);
};
