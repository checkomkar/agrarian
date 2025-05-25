import Image from "next/image";
import styles from "./CompanyOverview.module.css";

const CompanyOverview = () => {
	return (
		<section id="company-overview" className={styles.overview}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.textContent}>
						<h2 className={styles.title}>Company Overview</h2>
						<p className={styles.description}>
							AGARIAN is a registered technology company in NCR, India,
							co-founded by Saket Sinha and Ritesh Thakur with a 50/50
							partnership. The company specializes in providing custom software
							solutions for government entities globally, with a strong focus on
							government and Enterprise software solutions.
						</p>

						<div className={styles.stats}>
							<div className={styles.statItem}>
								<span className={styles.statNumber}>50+</span>
								<span className={styles.statLabel}>Projects Delivered</span>
							</div>
							<div className={styles.statItem}>
								<span className={styles.statNumber}>10+</span>
								<span className={styles.statLabel}>Years Experience</span>
							</div>
							<div className={styles.statItem}>
								<span className={styles.statNumber}>10+</span>
								<span className={styles.statLabel}>Global Clients</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CompanyOverview;
