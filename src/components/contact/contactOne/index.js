import React from "react";
import Header from "../../Header1";
import Footer from "../../Footer1";
import Title from "./Title";
import ContactForm from "./Form";
import MetadataHelmet from "../../MetadataHelmet";

const ContactOne = () => {
	return (
		<>
				<MetadataHelmet title="Business Easy Contact Us" description="One Step Tax Solution Simplifying Financial Lives. Tax & Investing platform." />

			<Header />
			<Title />
			<ContactForm />
			<Footer />
		</>
	);
};
export default ContactOne;
