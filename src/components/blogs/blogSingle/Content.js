import React from "react";
import dataBlog from "../../data.json";
const URL = require("../../constants");

const Content = () => {
	let counter = 0;
	return (
		<div className="page-content">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="left-side">
								<div className="post">
									<div className="post-image">
										<img
											className="img-fluid"
											src={`${URL.img_url}${dataBlog.data.blogs[3].posts[0].img_url}`}
											alt="description of image"
										/>
									</div>
									<div className="post-desc">
										<div className="post-meta">
											<ul className="list-inline">
												<li>
													<i className="la la-calendar mr-1"></i>{" "}
													{
														dataBlog.data.blogs[3]
															.posts[0].date
													}
												</li>
												<li>
													<i className="la la-user mr-1"></i>{" "}
													{
														dataBlog.data.blogs[3]
															.posts[0].author
													}
												</li>
											</ul>
										</div>
										<div className="post-title">
											<h2>
												{
													dataBlog.data.blogs[3]
														.posts[0].title
												}
											</h2>
										</div>
										<p className="lead">
											{
												dataBlog.data.blogs[3].posts[0]
													.description
											}
										</p>
										<p className="mb-0">
											{
												dataBlog.data.blogs[3].posts[0]
													.short_text
											}
										</p>
										<div className="blog-share d-sm-flex justify-content-between mt-5">
											<div className="social-icons">
												<h4 className="mb-2">
													Share:{" "}
												</h4>
												<ul>
													<li>
														<a
															href={`${dataBlog.data.blogs[3].posts[0].facebook}`}
														>
															<i className="fab fa-facebook-f"></i>
														</a>
													</li>
													<li>
														<a
															href={`${dataBlog.data.blogs[3].posts[0].twitter}`}
														>
															<i className="fab fa-twitter"></i>
														</a>
													</li>
													<li>
														<a
															href={`${dataBlog.data.blogs[3].posts[0].google_plus}`}
														>
															<i className="fab fa-google-plus-g"></i>
														</a>
													</li>
												</ul>
											</div>
											<div className="post-tags text-sm-right xs-mt-3">
												<h4 className="mb-2">Tags: </h4>
												<ul className="list-inline">
													{dataBlog.data.blogs[3].posts[0].tags.map(
														(tag, index) => (
															<li key={index}>
																<a
																	href={`${tag["link"]}`}
																>
																	{
																		tag[
																			"name"
																		]
																	}
																</a>
															</li>
														)
													)}
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="my-5">
									<h3 className="text-black">
										{dataBlog.data.blogs[3].posts[1].title}
									</h3>
									<p className="mt-3 mb-0">
										{
											dataBlog.data.blogs[3].posts[1]
												.description
										}
									</p>
									<img
										className="img-fluid radius box-shadow my-4"
										src={`${URL.img_url}${dataBlog.data.blogs[3].posts[1].img_url}`}
										alt="post-image"
									/>
									<p>
										{
											dataBlog.data.blogs[3].posts[1]
												.short_text
										}
									</p>
								</div>
								<div
									className="owl-carousel owl-theme"
									data-dots="false"
									data-items="2"
									data-sm-items="1"
									data-autoplay="true"
								>
									<div className="item">
										<div className="post">
											<div className="post-image">
												<img
													className="img-fluid h-100 w-100"
													src="images/blog/01.jpg"
													alt="post-image"
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
														<a href="blog-single.html">
															Softino Performance
															Based Software
														</a>
													</h4>
												</div>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="post">
											<div className="post-image">
												<img
													className="img-fluid h-100 w-100"
													src="images/blog/02.jpg"
													alt="post-image"
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
														<a href="blog-single.html">
															latest Software
															design in features
														</a>
													</h4>
												</div>
											</div>
										</div>
									</div>
									<div className="item">
										<div className="post">
											<div className="post-image">
												<img
													className="img-fluid h-100 w-100"
													src="images/blog/03.jpg"
													alt="post-image"
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
														<a href="blog-single.html">
															All Powerful Design
															feature In Softino
														</a>
													</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="media-holder mt-5">
									<div className="section-title mb-4">
										<h2 className="title">All Comments</h2>
									</div>
									{dataBlog.data.blogs[3].comments.map(
										(comment, index) => (
											<div
												className={`media ${
													counter++ === 1
														? "inner box-shadow"
														: ""
												}`}
												key={index}
											>
												<img
													className="img-center mr-3"
													alt="image"
													src={`${URL.img_url}${comment["img_url"]}`}
												/>
												<div className="media-body">
													<h6>{comment["name"]}</h6>
													<div className="comment-date">
														{comment["date"]}
													</div>
													<p>
														{comment["description"]}
													</p>
													<div className="comment-reply">
														{" "}
														<a
															href={`${comment["reply_link"]}`}
														>
															{
																comment[
																	"reply_label"
																]
															}
														</a>
													</div>
												</div>
											</div>
										)
									)}
								</div>
								<div className="post-comments mt-5">
									<div className="section-title mb-4">
										<h2 className="title">
											Leave A Comment
										</h2>
									</div>
									<form
										id="contact-form"
										method="post"
										action="contact.php"
									>
										<div className="messages"></div>
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="name"
												className="form-control"
												placeholder="Name"
												required="required"
												data-error="Name is required."
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												id="form_email"
												type="email"
												name="email"
												className="form-control"
												placeholder="Email"
												required="required"
												data-error="Valid email is required."
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group mb-0">
											<textarea
												id="form_message"
												name="message"
												className="form-control h-100"
												placeholder="Your Comment"
												rows="4"
												required="required"
												data-error="Please,leave us a message."
											></textarea>
											<div className="help-block with-errors"></div>
										</div>
										<button
											className="btn btn-theme mt-5"
											data-text="Post Comment"
										>
											<span>P</span>
											<span>o</span>
											<span>s</span>
											<span>t</span>
											<span> </span>
											<span>C</span>
											<span>o</span>
											<span>m</span>
											<span>m</span>
											<span>e</span>
											<span>n</span>
											<span>t</span>
										</button>
									</form>
								</div>
							</div>
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
									{dataBlog.data.blogs[3].widgits.categories.map(
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
										{dataBlog.data.blogs[3].widgits.posts.map(
											(post, index) => (
												<li
													className="mb-3"
													key={index}
												>
													<div className="recent-post-thumb">
														<img
															className="img-fluid"
															src={`${URL.img_url}${post["img_url"]}`}
															alt="post-image"
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
									{dataBlog.data.blogs[3].widgits.tags.map(
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
