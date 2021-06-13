import React from "react";
import dataAbout from "../../../data.json";

const About = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12 order-lg-12">
							<img
								className="img-fluid w-100"
								src="images/svg/08.svg"
								alt=""
							/>
						</div>
						<div className="col-lg-6 col-md-12 md-mt-5 order-lg-1">
							<div className="section-title mb-3">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-info"></i>
								</div>
								<h2>
									{dataAbout.data.home[1].content.about.title}
								</h2>
							</div>
							<p className="lead">
								{
									dataAbout.data.home[1].content.about
										.description
								}
							</p>
							<a
								className="btn btn-theme btn-circle"
								href="/#"
								data-text="See About"
							>
								{" "}
								<span>S</span>
								<span>e</span>
								<span>e</span>
								<span> </span>
								<span>A</span>
								<span>b</span>
								<span>o</span>
								<span>u</span>
								<span>t</span>
							</a>
							<a
								className="btn btn-dark btn-circle"
								href="/#"
								data-text="Learn More"
							>
								{" "}
								<span>L</span>
								<span>e</span>
								<span>a</span>
								<span>r</span>
								<span>n</span>
								<span> </span>
								<span>M</span>
								<span>o</span>
								<span>r</span>
								<span>e</span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-effect pos-r">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12 image-column">
							<div className="blink-img">
								<img
									className="img-fluid blinkblink"
									src="images/pattern/04.png"
									alt=""
								/>
							</div>
							<img
								className="img-fluid"
								src="images/about/02.png"
								alt=""
							/>
						</div>
						<div className="col-lg-6 col-md-12 md-mt-5 ml-auto">
							<div className="section-title mb-3">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-info"></i>
								</div>
								<h2>
									{dataAbout.data.home[1].content.about.title}
								</h2>
							</div>
							<p className="lead">
								{
									dataAbout.data.home[1].content.about
										.description
								}
							</p>
							<ul className="custom-li list-unstyled list-icon-2 d-inline-block">
								{dataAbout.data.home[1].content.about.details.map(
									(detail, index) => (
										<li key={index}>{detail}</li>
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
