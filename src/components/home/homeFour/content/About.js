import React from "react";
import dataAbout from "../../../data.json";
const URL = require("../../../constants");

const About = () => {
	return (
		<>
			<section
				className="text-center"
				data-bg-img="images/pattern/01.png"
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-10 col-md-12 ml-auto mr-auto">
							<h3 className="text-black font-weight-normal line-h-2">
								Softino is built for{" "}
								<span className="text-theme">Software</span>{" "}
								like you. With useful features an intuitive
								interface and{" "}
								<span className="text-theme">
									powerful Design
								</span>{" "}
								built by a community of developers, it helps you
								focus on what you do best.
							</h3>
						</div>
					</div>
					<div className="row mt-5">
						{dataAbout.data.home[3].content.about.services.map(
							(service, index) => (
								<div className="col-lg-4 col-md-12" key={index}>
									<div className="featured-item style-2">
										<div className="featured-icon">
											{" "}
											<i
												className={`${service["icon"]}`}
											></i>
											<span className="rotateme"></span>
										</div>
										<div className="featured-title">
											<h5>{service["title"]}</h5>
										</div>
										<div className="featured-desc">
											<p>{service["description"]}</p>
											<a
												className="icon-btn mt-4"
												href="/#"
											>
												{" "}
												<i className="la la-angle-right"></i>
											</a>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>

			<section className="pos-r pt-0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<img
								className="img-fluid w-100"
								src={`${URL.img_url}${dataAbout.data.home[3].content.about.features.img_url}`}
								alt=""
							/>
						</div>
						<div className="col-lg-6 col-md-12 md-mt-5">
							<div className="section-title mb-4">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-info"></i>
								</div>
								<h2>
									{
										dataAbout.data.home[3].content.about
											.features.title
									}
								</h2>
							</div>
							<ul className="list-unstyled list-icon">
								{dataAbout.data.home[3].content.about.features.points.map(
									(feature, index) => (
										<li className="mb-3" key={index}>
											<i className="la la-check"></i>{" "}
											{feature}
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default About;
