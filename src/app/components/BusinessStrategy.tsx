import React from "react";
import styles from "./BusinessStrategy.module.css";

const strategyItems = [
	{
		id: 1,
		title: "Innovation and R&D",
		description:
			"Investing in AI, machine learning, and data analytics to develop advanced solutions.",
		icon: (
			<svg
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 2L6.5 11H17.5L12 2Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.5 11L3 17L8.5 15L12 19L15.5 15L21 17L17.5 11"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 22V19"
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
		title: "Partnerships and Alliances",
		description:
			"Collaborating with leading technology providers, enterprises and local government agencies.",
		icon: (
			<svg
				width="40"
				height="40"
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
		id: 3,
		title: "Scalable Growth",
		description:
			"Expanding operations and infrastructure to support large-scale projects.",
		icon: (
			<svg
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 3V8H16"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3 21V16H8"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M21 8L16.5 13.5"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8 16L12.5 11.5"
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
		title: "Customer-Centric Approach",
		description:
			"Ensuring high levels of customization and adaptability to meet specific client needs.",
		icon: (
			<svg
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 9H9.01"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15 9H15.01"
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
		title: "Operational Excellence",
		description:
			"Streamlining internal processes to ensure timely project delivery and cost efficiency.",
		icon: (
			<svg
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 2V6"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 18V22"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.93 4.93L7.76 7.76"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.24 16.24L19.07 19.07"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2 12H6"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18 12H22"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.93 19.07L7.76 16.24"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.24 7.76L19.07 4.93"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];

const BusinessStrategy = () => {
	return (
		<section className={styles.businessStrategy}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Business Strategy</h2>
					<p className={styles.subtitle}>
						TechRise follows a strategic approach focused on delivering
						long-term value to government and enterprise clients through:
					</p>
				</div>

				<div className={styles.strategyContainer}>
					<div className={styles.strategyCards}>
						{strategyItems.map((item) => (
							<div key={item.id} className={styles.strategyCard}>
								<div className={styles.cardTop}>
									<div className={styles.iconContainer}>{item.icon}</div>
									<div className={styles.cardNumber}>
										{String(item.id).padStart(2, "0")}
									</div>
								</div>
								<div className={styles.cardContent}>
									<h3 className={styles.cardTitle}>{item.title}</h3>
									<p className={styles.cardDescription}>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={styles.bgDecoration}>
				<div className={styles.shapeLine1}></div>
				<div className={styles.shapeLine2}></div>
				<div className={styles.shapeCircle1}></div>
				<div className={styles.shapeCircle2}></div>
			</div>
		</section>
	);
};

export default BusinessStrategy;
