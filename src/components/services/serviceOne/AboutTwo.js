import React from "react";
import dataAbout from "../../data.json";

const AboutTwo = () => {
	return (
		<section className="pos-r py-10">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7 col-md-12 image-column p-0 pr-lg-5">
						<div className="img-box box-shadow">
							<div className="box-loader">
								{" "}
								<span></span>
								<span></span>
								<span></span>
							</div>
							<img
								className="img-center"
								src="images/banner/03.jpg"
								alt=""
							/>
						</div>
					</div>
					<div className="col-lg-5 ml-auto col-md-12 md-mt-5">
						<div className="section-title mb-4">
							<div className="title-effect">
								<div className="bar bar-top"></div>
								<div className="bar bar-right"></div>
								<div className="bar bar-bottom"></div>
								<div className="bar bar-left"></div>
							</div>
							<h6>{dataAbout.data.services[0].about_us.title}</h6>
							<h2>
								{dataAbout.data.services[0].about_us.sub_title}
							</h2>
						</div>
						<ul className="list-unstyled list-icon mb-4">
							{dataAbout.data.services[0].about_us.features.map(
								(feature, index) => (
									<li className="mb-3" key={index}>
										<i className="la la-check"></i>{" "}
										{feature}
									</li>
								)
							)}
						</ul>
						<a
							className="btn btn-border btn-circle"
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
							className="btn btn-theme btn-circle"
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
	);
};

export default AboutTwo;
