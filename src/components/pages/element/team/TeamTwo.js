import React from "react";
import dataTeam from "../../../data.json";
const URL = require("../../../constants");

const TeamTwo = () => {
	return (
		<section className="pos-r o-hidden bg-effect">
			<div className="container-fluid p-0">
				<div className="row align-items-center">
					<div className="col-xl-4 col-lg-4 col-md-12 ml-auto lg-pl-5">
						<div className="section-title mb-3">
							<div className="title-effect title-effect-2">
								<div className="ellipse"></div>{" "}
								<i className="la la-users"></i>
							</div>
							<h2 className="title">
								{dataTeam.data.element[5].teamtwo.title}
							</h2>
							<p className="mb-0">
								{dataTeam.data.element[5].teamtwo.sub_title}
							</p>
						</div>
						<a
							className="btn btn-border btn-circle"
							href="/#"
							data-text="View All"
						>
							{" "}
							<span>V</span>
							<span>i</span>
							<span>e</span>
							<span>w</span>
							<span> </span>
							<span>A</span>
							<span>l</span>
							<span>l</span>
						</a>
					</div>
					<div className="col-xl-7 col-lg-8 col-md-12">
						<div
							className="owl-carousel owl-theme no-pb"
							data-dots="false"
							data-items="2"
							data-sm-items="1"
							data-autoplay="true"
						>
							{dataTeam.data.element[5].teamtwo.members.map(
								(member, index) => (
									<div className="item" key={index}>
										<div className="team-member style-2">
											<div className="team-images">
												<img
													className="img-fluid radius box-shadow"
													src={`${URL.img_url}${member["img_url"]}`}
													alt=""
												/>{" "}
												<a
													className="team-link"
													href="/teamsingle"
												>
													<i className="la la-external-link"></i>
												</a>
											</div>
											<div className="team-description">
												{" "}
												<span>
													{member["position"]}
												</span>
												<h5>{member["name"]}</h5>
												<div className="social-icons social-colored circle team-social-icon">
													<ul>
														<li className="social-facebook">
															<a href="/#">
																<i className="fab fa-facebook-f"></i>
															</a>
														</li>
														<li className="social-twitter">
															<a href="/#">
																<i className="fab fa-twitter"></i>
															</a>
														</li>
														<li className="social-gplus">
															<a href="/#">
																<i className="fab fa-google-plus-g"></i>
															</a>
														</li>
														<li className="social-linkedin">
															<a href="/#">
																<i className="fab fa-linkedin-in"></i>
															</a>
														</li>
													</ul>
												</div>
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

export default TeamTwo;
