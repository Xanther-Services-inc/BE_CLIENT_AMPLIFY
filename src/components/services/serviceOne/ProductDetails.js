import React, { useEffect, useState } from "react";
import { Row, Col, Image, Button } from "antd";
import PropTypes from "prop-types";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MetadataHelmet from "../../MetadataHelmet";

var _ = require("lodash");

const ProductDetails = ({ match }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API}/api/v1/product?id=${match.params.id}`
      );
      console.log(data);
      setProduct(data);
    };
    fetchData();
  }, [match.params.id]);

  return (
    <div className="product-details-box__right pdbr">
      <MetadataHelmet
        title={_.get(product, "values.title")}
        description={_.get(product, "values.desc")}
      />
      <Header1 />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row style={{ margin: "2rem" }}>
        <Col md={10} sm={24} lg={8} xl={8}>
          <Image
            style={{ cursor: "pointer" }}
            width="30vw"
            height="40vh"
            src={_.get(product, "image.image")}
          />
        </Col>
        <Col offset={2} />
        <Col md={12} sm={24} lg={14} xl={14}>
          <h2>{_.get(product, "values.title")}</h2>
          <h3>
            <p className="pdbr__currency">
              Price:
              {_.get(product, "values.price")} Rs.
            </p>
          </h3>

          <p className="pdbr__desc">Product Id: {product.id}</p>
          <p className="pdbr__desc">
            Description:
            {_.get(product, "values.desc")}
          </p>

          <Link to={userInfo ? `/order/${product.id}` : "/login"}>
            <Button
              style={{ marginTop: "1rem", float: "right" }}
              type="primary"
              size="large"
            >
              Order Now
            </Button>
          </Link>
        </Col>
      </Row>

      <Footer1 />
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object,
};

export default ProductDetails;
