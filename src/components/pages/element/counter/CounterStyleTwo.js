import React from "react";
import dataCounter from "../../../data.json";

const CounterStyleTwo = () => {
	return (
		<>
			<section className="bg-effect pos-r">
				<div className="container">
					<div className="row">
						{dataCounter.data.element[2].countertwo.map(
							(counter, index) => (
								<div
									className="col-lg-3 col-md-3 col-sm-6 xs-mt-5"
									key={index}
								>
									<div className="counter style-2">
										<div className="counter-desc">
											<span
												className="count-number"
												data-to={`${counter["count"]}`}
												data-speed="10000"
											>
												{counter["count"]}
											</span>
											<span>+</span>
											<h5>{counter["title"]}</h5>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default CounterStyleTwo;
