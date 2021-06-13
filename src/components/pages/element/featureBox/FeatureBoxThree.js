import React from "react";
import dataFeature from "../../../data.json";

const FeatureBoxThree = () => {
	return (
		<section className="service pos-r bg-effect o-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 md-mt-5 order-lg-1">
						<div className="row">
							{dataFeature.data.element[3].featuresthree.map(
								(feature, index) => (
									<div
										className="col-lg-6 col-md-6 mb-4"
										key={index}
									>
										<div className="featured-item style-3">
											<div className="featured-icon">
												<i
													className={`${feature["icon"]}`}
												></i>
											</div>
											<div className="featured-title">
												<h5>{feature["title"]}</h5>
											</div>
											<div className="featured-desc">
												<p>{feature["description"]}</p>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureBoxThree;
