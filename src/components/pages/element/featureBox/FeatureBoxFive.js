import React from "react";
import dataFeature from "../../../data.json";
const URL = require("../../../constants");

const FeatureBoxFive = () => {
	return (
		<section
			className="pos-r o-hidden z-index-1"
			data-bg-img="images/pattern/03.png"
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 mr-auto">
						{dataFeature.data.element[3].featuresfive.details.map(
							(feature, index) => (
								<div
									className="featured-item style-5 mt-5"
									key={index}
								>
									<div className="featured-icon">
										<img
											className="img-center"
											src={`${URL.img_url}${feature["icon"]}`}
											alt=""
										/>
									</div>
									<div className="featured-title">
										<h5>{feature["title"]}</h5>
									</div>
									<div className="featured-desc">
										<p>{feature["description"]}</p>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureBoxFive;
