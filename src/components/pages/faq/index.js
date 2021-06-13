import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import PageTitle from "./PageTitle";
import Questions from "./Questions";

const Faq = () => {
	return (
		<>
			<Header />
			<PageTitle />
			<div className="page-content">
				<Questions />
			</div>
			<Footer />
		</>
	);
};
export default Faq;
