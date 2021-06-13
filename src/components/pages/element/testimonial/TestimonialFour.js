import React from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const TestimonialFour = () => {
	let slide = 0;
	return (
		<section
			className="pos-r o-hidden p-0 animatedBackground"
			data-bg-img="images/pattern/01.png"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div
							id="testimonial-4"
							className="testimonial-carousel carousel slide testimonial-2"
							data-ride="carousel"
							data-interval="2500"
						>
							{/* Wrapper for slides */}
							<div className="carousel-inner">
								{dataTestimonial.data.element[6].testimonialfour.map(
									(member, index) => (
										<div
											className={`carousel-item ${
												slide++ === 0 ? "active" : ""
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
														{member["description"]}
													</p>
													<div className="testimonial-caption">
														<h5>
															{member["name"]}
														</h5>
														<label>
															{member["position"]}
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
						{/* End Carousel */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialFour;
