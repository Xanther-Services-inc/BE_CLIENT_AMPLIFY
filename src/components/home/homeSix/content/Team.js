import React from "react";
import dataTeam from "../../../data.json";
const URL = require("../../../constants");

const Team = () => {
	return (
		<>
			<section
				className="pos-r o-hidden theme-bg grediant-overlay"
				data-bg-img="images/bg/09.jpg"
				data-overlay="9"
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="section-title">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6 className="text-white">
									{dataTeam.data.home[5].content.team.title}
								</h6>
								<h2 className="title text-white">
									{
										dataTeam.data.home[5].content.team
											.sub_title
									}
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pt-0 custom-mt-10 o-hidden">
				<div className="container-fluid p-0">
					<div className="row">
						<div className="col-xl-10 col-lg-11 ml-auto">
							<div
								className="owl-carousel owl-theme"
								data-items="3"
								data-md-items="2"
								data-sm-items="1"
								data-autoplay="true"
							>
								{dataTeam.data.home[5].content.team.members.map(
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
