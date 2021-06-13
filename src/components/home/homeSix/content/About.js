import React from "react";
import dataAbout from "../../../data.json";

const About = () => {
	return (
		<>
			<section className="pos-r py-15 md-py-8">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12 image-column">
							<div className="img-box box-shadow radius-1">
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
						<div className="col-lg-6 col-md-12 md-mt-5 ml-auto">
							<div className="section-title mb-3">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>
									{dataAbout.data.home[5].content.about.title}
								</h6>
								<h2>
									{
										dataAbout.data.home[5].content.about
											.sub_title
									}
								</h2>
							</div>
							<p className="text-black lead">
								{
									dataAbout.data.home[5].content.about
										.description
								}
							</p>
							<ul className="list-unstyled list-icon">
								{dataAbout.data.home[5].content.about.values.map(
									(value, index) => (
										<li className="mb-2" key={index}>
											<i className="la la-check"></i>{" "}
											{value}
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
