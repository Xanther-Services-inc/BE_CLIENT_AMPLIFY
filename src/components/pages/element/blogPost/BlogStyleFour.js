import React from "react";
import stylefourData from "../../../data.json";
const URL = require("../../../constants");

const BlogStyleFour = () => {
	return (
		<section className="pos-r o-hidden bg-effect">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-10 col-md-11 ml-auto">
						<div
							className="owl-carousel owl-theme"
							data-items="3"
							data-lg-items="2"
							data-md-items="2"
							data-sm-items="1"
							data-autoplay="true"
						>
							{stylefourData.data.element[1].blogs.stylefour.map(
								(post, index) => (
									<div className="item" key={index}>
										<div className="post style-2">
											<div className="post-image">
												<img
													className="img-fluid h-100 w-100"
													src={`${URL.img_url}${post["img_src"]}`}
													alt=""
												/>
											</div>
											<div className="post-desc">
												{" "}
												<a
													className="post-categories"
													href="/#"
												>
													Photo
												</a>
												<div className="post-meta">
													<ul className="list-inline">
														<li>
															<i className="la la-calendar mr-1"></i>{" "}
															{post["date"]}
														</li>
														<li>
															<i className="la la-user mr-1"></i>{" "}
															{post["author"]}
														</li>
													</ul>
												</div>
												<div className="post-title">
													<h4>
														<a href="/blogsingle">
															{post["title"]}
														</a>
													</h4>
												</div>
												<p>{post["description"]}</p>
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

export default BlogStyleFour;
