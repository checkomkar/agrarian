"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
	{
		id: 1,
		content:
			"I have been a customer of TechRise for several years now and I am extremely impressed with their level of professionalism, and what sets TechRise apart from other development companies is their ability to communicate effectively with their clients. I highly recommend TechRise to anyone looking for reliable and efficient development services.",
		author: "Mr. Mohammad Ruhul",
		position: "CEO",
		company: "XYZ Corp",
		avatar: "/images/test1.jpg",
	},
	{
		id: 2,
		content:
			"TechRise transformed our digital presence completely. Their team showed exceptional creativity and technical expertise throughout our project. The results exceeded our expectations and we've seen significant improvement in user engagement since launch.",
		author: "Sarah Johnson",
		position: "Marketing Director",
		company: "Global Innovations",
		avatar: "/images/test2.jpg",
	},
	{
		id: 3,
		content:
			"Working with TechRise has been a game-changer for our startup. Their development team created an intuitive, scalable platform that our users love. The support throughout the entire process was outstanding.",
		author: "David Chen",
		position: "Founder",
		company: "NextGen Solutions",
		avatar: "/images/test1.jpg",
	},
];

const Testimonials = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const nextTestimonial = () => {
		setActiveIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setActiveIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<section className={styles.testimonials}>
			<div className={styles.container}>
				<div className={styles.textContent}>
					<span className={styles.sectionTag}>Feedback from the field</span>
					<h2 className={styles.sectionTitle}>
						We care about our customers
						<br />
						during their whole journey
						<br />
						with us
					</h2>

					<div className={styles.testimonialContent}>
						<div className={styles.quote}>"</div>
						<p className={styles.testimonialText}>
							{testimonials[activeIndex].content}
						</p>
						<div className={styles.author}>
							<div className={styles.authorAvatar}>
								<Image
									src={testimonials[activeIndex].avatar}
									alt={testimonials[activeIndex].author}
									width={60}
									height={60}
								/>
							</div>
							<div className={styles.authorInfo}>
								<div className={styles.authorName}>
									{testimonials[activeIndex].author}
								</div>
								<div
									className={styles.authorPosition}
								>{`${testimonials[activeIndex].position}, ${testimonials[activeIndex].company}`}</div>
							</div>
						</div>
					</div>

					<div className={styles.controls}>
						<button
							className={styles.controlButton}
							onClick={prevTestimonial}
							aria-label="Previous testimonial"
						>
							&larr;
						</button>
						<button
							className={styles.controlButton}
							onClick={nextTestimonial}
							aria-label="Next testimonial"
						>
							&rarr;
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
