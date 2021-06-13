import React from "react";
import styletwoData from "../../../data.json";
const URL = require("../../../constants");

const BlogStyleTwo = () => {
	return (
		<section className="py-0">
			<div className="container">
				<div className="row">
					{styletwoData.data.element[1].blogs.styletwo.map(
						(post, index) => (
							<div
								className="col-lg-4 col-md-12 md-mt-5"
								key={index}
							>
								<div className="post">
									<div className="post-image">
										<img
											className="img-fluid h-100 w-100"
											src={`${URL.img_url}${post["img_src"]}`}
											alt=""
										/>{" "}
										<a className="post-categories" href="/#">
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
		</section>
	);
};

export default BlogStyleTwo;
