import React from "react";
import dataFeature from "../../../data.json";

const FeatureBoxSix = () => {
	return (
		<section
			className="pos-r bg-effect-2 bg-effect-3 py-15"
			data-bg-color="#fbfbfb"
		>
			<div className="container">
				<div className="row">
					{dataFeature.data.element[3].featuressix.map(
						(feature, index) => (
							<div className="col-lg-4 col-md-6 mt-5" key={index}>
								<div className="featured-item style-6">
									<div className="featured-icon">
										<i className={`${feature["icon"]}`}></i>
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
		</section>
	);
};

export default FeatureBoxSix;
