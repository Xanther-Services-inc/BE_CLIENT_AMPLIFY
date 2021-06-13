import React from "react";
import Header from "../../../Header1";
import Footer from "../../../Footer1";
import Title from "./Title";
import TeamOne from "./TeamOne";
import TeamTwo from "./TeamTwo";
import TeamThree from "./TeamThree";
import TeamFour from "./TeamFour";
import TeamFive from "./TeamFive";
import TeamSix from "./TeamSix";

const TeamElement = () => {
	return (
		<>
			<Header />
			<Title />
			<div className="page-content">
				<TeamOne />
				<TeamTwo />
				<TeamThree />
				<TeamFour />
				<TeamFive />
				<TeamSix />
			</div>
			<Footer />
		</>
	);
};
export default TeamElement;
