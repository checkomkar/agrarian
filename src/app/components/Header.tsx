"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	// Logo changes based on scroll state
	const logoSrc = scrolled ? "/images/logo-dark.png" : "/images/logo-light.svg";

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const scrollToSection = (sectionId: string) => {
		setMobileMenuOpen(false);
		const section = document.getElementById(sectionId);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 80, // Offset for header height
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Determine active section based on scroll position
			const sections = [
				"hero",
				"company-overview",
				"vision-mission",
				"key-highlights",
				"core-offerings",
				"key-strengths",
				"government-solutions",
				"business-strategy",
				"why-choose",
				"founders-profile",
				"recent-success",
				"contact",
			];

			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom > 100;
				}
				return false;
			});

			if (currentSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href="/">
						<Image
							src={logoSrc}
							alt="Tech-Rise Logo"
							width={140}
							height={50}
							priority
						/>
					</Link>
				</div>

				<nav className={`${styles.nav} ${mobileMenuOpen ? styles.active : ""}`}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<button
								onClick={() => scrollToSection("hero")}
								className={`${styles.navLink} ${
									activeSection === "hero" ? styles.active : ""
								}`}
							>
								HOME
							</button>
						</li>
						<li className={styles.navItem}>
							<button
								onClick={() => scrollToSection("company-overview")}
								className={`${styles.navLink} ${
									activeSection === "company-overview" ? styles.active : ""
								}`}
							>
								ABOUT
							</button>
						</li>
						<li className={styles.navItem}>
							<button
								onClick={() => scrollToSection("core-offerings")}
								className={`${styles.navLink} ${
									activeSection === "core-offerings" ? styles.active : ""
								}`}
							>
								OFFERINGS
							</button>
						</li>
						<li className={styles.navItem}>
							<button
								onClick={() => scrollToSection("key-strengths")}
								className={`${styles.navLink} ${
									activeSection === "key-strengths" ? styles.active : ""
								}`}
							>
								STRENGTHS
							</button>
						</li>
						<li className={styles.navItem}>
							<button
								onClick={() => scrollToSection("business-strategy")}
								className={`${styles.navLink} ${
									activeSection === "business-strategy" ? styles.active : ""
								}`}
							>
								STRATEGY
							</button>
						</li>
						<li className={styles.navItem}>
							<button
								onClick={() => scrollToSection("contact")}
								className={`${styles.navLink} ${
									activeSection === "contact" ? styles.active : ""
								}`}
							>
								CONTACT
							</button>
						</li>
					</ul>
				</nav>

				<div className={styles.actions}>
					<button
						onClick={() => scrollToSection("contact")}
						className={styles.bookMeeting}
					>
						BOOK MEETING
					</button>
					<button
						onClick={() => scrollToSection("contact")}
						className={styles.contactUs}
					>
						CONTACT US
					</button>
				</div>

				<div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
