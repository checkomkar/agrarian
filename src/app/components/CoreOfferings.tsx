import Image from "next/image";
import styles from "./CoreOfferings.module.css";

const offeringsData = [
	{
		id: 1,
		title: "Digital Transformation",
		description: "End-to-end digitization of client services and processes.",
		icon: (
			<svg
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M1 10H23"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		id: 2,
		title: "Education Technology",
		description:
			"Developing platforms to improve student engagement and performance.",
		icon: (
			<svg
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 2L2 7L12 12L22 7L12 2Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2 17L12 22L22 17"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2 12L12 17L22 12"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		id: 3,
		title: "Data-Driven Decision-Making",
		description:
			"AI-powered insights for enterprise for better governance and resource management.",
		icon: (
			<svg
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 21H3V3"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19 9L13 15L9 11L5 15"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		id: 4,
		title: "Citizen-Centric Solutions",
		description:
			"Platforms to enhance accessibility and service delivery for citizens.",
		icon: (
			<svg
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		id: 5,
		title: "Infrastructure Modernization",
		description:
			"Upgrading legacy systems and integrating with modern platforms.",
		icon: (
			<svg
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2 17L12 22L22 17"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2 12L12 17L22 12"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 2L2 7L12 12L22 7L12 2Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];

const CoreOfferings = () => {
	return (
		<section className={styles.coreOfferings}>
			<div className={styles.backgroundPattern}>
				<div className={styles.patternCircle1}></div>
				<div className={styles.patternCircle2}></div>
				<div className={styles.patternDot1}></div>
				<div className={styles.patternDot2}></div>
				<div className={styles.patternDot3}></div>
			</div>

			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Core Offerings</h2>
					<p className={styles.subtitle}>
						Specialized solutions designed for government and enterprise needs
					</p>
				</div>

				<div className={styles.offeringsWrapper}>
					<div className={styles.offeringsList}>
						{offeringsData.map((offering) => (
							<div key={offering.id} className={styles.offeringItem}>
								<div className={styles.iconContainer}>{offering.icon}</div>
								<div className={styles.offeringContent}>
									<h3 className={styles.offeringTitle}>{offering.title}</h3>
									<p className={styles.offeringDescription}>
										{offering.description}
									</p>
								</div>
							</div>
						))}
					</div>

					<div className={styles.offeringsImage}>
						<div className={styles.imageWrapper}>
							<Image
								src="/images/core-off.jpg"
								alt="Tech-Rise Core Offerings"
								width={600}
								height={600}
								className={styles.image}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoreOfferings;
