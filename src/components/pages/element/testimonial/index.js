import React from "react";
import Header from "../../../Header1";
import Footer from "../../../Footer1";
import Title from "./Title";
import TestimonialOne from "./TestimonialOne";
import TestimonialTwo from "./TestimonialTwo";
import TestimonialThree from "./TestimonialThree";
import TestimonialFour from "./TestimonialFour";
import TestimonialFive from "./TestimonialFive";
import TestimonialSix from "./TestimonialSix";

const Testimonial = () => {
	return (
		<>
			<Header />
			<Title />
			<div className="page-content">
				<TestimonialOne />
				<TestimonialTwo />
				<TestimonialThree />
				<TestimonialFour />
				<TestimonialFive />
				<TestimonialSix />
			</div>
			<Footer />
		</>
	);
};
export default Testimonial;
