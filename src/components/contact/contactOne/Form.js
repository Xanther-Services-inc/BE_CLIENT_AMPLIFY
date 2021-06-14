import React from "react";
import dataContact from "../../data.json";
import { useForm } from "react-hook-form";
import Axios from "axios";
import swal from 'sweetalert'


const Form = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = async (data) => {
		const formData = await Axios.post(`${process.env.REACT_APP_API}/api/v1/contact/create`, data)
		if(formData){
			swal("Congratulation!", "Message send successfully.", "success")
			window.location.reload()
		} else {
			swal("Error!", "Can't send Message.", "error")
			window.location.reload()
		}
	};

	return (
		<div className="page-content">
			<section className="contact-1">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-8 col-md-12 mr-auto">
							<div className="section-title">
								<div className="title-effect">
									<div className="bar bar-top"></div>
									<div className="bar bar-right"></div>
									<div className="bar bar-bottom"></div>
									<div className="bar bar-left"></div>
								</div>
								<h6>
									{dataContact.data.contact[0].details.title}
								</h6>
								<h2>
									{
										dataContact.data.contact[0].details
											.sub_title
									}
								</h2>
								<p>
									{
										dataContact.data.contact[0].details
											.description
									}
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<form
								id="contact-form"
								onSubmit={handleSubmit(onSubmit)}
							>
								<div className="messages"></div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="firstName">
												First Name
											</label>
											{errors.firstName && (
												<span className="help-block with-errors">
													Firstname is required.
												</span>
											)}

											<input
												id="form_name"
												type="text"
												name="firstName"
												className="form-control"
												placeholder="Type First name"
												ref={register({
													required: "Required",
												})}
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="lastName">
												Last Name
											</label>
											{errors.lastName && (
												<span className="help-block with-errors">
													Lastname is required.
												</span>
											)}
											<input
												id="form_lastname"
												type="text"
												name="lastName"
												className="form-control"
												placeholder="Type Last name"
												ref={register({
													required: "Required",
												})}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="email">
												Email Address
											</label>
											{errors.email && (
												<span className="help-block with-errors">
													Valid email is required.
												</span>
											)}
											<input
												id="form_email"
												type="email"
												name="email"
												className="form-control"
												placeholder="Type Email"
												ref={register({
													required: "Required",
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
													},
												})}
											/>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label>Phone Number</label>
											{errors.phone && (
												<span className="help-block with-errors">
													Valid phone required (10
													digits)
												</span>
											)}

											<input
												id="form_phone"
												type="tel"
												name="phone"
												className="form-control"
												placeholder="Type Phone"
												ref={register({
													required: "Required",
													pattern: {
														value: /^\d{10}$/,
													},
												})}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="form-group">
											<label>Message</label>
											{errors.message && (
												<span className="help-block with-errors">
													Please,leave us a message.
												</span>
											)}
											<textarea
												id="form_message"
												name="message"
												className="form-control"
												placeholder="Type Message"
												rows="4"
												ref={register({
													required: "Required",
												})}
											></textarea>
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
										dataContact.data.contact[0].details
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
									href={`mailto:${dataContact.data.contact[0].details.email}`}
								>
									{" "}
									{dataContact.data.contact[0].details.email}
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 md-mt-5">
							<div className="contact-media">
								{" "}
								<i className="flaticon-social-media"></i>
								<span>Phone Number</span>
								<a
									href={`mailto:${dataContact.data.contact[0].details.phone}`}
								>
									{dataContact.data.contact[0].details.phone}
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
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Form;
