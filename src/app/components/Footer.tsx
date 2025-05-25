"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		} else if (sectionId === "top") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerMain}>
					<div className={styles.footerLogo}>
						<button
							onClick={() => scrollToSection("top")}
							className={styles.logoButton}
						>
							<Image
								src="/images/logo-white.png"
								alt="Tech-Rise Logo"
								width={150}
								height={60}
							/>
						</button>
						<p className={styles.footerDesc}>
							At AGARIAN, we do more than just set up company - we are a hub of
							creativity, expertise, and technological excellence. We focus on
							pushing the boundaries with innovation, design, and development
							solutions.
						</p>
					</div>

					<div className={styles.footerLinks}>
						<div className={styles.linkColumn}>
							<h4>Links</h4>
							<ul>
								<li>
									<button onClick={() => scrollToSection("top")}>Home</button>
								</li>
								<li>
									<button
										onClick={() => scrollToSection("government-solutions")}
									>
										Solutions
									</button>
								</li>
								<li>
									<button onClick={() => scrollToSection("founders-profile")}>
										About Us
									</button>
								</li>
								{/* <li>
									<Link href="/blog">Blog</Link>
								</li> */}
								<li>
									<button onClick={() => scrollToSection("contact")}>
										Contact Us
									</button>
								</li>
							</ul>
						</div>

						<div className={styles.contactInfo}>
							<h4>Contact us</h4>
							<p className={styles.address}>
								AGARIAN Global Pvt Ltd
								<br />
								Gurgaon, NCR, India <br />
								Email: support@agarian.tech <br />
								Phone: +91-80959 24992 <br />
								Website: www.agarian.tech
							</p>
						</div>
					</div>
				</div>

				<div className={styles.copyright}>
					<p>&copy; 2017 All Rights Reserved. AGARIAN</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
