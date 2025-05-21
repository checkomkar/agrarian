import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.css";

const servicesData = [
	{
		id: 1,
		icon: "/images/web-design-icon.svg",
		title: "Web Design & Development",
		link: "/services/web-design-development",
	},
	{
		id: 2,
		icon: "/images/mobile-app-icon.svg",
		title: "Mobile Apps Development",
		link: "/services/mobile-apps-development",
	},
	{
		id: 3,
		icon: "/images/branding-icon.svg",
		title: "Branding & Graphic Design",
		link: "/services/branding-graphic-design",
	},
	{
		id: 4,
		icon: "/images/marketing-icon.svg",
		title: "Digital Marketing Services",
		link: "/services/digital-marketing",
	},
];

const Services = () => {
	return (
		<section className={styles.services}>
			<div className={styles.container}>
				<div className={styles.grid}>
					{servicesData.map((service) => (
						<Link
							key={service.id}
							href={service.link}
							className={styles.serviceCard}
						>
							<div className={styles.iconContainer}>
								<Image
									src={service.icon}
									alt={service.title}
									width={50}
									height={50}
									className={styles.icon}
								/>
							</div>
							<h3 className={styles.serviceTitle}>{service.title}</h3>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
