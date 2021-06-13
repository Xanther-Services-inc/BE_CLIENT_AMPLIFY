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
							<span>S</span>ervices
						</h1>
						<p>We're Building Modern And High Software</p>
					</div>
					
				</div>
			</div>
			<div className="page-title-pattern" style={{margin: 0, padding: 0}}>
				<img className="img-fluid" src="images/bg/11.png" alt="" />
			</div>
		</section>
	);
};

export default Title;
