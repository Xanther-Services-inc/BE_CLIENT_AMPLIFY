import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import Title from "./Title";
import About from "./About";
// import Team from "./Team";
import Testimonial from "./Testimonial";

import PriceTable from "./PriceTable";
import Counter from "./Counter";
// import AboutTwo from "./AboutTwo";

const ServiceOne = () => {
	return (
		<>
			<Header />
			<Title />
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
