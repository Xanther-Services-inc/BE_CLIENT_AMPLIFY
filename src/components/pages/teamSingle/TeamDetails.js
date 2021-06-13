import React from "react";
import dataTeam from "../../data.json";
const URL = require("../../constants");

const TeamDetails = () => {
	return (
		<>
			<section className="bg-contain" data-bg-img="images/pattern/03.png">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12">
							<div className="team-single">
								<div className="team-images">
									<img
										className="img-center w-100 radius box-shadow"
										src={`${URL.img_url}${dataTeam.data.pages[1].team_detail.img_url}`}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-7 col-md-12 md-mt-3">
							<div className="team-description">
								<h6 className="text-theme">{`${dataTeam.data.pages[1].team_detail.position}`}</h6>
								<h2 className="title z-index-1 mb-2">
									{`${dataTeam.data.pages[1].team_detail.name}`}
								</h2>
								<p className="lead mb-3 text-black">
									{`${dataTeam.data.pages[1].team_detail.short_text}`}
								</p>
								<p className="mb-4">
									{`${dataTeam.data.pages[1].team_detail.description}`}
								</p>
								<ul className="team-icon list-inline mb-4">
									<li className="mr-3 list-inline-item">
										{" "}
										<i className="flaticon-email"></i>
										<a href="mailto:shoora@gmail.com">
											{`${dataTeam.data.pages[1].team_detail.email}`}
										</a>
									</li>
									<li className="list-inline-item sm-mt-3">
										{" "}
										<i className="flaticon-social-media"></i>
										<a href="tel:+912345678900">
											{`${dataTeam.data.pages[1].team_detail.phone}`}
										</a>
									</li>
								</ul>
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
				</div>
			</section>
		</>
	);
};
export default TeamDetails;
