import React from "react";
import dataGraph from "../../../data.json";

const AboutGraph = () => {
	let counter = 1;
	return (
		<>
			<section className="pos-r py-15 md-py-8">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-6 col-md-12 image-column right p-0">
							<div className="img-box box-shadow radius-1">
								<div className="box-loader">
									{" "}
									<span></span>
									<span></span>
									<span></span>
								</div>
								<img
									className="img-center"
									src="images/banner/04.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6 col-md-12 mr-auto md-mt-5">
							<div id="accordion" className="accordion style-1">
								{dataGraph.data.home[5].content.aboutgraph.map(
									(graph, index) => (
										<div
											className={`card ${
												counter === 1 ? "active" : ""
											}`}
											key={index}
										>
											<div className="card-header">
												<h6 className="mb-0">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href={`#collapse${counter}`}
														aria-expanded="true"
													>
														{graph["title"]}
													</a>
												</h6>
											</div>
											<div
												id={`collapse${counter}`}
												className={`collapse ${
													counter++ === 1
														? "show"
														: ""
												}`}
												data-parent="#accordion"
											>
												<div className="card-body">
													{graph["description"]}
												</div>
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
export default AboutGraph;
