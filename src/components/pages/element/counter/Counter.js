import React from "react";
import dataCounter from "../../../data.json";

const Counter = () => {
	return (
		<section
			className="bg-contain sm-bg-cover"
			data-bg-img="images/bg/05.png"
		>
			<div className="container">
				<div className="row">
					{dataCounter.data.element[2].counter.map(
						(counter, index) => (
							<div
								className="col-lg-3 col-md-6 sm-mt-5"
								key={index}
							>
								<div className="counter style-4">
									<div className="counter-desc">
										<span
											className="count-number"
											data-to={`${counter["count"]}`}
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
