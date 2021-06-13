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
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>
									{dataBlogs.data.home[5].content.blogs.title}
								</h6>
								<h2 className="title">
									{
										dataBlogs.data.home[5].content.blogs
											.sub_title
									}
								</h2>
								<p>
									{
										dataBlogs.data.home[5].content.blogs
											.description
									}
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						{dataBlogs.data.home[5].content.blogs.details.map(
							(post, index) => (
								<div className="col-lg-4 col-md-12" key={index}>
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
		</>
	);
};
export default Blogs;
