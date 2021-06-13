import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import PageTitle from "./PageTitle";
import TeamDetails from "./TeamDetails";
import Features from "./Features";
import Team from "./Team";

const TeamSingle = () => {
	return (
		<>
			<Header />
			<PageTitle />
			<div className="page-content">
				<TeamDetails />
				<Features />
				<Team />
			</div>
			<Footer />
		</>
	);
};
export default TeamSingle;
