import React, {useState, useEffect} from "react";
import dataFaq from "../../data.json";
import axios from 'axios';


const Questions = () => {
	let counter = 1;
	const [faq, setFaq] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/faqs`)
			
			setFaq(data)
		}
		fetchData()
	}, [])
	return (
		<>
			<section className="z-index-1">
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
								
								<h2 className="title">
									{dataFaq.data.faq.sub_title}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 ml-auto">
							<div id="accordion" className="accordion style-1">
								{faq.map(
									(question, index) => (
										<div
											className={`card ${
												counter === index ? "active" : ""
											}`}
											key={index}
										>
											<div className="card-header">
												<h6 className="mb-0">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href={`#collapse${counter}`}
														aria-expanded="true"
													>
														{question["ques"]}
													</a>
												</h6>
											</div>
											<div
												id={`collapse${counter}`}
												className={`collapse ${
													counter++ === 1 ? "show" : ""
												}`}
												data-parent="#accordion"
											>
												<div className="card-body">
													{question["ans"]}
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
export default Questions;
