import React from "react";
import dataAbout from "../../data.json";
const URL = require("../../constants");

const About = () => {
	return (
		<section className="pt-0">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<img
							className="img-fluid w-100"
							src={`${URL.img_url}${dataAbout.data.about[1].about.img_url}`}
							alt=""
						/>
					</div>
					<div className="col-lg-6 col-md-12 md-mt-5">
						<div className="section-title mb-3">
							<div className="title-effect title-effect-2">
								<div className="ellipse"></div>{" "}
								<i className="la la-info"></i>
							</div>
							<h2>{dataAbout.data.about[1].about.title}</h2>
						</div>
						<p className="lead">
							{dataAbout.data.about[1].about.description}
						</p>
						<a
							className="btn btn-theme btn-circle"
							href={`${dataAbout.data.about[1].about.about_link}`}
							data-text={`${dataAbout.data.about[1].about.about_label}`}
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
							href={`${dataAbout.data.about[1].about.more_link}`}
							data-text={`${dataAbout.data.about[1].about.more_label}`}
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

export default About;
