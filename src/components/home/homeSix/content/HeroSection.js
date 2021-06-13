import React from "react";
import dataHerosection from "../../../data.json";

const HeroSectionSix = () => {
	return (
		<>
			{/* hero section :: start */}
			<section
				className="fullscreen-banner banner p-0 theme-bg pos-r o-hidden"
				data-bg-img="images/bg/08.png"
			>
				<div className="bg-animation">
					<img
						className="zoom-fade"
						src="images/pattern/03.png"
						alt=""
					/>
				</div>
				<div className="align-center">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div
									className="bnr-box box-shadow px-5 py-5 xs-px-2 xs-py-2 radius"
									data-bg-img="images/bg/06.png"
								>
									<div className="row align-items-center">
										<div className="col-lg-5 col-md-12 order-lg-12">
											<img
												className="img-center"
												src="images/banner/06.png"
												alt=""
											/>
										</div>
										<div
											className="col-lg-7 col-md-12 order-lg-1 md-mt-5 wow jello"
											data-wow-duration="1.5s"
										>
											<h1 className="mb-4 text-white">
												{
													dataHerosection.data.home[5]
														.content.herosection
														.title
												}
											</h1>
											<p className="lead mb-4 text-white">
												{
													dataHerosection.data.home[5]
														.content.herosection
														.description
												}
											</p>
											<a
												className="btn btn-white"
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
										</div>
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

export default HeroSectionSix;
