import React from "react";
import dataFaq from "../../data.json";
const URL = require("../../constants");

const Faq = () => {
	let counter = 1;
	return (
		<section className="pos-r py-15 md-py-8">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 col-lg-6 col-md-12 image-column p-0">
						<div className="img-box box-shadow radius-1">
							<div className="box-loader">
								<span></span>
								<span></span>
								<span></span>
							</div>
							<img
								className="img-center"
								src={`${URL.img_url}${dataFaq.data.about[1].faq.img_url}`}
								alt=""
							/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-12 ml-auto md-mt-5">
						<div
							id="accordion"
							className="accordion style-1 ml-lg-2"
						>
							{dataFaq.data.about[1].faq.questions.map(
								(question, index) => (
									<div
										key={index}
										className={`card ${
											counter === 1 ? "active" : ""
										}`}
									>
										<div className="card-header">
											<h6 className="mb-0">
												<a
													data-toggle="collapse"
													data-parent="#accordion"
													href={`#collapse${counter}`}
													aria-expanded="true"
												>
													{question["title"]}
												</a>
											</h6>
										</div>
										<div
											id={`collapse${counter}`}
											className={`collapse ${
												counter++ === 1 ? "show" : ""
											}`}
											data-parent="#accordion"
										>
											<div className="card-body">
												{question["description"]}
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
	);
};

export default Faq;
