import React from "react";
import dataBlogs from "../../../data.json";
const URL = require("../../../constants");

const Blogs = () => {
	return (
		<>
			<section>
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-8 col-md-12 ml-auto mr-auto">
							<div className="section-title">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-btc"></i>
								</div>
								<h2 className="title">
									{dataBlogs.data.home[3].content.blogs.title}
								</h2>
								<p>
									{
										dataBlogs.data.home[3].content.blogs
											.description
									}
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div
								className="owl-carousel owl-theme"
								data-items="3"
								data-md-items="2"
								data-sm-items="1"
								data-autoplay="true"
							>
								{dataBlogs.data.home[3].content.blogs.details.map(
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
															<a href="/blogsingle">
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
		</>
	);
};
export default Blogs;
