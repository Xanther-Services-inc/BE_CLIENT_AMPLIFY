import React from "react";
import dataCounter from "../../../data.json";
const URL = require("../../../constants");

const Counter = () => {
	return (
		<>
			<div
				className="owl-carousel owl-theme no-pb"
				data-dots="false"
				data-items="2"
				data-margin="30"
				data-autoplay="true"
			>
				{dataCounter.data.home[4].content.counter.map(
					(counter, index) => (
						<div className="item" key={index}>
							<div className="counter style-3">
								<div className="counter-icon">
									<img
										className="img-center"
										src={`${URL.img_url}${counter["img_url"]}`}
										alt=""
									/>
								</div>
								<div className="counter-desc">
									<span
										className="count-number"
										data-to={counter["count"]}
										data-speed="10000"
									>
										{counter["count"]}
									</span>
									<h5>{counter["title"]}</h5>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</>
	);
};
export default Counter;
