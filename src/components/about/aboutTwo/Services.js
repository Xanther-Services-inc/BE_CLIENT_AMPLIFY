import React from "react";
import dataServices from "../../data.json";

const Services = () => {
	return (
		<section className="pos-r bg-effect text-center">
			<div className="container z-index-1">
				<div className="row">
					{dataServices.data.about[1].services.map(
						(service, index) => (
							<div className="col-lg-4 col-md-6 mt-5" key={index}>
								<div className="featured-item style-1">
									<div className="featured-icon">
										{" "}
										<i className={`${service["icon"]}`}></i>
									</div>
									<div className="featured-title">
										<h5>{service["title"]}</h5>
									</div>
									<div className="featured-desc">
										<p>{service["description"]}</p>
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

export default Services;
