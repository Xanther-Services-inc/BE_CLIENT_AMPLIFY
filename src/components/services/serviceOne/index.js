import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import Title from "./Title";
import About from "./About";
// import Team from "./Team";
import Testimonial from "./Testimonial";

import PriceTable from "./PriceTable";
import Counter from "./Counter";
import MetadataHelmet from "../../MetadataHelmet";
// import AboutTwo from "./AboutTwo";

const ServiceOne = () => {
	return (
		<>
		<MetadataHelmet title="Business Easy Services" description="One Step Tax Solution Simplifying Financial Lives. Tax & Investing platform." />
			<Header />
			{/*<Title /> */}
			<div className="page-content">
				<About />
				<Counter />
				{/* <AboutTwo /> */}
				<PriceTable />
				<Testimonial />
				{/* <Team /> */}
		
			</div>
			<Footer />
		</>
	);
};
export default ServiceOne;
