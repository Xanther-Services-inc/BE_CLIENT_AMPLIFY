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
									<a className="logo" href="/home-one">
										<img
											id="logo-img"
											className="img-center"
											src="images/logo-white.png"
											alt=""
										/>
									</a>
									<h1 className="text-uppercase mb-2 text-white">
										Login{" "}
										<span className="text-black">
											Successful
										</span>
									</h1>
									<a
										href="/home-one"
										className="btn btn-dark btn-circle"
										data-text="Back to Home"
									>
										Back to Home
									</a>
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
