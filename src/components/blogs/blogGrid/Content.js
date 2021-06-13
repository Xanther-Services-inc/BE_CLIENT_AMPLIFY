import React from "react";
import dataBlogs from "../../data.json";
const URL = require("../../constants");

const Content = () => {
	let counter = 1;
	return (
		<section>
			<div className="container">
				<div className="row">
					{dataBlogs.data.blogs[0].posts.map((post, index) => (
						<div
							className="col-lg-6 col-md-6 col-sm-12 mt-5"
							key={index}
						>
							<div className="post">
								{counter++ < 3 ? (
									<div className="post-image">
										<img
											className="img-fluid h-100 w-100"
											src={`${URL.img_url}${post["url"]}`}
											alt=""
										/>{" "}
										<a className="post-categories" href="/#">
											Photo
										</a>
									</div>
								) : (
									<div class="video-post">
										<iframe
											title="vidoPost"
											src={`${URL.img_url}${post["url"]}`}
										></iframe>
									</div>
								)}
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
					))}
				</div>
			</div>
		</section>
	);
};

export default Content;
