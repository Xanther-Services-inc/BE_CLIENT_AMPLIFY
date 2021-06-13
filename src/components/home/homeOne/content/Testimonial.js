import Axios from "axios";
import React, { useEffect, useState } from "react";
import dataTestimonial from "../../../data.json";
const URL = require("../../../constants");

const Testimonial = () => {
	let count = 0;
	let slide = 0;

	const [testi, setTesti] = useState([])
	useEffect(() => {
		const fetchData = async () => {
			const {data} = await Axios.get(`${process.env.REACT_APP_API}/api/v1/testimonials`)
			console.log(data);
			setTesti(data)
		}
		fetchData()
	}, [])
	return (
		<>
			<section
				className="grey-bg pos-r o-hidden"
				data-bg-img="images/pattern/01.png"
			>
				<div className="wave-shape">
					<img className="img-fluid" src="images/bg/03.png" alt="" />
				</div>
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>
									{
										dataTestimonial.data.home[0].content
											.testimonial.title
									}
								</h6>
								<h2 className="title">
								{
										dataTestimonial.data.home[0].content
											.testimonial["sub_title"]
									}
								</h2>
							</div>
						</div>
					</div>
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
									<div className="col-lg-7 col-md-12">
										<div className="carousel-inner">
											{testi.length > 4 ? testi.slice(0,4).map(
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
																			"message"
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
																	
																</div>
															</div>
														</div>
													</div>
												)
											) : testi.map(
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
																			"message"
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
											{dataTestimonial.data.home[0].content.testimonial.anti_holder.map(
												(holder, index) => (
													<div
														className={`anti-${holder}-holder`}
														key={index}
													>
														<div
															className={`anti-${holder}`}
														></div>
													</div>
												)
											)}
											<ul className="nav">
												{testi.length > 4 ? testi.slice(0,4).map(
													(img, index) => (
														<li
															key={index}
															data-target="#testimonial-1"
															data-slide-to={
																count++
															}
															className={`${
																count === 1
																	? "active"
																	: ""
															}`}
														>
															<a href="/#">
																<img
																	className="img-fluid"
																	src={`https://testi-monial.s3.us-east-2.amazonaws.com/${img.doc_key}`}
																	alt=""
																/>
															</a>
														</li>
													)
												) : testi.map(
													(img, index) => (
														<li
															key={index}
															data-target="#testimonial-1"
															data-slide-to={
																count++
															}
															className={`${
																count === 1
																	? "active"
																	: ""
															}`}
														>
															<a href="/#">
																<img
																	className="img-fluid"
																	src={`https://testi-monial.s3.us-east-2.amazonaws.com/${img.doc_key}`}
																	alt=""
																/>
															</a>
														</li>
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
		</>
	);
};
export default Testimonial;
