import React from "react";

const Title = () => {
	return (
		<section
			className="page-title o-hidden pos-r md-text-center"
			data-bg-color="#fbf3ed"
		>
			<canvas id="confetti"></canvas>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-7 col-md-12">
						<h1 className="title">
							<span>B</span>log Grid 2
						</h1>
						<p>We're Building Modern And High Software</p>
					</div>
					<div className="col-lg-5 col-md-12 text-lg-right md-mt-3">
						<nav
							aria-label="breadcrumb"
							className="page-breadcrumb"
						>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="/home-one">Home</a>
								</li>
								<li className="breadcrumb-item">
									<a href="/#">Blogs</a>
								</li>
								<li
									className="breadcrumb-item active"
									aria-current="page"
								>
									Blog Grid 2
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
			<div className="page-title-pattern">
				<img className="img-fluid" src="images/bg/11.png" alt="" />
			</div>
		</section>
	);
};

export default Title;
