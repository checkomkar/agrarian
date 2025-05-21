import Image from "next/image";
import styles from "./GovernmentSolutions.module.css";

const GovernmentSolutions = () => {
	return (
		<section className={styles.govSolutions}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Government & Enterprise Solutions</h2>
					<p className={styles.subtitle}>
						Trusted by government entities for secure and scalable software
						solutions
					</p>
				</div>

				<div className={styles.content}>
					<div className={styles.imageSection}>
						<div className={styles.imageWrapper}>
							<Image
								src="/images/govt-sol.jpg"
								alt="TechRise Government Solutions"
								width={600}
								height={400}
								className={styles.mainImage}
							/>
							{/* <div className={styles.badge}>
								<span>UAE Registered</span>
							</div> */}
						</div>
					</div>

					<div className={styles.textSection}>
						<div className={styles.solutionsList}>
							<div className={styles.solutionItem}>
								<div className={styles.solutionIcon}>
									<svg
										width="24"
										height="24"
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
											d="M9 12L11 14L15 10"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.solutionContent}>
									<h3>Custom Government Software</h3>
									<p>
										Tailor-made solutions designed specifically for government
										entities
									</p>
								</div>
							</div>

							<div className={styles.solutionItem}>
								<div className={styles.solutionIcon}>
									<svg
										width="24"
										height="24"
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
											d="M9 12L11 14L15 10"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.solutionContent}>
									<h3>Enterprise Solutions</h3>
									<p>
										Robust systems for large-scale enterprise operations and
										management
									</p>
								</div>
							</div>

							<div className={styles.solutionItem}>
								<div className={styles.solutionIcon}>
									<svg
										width="24"
										height="24"
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
											d="M9 12L11 14L15 10"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.solutionContent}>
									<h3>Secure Infrastructure</h3>
									<p>
										Advanced security protocols meeting government standards and
										requirements
									</p>
								</div>
							</div>

							<div className={styles.solutionItem}>
								<div className={styles.solutionIcon}>
									<svg
										width="24"
										height="24"
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
											d="M9 12L11 14L15 10"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.solutionContent}>
									<h3>Compliance Expertise</h3>
									<p>
										Comprehensive knowledge of regulations and compliance
										requirements
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GovernmentSolutions;
