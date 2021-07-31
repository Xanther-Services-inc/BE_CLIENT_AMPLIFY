import React, { useEffect, useState } from "react";
// import dataFeatures from "../../../data.json";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./featureStyle.css";
// import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const Features = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);

  var [listData, setListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products`
      );
      setListData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  // console.log('aa');
  // console.log(listData);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <br />
      <Container id="product">
        <Row>
          {console.log(listData)}
          {listData.length > 8
            ? listData.slice(0, 8).map((feature) => (
                <Col key={feature.id} xs={12} md={6} lg={3} xl={3}>
                  <Link to={`/service/${feature.id}`}>
                    <Card
                      style={{ width: "18rem", marginBottom: "1rem" }}
                      className="zoom"
                    >
                      <Card.Img
                        style={{ height: "18rem" }}
                        variant="top"
                        src={feature.image.image}
                      />
                      <Card.Body>
                        <Card.Title>{feature.values.title}</Card.Title>
                        <Card.Text>
                          {feature.values.desc.length > 25
                            ? feature.values.desc.substring(0, 25) + ".."
                            : feature.values.desc}
                        </Card.Text>
                        <Link to={userInfo ? `/order/${feature.id}` : "/login"}>
                          <Button type="primary" size="large">
                            Order Now
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            : listData.map((feature) => (
                <Col key={feature.id} xs={12} md={6} lg={3} xl={3}>
                  <Link to={`/service/${feature.id}`}>
                    <Card
                      style={{ width: "18rem", marginBottom: "1rem" }}
                      className="zoom"
                    >
                      <Card.Img
                        style={{ height: "18rem" }}
                        variant="top"
                        src={feature.image.image}
                      />
                      <Card.Body>
                        <Card.Title>{feature.values.title}</Card.Title>
                        <Card.Text>
                          {feature.values.desc.length > 25
                            ? feature.values.desc.substring(0, 25) + ".."
                            : feature.values.desc}
                        </Card.Text>
                        <Card.Text>Rs. {feature.values.price}</Card.Text>
                        <Link to={userInfo ? `/order/${feature.id}` : "/login"}>
                          <Button type="primary" size="large">
                            Order Now
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
        </Row>
        <Link to="/service">
          <Button
            style={{ marginTop: "1rem", float: "right" }}
            type="primary"
            size="large"
          >
            View All
          </Button>
        </Link>
      </Container>
      <br />
      <br />
    </>
  );
};
export default Features;
