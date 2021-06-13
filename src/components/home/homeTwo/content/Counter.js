import React from "react";
import dataCounter from "../../../data.json";
const URL = require("../../../constants");

const Counter = () => {
	return (
		<section className="pos-r">
			<div className="hexagon-bg">
				<div className="hexagon"></div>
				<div className="hexagon"></div>
				<div className="hexagon"></div>
				<div className="hexagon"></div>
			</div>
			<div className="container">
				<div className="row">
					{dataCounter.data.home[1].content.counter.map(
						(counter, index) => (
							<div className="col-lg-3 col-md-6" key={index}>
								<div className="counter">
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
			</div>
		</section>
	);
};
export default Counter;
