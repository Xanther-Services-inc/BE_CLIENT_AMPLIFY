import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form, Input, Button, Progress, Spin, Steps } from "antd";
import FeatherIcon from "feather-icons-react";
import { Link, NavLink, Switch, Route, useHistory } from "react-router-dom";
import propTypes from "prop-types";
import { ProjectDetailsWrapper, TaskLists } from "./style";
import FileListCard from "./overview/FileListCard";
// import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from "./styled";
// import Heading from '../../components/heading/heading';
import { Cards } from "./cards/frame/cards-frame";
// import { Button } from './buttons/buttons';
import Header1 from "../Header1";
import Footer1 from "../Footer1";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";

const _ = require("lodash");

const { Step } = Steps;

const ProjectDetails = ({ match }) => {
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log("userInfo", userInfo.token);

  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    if (userInfo) {
      console.log("aaa");
      const fetchData = async () => {
        let { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/order?id=${match.params.id}`,
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        // console.log("order details");
        console.log(data);
        setOrderDetails(data);
      };
      fetchData();
    } else {
      history.push("/");
    }
  }, []);

  var {
    // firstName,
    // lastName,
    // zip,
    // endDate,
    // dueDate,
    payment_id,
    startDate,
    order_status,
    email,
    doc_key,
    // country,
    payment,
    product_id,
    price,
    // gender,
    // state,
    // city,
    emp_assigned,
    // dob,
    id,
    order_steps,
    // phone,
    // pan,
  } = orderDetails;

  order_steps = order_steps ? order_steps.split(",") : [];

  const image = _.get(orderDetails, "image");
  const order_data = _.get(orderDetails, "order_data");
  console.log(orderDetails);

  const details = [];
  for (let [key, value] of Object.entries(order_data ? order_data : {})) {
    details.push([key, value]);
  }

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (userInfo) {
      const fetchMessage = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/messages?order_id=${match.params.id}`,
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        console.log("message", data);
        setMessages(data);
      };
      fetchMessage();
    } else {
      history.push("/");
    }
  }, []);

  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");
  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    // console.log(e);
  };

  const handleSubmit = async (values) => {
    var fd = new FormData();
    fd.append("message", values.message);
    fd.append("order_id", id);
    fd.append("img", fileName);
    fd.append("user", userInfo.user);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const url = `${process.env.REACT_APP_API}/api/v1/message/send`;

    const { data } = await axios.post(url, fd, config);
    window.location.reload();
  };

  const rightMessage = {
    textAlign: "right",
    paddingRight: "1rem",
  };

  const leftMessage = {
    textAlign: "left",
    marginLeft: "1rem",
  };

  return (
    <ProjectDetailsWrapper>
      <Header1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Main>
        <div style={{ textAlign: "center" }}>
          <h1>Order Details</h1>
        </div>
        <Row gutter={25}>
          <Col xxl={6} xl={8} xs={24}>
            <Cards headless>
              <h3>Customer Details</h3>
              <hr />

              <h5>
                <strong>Email:</strong> {email}
              </h5>

              <div className="state-single">
                <div>
                  {details &&
                    details.map((item) => {
                      return (
                        <h5>
                          <strong>{item[0]}:</strong> {item[1]}
                        </h5>
                      );
                    })}
                </div>
              </div>
            </Cards>

            {/* new */}
            <Cards headless>
              <h3>Make A Conversation</h3>
              <hr />
              <Form onFinish={handleSubmit} form={form}>
                <Row gutter={30}>
                  <Col md={20} xs={20}>
                    <Form.Item name="message">
                      <Input placeholder="Type your message.." />
                    </Form.Item>
                  </Col>
                  <Col md={20} xs={20}>
                    <input
                      fileName="image"
                      name="img"
                      onChange={onChangeFile}
                      type="file"
                    />
                    <br />
                  </Col>
                </Row>
                <div className="sDash_form-action mt-20">
                  <Button htmlType="submit" type="primary" size="large">
                    Send
                  </Button>
                </div>
              </Form>
            </Cards>
            {/* new */}
            {/* new */}
            <Cards title="Conversations">
              <Scrollbars
                style={{
                  width: "24rem",
                  height: "20rem",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                {messages &&
                  messages.map((message) => (
                    <>
                      {/* <br /> */}
                      <div
                        style={
                          message.user === userInfo.user
                            ? rightMessage
                            : leftMessage
                        }
                      >
                        <p style={{ color: "#0a8dff" }}>@{message.user}</p>
                        {message.message !== "undefined" ? (
                          <p>{message.message}</p>
                        ) : null}

                        {message.doc_key !== "sample.jpg" ? (
                          <Link
                            to={{
                              pathname: `https://order-message.s3.us-east-2.amazonaws.com/${message.doc_key}`,
                            }}
                            target="_blank"
                          >
                            <img
                              src={`https://order-message.s3.us-east-2.amazonaws.com/${message.doc_key}`}
                              style={{ height: "7rem", width: "60%" }}
                            ></img>
                          </Link>
                        ) : null}
                      </div>
                      <br />
                    </>
                  ))}
              </Scrollbars>
            </Cards>
            {/* new */}
          </Col>
          <Col xxl={12} xl={16} xs={24}>
            <div className="about-project-wrapper">
              <Cards title="Order Details">
                <div className="about-content">
                  <p>Order Id: {id}</p>
                  <p>Product: {product_id}</p>
                  <p>Price: 💰 {price}</p>
                  <p>Payment: {payment || "NA"}</p>
                  <p>Payment Id: {payment_id || "NA"}</p>
                </div>
                <div className="about-project">
                  <div>
                    <span>Start Date</span>
                    <p className="color-primary">{startDate}</p>
                  </div>
                  {/* <div>
                    <span>Deadline</span>
                    <p className="color-danger">{endDate || 'NA'}</p>
                  </div> */}
                  <div>
                    <span>Status</span>
                    <p className="color-danger">{order_status}</p>
                  </div>
                  <div>
                    <span>Assigned Employee</span>
                    <p className="color-danger">{emp_assigned || "NA"}</p>
                  </div>
                </div>
                <Steps
                  size="small"
                  current={order_steps ? order_steps.indexOf(order_status) : 0}
                >
                  {order_steps &&
                    order_steps.map((step) => {
                      return <Step title={step} />;
                    })}
                </Steps>
              </Cards>
              <div>
                <h3>Attached Documents</h3>
                {console.log(doc_key)}
                {image
                  ? image.map((doc) => <FileListCard key={doc} doc={doc} />)
                  : []}
              </div>
            </div>
          </Col>
        </Row>
      </Main>
      <Footer1 />
    </ProjectDetailsWrapper>
  );
};

ProjectDetails.propTypes = {
  match: propTypes.object,
};

export default ProjectDetails;
