import React from "react";
import dataTabs from "../../../data.json";
const URL = require("../../../constants");

const Tabs = () => {
	let tabCount = 1;
	let contentCount = 1;
	return (
		<section className="pos-r o-hidden">
			<div className="bg-animation">
				<img className="zoom-fade" src="images/pattern/03.png" alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="tab style-2">
							{/* Nav tabs */}
							<nav>
								<div
									className="nav nav-tabs"
									id="nav-tab"
									role="tablist"
								>
									{dataTabs.data.home[4].content.tabs.map(
										(data, index) => (
											<a
												key={index}
												className={`nav-item nav-link ${
													tabCount === 1
														? "active"
														: ""
												}`}
												id={`"nav-tab${tabCount}`}
												data-toggle="tab"
												href={`#tab1-${tabCount}`}
												role="tab"
												aria-selected={
													tabCount++ === 1
														? "true"
														: "false"
												}
											>
												{" "}
												<i
													className={`${data["icon"]}`}
												></i>
												<h5>{`${data["title"]}`}</h5>
											</a>
										)
									)}
								</div>
							</nav>
							{/* Tab panes */}
							<div className="tab-content" id="nav-tabContent">
								{dataTabs.data.home[4].content.tabs.map(
									(data, index) => (
										<div
											key={index}
											role="tabpanel"
											className={`tab-pane fade ${
												contentCount === 1
													? "show active"
													: ""
											}`}
											id={`tab1-${contentCount++}`}
										>
											<div className="row align-items-center">
												<div className="col-lg-6 col-md-12">
													<img
														className="img-fluid"
														src={`${URL.img_url}${data["img_url"]}`}
														alt=""
													/>
												</div>
												<div className="col-lg-6 col-md-12 md-mt-5">
													<h4 className="mb-4">
														{data["sub_title"]}
													</h4>
													<p className="mb-4">
														{data["content"]}
													</p>
													<ul className="custom-li list-unstyled list-icon-2 d-inline-block">
														{data.features.map(
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
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Tabs;
