import React from "react";
import dataCounter from "../../../data.json";
const URL = require("../../../constants");

const Counter = () => {
	return (
		<>
			<section className="grey-bg md-pb-15">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12 mr-auto">
							<div className="section-title mb-0">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-sort-numeric-asc"></i>
								</div>
								<h2>
									{
										dataCounter.data.home[3].content.counter
											.title
									}
								</h2>
								<p className="lead">
									{
										dataCounter.data.home[3].content.counter
											.description
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="p-0">
				<div className="container custom-mt-20 md-custom-mt-10">
					<div className="row">
						<div className="col-lg-6 col-md-12 ml-auto">
							<div
								className="owl-carousel owl-theme"
								data-dots="false"
								data-items="2"
								data-margin="30"
								data-autoplay="true"
							>
								{dataCounter.data.home[3].content.counter.options.map(
									(counter, index) => (
										<div className="item" key={index}>
											<div className="counter">
												<div className="counter-icon">
													<img
														className="img-center"
														src={`${URL.img_url}${counter["img_url"]}`}
														alt=""
													/>
												</div>
												<div className="counter-desc">
													{" "}
													<span
														className="count-number"
														data-to={
															counter["count"]
														}
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
					</div>
				</div>
			</section>
		</>
	);
};
export default Counter;
