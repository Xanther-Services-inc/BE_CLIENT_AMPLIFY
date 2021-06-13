import React from "react";
import dataClients from "../../data.json";
const URL = require("../../constants");

const Clients = () => {
	return (
		<section className="bg-effect pos-r">
			<div className="container">
				<div className="row">
					{dataClients.data.services[1].clients.map((img, index) => (
						<div className="col-lg-3 col-md-6 mt-3" key={index}>
							<div className="clients-logo">
								<img
									className="img-center"
									src={`${URL.img_url}${img}`}
									alt=""
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
