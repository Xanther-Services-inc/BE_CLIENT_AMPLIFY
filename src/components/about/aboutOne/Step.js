import React from "react";
import dataSteps from "../../data.json";

const Step = () => {
	return (
		<section className="text-center pt-0">
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
							<h6>{dataSteps.data.about[0].steps.title}</h6>
							<h2 className="title">
								{dataSteps.data.about[0].steps.description}
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{dataSteps.data.about[0].steps.step.map((step, index) => (
						<div className="col-lg-4 col-md-12 mt-5" key={index}>
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
					))}
				</div>
			</div>
		</section>
	);
};

export default Step;
