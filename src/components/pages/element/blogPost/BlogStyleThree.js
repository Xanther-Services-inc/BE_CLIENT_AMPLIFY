import React from "react";
import stylethreeData from "../../../data.json";
const URL = require("../../../constants");

const BlogStyleThree = () => {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="row">
							{stylethreeData.data.element[1].blogs.stylethree.blogs.map(
								(post, index) => (
									<div
										className="col-lg-6 col-md-12 md-mt-5"
										key={index}
									>
										<div className="post">
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
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>
					<div className="col-lg-4 col-md-12 widget md-mt-5">
						<div className="recent-post main-post">
							<ul className="list-unstyled">
								{stylethreeData.data.element[1].blogs.stylethree.widgets.map(
									(post, index) => (
										<li className="mb-3" key={index}>
											<div className="recent-post-thumb mr-2">
												<img
													className="img-fluid"
													src={`${URL.img_url}${post["img_src"]}`}
													alt=""
												/>
											</div>
											<div className="recent-post-desc">
												<div className="post-meta">
													<ul className="list-inline">
														<li>
															{post["author"]}
														</li>
													</ul>
												</div>{" "}
												<a href="/blogsingle">
													{post["title"]}
												</a>
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

export default BlogStyleThree;
