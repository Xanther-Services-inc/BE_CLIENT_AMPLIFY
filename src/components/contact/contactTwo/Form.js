import React from "react";
import dataContact from "../../data.json";
import { useForm } from "react-hook-form";

const Form = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};
	return (
		<>
			<section className="contact-1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<img
								className="img-center"
								src={
									dataContact.data.contact[1].details.img_url
								}
								alt=""
							/>
						</div>
						<div className="col-lg-6 col-md-12 md-mt-5">
							<div className="section-title">
								<div className="title-effect title-effect-2">
									<div className="ellipse"></div>{" "}
									<i className="la la-info"></i>
								</div>
								<h2>
									{
										dataContact.data.contact[1].details
											.sub_title
									}
								</h2>
								<p>
									{
										dataContact.data.contact[1].details
											.description
									}
								</p>
							</div>
							<form
								id="contact-form"
								onSubmit={handleSubmit(onSubmit)}
							>
								<div className="messages"></div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												id="form_name"
												type="text"
												name="firstName"
												className="form-control"
												placeholder="Type First name"
												required="required"
												data-error="Firstname is required."
												ref={register({
													required: "Required",
												})}
											/>

											{errors.firstName && (
												<div className="help-block with-errors">
													Firstname is required.
												</div>
											)}
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												id="form_lastname"
												type="text"
												name="surname"
												className="form-control"
												placeholder="Type Last name"
												required="required"
												data-error="Lastname is required."
												ref={register({
													required: "Required",
												})}
											/>
											{errors.lastName && (
												<div className="help-block with-errors">
													Lastname is required.
												</div>
											)}
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												id="form_email"
												type="email"
												name="email"
												className="form-control"
												placeholder="Type Email"
												required="required"
												data-error="Valid email is required."
												ref={register({
													required: "Required",
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													},
												})}
											/>
											{errors.email && (
												<div className="help-block with-errors">
													Valid email is required.
												</div>
											)}
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												id="form_phone"
												type="tel"
												name="phone"
												className="form-control"
												placeholder="Type Phone"
												required="required"
												data-error="Phone is required"
												ref={register({
													required: "Required",
													pattern: {
														value: /^\d{10}$/,
													},
												})}
											/>
											{errors.phone && (
												<div className="help-block with-errors">
													Valid phone required (10
													digits)
												</div>
											)}
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<textarea
												id="form_message"
												name="message"
												className="form-control"
												placeholder="Type Message"
												rows="4"
												required="required"
												data-error="Please,leave us a message."
												ref={register({
													required: "Required",
												})}
											></textarea>
											{errors.message && (
												<div className="help-block with-errors">
													Please,leave us a message.
												</div>
											)}
										</div>
									</div>
									<div className="col-md-12 mt-2">
										<button
											className="btn btn-theme btn-circle"
											data-text="Send Message"
											type="submit"
										>
											<span>S</span>
											<span>e</span>
											<span>n</span>
											<span>d</span>
											<span> </span>
											<span>M</span>
											<span>e</span>
											<span>s</span>
											<span>s</span>
											<span>a</span>
											<span>g</span>
											<span>e</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section className="contact-info p-0 z-index-1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="contact-media">
								{" "}
								<i className="flaticon-paper-plane"></i>
								<span>Address:</span>
								<p>
									{
										dataContact.data.contact[1].details
											.address
									}
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 md-mt-5">
							<div className="contact-media">
								{" "}
								<i className="flaticon-email"></i>
								<span>Email Address</span>
								<a
									href={`mailto:${dataContact.data.contact[1].details.email}`}
								>
									{" "}
									{dataContact.data.contact[1].details.email}
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 md-mt-5">
							<div className="contact-media">
								{" "}
								<i className="flaticon-social-media"></i>
								<span>Phone Number</span>
								<a
									href={`tel:${dataContact.data.contact[1].details.phone}`}
								>
									{dataContact.data.contact[1].details.phone}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="o-hidden p-0 custom-mt-10 z-index-0">
				<div className="container-fluid p-0">
					<div className="row align-items-center">
						<div className="col-md-12">
							<div className="map iframe-h-2">
								<iframe
									title="GoogleMap"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921"
									allowfullscreen=""
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Form;
