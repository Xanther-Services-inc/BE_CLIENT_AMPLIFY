import React, { useState, useEffect } from "react";
import countries from "../data.json";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../Redux/actions/userActions';
import { useHistory } from "react-router-dom";
import Message from "../../helpers/Message";
import Loader from "../../helpers/Loader";



const Form = () => {
	const [message, setMessage] = useState(null)


	const { register, handleSubmit, errors } = useForm();

	const dispatch = useDispatch()

	const userRegister = useSelector((state)=> state.userRegister)
	const {loading, error, userInfo } = userRegister;

	let history = useHistory();

	// useEffect(() => {
	// 	if(userInfo){
	// 		// history.push('/')
	// 		// return <Message variant='success'>{userInfo}</Message>
	// 	}
		
	//   }, [userInfo]);

	const onSubmit = (data,e) => {
		e.preventDefault();
		if (data.password !== data.confirmPassword) {
			setMessage('Password do not match')
		} else {
			dispatch(registration(data.email,
				data.country,
				data.gender,
				data.password,
				data.phone, 
				data.firstName,
				data.lastName, 
			))
		}
	}





	// const onSubmit = (data) => {
		// console.log(data);
	// 	let user_data = JSON.stringify(data);
	// 	window.localStorage.setItem("user_data", user_data);
	// 	window.location = "/signupsuccess";
	// 	//alert(JSON.stringify(data));
	// };
	return (
		<section className="register pos-r o-hidden">
			<div className="bg-animation">
				<img className="zoom-fade" src="images/pattern/03.png" alt="" />
			</div>
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
							<h6>Register Now</h6>
							<h2>Simple And Easy To Sign Up</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-md-10 ml-auto mr-auto">
						<div className="register-form text-center">
						{message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
	  {userInfo && <Message variant='sucess'>Registration Complete Go to signup</Message>}
							<form
								id="contact-form"
								onSubmit={handleSubmit(onSubmit)}
							>
								<div className="messages"></div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												id="firstName"
												type="text"
												name="firstName"
												className="form-control"
												placeholder="First name"
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
												id="lastName"
												type="text"
												name="lastName"
												className="form-control"
												placeholder="Last name"
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
												id="email"
												type="email"
												name="email"
												className="form-control"
												placeholder="Email"
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
												id="phone"
												type="tel"
												name="phone"
												className="form-control"
												placeholder="Phone"
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
									<div className="col-md-6">
										<div className="form-group">
											<input
												id="password"
												type="password"
												name="password"
												className="form-control"
												placeholder="Password"
												required="required"
												data-error="password is required."
												ref={register({
													required: "Required",
												})}
											/>
											{errors.password && (
												<div className="help-block with-errors">
													Password is required.
												</div>
											)}
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												id="confirmPassword"
												type="password"
												name="confirmPassword"
												className="form-control"
												placeholder="Conform Password"
												required="required"
												data-error="Conform Password is required."
												ref={register({
													required: "Required",
												})}
											/>
											{errors.password && (
												<div className="help-block with-errors">
													Password is required.
												</div>
											)}
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<select
												className="form-control"
												name="gender"
												ref={register({
													required: true,
												})}
											>
												<option value="">
													Select Gender...
												</option>
												<option value="male">
													Male
												</option>
												<option value="female">
													Female
												</option>
											</select>
											{errors.gender && (
												<div className="help-block with-errors">
													Please select a gender.
												</div>
											)}
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<select
												className="form-control"
												name="country"
												ref={register({
													required: true,
												})}
											>
												<option value="">
													Select Country...
												</option>
												{countries.data.countries.map(
													(country, index) => (
														<option
															value={`${country["code"]}`}
															key={index}
														>
															{country["name"]}
														</option>
													)
												)}
											</select>
											{errors.country && (
												<div className="help-block with-errors">
													Please select a country.
												</div>
											)}
											<div className="help-block with-errors"></div>
										</div>
									</div>
								</div>
								{/*<div className="row mt-5">
									<div className="col-md-12">
										<div className="remember-checkbox clearfix mb-5">
											<div className="custom-control custom-checkbox">
												<input
													type="checkbox"
													className="custom-control-input"
													id="customCheck1"
													ref={register({
														required: true,
													})}
												/>
												<label
													className="custom-control-label"
													for="customCheck1"
												>
													I agree to the term of use
													and privacy policy
												</label>
											</div>
										</div>
									</div>
                                </div>
                                                */}
								<div className="row">
									<div className="col-md-12">
										<button
											href="/#"
											className="btn btn-theme btn-circle"
											data-text="Create Account"
											type="submit"
										>
											<span>C</span>
											<span>r</span>
											<span>e</span>
											<span>a</span>
											<span>t</span>
											<span>e</span>
											<span> </span>
											<span>A</span>
											<span>c</span>
											<span>c</span>
											<span>o</span>
											<span>u</span>
											<span>n</span>
											<span>t</span>
										</button>
										<h5 className="mb-0 text-capitalize mt-4">
											Have An Account ?{" "}
											<a href="/login">
												<i>Sign In!</i>
											</a>
										</h5>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Form;
