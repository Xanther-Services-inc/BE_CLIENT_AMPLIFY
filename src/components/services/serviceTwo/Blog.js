import React from "react";
import dataBlogs from "../../data.json";
const URL = require("../../constants");

const Blog = () => {
	return (
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
								{dataBlogs.data.services[1].blogs.title}
							</h2>
							<p>
								{dataBlogs.data.services[1].blogs.description}
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					{dataBlogs.data.services[1].blogs.details.map(
						(post, index) => (
							<div
								className="col-lg-4 col-md-12 mt-5"
								key={index}
							>
								<div className="post style-4">
									<div className="post-image">
										<img
											className="img-fluid h-100 w-100"
											src={`${URL.img_url}${post["img_src"]}`}
											alt=""
										/>
									</div>
									<div className="post-desc">
										<div className="post-meta">
											<ul className="list-inline">
												<li>{post["date"]}</li>
												<li>{post["author"]}</li>
											</ul>
										</div>
										<div className="post-title">
											<h4>
												<a href="blog-single.html">
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

export default Blog;
