import Image from "next/image";
import styles from "./Features.module.css";

const Features = () => {
	return (
		<section className={styles.features}>
			<div className={styles.container}>
				<div className={styles.sectionHeader}>
					<span className={styles.sectionTag}>Start exploring</span>
					<h2 className={styles.sectionTitle}>
						We offer a creative services
						<br />
						that help businesses grow fast
					</h2>
				</div>

				<div className={styles.content}>
					<div className={styles.featuresList}>
						<div className={styles.featureItem}>
							<div className={styles.featureNumber}>01</div>
							<div className={styles.featureContent}>
								<h3 className={styles.featureTitle}>Boost your business</h3>
								<p className={styles.featureDesc}>
									Optimize and enhance your online presence
								</p>
							</div>
						</div>

						<div className={styles.featureItem}>
							<div className={styles.featureNumber}>02</div>
							<div className={styles.featureContent}>
								<h3 className={styles.featureTitle}>
									Enhance your online presence
								</h3>
								<p className={styles.featureDesc}>
									Improve visibility and attract more customers
								</p>
							</div>
						</div>

						<div className={styles.featureItem}>
							<div className={styles.featureNumber}>03</div>
							<div className={styles.featureContent}>
								<h3 className={styles.featureTitle}>
									Develop Your Brand Identity
								</h3>
								<p className={styles.featureDesc}>
									Create a unique and memorable brand experience
								</p>
							</div>
						</div>

						<div className={styles.featureItem}>
							<div className={styles.featureNumber}>04</div>
							<div className={styles.featureContent}>
								<h3 className={styles.featureTitle}>
									Stay ahead of the competition
								</h3>
								<p className={styles.featureDesc}>
									Implement cutting-edge solutions for your business
								</p>
							</div>
						</div>
					</div>

					<div className={styles.featureImage}>
						<Image
							src="/images/feature.jpg"
							alt="Features illustration"
							width={500}
							height={400}
						/>
						<div className={styles.featureCard}>
							<h3 className={styles.cardTitle}>
								Are you're an entrepreneur or startup founder?
							</h3>
							<p className={styles.cardDesc}>
								Our tech-savvy creative web design services can help you bring
								your business idea to life. From designing a logo to building a
								website, we provide the services you need to launch and grow
								your business.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
