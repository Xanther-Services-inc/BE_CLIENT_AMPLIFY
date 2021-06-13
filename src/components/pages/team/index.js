import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import PageTitle from "./PageTitle";
import TeamDetails from "./Team";
import Features from "./Features";


const Team = () => {
	return (
		<>
			<Header />
			<PageTitle />
			<div className="page-content">
				<TeamDetails />
				<Features />
		
			</div>
			<Footer />
		</>
	);
};
export default Team;
