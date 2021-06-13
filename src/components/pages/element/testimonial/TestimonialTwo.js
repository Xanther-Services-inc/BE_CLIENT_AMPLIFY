import React from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const TestimonialTwo = () => {
	let slide = 0;
	let counter = 0;
	return (
		<section
			className="pos-r o-hidden text-center"
			data-bg-img="images/pattern/01.png"
		>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div
							id="testimonial-2"
							className="testimonial-carousel carousel slide testimonial-2"
							data-ride="carousel"
							data-interval="2500"
						>
							{/* Wrapper for slides */}
							<div className="row">
								<div className="col-md-8 ml-auto mr-auto">
									<div className="carousel-inner">
										{dataTestimonial.data.element[6].testimonialtwo.map(
											(member, index) => (
												<div
													className={`carousel-item ${
														slide++ === 0
															? "active"
															: ""
													}`}
													key={index}
												>
													<div className="testimonial style-2">
														<div className="testimonial-img">
															<img
																className="img-center zoom-fade"
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
									{dataTestimonial.data.element[6].img_url.map(
										(img, index) => (
											<li
												key={index}
												data-target="#testimonial-2"
												data-slide-to={`${counter}`}
												className={`${
													counter++ === 0
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
										)
									)}
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

export default TestimonialTwo;
