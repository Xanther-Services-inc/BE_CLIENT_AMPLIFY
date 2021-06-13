import React from "react";
import dataTeam from "../../../data.json";
const URL = require("../../../constants");

const TeamFive = () => {
	return (
		<section className="pos-r o-hidden">
			<div className="container">
				<div className="row">
					{dataTeam.data.element[5].teamfive.members.map(
						(member, index) => (
							<div
								className="col-lg-6 col-md-12 md-mb-5"
								key={index}
							>
								<div className="team-member style-4">
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
										<span>{member["position"]}</span>
										<h5>{member["name"]}</h5>
										<p>{member["description"]}</p>
										<div className="social-icons social-colored team-social-icon">
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
		</section>
	);
};

export default TeamFive;
