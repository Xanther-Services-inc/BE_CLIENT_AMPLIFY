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
							<div className="title-effect">
								<div className="bar bar-top"></div>
								<div className="bar bar-right"></div>
								<div className="bar bar-bottom"></div>
								<div className="bar bar-left"></div>
							</div>
							<h6>{dataBlogs.data.about[0].blogs.title}</h6>
							<h2 className="title">
								{dataBlogs.data.about[0].blogs.sub_title}
							</h2>
							<p>{dataBlogs.data.about[0].blogs.description}</p>
						</div>
					</div>
				</div>
				<div className="row">
					{dataBlogs.data.about[0].blogs.details.map(
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
										/>
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
										<p>{post["description"]}</p>
										<a
											className="icon-btn mt-4"
											href="/blogsingle"
										>
											{" "}
											<i className="la la-angle-right"></i>
										</a>
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
