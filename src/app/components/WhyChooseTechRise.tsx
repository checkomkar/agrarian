import React from "react";
import styles from "./WhyChooseTechRise.module.css";

const reasons = [
	{
		id: 1,
		title: "Proven Expertise",
		description: "Extensive experience in large scale projects.",
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M22 12H18L15 21L9 3L6 12H2"
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
		title: "Strategic Vision",
		description:
			"Focused on driving long-term value for enterprises and government entities.",
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 20L12 4"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5 13L12 20L19 13"
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
		title: "Innovation-Driven",
		description: "Continuous investment in technology and talent development.",
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 15V23"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 18H15"
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
		title: "Trusted Partner",
		description:
			"Strong relationships with government agencies and stakeholders.",
		icon: (
			<svg
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5 11H19V22H5V11Z"
					stroke="#27AE60"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];

const WhyChooseTechRise = () => {
	return (
		<section className={styles.whyChoose}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Why Choose TechRise?</h2>
				</div>

				<div className={styles.reasonsWrapper}>
					{reasons.map((reason) => (
						<div key={reason.id} className={styles.reasonCard}>
							<div className={styles.iconWrapper}>{reason.icon}</div>
							<h3 className={styles.reasonTitle}>{reason.title}</h3>
							<p className={styles.reasonDescription}>{reason.description}</p>
						</div>
					))}
				</div>

				<div className={styles.decorationElement}>
					<div className={styles.circle1}></div>
					<div className={styles.circle2}></div>
					<div className={styles.line1}></div>
					<div className={styles.line2}></div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseTechRise;
