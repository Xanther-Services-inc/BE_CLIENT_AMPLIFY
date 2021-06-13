import React from "react";
import dataHerosection from "../../../data.json";
const URL = require("../../../constants");

const HeroSectionTwo = () => {
	return (
		<>
			{/* hero section :: start */}
			<section
				className="fullscreen-banner banner p-0"
				data-bg-img="images/pattern/01.png"
			>
				<div className="hero-bg">
					<img className="img-fluid" src="images/bg/04.png" alt="" />
				</div>
				<div className="align-center p-0">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-7 col-md-12 img-side">
								<img
									className="img-center"
									src={`${URL.img_url}${dataHerosection.data.home[1].content.herosection.img_url}`}
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5 col-md-12 md-mt-5 ml-auto">
								<h1
									className="mb-4 font-weight-normal wow fadeInUp"
									data-wow-duration="1.5s"
								>
									A Complete{" "}
									<span className="font-weight-bold text-uppercase">
										Software
									</span>{" "}
									Based Website
								</h1>
								<p
									className="lead mb-4 wow fadeInUp"
									data-wow-duration="2s"
									data-wow-delay="0.3s"
								>
									{
										dataHerosection.data.home[1].content
											.herosection.description
									}
								</p>
								<a
									className="btn btn-theme wow fadeInUp"
									data-wow-duration="3s"
									data-wow-delay="0.5s"
									href="/#"
									data-text="Start A Today"
								>
									{" "}
									<span>S</span>
									<span>t</span>
									<span>a</span>
									<span>r</span>
									<span>t</span>
									<span> </span>
									<span>A</span> <span> </span>
									<span>T</span>
									<span>o</span>
									<span>d</span>
									<span>a</span>
									<span>y</span>
								</a>
								<a
									className="btn btn-dark wow fadeInUp"
									data-wow-duration="3s"
									data-wow-delay="0.5s"
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
				</div>
				<div className="round-shape"></div>
			</section>
		</>
	);
};

export default HeroSectionTwo;
