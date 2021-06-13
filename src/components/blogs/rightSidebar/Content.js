import React from "react";
import dataSidebar from "../../data.json";
const URL = require("../../constants");

const Content = () => {
	return (
		<div className="page-content">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="post">
								<div className="post-image">
									<img
										className="img-fluid h-100 w-100"
										src={`${URL.img_url}${dataSidebar.data.blogs[2].posts[0].url}`}
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
												{
													dataSidebar.data.blogs[2]
														.posts[0].date
												}
											</li>
											<li>
												<i className="la la-user mr-1"></i>{" "}
												{
													dataSidebar.data.blogs[2]
														.posts[0].author
												}
											</li>
										</ul>
									</div>
									<div className="post-title">
										<h4>
											<a href="/blogsingle">
												{
													dataSidebar.data.blogs[2]
														.posts[0].title
												}
											</a>
										</h4>
									</div>
									<p>
										{
											dataSidebar.data.blogs[2].posts[0]
												.description
										}
									</p>
									<a
										className="icon-btn mt-4"
										href="/blogsingle"
									>
										{" "}
										<i className="la la-angle-right"></i>
									</a>
								</div>
							</div>
							<div className="post mt-8">
								<div
									className="owl-carousel no-pb"
									data-dots="false"
									data-items="1"
									data-autoplay="true"
								>
									<div className="item">
										<img
											className="img-fluid"
											src={`${URL.img_url}${dataSidebar.data.blogs[2].posts[1].url_1}`}
											alt=""
										/>
									</div>
									<div className="item">
										<img
											className="img-fluid"
											src={`${URL.img_url}${dataSidebar.data.blogs[2].posts[1].url_2}`}
											alt=""
										/>
									</div>
								</div>
								<div className="post-desc">
									<div className="post-meta">
										<ul className="list-inline">
											<li>
												<i className="la la-calendar mr-1"></i>{" "}
												{
													dataSidebar.data.blogs[2]
														.posts[1].date
												}
											</li>
											<li>
												<i className="la la-user mr-1"></i>{" "}
												{
													dataSidebar.data.blogs[2]
														.posts[1].author
												}
											</li>
										</ul>
									</div>
									<div className="post-title">
										<h4>
											<a href="/blogsingle">
												{
													dataSidebar.data.blogs[2]
														.posts[1].title
												}
											</a>
										</h4>
									</div>
									<p>
										{
											dataSidebar.data.blogs[2].posts[1]
												.description
										}
									</p>
									<a
										className="icon-btn mt-4"
										href="/blogsingle"
									>
										{" "}
										<i className="la la-angle-right"></i>
									</a>
								</div>
							</div>
							{dataSidebar.data.blogs[2].posts[2].videos.map(
								(post, index) => (
									<div className="post mt-8" key={index}>
										<div className="video-post">
											<iframe
												title="Video-Post"
												src={`${URL.img_url}${post["url"]}`}
											></iframe>
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
								)
							)}
							<nav aria-label="Page navigation" className="mt-8">
								<ul className="pagination">
									<li className="page-item">
										<a className="page-link" href="/#">
											<i className="fas fa-long-arrow-alt-left"></i>
										</a>
									</li>
									{dataSidebar.data.blogs[2].pagination.map(
										(page, index) => (
											<li
												className={`page-item ${
													page["count"] === 1
														? "active"
														: ""
												}`}
												key={index}
											>
												<a
													className="page-link"
													href={`${page["link"]}`}
												>
													{page["count"]}
												</a>
											</li>
										)
									)}
									<li className="page-item">
										<a className="page-link" href="/#">
											<i className="fas fa-long-arrow-alt-right"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-4 col-md-12 sidebar md-mt-5">
							<div className="widget">
								<div className="widget-search">
									<form className="form-inline form">
										<div className="widget-searchbox">
											<button
												type="submit"
												className="search-btn"
											>
												{" "}
												<i className="fas fa-search"></i>
											</button>
											<input
												type="text"
												placeholder="Search Here..."
												className="form-control"
											/>
										</div>
									</form>
								</div>
							</div>
							<div className="widget">
								<h5 className="widget-title">Categories</h5>
								<ul className="widget-categories list-unstyled">
									{dataSidebar.data.blogs[2].widgits.categories.map(
										(category, index) => (
											<li key={index}>
												{" "}
												<a href={`${category["link"]}`}>
													{category["title"]}{" "}
													<span>
														({category["count"]})
													</span>
												</a>
											</li>
										)
									)}
								</ul>
							</div>
							<div className="widget">
								<h5 className="widget-title">Recent Post</h5>
								<div className="recent-post">
									<ul className="list-unstyled">
										{dataSidebar.data.blogs[2].widgits.posts.map(
											(post, index) => (
												<li
													className="mb-3"
													key={index}
												>
													<div className="recent-post-thumb">
														<img
															className="img-fluid"
															src={`${URL.img_url}${post["img_url"]}`}
															alt=""
														/>
													</div>
													<div className="recent-post-desc">
														{" "}
														<a href="/blogsingle">
															{post["title"]}
														</a>
														<div className="post-date">
															{post["date"]}
														</div>
													</div>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
							<div className="widget">
								<h5 className="widget-title">Tags</h5>
								<ul className="widget-tags list-inline">
									{dataSidebar.data.blogs[2].widgits.tags.map(
										(tag, index) => (
											<li key={index}>
												{" "}
												<a href={`${tag["link"]}`}>
													{tag["name"]}
												</a>
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Content;
