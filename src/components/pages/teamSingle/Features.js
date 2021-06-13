import React from "react";
import dataFeatures from "../../data.json";
const URL = require("../../constants");

const Features = () => {
	return (
		<>
			<section className="pos-r bg-effect o-hidden">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="section-title">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>
									{dataFeatures.data.pages[1].features.title}
								</h6>
								<h2 className="title">
									{
										dataFeatures.data.pages[1].features
											.sub_title
									}
								</h2>
							</div>
							{dataFeatures.data.pages[1].features.fields.map(
								(field, index) => (
									<div
										className="ht-progress-bar"
										key={index}
									>
										<h4>{field["title"]}</h4>
										<div
											className="progress"
											data-value={`${field["progress"]}`}
										>
											<div className="progress-bar">
												<div className="progress-parcent">
													<span>{`${field["progress"]}`}</span>
													%
												</div>
											</div>
										</div>
									</div>
								)
							)}
						</div>
						<div className="col-lg-6 col-md-12 md-mt-5">
							<div className="row">
								{dataFeatures.data.pages[1].features.details.map(
									(feature, index) => (
										<div
											className="col-lg-6 col-md-6"
											key={index}
										>
											<div className="featured-item style-3">
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
													<p>
														{feature["description"]}
													</p>
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
		</>
	);
};
export default Features;
