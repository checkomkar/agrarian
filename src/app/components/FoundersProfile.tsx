"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import styles from "./FoundersProfile.module.css";

const FoundersProfile = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const sliderRef = useRef<HTMLDivElement>(null);

	const founderProfiles = [
		{
			id: 1,
			name: "Saket Sinha",
			role: "Co-founder and CEO",
			image: "/images/saket.jpeg",
			highlights: [
				"Strategic Business Leader with 15+ years of experience in e-commerce, edtech, and government custom software, driving revenue growth and operational excellence.",
				"Proven Track Record in leading large-scale digital transformation projects, delivering measurable business impact and improving organizational efficiency.",
				"Expert in Business and Technology Integration, enhancing profitability through streamlined payment systems and innovative digital solutions.",
				"Government Partnership Specialist, instrumental in securing and executing major government digital infrastructure projects globally, strengthening stakeholder relationships and driving long-term value.",
			],
		},
		{
			id: 2,
			name: "Ritesh Thakur",
			role: "Co-founder and CTO",
			image: "/images/ritesh.jpeg",
			highlights: [
				"Visionary Technology Leader with 15+ years of experience in fintech, proptech, edtech and government digital transformation, driving innovation and scalable growth.",
				"Proven Track Record in architecting and leading large-scale, high-impact software solutions, optimizing operational efficiency, and delivering measurable business value.",
				"Expert in Business and Technology Integration, spearheading seamless digital ecosystems, robust payment infrastructures, and cutting-edge AI-driven platforms to enhance profitability and user experience.",
				"Government & Enterprise Technology Strategist, instrumental in securing and delivering mission-critical government and enterprise digital projects, fostering strong partnerships, and ensuring long-term success.",
			],
		},
		{
			id: 3,
			name: "Deepak Sharma",
			role: "Director Of Sales",
			image: "/images/ds.jpeg",
			highlights: [
				"With over 20 years of experience in Sales, Marketing, and Business Development, I've been fortunate to drive growth in two of the most dynamic, people-driven sectors: real estate and financial services.",
				"Whether it's closing high-value real estate transactions or launching financial products for startups and corporates, my journey has been shaped by a commitment to building relationships, leading high-performing teams, and creating long-term value.",
				"Sold ₹100 Cr+ worth of residential and commercial properties across India",
				"Built a channel partner network with 90%+ conversion efficiency",
				"Delivered consistent results in both off-plan and ready-to-move inventory",
				"Led investment-raising initiatives for startups and early-stage ventures",
				"Provided wealth advisory and financial planning for HNIs and enterprise clients",
				"Grew AUMs by 30% YoY through strategic client acquisition",
				"Strategic mindset with a hands-on approach to execution",
				"Leadership experience across multi-location and cross-functional teams",
				"Deep insight into Indian consumer behavior and buyer psychology",
				"Proficiency in digital tools: CRM systems, Google & Facebook Ads, Power BI, Salesforce",
			],
		},
		{
			id: 4,
			name: "Pankaj Tanwar",
			role: "Director Business Operations",
			image: "/images/pt.jpeg",
			highlights: [
				"Currently working as Director (Contracts & Procurement), area of focus is analyzing contracts for effectiveness so as to improve margins.",
				"With more than 6 years of experience in IT, have the ability to work under pressure.",
				"Skilled in Commercial Awareness, Team Motivation, Operations Management, Cost Management, Solar Energy and Competitive Tendering.",
				"Strong professional with a Degree of Bachelor of Technology (B.Tech) focused in Information Technology from Amity School of Engineering and Technology, Amity University.",
				"Have an excellent standard of numeracy in order to analyse facts and figures.",
				"With a confident and mature approach, have the ability to make decisions with tact and diplomacy.",
				"Due to excellent interpersonal and communication skills, I am also exposed to various clients for coordinating meetings.",
				"Primary responsibilities include preparing time sheets, implementing strategies and policies, contract-related negotiations, procurement.",
			],
		},
		// {
		// 	id: 4,
		// 	name: "Omkar Kamale",
		// 	role: "VP Of Product Design",
		// 	image: "/images/omkar.jpg",
		// 	highlights: [
		// 		"Seasoned Product & Frontend Design Leader with 15+ years of experience building world-class digital products.",
		// 		"Proven track record of working with top global brands like Apple, Fox Studios, Citi Bank, and MunichRe, contributing to high-impact digital products.",
		// 		"Expertise in Product Design, UX Strategy, Design System Architecture, and Frontend Development.",
		// 		"Skilled at translating complex product ideas into intuitive, delightful, and accessible user interfaces.",
		// 	],
		// },
		// {
		// 	id: 5,
		// 	name: "Sumit Mohan",
		// 	role: "Head of QA",
		// 	image: "/images/sumit.jpeg",
		// 	highlights: [
		// 		"13 years of experience in aviation, cyber-security, and telecom software, ensuring robust quality assurance processes and test automation strategies.",
		// 		"Proven track record of delivering complex digital transformation projects, leading QA teams to enhance product reliability and user experience.",
		// 		"Expertise in integrating automation testing frameworks, optimizing software quality, and streamlining testing processes to improve operational efficiency.",
		// 		"Strong background in booking system integrations, API testing, and performance optimization, ensuring seamless transactions and compliance with industry standards.",
		// 		"Adept at leading cross-functional teams, mentoring QA engineers, and implementing Agile and DevOps-driven testing strategies to accelerate delivery timelines.",
		// 	],
		// },
	];

	// Check if we're on mobile
	useEffect(() => {
		const checkIsMobile = () => {
			const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
			setIsMobile(mobileMediaQuery.matches);
		};

		checkIsMobile();

		// Add event listener for screen size changes
		const mediaQueryList = window.matchMedia("(max-width: 768px)");
		mediaQueryList.addEventListener("change", checkIsMobile);

		return () => {
			mediaQueryList.removeEventListener("change", checkIsMobile);
		};
	}, []);

	// Calculate total slides based on screen size
	const profilesPerSlide = isMobile ? 1 : 2;
	const totalSlides = Math.ceil(founderProfiles.length / profilesPerSlide);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 150) {
			nextSlide();
		}

		if (touchStart - touchEnd < -150) {
			prevSlide();
		}
	};

	// Auto slide - pause on touch
	useEffect(() => {
		const interval = setInterval(() => {
			// Don't auto-slide if user is touching
			if (touchStart === 0) {
				nextSlide();
			}
		}, 8000); // Change slide every 8 seconds

		return () => clearInterval(interval);
	}, [currentSlide, touchStart]);

	const renderFounder = (founder: (typeof founderProfiles)[0]) => (
		<div key={founder.id} className={styles.founder}>
			<div className={styles.founderHeader}>
				<div className={styles.founderImageContainer}>
					<Image
						src={founder.image}
						alt={founder.name}
						width={300}
						height={300}
						className={styles.founderImage}
					/>
				</div>
				<div className={styles.founderTitleWrapper}>
					<h3 className={styles.founderName}>{founder.name}</h3>
					<p className={styles.founderRole}>{founder.role}</p>
				</div>
			</div>

			<div className={styles.founderDetails}>
				<ul className={styles.founderHighlights}>
					{founder.highlights.map((highlight, index) => (
						<li key={index} className={styles.highlight}>
							<div className={styles.bulletPoint}></div>
							<p>{highlight}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);

	return (
		<section className={styles.foundersProfile}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Meet Our Team</h2>
					<p className={styles.subtitle}>
						Meet the visionaries behind Agrarian
					</p>
				</div>

				<div className={styles.sliderWrapper}>
					<div
						className={styles.sliderContainer}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
						ref={sliderRef}
					>
						<div
							className={styles.slider}
							style={{ transform: `translateX(-${currentSlide * 100}%)` }}
						>
							{Array.from({ length: totalSlides }).map((_, slideIndex) => (
								<div key={slideIndex} className={styles.slide}>
									{founderProfiles
										.slice(
											slideIndex * profilesPerSlide,
											slideIndex * profilesPerSlide + profilesPerSlide
										)
										.map(renderFounder)}
								</div>
							))}
						</div>
					</div>

					<button
						onClick={prevSlide}
						className={`${styles.sliderButton} ${styles.prevButton}`}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 19L8 12L15 5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
					<button
						onClick={nextSlide}
						className={`${styles.sliderButton} ${styles.nextButton}`}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 5L16 12L9 19"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>

					<div className={styles.sliderDots}>
						{Array.from({ length: totalSlides }).map((_, index) => (
							<button
								key={index}
								className={`${styles.sliderDot} ${
									currentSlide === index ? styles.activeDot : ""
								}`}
								onClick={() => goToSlide(index)}
								aria-label={`Go to slide ${index + 1}`}
							></button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoundersProfile;
