import React from "react";
import dataFeatures from "../../../data.json";
const URL = require("../../../constants");

const Features = () => {
	return (
		<>
			<section
				className="pos-r o-hidden"
				data-bg-img="images/pattern/03.png"
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 image-column right">
							<img
								className="img-fluid"
								src="images/about/01.png"
								alt=""
							/>
						</div>
						<div className="col-lg-6 col-md-12 mr-auto">
							{dataFeatures.data.home[3].content.features.details.map(
								(feature, index) => (
									<div
										className="featured-item style-5 mt-4"
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
		</>
	);
};
export default Features;
