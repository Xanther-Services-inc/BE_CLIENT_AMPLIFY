import React from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const Testimonial = () => {
	let count = 0;
	let slide = 0;
	return (
		<>
			<section className="pos-r o-hidden text-center">
				<canvas id="confetti"></canvas>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-8 col-md-10 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-question-circle"></i>
								</div>
								<h2 className="title">
									{
										dataTestimonial.data.home[1].content
											.testimonial.title
									}
								</h2>
							</div>
						</div>
					</div>
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
											{dataTestimonial.data.home[1].content.testimonial.member.map(
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
																	src={`${URL.img_url}${member["img_src"]}`}
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
										{dataTestimonial.data.home[1].content.testimonial.img_url.map(
											(img, index) => (
												<li
													key={index}
													data-target="#testimonial-2"
													data-slide-to={count++}
													className={`${
														count === 1
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
		</>
	);
};
export default Testimonial;
