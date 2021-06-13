import React from "react";
import dataTimeline from "../../data.json";

const Timeline = () => {
	let counter = 0;
	return (
		<section className="pos-r o-hidden">
			<canvas id="canvas"></canvas>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="timeline-wrap">
							<ul className="timeline timeline--first list-unstyled">
								<li className="timeline-title">
									<h2>2019</h2>
								</li>
								{dataTimeline.data.about[0].timeline.year2019.map(
									(timeline, index) => (
										<li
											className={`timeline-inner ${
												counter++ % 2 === 0
													? "timeline-left"
													: "timeline-right"
											}`}
											key={index}
										>
											<div className="timeline-content">
												<h3>{timeline["title"]}</h3>
												<p>{timeline["description"]}</p>
											</div>
										</li>
									)
								)}
							</ul>
						</div>
						<div className="timeline-wrap">
							<ul className="timeline list-unstyled">
								<li className="timeline-title">
									<h2>2020</h2>
								</li>
								{dataTimeline.data.about[0].timeline.year2020.map(
									(timeline, index) => (
										<li
											key={index}
											className={`timeline-inner ${
												counter++ % 2 === 0
													? "timeline-left"
													: "timeline-right"
											}`}
										>
											<div className="timeline-content">
												<h3>{timeline["title"]}</h3>
												<p>{timeline["description"]}</p>
											</div>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timeline;
