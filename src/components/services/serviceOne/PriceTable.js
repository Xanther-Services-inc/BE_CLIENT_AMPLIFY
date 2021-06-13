import React from "react";
import dataPricing from "../../data.json";

const PriceTable = () => {
	let active = 1;
	return (
		<section className="grey-bg pos-r" data-bg-img="images/bg/02.png">
			<div className="wave-shape">
				<img className="img-fluid" src="images/bg/03.png" alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="tab">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-12">
									{/* Nav tabs */}
									<div className="section-title">
										<h2 className="title">
											Choose Your Best Affordable{" "}
											<span className="text-theme">
												Pricing plan
											</span>
										</h2>
										<p className="mb-0 text-black">
											{
												dataPricing.data.services[0]
													.pricing.sub_title
											}
										</p>
									</div>
									<nav>
										<div
											className="nav nav-tabs"
											id="nav-tab"
											role="tablist"
										>
											{" "}
											<a
												className="nav-item nav-link active"
												id="nav-tab1"
												data-toggle="tab"
												href="#tab1-1"
												role="tab"
												aria-selected="true"
											>
												Monthly
											</a>
											<a
												className="nav-item nav-link"
												id="nav-tab2"
												data-toggle="tab"
												href="#tab1-2"
												role="tab"
												aria-selected="false"
											>
												Yearly
											</a>
										</div>
									</nav>
								</div>
								<div className="col-lg-8 col-md-12">
									{/* Tab panes */}
									<div
										className="tab-content px-0 pb-0"
										id="nav-tabContent"
									>
										<div
											role="tabpanel"
											className="tab-pane fade show active"
											id="tab1-1"
										>
											<div className="row align-items-center">
												{dataPricing.data.services[0].pricing.plan.map(
													(plan, index) => (
														<div
															className="col-lg-6 col-md-6"
															key={index}
														>
															<div
																className={`price-table style-3 ${
																	active++ !==
																	1
																		? "active"
																		: ""
																}`}
															>
																<div className="price-inside">
																	{
																		plan[
																			"name"
																		]
																	}
																</div>
																<div className="price-header">
																	<div className="price-value">
																		<h2>
																			<span>
																				$
																			</span>
																			{
																				plan[
																					"price"
																				]
																			}
																		</h2>
																		<span>
																			{
																				plan[
																					"package"
																				]
																			}
																		</span>
																	</div>
																	<h3 className="price-title">
																		{
																			plan[
																				"title"
																			]
																		}
																	</h3>
																</div>
																<div className="price-list">
																	<ul className="list-unstyled">
																		{plan.features.map(
																			(
																				feature,
																				index
																			) => (
																				<li
																					key={
																						index
																					}
																				>
																					{
																						feature
																					}
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
																	<span>
																		P
																	</span>
																	<span>
																		u
																	</span>
																	<span>
																		r
																	</span>
																	<span>
																		c
																	</span>
																	<span>
																		h
																	</span>
																	<span>
																		a
																	</span>
																	<span>
																		s
																	</span>
																	<span>
																		e
																	</span>
																	<span>
																		{" "}
																	</span>
																	<span>
																		N
																	</span>
																	<span>
																		o
																	</span>
																	<span>
																		w
																	</span>
																</a>
															</div>
														</div>
													)
												)}
											</div>
										</div>

										<div
											role="tabpanel"
											className="tab-pane fade"
											id="tab1-2"
										>
											<div className="row align-items-center">
												{dataPricing.data.services[0].pricing.plan.map(
													(plan, index) => (
														<div
															className="col-lg-6 col-md-6"
															key={index}
														>
															<div
																className={`price-table style-3 ${
																	active++ !==
																	3
																		? "active"
																		: ""
																}`}
															>
																<div className="price-inside">
																	{
																		plan[
																			"name"
																		]
																	}
																</div>
																<div className="price-header">
																	<div className="price-value">
																		<h2>
																			<span>
																				$
																			</span>
																			{
																				plan[
																					"price"
																				]
																			}
																		</h2>
																		<span>
																			{
																				plan[
																					"package"
																				]
																			}
																		</span>
																	</div>
																	<h3 className="price-title">
																		{
																			plan[
																				"title"
																			]
																		}
																	</h3>
																</div>
																<div className="price-list">
																	<ul className="list-unstyled">
																		{plan.features.map(
																			(
																				feature,
																				index
																			) => (
																				<li
																					key={
																						index
																					}
																				>
																					{
																						feature
																					}
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
																	<span>
																		P
																	</span>
																	<span>
																		u
																	</span>
																	<span>
																		r
																	</span>
																	<span>
																		c
																	</span>
																	<span>
																		h
																	</span>
																	<span>
																		a
																	</span>
																	<span>
																		s
																	</span>
																	<span>
																		e
																	</span>
																	<span>
																		{" "}
																	</span>
																	<span>
																		N
																	</span>
																	<span>
																		o
																	</span>
																	<span>
																		w
																	</span>
																</a>
															</div>
														</div>
													)
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PriceTable;
