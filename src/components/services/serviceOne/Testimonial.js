import Axios from "axios";
import React, { useEffect, useState } from "react";
import dataTestimonial from "../../data.json";
const URL = require("../../constants");

const Testimonial = () => {
	let count = 4;
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
		<section className="pos-r o-hidden text-center">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 ml-auto mr-auto">
						<div className="section-title">
							<div className="title-effect title-effect-2">
								<div className="ellipse"></div>{" "}
								<i className="la la-question-circle"></i>
							</div>
							<h2 className="title">
								{
									dataTestimonial.data.services[0].testimonial
										.title
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
										{testi.map(
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
																src={`https://testi-monial.s3.us-east-2.amazonaws.com/${member.doc_key}`}
																alt=""
															/>
														</div>
														<div className="testimonial-content">
															<div className="testimonial-quote">
																<i className="la la-quote-left"></i>
															</div>
															<p>
																{member.message}
															</p>
															<div className="testimonial-caption">
																<h5>
																	{
																		member.name
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
							</div>
							{/* <div className="controls">
								<ul className="nav">
									{dataTestimonial.data.services[0].testimonial.img_url.map(
										(img, index) => (
											<li
												key={index}
												data-target="#testimonial-2"
												data-slide-to={count++}
												className={`${
													count === 1 ? "active" : ""
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
							</div> */}
						</div>
						{/* End Carousel */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
