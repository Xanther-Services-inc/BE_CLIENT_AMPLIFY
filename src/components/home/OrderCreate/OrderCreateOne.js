import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Upload,
  InputNumber,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import "antd/dist/antd.css";
import { displayRazorpay } from "./paymentReq/displayRazorpay";
import { paylater } from "./paymentReq/paylater";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import { FormValidationWrap, VerticalFormStyleWrap } from "./dependency/Style";
import { Main } from "./dependency/styled";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { Cards } from "./dependency/cards-frame";
var _ = require("lodash");

const { Option } = Select;

const FormValidation = ({ match }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const email = jwt_decode(userInfo.token).email;
  // console.log(jwt_decode(userInfo.token).email);

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product?id=${match.params.id}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, []);

  const formFields = _.get(product, "values.users");
  const price = _.get(product, "values.price");
  const product_id = _.get(product, "values.title");
  const steps = _.get(product, "values.steps");

  console.log(product);

  const [imageData, setImageData] = useState([]);

  // Image props
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
        console.log(info.file.response.Location);
        setImageData([...imageData, info.file.response.Location]);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [payLater, setPayLater] = useState(false);

  // Form submission function

  const handlePayLater = () => {
    setPayLater(true);
  };
  // let history = useHistory();
  const onFinish = async (values) => {
    if (!values) {
      swal("Warning", "Fields shouldn't be empty!", "warning");
      window.location.reload();
    }
    if (!payLater) {
      displayRazorpay(price, product_id, imageData, values, steps, email);
    } else {
      console.log(userInfo.token)
      const result = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/order/`,
        {
          price,
          product_id,
          image: imageData,
          order_data: values,
          order_steps: steps,
          email,
        },/*
        {
          headers: {
            Authorization: `Bearer ${userInfo ? userInfo.token : ""}`,
          }, 
        }*/
      );
      swal("Payment Success", "Payment Done Successfully!", "success");
      window.location.pathname = "/order-success";
      // paylater(price, product_id, imageData, values, steps, email);
    }
  };

  return (
    <>
      <Main>
        <Header1 />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row gutter={25}>
          <Col xs={24}>
            <FormValidationWrap>
              <VerticalFormStyleWrap>
                <Cards title="Create a New Order">
                  <Form
                    name="Dash_validation-form"
                    onFinish={onFinish}
                    // form={form}
                    layout="vertical"
                  >
                    <Row gutter={30}>
                      {formFields &&
                        formFields.map((field) => {
                          return field.formType === "textInp" ? (
                            <Col md={8} xs={24} key={field.label}>
                              <Form.Item name={field.label} label={field.label}>
                                <Input />
                              </Form.Item>
                            </Col>
                          ) : field.formType === "imgField" ? (
                            <Col md={8} xs={24} key={field.label}>
                              <Upload {...props}>
                                <label>{field.label} </label>
                                <br />
                                <Button icon={<UploadOutlined />}>
                                  Click to Upload
                                </Button>
                              </Upload>
                            </Col>
                          ) : field.formType === "numberInp" ? (
                            <Col md={8} xs={24} key={field.label}>
                              <Form.Item name={field.label} label={field.label}>
                                <InputNumber />
                              </Form.Item>
                            </Col>
                          ) : field.formType === "select" ? (
                            <Col md={8} xs={24} key={field.label}>
                              <Form.Item name={field.label} label={field.label}>
                                <Select>
                                  {console.log(field.options.split(","))}
                                  {field.options.split(",").map((opt) => (
                                    <Option value={opt}>{opt}</Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </Col>
                          ) : field.formType === "date" ? (
                            <Col md={8} xs={24} key={field.label}>
                              <Form.Item name={field.label} label={field.label}>
                                <DatePicker />
                              </Form.Item>
                            </Col>
                          ) : (
                            <Col md={8} xs={24} key={field.label}>
                              <Form.Item name={field.label} label={field.label}>
                                <Input />
                              </Form.Item>
                            </Col>
                          );
                        })}
                    </Row>

                    <div className="sDash_form-action mt-20">
                      <Button
                        htmlType="submit"
                        // onClick={!handlePayLater}
                        type="primary"
                        size="large"
                      >
                        Pay Now
                      </Button>
                      <Button
                        htmlType="submit"
                        onClick={handlePayLater}
                        type="primary"
                        size="large"
                      >
                        Pay Later
                      </Button>
                    </div>
                  </Form>
                </Cards>
              </VerticalFormStyleWrap>
            </FormValidationWrap>
          </Col>
        </Row>
        <Footer1 />
      </Main>
    </>
  );
};

export default FormValidation;
