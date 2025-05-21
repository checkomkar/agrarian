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
								src="/images/logo-light.svg"
								alt="Tech-Rise Logo"
								width={150}
								height={40}
							/>
						</button>
						<p className={styles.footerDesc}>
							At TechRise, we do more than just set up company - we are a hub of
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
								TechRise Meydan Grandstand, 6th floor, Meydan Road, Nad Al
								<br />
								Sheba, Dubai, UAE <br />
								Email: support@techrise.tech <br />
								Phone: +971-567577300 <br />
								Website: www.techrise.tech
							</p>
						</div>
					</div>
				</div>

				<div className={styles.copyright}>
					<p>&copy; 2023 All Rights Reserved. TechRise</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
