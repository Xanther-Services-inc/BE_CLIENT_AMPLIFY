import React from "react";
import dataAbout from "../../../data.json";
import Counter from "./Counter";

const About = () => {
	return (
		<>
			<section className="p-0 pos-r">
				<div className="container">
					<div className="row custom-mt-15">
						<div className="col-lg-12 col-md-12 ml-auto mr-auto">
							<div
								className="owl-carousel owl-theme"
								data-items="1"
								data-autoplay="true"
							>
								<div className="item mx-3 my-3">
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
								<div className="item mx-3 my-3">
									<div className="img-box box-shadow">
										<div className="box-loader">
											{" "}
											<span></span>
											<span></span>
											<span></span>
										</div>
										<img
											className="img-center"
											src="images/banner/04.jpg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pos-r">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<img
								className="img-fluid w-100"
								src="images/svg/03.svg"
								alt=""
							/>
						</div>
						<div className="col-lg-6 col-md-12 md-mt-5">
							<div className="section-title mb-3">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-info"></i>
								</div>
								<h2>
									{dataAbout.data.home[3].content.about.title}
								</h2>
							</div>
							<p className="lead mb-5">
								{
									dataAbout.data.home[3].content.about
										.description
								}
							</p>
							<Counter />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default About;
