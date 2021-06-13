import React from "react";

function PageContent() {
	return (
		<div className="page-content">
			<section
				className="fullscreen-banner p-0 o-hidden text-center dark-bg grediant-overlay"
				data-bg-img="images/bg/09.jpg"
				data-overlay="8"
			>
				<canvas id="confetti"></canvas>
				<div className="page-title-pattern">
					<img className="img-fluid" src="images/bg/11.png" alt="" />
				</div>
				<div className="align-center">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="coming-soon">
									<a className="logo" href="home-one">
										<img
											id="logo-img"
											className="img-center"
											src="images/logo-white.png"
											alt=""
										/>
									</a>
									<h1 className="text-uppercase mt-4 mb-2 text-white">
										Coming{" "}
										<span className="text-black">Soon</span>
									</h1>
									<p className="text-white">
										We Are Creatinig Something Awesome And
										Exciting For You
									</p>
									<ul
										className="countdown list-inline text-white"
										data-countdown="2019/12/23"
									></ul>
									<div>
										<h4 className="title z-index-1 mb-4 text-white">
											Subscribe to get{" "}
											<span> notified!</span>
										</h4>
										<div className="row">
											<div className="col-md-6 mr-auto ml-auto">
												<div className="subscribe-form">
													<form
														id="mc-form"
														className="group"
													>
														<input
															type="email"
															value=""
															name="EMAIL"
															className="email box-shadow"
															id="mc-email"
															placeholder="Email Address"
															required=""
														/>
														<input
															className="btn btn-theme"
															type="submit"
															name="subscribe"
															value="Subscribe"
														/>
														<label
															for="mc-email"
															className="subscribe-message"
														></label>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PageContent;
