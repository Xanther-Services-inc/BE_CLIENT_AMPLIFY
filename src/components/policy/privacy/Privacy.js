import React from "react";
import privacyData from "../../data.json";

const Privacy = () => {
	return (
		<div className="page-content">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<h2 className="title mb-0">
								{privacyData.data.policy.privacy.title}
							</h2>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-lg-12 col-md-12">
							{privacyData.data.policy.privacy.description.map(
								(desc, index) => (
									<p key={index}>{desc}</p>
								)
							)}
							<h4 className="mt-5 text-theme">
								{
									privacyData.data.policy.privacy
										.personal_info_title
								}
							</h4>
							<ul className="list-unstyled list-icon">
								{privacyData.data.policy.privacy.personal_info.map(
									(info, index) => (
										<li className="mb-3" key={index}>
											{" "}
											<i className="la la-check"></i>{" "}
											{info}
										</li>
									)
								)}
							</ul>
							<p className="mt-5">
								{privacyData.data.policy.privacy.footer}
							</p>
							<h4 className="mt-5 text-theme">
								{
									privacyData.data.policy.privacy.info_usage
										.title
								}
							</h4>
							<p>
								{
									privacyData.data.policy.privacy.info_usage
										.description
								}
							</p>
							<h4 className="mt-5 text-theme">
								{
									privacyData.data.policy.privacy.disclosure
										.title
								}
							</h4>
							<p>
								{
									privacyData.data.policy.privacy.disclosure
										.description
								}
							</p>
							<ul className="list-unstyled list-icon">
								{privacyData.data.policy.privacy.disclosure.points.map(
									(desclosure, index) => (
										<li className="mb-3" key={index}>
											{" "}
											<i className="la la-check"></i>{" "}
											{desclosure}
										</li>
									)
								)}
							</ul>
							<p className="mt-5 mb-0">
								{
									privacyData.data.policy.privacy.disclosure
										.footer
								}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Privacy;
