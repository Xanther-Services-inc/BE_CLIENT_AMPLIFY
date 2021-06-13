import React from "react";
import dataTeam from "../../data.json";
const URL = require("../../constants");

const Team = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>{dataTeam.data.pages[0].team.title}</h6>
								<h2 className="title">
									{dataTeam.data.pages[0].team.sub_title}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 ml-auto">
							<div
								className="owl-carousel owl-theme no-pb"
								data-dots="false"
								data-items="3"
								data-md-items="2"
								data-sm-items="1"
								data-autoplay="true"
							>
								{dataTeam.data.pages[0].team.members.map(
									(member, index) => (
										<div className="item" key={index}>
											<div className="team-member style-1">
												<div className="team-images">
													<img
														className="img-fluid radius box-shadow"
														src={`${URL.img_url}${member["img_url"]}`}
														alt=""
													/>
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
													</div>{" "}
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
