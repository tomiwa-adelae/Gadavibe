import { FAQs } from "@/components/FAQs";
import { Features } from "@/components/Features";
import { GetStarted } from "@/components/GetStarted";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { Why } from "@/components/Why";

export default function Home() {
	return (
		<div>
			<Showcase />
			<Features />
			<Why />
			<Testimonials />
			<FAQs />
			<GetStarted />
		</div>
	);
}
