import { Codesandbox, Sparkles, SquaresIntersect } from "lucide-react";

export const navLinks = [
	{
		label: "Home",
		slug: "/",
	},
	{
		label: "Features",
		slug: "#features",
	},
	{
		label: "Why us",
		slug: "#why",
	},
	{
		label: "FAQs",
		slug: "#faqs",
	},
];

export const features = [
	{
		icon: Sparkles,
		title: "Flexible booking intervals",
		description:
			"Easily schedule rentals or services by the hour, day, or event duration—whatever works best for your timeline.",
	},
	{
		icon: Codesandbox,
		title: "All-In-One Vendor Access",
		description:
			"From Tents to Tables, DJs to Decor - Book Everything you need from trusted vendors in one place.",
	},
	{
		icon: SquaresIntersect,
		title: "Real-Time Availability & Tracking",
		description:
			"Know what's available instantly and track your bookings and equipment status in real-time.",
	},
];

export const faqs = [
	{
		question: "What services do you offer?",
		answer: "We provide medical staffing, pharmaceutical supply, home healthcare, and corporate healthcare solutions.",
	},
	{
		question: "Can individuals hire a doctor or nurse?",
		answer: "Yes! We provide medical professionals for hospitals, clinics, and private individuals.",
	},
	{
		question: "How do I order medications?",
		answer: "You can order directly through our pharmacy page or contact us for assistance.",
	},
	{
		question: "Do you work with businesses and HMOs?",
		answer: "Yes! We offer corporate healthcare partnerships and work with HMOs for seamless healthcare solutions.",
	},
	{
		question: "How quickly can I get a doctor or nurse?",
		answer: "Depending on your location, we provide fast deployment of healthcare professionals within a short timeframe.",
	},
	{
		question: "Is your service available nationwide?",
		answer: "Yes, we serve multiple locations across Nigeria and continue expanding.",
	},
];

export const footerDetails = [
	{
		title: "Links",
		links: [
			{
				slug: "#home",
				label: "Home",
			},
			{
				slug: "#about",
				label: "About us",
			},
			{
				slug: "/bookings",
				label: "Bookings",
			},
			{
				slug: "/blogs",
				label: "Blogs",
			},
		],
	},
	{
		title: "Legal",
		links: [
			{
				slug: "/terms-of-services",
				label: "Terms of Services",
			},
			{
				slug: "/privacy-policy",
				label: "Privacy policy",
			},
			{
				slug: "/cookie-policy",
				label: "Cookie policy",
			},
		],
	},
];
