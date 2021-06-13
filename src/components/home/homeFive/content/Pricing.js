import React from "react";
import dataPricing from "../../../data.json";

const Pricing = () => {
	return (
		<>
			<section className="bg-effect-4 pos-r o-hidden">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-12">
							<div className="section-title">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-money"></i>
								</div>
								<h2 className="title">
									{
										dataPricing.data.home[4].content.pricing
											.title
									}
								</h2>
								<p className="text-black">
									{
										dataPricing.data.home[4].content.pricing
											.sub_title
									}
								</p>
							</div>
							<ul className="list-unstyled list-icon mb-4">
								{dataPricing.data.home[4].content.pricing.points.map(
									(point, index) => (
										<li className="mb-3" key={index}>
											<i className="la la-check"></i>{" "}
											{point}
										</li>
									)
								)}
							</ul>
						</div>
						<div className="col-lg-8 col-md-12">
							<div
								className="owl-carousel owl-theme no-pb"
								data-dots="false"
								data-items="2"
								data-sm-items="1"
								data-autoplay="true"
							>
								{dataPricing.data.home[4].content.pricing.plan.map(
									(plan, index) => (
										<div className="item" key={index}>
											<div className="price-table style-3 mx-3 my-3">
												<div className="price-inside">
													{plan["name"]}
												</div>
												<div className="price-header">
													<div className="price-value">
														<h2>
															<span>$</span>
															{plan["price"]}
														</h2>
														<span>
															{plan["package"]}
														</span>
													</div>
													<h3 className="price-title">
														{plan["title"]}
													</h3>
												</div>
												<div className="price-list">
													<ul className="list-unstyled">
														{plan.features.map(
															(
																feature,
																index
															) => (
																<li key={index}>
																	{feature}
																</li>
															)
														)}
													</ul>
												</div>
												<a
													className="btn btn-theme btn-circle mt-4"
													href="/#"
													data-text="Purchase Now"
												>
													{" "}
													<span>P</span>
													<span>u</span>
													<span>r</span>
													<span>c</span>
													<span>h</span>
													<span>a</span>
													<span>s</span>
													<span>e</span>
													<span> </span>
													<span>N</span>
													<span>o</span>
													<span>w</span>
												</a>
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
export default Pricing;
