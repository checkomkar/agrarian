import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CompanyOverview from "./components/CompanyOverview";
import VisionMission from "./components/VisionMission";
import KeyStrengths from "./components/KeyStrengths";
import FoundersProfile from "./components/FoundersProfile";
import KeyHighlights from "./components/KeyHighlights";
import CoreOfferings from "./components/CoreOfferings";
import BusinessStrategy from "./components/BusinessStrategy";
import WhyChooseTechRise from "./components/WhyChooseTechRise";
import RecentSuccess from "./components/RecentSuccess";
import GovernmentSolutions from "./components/GovernmentSolutions";
import ContactForm from "./components/ContactForm";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<div id="hero">
					<Hero />
				</div>
				<div id="company-overview">
					<CompanyOverview />
				</div>
				<div id="vision-mission">
					<VisionMission />
				</div>
				<div id="key-highlights">
					<KeyHighlights />
				</div>
				<div id="core-offerings">
					<CoreOfferings />
				</div>
				<div id="recent-success">
					<RecentSuccess />
				</div>
				<div id="key-strengths">
					<KeyStrengths />
				</div>
				<div id="government-solutions">
					<GovernmentSolutions />
				</div>
				<div id="business-strategy">
					<BusinessStrategy />
				</div>
				<div id="why-choose">
					<WhyChooseTechRise />
				</div>
				<div id="founders-profile">
					<FoundersProfile />
				</div>

				<div id="contact">
					<ContactForm />
				</div>
				<div>
					<Footer />
				</div>
			</main>
		</div>
	);
}
