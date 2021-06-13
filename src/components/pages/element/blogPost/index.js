import React from "react";
import Header from "../../../Header1";
import Footer from "../../../Footer1";
import BlogTitle from "./BlogTitle";
import BlogStyleOne from "./BlogStyleOne";
import BlogStyleTwo from "./BlogStyleTwo";
import BlogStyleThree from "./BlogStyleThree";
import BlogStyleFour from "./BlogStyleFour";
import BlogStyleFive from "./BlogStyleFive";
import BlogStyleSix from "./BlogStyleSix";

const BlogPost = () => {
	return (
		<>
			<Header />
			<BlogTitle />
			<div className="page-content">
				<BlogStyleOne />
				<BlogStyleTwo />
				<BlogStyleThree />
				<BlogStyleFour />
				<BlogStyleFive />
				<BlogStyleSix />
			</div>
			<Footer />
		</>
	);
};
export default BlogPost;
