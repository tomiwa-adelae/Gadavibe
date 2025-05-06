import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";
import { SectionHeader } from "./SectionHeader";

export const FAQs = () => {
	return (
		<div id="faqs" className="pb-16">
			<div className="container">
				<SectionHeader
					position={"center"}
					title={"	Frequently Asked Questions"}
					subTitle="FAQs"
				/>
				<div className="mt-8 max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map(({ question, answer }, index) => (
							<AccordionItem
								className="mb-4"
								value={`${index}`}
								key={index}
							>
								<AccordionTrigger>{question}</AccordionTrigger>
								<AccordionContent>{answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};
