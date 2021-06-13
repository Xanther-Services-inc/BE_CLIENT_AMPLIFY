import React from "react";
import dataHerosection from "../../../data.json";

const HeroSection = () => {
	return (
		<>
			{/* hero section :: start */}
			<section className="fullscreen-banner banner p-0">
				<div className="align-center pt-0">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12 img-side text-center">
								<img
									className="img-center"
									src="images/banner/05.png"
									alt=""
								/>
								<div className="video-box">
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
							<div className="col-lg-6 col-md-12 ml-auto md-mt-5 md-mb-7">
								<h1
									className="mb-4 font-weight-normal wow fadeInUp"
									data-wow-duration="1.5s"
								>
									Subscribe For{" "}
									<span className="font-weight-bold text-uppercase">
										Softino
									</span>{" "}
									services platform!
								</h1>
								<p
									className="lead mb-4 wow fadeInUp"
									data-wow-duration="2s"
									data-wow-delay="0.3s"
								>
									{
										dataHerosection.data.home[4].content
											.herosection.title
									}
								</p>
								<div
									className="subscribe-form sm-mt-2 wow fadeInUp"
									data-wow-duration="3s"
									data-wow-delay="0.5s"
								>
									<div id="mc-form" className="group">
										{/* <input
											type="email"
											value=""
											name="EMAIL"
											className="email"
											id="mc-email"
											placeholder="Email Address"
											required=""
										/> */}
										<input required="" type="email" className="email" placeholder="Email Address"/>
										<input
											className="btn btn-theme"
											type="submit"
											name="subscribe"
											value="Subscribe"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<svg
					className="wave-animation"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 
								58-18 88-18s
								58 18 88 18 
								58-18 88-18 
								58 18 88 18
								v44h-352z"
						/>
					</defs>
					<g className="wave-bg">
						<use
							xlinkHref="#gentle-wave"
							x="50"
							y="0"
							fill="#f8f8f8"
						/>
						<use
							xlinkHref="#gentle-wave"
							x="50"
							y="3"
							fill="#fbfbfb"
						/>
						<use
							xlinkHref="#gentle-wave"
							x="50"
							y="6"
							fill="#ffffff"
						/>
					</g>
				</svg>
			</section>
		</>
	);
};

export default HeroSection;
