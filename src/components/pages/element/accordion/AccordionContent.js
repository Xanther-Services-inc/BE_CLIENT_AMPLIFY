import React from "react";
import accordionData from "../../../data.json";

function AccordionContent() {
	let counter = 1;
	return (
		<div className="page-content">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div id="accordion" className="accordion style-1">
								{accordionData.data.element[0].questions.map(
									(data, index) => (
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
														{data["title"]}
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
													{data["content"]}
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
		</div>
	);
}

export default AccordionContent;
