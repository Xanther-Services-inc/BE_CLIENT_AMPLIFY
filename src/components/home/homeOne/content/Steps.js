import React from "react";
import dataSteps from "../../../data.json";

const Steps = () => {
	return (
		<>
			<section className="text-center pos-r">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-10 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>
									{dataSteps.data.home[0].content.steps.title}
								</h6>
								<h2 className="title">
									{
										dataSteps.data.home[0].content.steps
											.description
									}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div id="svg-container">
							<svg
								id="svgC"
								width="100%"
								height="100%"
								viewBox="0 0 620 120"
								preserveAspectRatio="xMidYMid meet"
							></svg>
						</div>
						{dataSteps.data.home[0].content.steps.step.map(
							(step, index) => (
								<div className="col-lg-4 col-md-12" key={index}>
									<div className="work-process">
										<div className="box-loader">
											{" "}
											<span></span>
											<span></span>
											<span></span>
										</div>
										<div className="step-num-box">
											<div className="step-icon">
												<span>
													<i
														className={`${step["icon"]}`}
													></i>
												</span>
											</div>
											<div className="step-num">
												{step["count"]}
											</div>
										</div>
										<div className="step-desc">
											<h4>{step["title"]}</h4>
											<p className="mb-0">
												{step["description"]}
											</p>
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
export default Steps;
