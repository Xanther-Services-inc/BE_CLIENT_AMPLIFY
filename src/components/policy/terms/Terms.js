import React from "react";
import termsData from "../../data.json";

const Terms = () => {
	return (
		<div className="page-content">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<h2 className="title mb-0">
								{termsData.data.policy.terms.title}
							</h2>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-12 col-md-12">
							{termsData.data.policy.terms.points.map(
								(point, index) => (
									<>
										<h4
											key={index}
											className="text-theme mt-5"
										>
											{point["title"]}
										</h4>
										<p className="mb-3">
											{point["description"]}
										</p>
										{point["list"] !== undefined && (
											<ul className="list-unstyled list-icon mb-3">
												{point["list"].map(
													(value, index) => (
														<li
															className="mb-3"
															key={index}
														>
															{" "}
															<i className="la la-check"></i>{" "}
															{value}
														</li>
													)
												)}
											</ul>
										)}
									</>
								)
							)}

							<a
								className="btn btn-theme"
								href="/#"
								data-text="Accept"
							>
								{" "}
								<span>A</span>
								<span>c</span>
								<span>c</span>
								<span>e</span>
								<span>p</span>
								<span>t</span>
							</a>
							<a
								className="btn btn-dark"
								href="/#"
								data-text="Close"
							>
								{" "}
								<span>C</span>
								<span>l</span>
								<span>o</span>
								<span>s</span>
								<span>e</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Terms;
