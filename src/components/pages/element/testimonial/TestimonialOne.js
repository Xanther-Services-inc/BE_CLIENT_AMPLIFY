import React from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const TestimonialOne = () => {
	let counter = 0;
	let slide = 0;
	return (
		<section
			className="grey-bg pos-r o-hidden"
			data-bg-img="images/pattern/01.png"
		>
			<div className="wave-shape">
				<img className="img-fluid" src="images/bg/03.png" alt="" />
			</div>
			<div className="container">
				<div className="row mt-5">
					<div className="col-md-12">
						<div
							id="testimonial-1"
							className="testimonial-carousel carousel slide"
							data-ride="carousel"
							data-interval="2500"
						>
							{/* Wrapper for slides */}
							<div className="row align-items-center">
								<div className="col-lg-7 col-md-12 md-mb-5">
									<div className="carousel-inner">
										{dataTestimonial.data.element[6].testimonialone.map(
											(member, index) => (
												<div
													className={`carousel-item ${
														slide++ === 0
															? "active"
															: ""
													}`}
													key={index}
												>
													<div className="testimonial style-1">
														<div className="testimonial-content">
															<div className="testimonial-quote">
																<i className="la la-quote-left"></i>
															</div>
															<p>
																{
																	member[
																		"description"
																	]
																}
															</p>
															<div className="testimonial-caption">
																<h5>
																	{
																		member[
																			"name"
																		]
																	}
																</h5>
																<label>
																	{
																		member[
																			"position"
																		]
																	}
																</label>
															</div>
														</div>
													</div>
												</div>
											)
										)}
										{/* End Item */}
									</div>
									{/* End Carousel Inner */}
								</div>
								<div className="col-lg-5 col-md-12 md-mt-5">
									<div className="controls">
										{dataTestimonial.data.element[6].anti_holder.map(
											(holder, index) => (
												<div
													key={index}
													className={`anti-${holder}-holder`}
												>
													<div
														className={`anti-${holder}`}
													></div>
												</div>
											)
										)}

										<ul className="nav">
											{dataTestimonial.data.element[6].img_url.map(
												(img, index) => (
													<>
														{counter <= 2 && (
															<li
																key={index}
																data-target="#testimonial-1"
																data-slide-to={`${counter}`}
																className={`${
																	counter++ ===
																	1
																		? "active"
																		: ""
																}`}
															>
																<a href="/#">
																	<img
																		className="img-fluid"
																		src={`${URL.img_url}${img}`}
																		alt=""
																	/>
																</a>
															</li>
														)}
													</>
												)
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* End Carousel */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialOne;
