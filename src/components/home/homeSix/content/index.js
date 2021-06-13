import React from "react";
import Features from "./Features";
import AboutGraph from "./AboutGraph";
import About from "./About";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Subscribe from "./Subscribe"
import Counter from "./Counter";
import HeroSection from "./HeroSection";

const PageContent = () => {
	return (
		<>
			<HeroSection />
			<div className="page-content">
				<Features />
				<About />
				<Counter />
				<AboutGraph />
				<Team />
				<Pricing />
				<Testimonial />
				
				<Subscribe/>
			</div>
		</>
	);
};
export default PageContent;
