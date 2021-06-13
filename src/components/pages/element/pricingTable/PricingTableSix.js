import React from "react";
import dataPricing from "../../../data.json";

const PricingTableSix = () => {
	return (
		<section>
			<div className="container">
				<div className="row align-items-center">
					{dataPricing.data.element[4].pricingsix.plan.map(
						(plan, index) => (
							<div
								className="col-lg-4 col-md-12 md-mt-5"
								key={index}
							>
								<div className="price-table style-4">
									<div className="price-header">
										<div className="price-value">
											<h2>
												<span>$</span>
												{plan["price"]}
											</h2>
											<span>{plan["package"]}</span>
										</div>
										<h3 className="price-title">
											{plan["title"]}
										</h3>
									</div>
									<div className="price-list">
										<ul className="list-unstyled">
											{plan.features.map(
												(feature, index) => (
													<li key={index}>
														<i className="la la-check"></i>{" "}
														{feature}
													</li>
												)
											)}
										</ul>
									</div>
									<a
										className="btn btn-white btn-circle mt-4"
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
		</section>
	);
};

export default PricingTableSix;
