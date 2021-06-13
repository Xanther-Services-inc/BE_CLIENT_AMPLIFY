import React from "react";
import dataPricing from "../../../data.json";

const PricingTableFour = () => {
	let counter = 0;
	return (
		<section className="pos-r">
			<div className="hexagon-bg style-2">
				<div className="hexagon"></div>
				<div className="hexagon"></div>
				<div className="hexagon"></div>
				<div className="hexagon"></div>
			</div>
			<div className="container">
				<div className="row align-items-center">
					{dataPricing.data.element[4].pricingfour.plan.map(
						(plan, index) => (
							<div
								className="col-lg-4 col-md-12 md-mt-5"
								key={index}
							>
								<div className="price-table">
									<div className="price-inside">
										{plan["name"]}
									</div>
									<div className="price-header mb-3">
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
									{counter !== 1 && (
										<div className="price-list">
											<ul className="list-unstyled">
												{plan.features.map(
													(feature, index) => (
														<li key={index}>
															{feature}
														</li>
													)
												)}
											</ul>
										</div>
									)}
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
									{counter++ === 1 && (
										<div className="price-list">
											<ul className="list-unstyled">
												{plan.features.map(
													(feature, index) => (
														<li key={index}>
															{feature}
														</li>
													)
												)}
											</ul>
										</div>
									)}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default PricingTableFour;
