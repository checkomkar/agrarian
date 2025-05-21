import React from "react";
import styles from "./RecentSuccess.module.css";
import Image from "next/image";

const successStories = [
	{
		id: 1,
		title: "Education Platform for Government Schools",
		description:
			"Successfully developed and deployed a comprehensive platform for student performance tracking and teacher training across government schools.",
		icon: "/images/success-education.svg",
		bgColor: "rgba(39, 174, 96, 0.08)",
	},
	{
		id: 2,
		title: "AI-Driven Governance Platform",
		description:
			"Enabled real-time decision-making and resource allocation through AI-based analytics for enterprises.",
		icon: "/images/success-ai.svg",
		bgColor: "rgba(41, 128, 185, 0.08)",
	},
	{
		id: 3,
		title: "Smart Infrastructure Projects",
		description:
			"Developed smart city (real-estate, AI and digital transformations) infrastructure solutions to enhance operational efficiency and citizen engagement.",
		icon: "/images/success-infrastructure.svg",
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
										{story.id === 3 && (
											// Infrastructure icon
											<>
												<path
													d="M3 9L12 2L21 9V22H3V9Z"
													stroke="#8E44AD"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M9 22V12H15V22"
													stroke="#8E44AD"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</>
										)}
									</svg>
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
