import React from "react";
import dataServices from "../../data.json";

const Services = () => {
	return (
		<section className="service pos-r bg-effect o-hidden">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 order-lg-12 image-column right">
						<div className="blink-img">
							<img
								className="img-fluid blinkblink"
								src="images/pattern/04.png"
								alt=""
							/>
						</div>
						<img
							className="img-fluid z-index-1 w-100"
							src="images/svg/02.svg"
							alt=""
						/>
					</div>
					<div className="col-lg-6 col-md-12 md-mt-5 order-lg-1">
						<div className="row">
							{dataServices.data.about[0].services.map(
								(service, index) => (
									<div
										className="col-lg-6 col-md-6 mt-3"
										key={index}
									>
										<div className="featured-item style-3">
											<div className="featured-icon">
												{" "}
												<i
													className={`${service["icon"]}`}
												></i>
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
				</div>
			</div>
		</section>
	);
};

export default Services;
