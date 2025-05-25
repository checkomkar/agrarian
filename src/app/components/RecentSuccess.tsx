import React from "react";
import styles from "./RecentSuccess.module.css";
import Image from "next/image";

const successStories = [
	{
		id: 1,
		title: "Batumi Goverment School app",
		description:
			"Successfully developed and deployed a comprehensive platform for student performance tracking and teacher training across government schools.",
		icon: "/images/success-education.svg",
		bgColor: "rgba(72, 25, 107, 0.08)",
	},
	{
		id: 2,
		title: "Auditra: The Media Inc",
		description:
			"Enabled real-time decision-making and resource allocation through AI-based analytics for enterprises.",
		icon: "/images/success-ai.svg",
		bgColor: "rgba(41, 128, 185, 0.08)",
	},
	{
		id: 3,
		title: "Gyana",
		description:
			"Gyana is transforming learning experiences for government schools and institutions with accessible and innovative solutions.",
		icon: "/images/gyana.svg",
		bgColor: "rgba(142, 68, 173, 0.08)",
	},
];

const RecentSuccess = () => {
	return (
		<section className={styles.recentSuccess}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Recent Success Stories</h2>
				</div>

				<div className={styles.storiesContainer}>
					{successStories.map((story) => (
						<div
							key={story.id}
							className={styles.storyCard}
							style={{ backgroundColor: story.bgColor }}
						>
							<div className={styles.cardContent}>
								<div className={styles.iconPlaceholder}>
									{story.id !== 3 && (
										<svg
											width="48"
											height="48"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											{story.id === 1 && (
												// Education icon
												<>
													<path
														d="M12 2L2 7L12 12L22 7L12 2Z"
														stroke="#48196b"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M2 17L12 22L22 17"
														stroke="#48196b"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M2 12L12 17L22 12"
														stroke="#48196b"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</>
											)}
											{story.id === 2 && (
												// AI icon
												<>
													<path
														d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
														stroke="#2980B9"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
														stroke="#2980B9"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M12 12V9.5"
														stroke="#2980B9"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M14 13.5L12 12"
														stroke="#2980B9"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</>
											)}
										</svg>
									)}
									{story.id === 3 && (
										<Image
											src="/images/gyana.svg"
											alt="Gyana"
											width={60}
											height={60}
										/>
									)}
								</div>
								<h3 className={styles.storyTitle}>{story.title}</h3>
								<p className={styles.storyDescription}>{story.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={styles.backgroundElements}>
				<div className={styles.circle1}></div>
				<div className={styles.circle2}></div>
				<div className={styles.pattern1}></div>
				<div className={styles.pattern2}></div>
			</div>
		</section>
	);
};

export default RecentSuccess;
