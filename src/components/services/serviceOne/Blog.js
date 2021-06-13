import React from "react";
import dataBlogs from "../../data.json";
const URL = require("../../constants");

const Blog = () => {
	return (
		<section className="pos-r">
			<div className="spinner-eff">
				<div className="spinner-circle circle-1"></div>
				<div className="spinner-circle circle-2"></div>
			</div>
			<div className="container">
				<div className="row text-center">
					<div className="col-lg-8 col-md-12 ml-auto mr-auto">
						<div className="section-title">
							<h2 className="title">
								Have a look Creative{" "}
								<span className="text-theme">Blogs</span>
							</h2>
							<p>
								{dataBlogs.data.services[0].blogs.description}
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="row">
							{dataBlogs.data.services[0].blogs.details.map(
								(post, index) => (
									<div
										className="col-lg-6 col-md-12 mt-5"
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
								{dataBlogs.data.services[0].blogs.widgets.map(
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

export default Blog;
