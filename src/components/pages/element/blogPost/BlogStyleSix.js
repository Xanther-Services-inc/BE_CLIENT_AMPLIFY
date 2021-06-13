import React from "react";
import stylesixData from "../../../data.json";
const URL = require("../../../constants");

const BlogStyleSix = () => {
	return (
		<section className="pt-0">
			<div className="container">
				<div className="row">
					{stylesixData.data.element[1].blogs.stylesix.map(
						(post, index) => (
							<div
								className="col-lg-4 col-md-12 md-mt-5"
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

export default BlogStyleSix;
