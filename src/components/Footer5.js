import React from "react";
//import ColorCustomizer from "./ColorCustomizer";
import ScrollTop from "./ScrollTop";

const Footer5 = () => {
    return (
        <>
            {/* footer start */}
            <footer
                className="footer dark-bg pos-r animatedBackground"
                data-bg-img="images/pattern/03.png"
            >
                <div className="primary-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-logo">
                                    <img
                                        id="footer-logo-img"
                                        src="images/logo-customizer-white/logo-color-5.png"
                                        className="img-center"
                                        alt=""
                                    />
                                </div>
                                <p className="mb-0">
                                    Softino Software Landing Page Is fully responsible,
                                    Build whatever you like with the Softino,
                                    Softino is the creative,
                                    modern react Template suitable for Your business.
								</p>
                            </div>
                            <div className="col-lg-4 col-md-6 pl-md-5 sm-mt-5 footer-list justify-content-between d-flex">
                                <ul className="list-unstyled w-100">
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/service">Service</a>
                                    </li>
                                    <li>
                                        <a href="/team">Team</a>
                                    </li>
                                    <li>
                                        <a href="/teamsingle">Team Single</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled w-100">
                                    <li>
                                        <a href="/rightsidebar">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/faq">Faq</a>
                                    </li>
                                    <li>
                                        <a href="/error404">Error 404</a>
                                    </li>
                                    <li>
                                        <a href="/privacy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/terms">Terms</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-12 md-mt-5">
                                <ul className="media-icon list-unstyled">
                                    <li>
                                        <p className="mb-0">
                                            Address:{" "}
                                            <b>
                                                423B, Road Wordwide Country, USA
											</b>
                                        </p>
                                    </li>
                                    <li>
                                        Email:{" "}
                                        <a href="mailto:abcd@gmail.com">
                                            <b>abcd@gmail.com</b>
                                        </a>
                                    </li>
                                    <li>
                                        Phone:{" "}
                                        <a href="tel:+912345678900">
                                            <b>+91-234-567-8900</b>
                                        </a>
                                    </li>
                                    <li>
                                        Fax:{" "}
                                        <a href="tel:+912345678900">
                                            <b>+91-234-567-8900</b>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondary-footer">
                    <div className="container">
                        <div className="copyright">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    {" "}
                                    <span>
                                    Copyright 2020 Softino {" "} Theme by ThemeHt
										| All Rights Reserved
									</span>
                                </div>
                                <div className="col-lg-6 col-md-12 text-lg-right md-mt-3">
                                    <div className="footer-social">
                                        <ul className="list-inline">
                                            <li className="mr-2">
                                                <a href="/#">
                                                    <i className="fab fa-facebook-f"></i>{" "}
													Facebook
												</a>
                                            </li>
                                            <li className="mr-2">
                                                <a href="/#">
                                                    <i className="fab fa-twitter"></i>{" "}
													Twitter
												</a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fab fa-google-plus-g"></i>{" "}
													Google Plus
												</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}
            {/* <ColorCustomizer /> */}
            <ScrollTop />
        </>
    );
};

export default Footer5;
