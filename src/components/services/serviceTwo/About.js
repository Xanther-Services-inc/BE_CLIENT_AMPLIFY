import React from "react";
import dataAbout from "../../data.json";
const URL = require("../../constants");

const About = () => {
	return (
		<>
			<section className="custom-pb-18" data-bg-color="#fbfbfb">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<img
								className="img-center"
								src={`${URL.img_url}${dataAbout.data.services[1].about.img_1}`}
								alt=""
							/>
						</div>
						<div className="col-lg-6 col-md-12 md-mt-5 md-mb-5">
							<div className="section-title mb-3">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-info"></i>
								</div>
								<h2>
									Grow Your Software With{" "}
									<span className="text-theme">
										“Softino”
									</span>
								</h2>
							</div>
							<p className="lead">
								{dataAbout.data.services[1].about.description}
							</p>
							<ul className="custom-li list-unstyled list-icon-2 d-inline-block">
								{dataAbout.data.services[1].about.features.map(
									(feature, index) => (
										<li key={index}>{feature}</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section
				className="p-0 pos-r"
				data-bg-img={`${dataAbout.data.services[1].about.img_2}`}
			>
				<div className="container">
					<div className="row custom-mt-10">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="video-box">
								<img
									className="img-fluid"
									src={`${URL.img_url}${dataAbout.data.services[1].about.img_3}`}
									alt=""
								/>
								<div className="video-btn video-btn-pos">
									{" "}
									<a
										className="play-btn popup-youtube"
										href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"
									>
										<i className="la la-play"></i>
									</a>
									<div className="spinner-eff">
										<div className="spinner-circle circle-1"></div>
										<div className="spinner-circle circle-2"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
