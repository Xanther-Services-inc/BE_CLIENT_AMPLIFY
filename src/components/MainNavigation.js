import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeOne from "./home/homeOne";

import Team from "./pages/team";
import TeamSingle from "./pages/teamSingle";
import Faq from "./pages/faq";
import Error404 from "./pages/error404";
import ComingSoon from "./pages/comingSoon";
import Accordion from "./pages/element/accordion";
import Counter from "./pages/element/counter";
import FeatureBox from "./pages/element/featureBox";
import PricingTable from "./pages/element/pricingTable";
import TeamElement from "./pages/element/team";
import Testimonial from "./pages/element/testimonial";
import AboutOne from "./about/aboutOne";
import AboutTwo from "./about/aboutTwo";
import ServiceOne from "./services/serviceOne";
import ServiceTwo from "./services/serviceTwo";
import ContactOne from "./contact/contactOne";
import Blog from "./blogs/blogGrid";
import BlogDetails from "./blogs/blogSingle";

import Login from "./login";
import SignUp from "./signup";
import Privacy from "./policy/privacy";
import Terms from "./policy/terms";
import LoginSuccess from "./pages/loginSuccess";
import SignupSuccess from "./pages/signupSuccess";
import Form from "./form/index";
import Dash from "./dash";
// import ProductScreen from "./home/homeOne/content/ProductScreen1.txt";
// import ProductScreen from './home/homeOne/content/ProductDetails';
// import ProductScreen1 from "./home/homeOne/content/ProductScreen1.txt";
// import ProductScreen2 from "./home/homeOne/content/ProductScreen2";
import FormValidation from "./home/OrderCreate/OrderCreateOne";

import OrderSuccess from "./home/OrderCreate/OrderSuccess";
import ProGrid from "./project/overview/ProGrid";
import ProjectDetails from "./project/ProjectDetails";
import Email from "./email/Email";
import Inbox from "./email/overview/Inbox";
import IssueDetails from "./email/overview/issueDetails";
import ProductDetails from "./services/serviceOne/ProductDetails";
import { useSelector } from "react-redux";
import axios from "axios";
import ForgotPassword from "../components/login/ForgotPassword";
import ResetPassword from "../components/login/ResetPassword";

function MainNavigation() {
  return (
    <Router>
      <Switch>
        {/** Home */}
        <Route path="/" exact={true} component={HomeOne} />

        <Route path="/team" exact={true} component={Team} />
        <Route path="/teamsingle" exact={true} component={TeamSingle} />
        <Route path="/faq" exact={true} component={Faq} />
        <Route path="/comingsoon" exact={true} component={ComingSoon} />
        <Route path="/loginsuccess" exact={true} component={LoginSuccess} />
        <Route path="/signupsuccess" exact={true} component={SignupSuccess} />
        <Route path="/error404" exact={true} component={Error404} />
        {/** Elements */}
        <Route path="/accordion" exact={true} component={Accordion} />
        <Route path="/counter" exact={true} component={Counter} />
        <Route path="/featurebox" exact={true} component={FeatureBox} />
        <Route path="/pricing" exact={true} component={PricingTable} />
        <Route path="/teamelement" exact={true} component={TeamElement} />
        <Route path="/testimonial" exact={true} component={Testimonial} />
        {/** About Services & Contact */}
        <Route path="/about" exact={true} component={AboutOne} />
        {/* <Route path="/about-two" exact={true} component={AboutTwo} /> */}
        <Route path="/service" exact={true} component={ServiceOne} />
        {/* <Route path="/service-two" exact={true} component={ServiceTwo} /> */}
        <Route path="/contact" exact={true} component={ContactOne} />
        {/* <Route path="/contact-two" exact={true} component={ContactTwo} /> */}
        <Route path="/service/:id" component={ProductDetails} />

        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={SignUp} />
        <Route path="/privacy" exact={true} component={Privacy} />
        <Route path="/terms" exact={true} component={Terms} />

        <Route path="/dash" exact={true} component={Dash} />

        <Route path="/order/:id" component={FormValidation} />

        <Route path="/order-success" component={OrderSuccess} />
        <Route path="/myorders" exact component={ProGrid} />
        <Route path="/myorders/:id" component={ProjectDetails} />
        <Route path="/issues" exact component={Inbox} />
        <Route path="/issues/single/:id" component={IssueDetails} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/user/password/reset/:token" component={ResetPassword} />
        <Route path="/blogs" exact component={Blog} />
        <Route path="/blogs/:slug" component={BlogDetails} />

        {/** invalid routes redirection */}
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default MainNavigation;
