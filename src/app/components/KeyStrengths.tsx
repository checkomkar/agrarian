import styles from "./KeyStrengths.module.css";

const strengthsData = [
	{
		id: 1,
		number: "01",
		title: "Government-Focused Solutions",
		description:
			"Bespoke projects for specific requirements of government entities (AI, Real Estate, Digital Transformations) globally",
	},
	{
		id: 2,
		number: "02",
		title: "Custom Software Development",
		description:
			"Expertise in developing scalable and secure enterprise platforms.",
	},
	{
		id: 3,
		number: "03",
		title: "Advanced AI and Data Analytics",
		description:
			"Leveraging AI and data insights to drive operational efficiency and improve service delivery.",
	},
	{
		id: 4,
		number: "04",
		title: "Cybersecurity and Compliance",
		description:
			"Ensuring robust security measures and compliance with regional government standard and enterprises.",
	},
	{
		id: 5,
		number: "05",
		title: "Scalable and Flexible Solutions",
		description: "Designed to handle high volumes and evolving client needs.",
	},
];

const KeyStrengths = () => {
	return (
		<section className={styles.keyStrengths}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Key Strengths</h2>
					<div className={styles.line}></div>
				</div>

				<div className={styles.strengthsGrid}>
					{strengthsData.map((strength) => (
						<div key={strength.id} className={styles.strengthCard}>
							<div className={styles.cardHeader}>
								<span className={styles.number}>{strength.number}</span>
								<h3 className={styles.cardTitle}>{strength.title}</h3>
							</div>
							<p className={styles.cardDescription}>{strength.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default KeyStrengths;
