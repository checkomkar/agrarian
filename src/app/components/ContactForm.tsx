"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

type FormData = {
	name: string;
	email: string;
	company: string;
	phone: string;
	subject: string;
	message: string;
};

const ContactForm = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		company: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitted(true);
			// Reset form after 3 seconds
			setTimeout(() => {
				setSubmitted(false);
				setFormData({
					name: "",
					email: "",
					company: "",
					phone: "",
					subject: "",
					message: "",
				});
			}, 3000);
		}, 1500);
	};

	return (
		<section className={styles.contactForm} id="contact-form">
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.formHeader}>
						<h2 className={styles.title}>Contact Us</h2>
						<p className={styles.subtitle}>
							Have questions or want to discuss how TechRise can help your
							organization? Fill out the form below and our team will get back
							to you within 24 hours.
						</p>
					</div>

					<div className={styles.formWrapper}>
						<div className={styles.contactInfo}>
							<div className={styles.infoItem}>
								<div className={styles.iconWrapper}>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12 18V22"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M8 22H16"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.infoContent}>
									<h3>Our Location</h3>
									<p>
										TechRise Meydan Grandstand, 6th floor, Meydan Road, Nad Al
										Sheba, Dubai, UAE
									</p>
								</div>
							</div>

							<div className={styles.infoItem}>
								<div className={styles.iconWrapper}>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5342 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.271 2.12 4.18C2.09501 3.90378 2.12788 3.62579 2.2165 3.36356C2.30513 3.10132 2.44757 2.86048 2.63477 2.65693C2.82196 2.45339 3.04981 2.29143 3.30379 2.18189C3.55778 2.07235 3.83234 2.01595 4.11 2.02H7.11C7.59531 2.01522 8.06579 2.1649 8.43376 2.44287C8.80173 2.72084 9.04208 3.10868 9.11 3.53C9.23662 4.37753 9.47145 5.20543 9.81 5.99C9.94455 6.28154 9.97366 6.60723 9.89391 6.91569C9.81415 7.22414 9.63088 7.49892 9.37 7.69L8.09 8.69C9.51356 11.1936 11.5064 13.1864 14.01 14.61L15.01 13.33C15.2011 13.0691 15.4759 12.8858 15.7843 12.8061C16.0928 12.7263 16.4185 12.7554 16.71 12.89C17.4946 13.2286 18.3225 13.4634 19.17 13.59C19.6074 13.6591 20.0009 13.9089 20.2784 14.2834C20.556 14.6579 20.7004 15.1346 20.69 15.62L22 16.92Z"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.infoContent}>
									<h3>Contact Number</h3>
									<p>+971-567577300</p>
								</div>
							</div>

							<div className={styles.infoItem}>
								<div className={styles.iconWrapper}>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M22 6L12 13L2 6"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<div className={styles.infoContent}>
									<h3>Email Address</h3>
									<p>support@techrise.tech</p>
								</div>
							</div>
						</div>

						<div className={styles.formContainer}>
							{submitted ? (
								<div className={styles.thankYouMessage}>
									<svg
										width="64"
										height="64"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M22 4L12 14.01L9 11.01"
											stroke="#27AE60"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<h3>Thank You!</h3>
									<p>
										Your message has been received. We'll get back to you
										shortly.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className={styles.form}>
									<div className={styles.formRow}>
										<div className={styles.formGroup}>
											<label htmlFor="name">
												Full Name <span>*</span>
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												placeholder="Your name"
											/>
										</div>
										<div className={styles.formGroup}>
											<label htmlFor="email">
												Email Address <span>*</span>
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												placeholder="your.email@example.com"
											/>
										</div>
									</div>

									<div className={styles.formRow}>
										<div className={styles.formGroup}>
											<label htmlFor="company">Company/Organization</label>
											<input
												type="text"
												id="company"
												name="company"
												value={formData.company}
												onChange={handleChange}
												placeholder="Your company name"
											/>
										</div>
										<div className={styles.formGroup}>
											<label htmlFor="phone">Phone Number</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder="Your phone number"
											/>
										</div>
									</div>

									<div className={styles.formGroup}>
										<label htmlFor="subject">
											Subject <span>*</span>
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
											placeholder="How can we help you?"
										/>
									</div>

									<div className={styles.formGroup}>
										<label htmlFor="message">
											Message <span>*</span>
										</label>
										<textarea
											id="message"
											name="message"
											rows={5}
											value={formData.message}
											onChange={handleChange}
											required
											placeholder="Please provide details about your inquiry..."
										></textarea>
									</div>

									{error && <div className={styles.errorMessage}>{error}</div>}

									<button
										type="submit"
										className={styles.submitButton}
										disabled={isSubmitting}
									>
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className={styles.bgDecoration}>
				<div className={styles.circle1}></div>
				<div className={styles.circle2}></div>
				<div className={styles.dots1}></div>
				<div className={styles.dots2}></div>
			</div>
		</section>
	);
};

export default ContactForm;
