import React from "react";
import Features from "./Features";
import About from "./About";
import Services from "./Services";
import Steps from "./Steps";
// import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

import HeroSection from "./HeroSection";

const PageContent = () => {
	return (
		<>
			<HeroSection />
			<div className="page-content">
				<Features />
				{/* <FeatureCard /> */}
				<About />
				<Services />
				<Steps />
				{/* <Team /> */}
				<Pricing />
				<Testimonial />
		
			</div>
		</>
	);
};
export default PageContent;
