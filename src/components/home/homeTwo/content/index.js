import React from "react";
import Features from "./Features";
import About from "./About";
import Steps from "./Steps";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Counter from "./Counter";

import HeroSection from "./HeroSection";

const PageContent = () => {
	return (
		<>
			<HeroSection />
			<div className="page-content">
				<About />
				<Features />
				<Steps />
				<Team />
				<Pricing />
				<Testimonial />
				<Counter />
			
			</div>
		</>
	);
};
export default PageContent;
