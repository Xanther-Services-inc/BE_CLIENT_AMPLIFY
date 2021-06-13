import React from "react";

const About = () => {
	return (
		<>
			<section
				className="p-0 pos-r wow fadeInUp"
				data-wow-duration="2s"
				data-bg-img="images/pattern/03.png"
			>
				<div className="container">
					<div className="row custom-mt-10">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="video-box">
								<img
									className="img-fluid"
									src="images/mackbook/01.png"
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
					<div className="row text-center mt-5">
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
				</div>
			</section>
		</>
	);
};
export default About;
