import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import Title from "./Title";
import Step from "./Step";
import About from "./About";
import Services from "./Services";
import Timeline from "./Timeline";
import Team from "./Team";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import MetadataHelmet from "../../MetadataHelmet";


const AboutOne = () => {
	return (
		<>
				<MetadataHelmet title="Business Easy About" description="One Step Tax Solution Simplifying Financial Lives. Tax & Investing platform." />

			<Header />
			<Title />
			<div className="page-content">
				<Step />
				<About />
				<Services />
				{/* <Timeline /> */}
				{/* <Team /> */}
				{/* <Pricing /> */}
				{/* <Testimonial /> */}
		
			</div>
			<Footer />
		</>
	);
};
export default AboutOne;
