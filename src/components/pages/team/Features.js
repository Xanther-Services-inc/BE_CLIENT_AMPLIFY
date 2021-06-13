import React from "react";
import dataFeatures from "../../data.json";

const Features = () => {
	return (
		<>
			<section
				id="service"
				className="pos-r bg-effect-2 bg-effect-3 py-15"
				data-bg-color="#fbfbfb"
			>
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-cubes"></i>
								</div>
								<h2 className="title">
									{dataFeatures.data.pages[0].features.title}
								</h2>
								<p>
									{
										dataFeatures.data.pages[0].features
											.description
									}
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						{dataFeatures.data.pages[0].features.details.map(
							(feature, index) => (
								<div
									className="col-lg-4 col-md-6 mt-5"
									key={index}
								>
									<div className="featured-item style-6">
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
			</section>
		</>
	);
};
export default Features;
