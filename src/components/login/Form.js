import React, {useState,useEffect} from "react";
import { useForm } from "react-hook-form";
// import { Link, withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../Redux/actions/userActions';
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
// import Login from ".";
import FormContainer from './FormContainer';
import Message from "../../helpers/Message";
import Loader from "../../helpers/Loader";

const Form = ({ location}) => {
	const { register, handleSubmit, errors } = useForm();


	const dispatch = useDispatch()


	const userLogin = useSelector((state)=> state.userLogin)
	const {loading, error,isAuth, userInfo} = userLogin

	
	// const redirect = location.search ? location.search.split('=')[1] : '/'
	let history = useHistory();
	// const history = createHistory();

	useEffect(() => {
		if(userInfo){
			history.push('/')
		}
		
	  }, [userInfo,history]);

	const onSubmit = (data,e) =>{
		e.preventDefault();
		dispatch(login(data.username,data.password))
	}


	
	// const onSubmit = (data) => {
	// 	let user_data = window.localStorage.getItem("user_data");
	// 	let parsed_data = JSON.parse(user_data);
	// 	let username = data.username;
	// 	let password = data.password;

	// 	if (
	// 		username === parsed_data.email &&
	// 		password === parsed_data.password
	// 	) {
	// 		window.location = "/dash";
	// 	} else {
	// 		console.log("Oops");
	// 	}
	// 	//alert(JSON.stringify(data));
	// };
	const responseGoogle = (response) => {
		console.log(response);
	  }
	return (
		<FormContainer>
		<div className="page-content">
			<section className="login">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<img
								className="img-fluid"
								src="images/banner/4195174.jpg"
								alt=""
							/>
						</div>
						<div className="col-lg-5 col-md-12 ml-auto mr-auto md-mt-5">
							<div className="login-form text-center">
								{/* <img
									className="img-center mb-5"
									src="images/logo.png"
									alt=""
								/> */}
								<h1>Business Easy</h1>
								{error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
								<form
									id="contact-form"
									onSubmit={handleSubmit(onSubmit)}
								>
									<div className="messages"></div>
									<div className="form-group">
										<input
											id="form_name"
											type="text"
											name="username"
											className="form-control"
											placeholder="Email"
											required="required"
											data-error="Username is required."
											ref={register({
												required: "Required",
											})}
										/>
										{errors.username && (
											<div className="help-block with-errors">
												Username is required.
											</div>
										)}
									</div>
									<div className="form-group">
										<input
											id="form_password"
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
									<div className="form-group mt-4 mb-5">
										<div className="remember-checkbox d-flex align-items-center justify-content-between">
											{/* <div className="checkbox">
												<input
													type="checkbox"
													id="check2"
													name="check2"
												/>
												<label for="check2">
													Remember me
												</label>
											</div> */}
											<a href="/forgot-password">Forgot Password?</a>
										</div>
                                    </div>{" "}
                                       
									<button
										// href="/#"
										className="btn btn-theme btn-block btn-circle"
										data-text="Sign in"
										type="submit"
									>
										<span>S</span>
										<span>i</span>
										<span>g</span>
										<span>n</span>
										<span> </span>
										<span>I</span>
										<span>n</span>
									</button>
									
									
									
								</form>
								<h5 className="mb-0 mt-4 text-capitalize">
									Don't Have An Account ?{" "}
									
									<a href="/register">
										<i>Sign Up!</i>
									</a>
									
								</h5>
								{/* <div className="social-icons fullwidth social-colored mt-4 text-center clearfix">
									<ul className="list-inline">
										
										<li className="social-gplus">
										<GoogleLogin
											clientId="334944445079-1t1g9k239fgfj9d5phmrnckjv70r6do9.apps.googleusercontent.com"
											buttonText="Login"
											onSuccess={responseGoogle}
											onFailure={responseGoogle}
											cookiePolicy={'single_host_origin'}
										/>
										</li>
									</ul>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		</FormContainer>
	);
};

export default Form;
