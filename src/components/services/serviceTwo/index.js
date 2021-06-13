import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import Title from "./Title";
import About from "./About";
import Team from "./Team";
import Counter from "./Counter";

import PriceTable from "./PriceTable";
import Feature from "./Feature";
import Clients from "./Clients";

const ServiceTwo = () => {
	return (
		<>
			<Header />
			<Title />
			<div className="page-content">
				<Feature />
				<About />
				<Counter />
				<Team />
				<PriceTable />
				<Clients />
			
			</div>
			<Footer />
		</>
	);
};
export default ServiceTwo;
