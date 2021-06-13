import React from "react";
import dataFeatures from "../../../data.json";
const URL = require("../../../constants");

const Features = () => {
	return (
		<>
			<section className="text-center">
				<div className="container">
					<div className="row">
						{dataFeatures.data.home[2].content.features.details.map(
							(feature, index) => (
								<div className="col-lg-4 col-md-6" key={index}>
									<div className="featured-item style-1">
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
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</>
	);
};
export default Features;
