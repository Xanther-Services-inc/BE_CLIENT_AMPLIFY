import React from "react";
import dataSteps from "../../../data.json";

const Steps = () => {
	return (
		<>
			<section
				className="dark-bg pos-r o-hidden text-center"
				data-bg-img="images/pattern/03.png"
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-10 ml-auto mr-auto">
							<div className="section-title">
								<h2 className="title">
									{dataSteps.data.home[2].content.steps.title}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						{dataSteps.data.home[2].content.steps.step.map(
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
