import React from "react";
import Features from "./Features";
import About from "./About";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Counter from "./Counter";

import Clients from "./Clients";
import HeroSection from "./HeroSection";

const PageContent = () => {
	return (
		<>
			<HeroSection />
			<div className="page-content">
				<About />
				<Counter />
				<Features />
				<Team />
				<Clients />
				<Pricing />
				<Testimonial />
			
			</div>
		</>
	);
};
export default PageContent;
