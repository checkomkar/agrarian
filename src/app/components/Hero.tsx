"use client";

import styles from "./Hero.module.css";

const Hero = () => {
	const scrollToOverview = () => {
		const overviewSection = document.querySelector("#company-overview");
		if (overviewSection) {
			overviewSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className={styles.hero}>
			<div className={styles.overlay}></div>
			<div className={styles.content}>
				<h1 className={styles.title}>
					We are TechRise,
					<br />
					We Visualize people Dream's
				</h1>
				<p className={styles.description}>
					By mixing technology and creativity to invigorate the latest
					cutting-edge ideas and creative perspectives that are essential in
					shaping technologies that manifest our expertise necessary solutions
					that resonate with the ever-evolving landscape of technology.
				</p>
				<div className={styles.cta}>
					<button onClick={scrollToOverview} className={styles.btnPrimary}>
						Know more
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
