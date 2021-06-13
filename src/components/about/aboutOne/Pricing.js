import React from "react";
import dataPricing from "../../data.json";

const Pricing = () => {
	return (
		<section>
			<div className="container">
				<div className="row text-center">
					<div className="col-lg-8 col-md-12 ml-auto mr-auto">
						<div className="section-title">
							<div className="title-effect">
								<div className="bar bar-top"></div>
								<div className="bar bar-right"></div>
								<div className="bar bar-bottom"></div>
								<div className="bar bar-left"></div>
							</div>
							<h6>{dataPricing.data.about[0].pricing.title}</h6>
							<h2 className="title">
								{dataPricing.data.about[0].pricing.sub_title}
							</h2>
							<p>
								{dataPricing.data.about[0].pricing.description}
							</p>
						</div>
					</div>
				</div>
				<div className="row align-items-center">
					{dataPricing.data.about[0].pricing.plan.map(
						(plan, index) => (
							<div
								className="col-lg-4 col-md-12 md-mt-5"
								key={index}
							>
								<div className="price-table">
									<div className="price-inside">
										{plan["name"]}
									</div>
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
									<a
										className="btn btn-theme btn-circle my-4"
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
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
