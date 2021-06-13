import React from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const Testimonial = () => {
	let slide = 0;
	let count = 0;
	return (
		<>
			<section
				className="pos-r o-hidden"
				data-bg-img="images/pattern/01.png"
			>
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-10 ml-auto mr-auto">
							<div className="section-title">
								<h2 className="title">
									You Can See our clients feedback{" "}
									<span className="text-theme">
										What You Say?
									</span>
								</h2>
							</div>
						</div>
					</div>
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
											{dataTestimonial.data.home[2].content.testimonial.member.map(
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
										{dataTestimonial.data.home[2].content.testimonial.img_url.map(
											(img, index) => (
												<li
													key={index}
													data-target="#testimonial-3"
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
