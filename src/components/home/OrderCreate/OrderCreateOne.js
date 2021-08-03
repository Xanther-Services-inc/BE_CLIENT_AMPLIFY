import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  DatePicker,
  Select,
  Upload,
  InputNumber,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FormValidationWrap, VerticalFormStyleWrap } from "./dependency/Style";
import { Main } from "./dependency/styled";
import { Cards } from "./dependency/cards-frame";
import "antd/dist/antd.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import RSelect from "react-select";
import swal from "sweetalert";
var _ = require("lodash");

const { Dragger } = Upload;
const { Option } = Select;

const FormValidation = ({ match }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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

  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product?id=${match.params.id}`
      );
      console.log(data);
      setProduct(data);
    };
    fetchData();
  }, [match.params.id]);

  const fields = _.get(product, "values.users");
  const title = _.get(product, "values.title");
  const steps = _.get(product, "values.steps");
  const new_steps = steps && steps.replace(/ /g, "").split(",");
  console.log(new_steps);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const [paymentDone, setPaymentDone] = useState(false);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products`
      );
      setProducts(data);
    };
    fetchData();
  }, []);

  const options = products.map((product) => {
    return { value: product.title, label: product.title, price: product.price };
  });

  let history = useHistory();

  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");
  const onChangeFile = (e) => {
    setFileName(e.target.files);
    console.log(e.target.files);
  };
  console.log(fileName);

  const [payLater, setPaylater] = useState(false);

  const handlePayLater = () => {
    setPaylater(true);
  };

  const onFinish = async (values) => {
    if (!values) {
      swal("Warning", "Fields shouldn't be empty!", "warning");
      window.location.reload();
    }
    if (payLater) {
      console.log(values);
      axios
        .post(
          `${process.env.REACT_APP_API}/api/v1/order`,
          {
            order_data: values,
            image: imageData,
            payment: "Due",
            payment_id: "NA",
            email: jwt_decode(userInfo.token).email,
            product_id: title,
            price: _.get(product, "values.price"),
            order_steps: new_steps,
          },
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      history.push("/order-success");
    } else {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        swal("Warning", "Make sure you're Online!!", "error");
        return;
      }
      const result = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/order/pay`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            price: _.get(product, "values.price"),
          },
        }
      );

      if (!result) {
        swal("Warning", "Make sure you're Online!!", "error");
        return;
      }

      // getting the order details back
      const { amount, id: order_id, currency } = result.data;

      const options = {
        key: "rzp_test_JOe80VArAs4uX4",
        amount: amount.toString(),
        currency,
        name: "Business Easy",
        description: "Test description",
        // image: {logo},
        order_id: order_id, //some confusion here
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post(
            `${process.env.REACT_APP_API}/api/v1/order/success`,
            {
              headers: {
                Authorization: `Bearer ${userInfo.token}`,
                data: data,
              },
            }
          );
          swal("Payment Success", "Payment Done Successfully!", "success");

          if (result.data) {
            console.log(values);

            axios
              .post(
                `${process.env.REACT_APP_API}/api/v1/order`,
                {
                  order_data: values,
                  image: imageData,
                  payment: "Paid",
                  payment_id: result.data.paymentId,
                  email: jwt_decode(userInfo.token).email,
                  product_id: product.id,
                  price: _.get(product, "values.price"),
                  order_steps: new_steps,
                },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
              )
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
            history.push("/order-success");
          }

          console.log(result.data);
        },

        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Main>
        <Header1 />
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
                    form={form}
                    layout="vertical"
                  >
                    <Row gutter={30}>
                      {fields &&
                        fields.map((field) => {
                          return field.formType === "textInp" ? (
                            <Col md={8} xs={24}>
                              <Form.Item name={field.label} label={field.label}>
                                <Input />
                              </Form.Item>
                            </Col>
                          ) : field.formType === "imgField" ? (
                            <Col md={8} xs={24}>
                              <Upload {...props}>
                                <label>{field.label} </label>
                                <br />
                                <Button icon={<UploadOutlined />}>
                                  Click to Upload
                                </Button>
                              </Upload>
                            </Col>
                          ) : field.formType === "numberInp" ? (
                            <Col md={8} xs={24}>
                              <Form.Item name={field.label} label={field.label}>
                                <InputNumber />
                              </Form.Item>
                            </Col>
                          ) : field.formType === "select" ? (
                            <Col md={8} xs={24}>
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
                            <Col md={8} xs={24}>
                              <Form.Item name={field.label} label={field.label}>
                                <DatePicker />
                              </Form.Item>
                            </Col>
                          ) : (
                            <Col md={8} xs={24}>
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
                        onClick={!handlePayLater}
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
