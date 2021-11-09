import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Upload,
  Progress,
  Spin,
  Steps,
  message,
} from "antd";
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
import { UploadOutlined } from "@ant-design/icons";
import swal from "sweetalert";

const _ = require("lodash");

const { Step } = Steps;

const ProjectDetails = ({ match }) => {
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // console.log("userInfo", userInfo.token);

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

  // start

  const [messageData, setMessageData] = useState("");

  const props = {
    name: "image",
    action: `${process.env.REACT_APP_API}/api/v1/blog/upload`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        setMessageData({ ...messageData, image: info.file.response.Location });
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = async (values) => {
    console.log(values);
    setMessageData(values.message);
    // setFields({ ...fields, values });
    const postData = await axios
      .post(
        `${process.env.REACT_APP_API}/api/v1/message/send`,
        { message: values.message,order_id: id, img: "", user: userInfo.user.firstName },
        {
          headers: { "content-type": "application/json" },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    swal("Congratulation!", "Product Added Successfully", "success");
    window.location.reload();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(messageData);

  // end

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

              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Message!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Send
                  </Button>
                </Form.Item>
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
                    //console.log(messages)
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

                        {message.image !== "" ? (
                          <Link
                            to={{
                              pathname: message.image,
                            }}
                            target="_blank"
                          >
                            <img
                              src={message.image}
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
