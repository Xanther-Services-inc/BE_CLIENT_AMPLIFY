import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ReactPlayer from "react-player";
const _ = require("lodash");

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products`
      );
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <div
        style={{
          height: 40,
        }}
      />
      <div className="container">
        <h2
          className="mt-3"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            color: "#6e6e6e",
            fontWeight: "bold",
          }}
        >
           <div style={{ color: "#4a92f7" }}>Our Services</div>
        </h2>
        <div className="row mt-3">
          {products.map((product) => (
            <div className="col-lg-4 col-md-6 mt-5" key={product.id}>
              <div className="featured-item style-2">
                <div className="featured-icon">
                  {" "}
                  <Image height={280} src={_.get(product, "image.image")} />
                  <span className="rotateme"></span>
                </div>
                <div className="featured-title">
                  <h5>{_.get(product, "values.title")}</h5>
                </div>
                <div className="featured-desc">
                  <p>
                    {_.get(product, "values.desc").length > 25
                      ? _.get(product, "values.desc").substring(0, 25) + ".."
                      : _.get(product, "values.desc")}
                  </p>
                  <Link className="icon-btn mt-4" to={`/service/${product.id}`}>
                    {" "}
                    <i className="la la-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
