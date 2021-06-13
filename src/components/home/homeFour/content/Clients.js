import React from "react";
import dataClient from "../../../data.json";
const URL = require("../../../constants");

const Clients = () => {
	return (
		<section className="custom-mt-15 grey-bg z-index-0 custom-pt-18 pb-3">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div
							className="owl-carousel owl-theme"
							data-dots="false"
							data-items="4"
							data-md-items="3"
							data-sm-items="2"
							data-margin="30"
							data-autoplay="true"
						>
							{dataClient.data.home[3].content.clients.map(
								(img, index) => (
									<div className="item" key={index}>
										<div className="clients-logo">
											<img
												className="img-center"
												src={`${URL.img_url}${img}`}
												alt=""
											/>
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

export default Clients;
