import React from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const TestimonialThree = () => {
	let slide = 0;
	return (
		<section className="pos-r o-hidden">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div
							id="testimonial-3"
							className="testimonial-carousel carousel slide testimonial-3"
							data-ride="carousel"
							data-interval="2500"
						>
							{/* Wrapper for slides */}
							<div className="row">
								<div className="col-lg-10 col-md-9 col-sm-8 ml-auto">
									<div className="carousel-inner">
										{dataTestimonial.data.element[6].testimonialthree.map(
											(member, index) => (
												<div
													className={`carousel-item ${
														slide++ === 0
															? "active"
															: ""
													}`}
													key={index}
												>
													<div className="testimonial style-3">
														<div className="testimonial-img">
															<img
																className="img-center"
																src={`${URL.img_url}${member["img_url"]}`}
																alt=""
															/>
														</div>
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
							</div>
							<div className="controls">
								<ul className="nav">
									<li
										data-target="#testimonial-3"
										data-slide-to="0"
										className="active"
									>
										<a href="/#">
											<img
												className="img-fluid"
												src="images/testimonial/01.jpg"
												alt=""
											/>
										</a>
									</li>
									<li
										data-target="#testimonial-3"
										data-slide-to="1"
									>
										<a href="/#">
											<img
												className="img-fluid"
												src="images/testimonial/02.jpg"
												alt=""
											/>
										</a>
									</li>
									<li
										data-target="#testimonial-3"
										data-slide-to="2"
									>
										<a href="/#">
											<img
												className="img-fluid"
												src="images/testimonial/03.jpg"
												alt=""
											/>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* End Carousel */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialThree;
