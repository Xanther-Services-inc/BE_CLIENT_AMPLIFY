import React from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const Testimonial = () => {
	return (
		<>
			<section
				className="pos-r o-hidden"
				data-bg-img="images/pattern/01.png"
			>
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="fas fa-info"></i>
								</div>
								<h2 className="title">
									{
										dataTestimonial.data.home[5].content
											.testimonial.title
									}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div
								className="owl-carousel owl-theme"
								data-items="2"
								data-sm-items="1"
								data-margin="50"
								data-autoplay="true"
							>
								{dataTestimonial.data.home[5].content.testimonial.members.map(
									(member, index) => (
										<div className="item" key={index}>
											<div className="testimonial style-4">
												<div className="testimonial-content">
													<div className="testimonial-quote">
														<i className="la la-quote-left"></i>
													</div>
													<p>
														{member["description"]}
													</p>
												</div>
												<div className="testimonial-img">
													<img
														className="img-center zoom-fade"
														src={`${URL.img_url}${member["img_src"]}`}
														alt=""
													/>
												</div>
												<div className="testimonial-caption">
													<h5>{member["name"]}</h5>
													<label>
														{member["position"]}
													</label>
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
export default Testimonial;
