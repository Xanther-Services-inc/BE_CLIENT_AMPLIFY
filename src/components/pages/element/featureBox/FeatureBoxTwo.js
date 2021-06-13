import React from "react";
import dataFeature from "../../../data.json";

const FeatureBoxTwo = () => {
	return (
		<section
			id="about"
			className="text-center"
			data-bg-img="images/pattern/01.png"
		>
			<div className="container">
				<div className="row mt-5">
					{dataFeature.data.element[3].featurestwo.map(
						(feature, index) => (
							<div
								className="col-lg-4 col-md-12 md-mb-5"
								key={index}
							>
								<div className="featured-item style-2">
									<div className="featured-icon">
										{" "}
										<i className={`${feature["icon"]}`}></i>
										<span className="rotateme"></span>
									</div>
									<div className="featured-title">
										<h5>{feature["title"]}</h5>
									</div>
									<div className="featured-desc">
										<p>{feature["description"]}</p>
										<a className="icon-btn mt-4" href="/#">
											{" "}
											<i className="la la-angle-right"></i>
										</a>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default FeatureBoxTwo;
