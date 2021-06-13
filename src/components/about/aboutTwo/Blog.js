import React from "react";
import dataBlogs from "../../data.json";
const URL = require("../../constants");

const Blog = () => {
	return (
		<section className="pos-r o-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12 mr-auto">
						<div className="section-title">
							<div className="title-effect title-effect-2">
								<div className="ellipse"></div>{" "}
								<i className="la la-btc"></i>
							</div>
							<h2 className="title">
								{dataBlogs.data.about[1].blogs.sub_title}
							</h2>
							<p>{dataBlogs.data.about[1].blogs.description}</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div
							className="owl-carousel owl-theme"
							data-items="3"
							data-lg-items="2"
							data-md-items="2"
							data-sm-items="1"
							data-autoplay="true"
						>
							{dataBlogs.data.about[1].blogs.details.map(
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

export default Blog;
