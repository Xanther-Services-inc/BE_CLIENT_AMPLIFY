import React from "react";
import dataTeam from "../../../data.json";
const URL = require("../../../constants");

const Team = () => {
	return (
		<>
			<section className="pos-r o-hidden pb-2">
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-10 ml-auto mr-auto">
							<div className="section-title">
								<h2 className="title">
									Meet Our Expert{" "}
									<span className="text-theme">
										team member
									</span>{" "}
									will ready for your service
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div
								className="owl-carousel owl-theme no-pb"
								data-dots="false"
								data-items="3"
								data-md-items="2"
								data-sm-items="1"
								data-autoplay="true"
							>
								{dataTeam.data.home[2].content.team.members.map(
									(member, index) => (
										<div className="item" key={index}>
											<div className="team-member style-3">
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
		</>
	);
};
export default Team;
