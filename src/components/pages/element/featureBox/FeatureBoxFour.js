import React from "react";
import dataFeature from "../../../data.json";
const URL = require("../../../constants");

const FeatureBoxFour = () => {
	return (
		<section id="service" className="pos-r o-hidden text-center">
			<div className="bg-animation">
				<img className="zoom-fade" src="images/pattern/03.png" alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12 ml-auto mr-auto">
						<div className="section-title">
							<div className="title-effect title-effect-2">
								<div className="ellipse"></div>{" "}
								<i className="la la-cubes"></i>
							</div>
							<h2 className="title">
								{dataFeature.data.element[3].featuresfour.title}
							</h2>
							<p>
								{
									dataFeature.data.element[3].featuresfour
										.description
								}
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					{dataFeature.data.element[3].featuresfour.details.map(
						(feature, index) => (
							<div className="col-lg-4 col-md-6 mb-5" key={index}>
								<div className="featured-item style-4">
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
	);
};

export default FeatureBoxFour;
