import React from "react";
import styles from "./VisionMission.module.css";

const VisionMission = () => {
	return (
		<section className={styles.visionMission}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.missionBox}>
						<div className={styles.iconContainer}>
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
									d="M12 16V12"
									stroke="#27AE60"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 8H12.01"
									stroke="#27AE60"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<h2 className={styles.title}>Mission</h2>
						<p className={styles.description}>
							"To empower government and enterprise entities with innovative,
							scalable, and secure technology solutions, driving digital
							transformation and improving educational and operational
							outcomes."
						</p>
					</div>

					<div className={styles.divider}></div>

					<div className={styles.visionBox}>
						<div className={styles.iconContainer}>
							<svg
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
									stroke="#27AE60"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
									stroke="#27AE60"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<h2 className={styles.title}>Vision</h2>
						<p className={styles.description}>
							"To become the leading technology partner for government and
							enterprise entities, transforming education and public services
							through cutting-edge AI and custom software solutions."
						</p>
					</div>
				</div>

				<div className={styles.decoration}>
					<div className={styles.decorationCircle1}></div>
					<div className={styles.decorationCircle2}></div>
					<div className={styles.decorationLine1}></div>
					<div className={styles.decorationLine2}></div>
				</div>
			</div>
		</section>
	);
};

export default VisionMission;
