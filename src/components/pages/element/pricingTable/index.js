import React from "react";
import Header from "../../../Header1";
import Footer from "../../../Footer1";
import Title from "./Title";
import PricingTableOne from "./PricingTableOne";
import PricingTableTwo from "./PricingTableTwo";
import PricingTableThree from "./PricingTableThree";
import PricingTableFour from "./PricingTableFour";
import PricingTableFive from "./PricingTableFive";
import PricingTableSix from "./PricingTableSix";

const PricingTable = () => {
	return (
		<>
			<Header />
			<Title />
			<div className="page-content">
				<PricingTableOne />
				<PricingTableTwo />
				<PricingTableThree />
				<PricingTableFour />
				<PricingTableFive />
				<PricingTableSix />
			</div>
			<Footer />
		</>
	);
};
export default PricingTable;
