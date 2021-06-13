import React from "react";
import Header from "../../../Header1";
import Footer from "../../../Footer1";
import Title from "./Title";
import FeatureBoxOne from "./FeatureBoxOne";
import FeatureBoxTwo from "./FeatureBoxTwo";
import FeatureBoxThree from "./FeatureBoxThree";
import FeatureBoxFour from "./FeatureBoxFour";
import FeatureBoxFive from "./FeatureBoxFive";
import FeatureBoxSix from "./FeatureBoxSix";

const FeatureBox = () => {
	return (
		<>
			<Header />
			<Title />
			<div className="page-content">
				<FeatureBoxOne />
				<FeatureBoxTwo />
				<FeatureBoxThree />
				<FeatureBoxFour />
				<FeatureBoxFive />
				<FeatureBoxSix />
			</div>
			<Footer />
		</>
	);
};
export default FeatureBox;
