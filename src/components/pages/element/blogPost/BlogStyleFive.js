import React from "react";
import stylefiveData from "../../../data.json";
const URL = require("../../../constants");

const BlogStyleFive = () => {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div
							className="owl-carousel owl-theme"
							data-items="3"
							data-md-items="2"
							data-sm-items="1"
							data-autoplay="true"
						>
							{stylefiveData.data.element[1].blogs.stylefive.map(
								(post, index) => (
									<div className="item" key={index}>
										<div className="post style-3">
											<div className="post-image">
												<img
													className="img-fluid h-100 w-100"
													src={`${URL.img_url}${post["img_src"]}`}
													alt=""
												/>{" "}
												<a
													className="post-categories"
													href="/#"
												>
													Photo
												</a>
											</div>
											<div className="post-desc">
												<div className="post-title">
													<h4>
														<a href="blog-single.html">
															{post["title"]}
														</a>
													</h4>
												</div>
												<p>{post["description"]}</p>
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

export default BlogStyleFive;
