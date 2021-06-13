import React from "react";
import Header from "../../../Header1";
import Footer from "../../../Footer1";
import CounterTitle from "./CounterTitle";
import CounterStyleOne from "./CounterStyleOne";
import CounterStyleTwo from "./CounterStyleTwo";
import CounterStyleThree from "./CounterStyleThree";
import PageCounter from "./Counter";

const Counter = () => {
	return (
		<>
			<Header />
			<CounterTitle />
			<div className="page-content">
				<CounterStyleOne />
				<CounterStyleTwo />
				<CounterStyleThree />
				<PageCounter />
			</div>
			<Footer />
		</>
	);
};
export default Counter;
