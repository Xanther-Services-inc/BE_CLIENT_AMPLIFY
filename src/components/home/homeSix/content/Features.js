import React from "react";
import dataFeatures from "../../../data.json";

const Features = () => {
	return (
		<>
			<section className="pos-r bg-effect-2 text-center pb-0">
				<div className="container z-index-1">
					<div className="row">
						{dataFeatures.data.home[5].content.features.details.map(
							(feature, index) => (
								<div className="col-lg-4 col-md-6" key={index}>
									<div className="featured-item style-1">
										<div className="featured-icon">
											{" "}
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
			</section>
		</>
	);
};
export default Features;
