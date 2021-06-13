import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import Title from "./Title";
import About from "./About";
import Services from "./Services";
import Counter from "./Counter";
import Faq from "./Faq";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";


const AboutTwo = () => {
	return (
		<>
			<Header />
			<Title />
			<div className="page-content">
				<About />
				<Services />
				<Counter />
				<Faq />
				<Team />
				<Pricing />
				<Testimonial />
			
			</div>
			<Footer />
		</>
	);
};
export default AboutTwo;
