import React from "react";
import Features from "./Features";
import About from "./About";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

import Tabs from "./Tabs";
import HeroSection from "./HeroSection";

const PageContent = () => {
	return (
		<>
			<HeroSection />
			<div className="page-content">
				<About />
				<Features />
				<Tabs />
				<Team />
				<Pricing />
				<Testimonial />
			
			</div>
		</>
	);
};
export default PageContent;
