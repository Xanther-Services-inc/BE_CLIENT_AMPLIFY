import React, { useEffect, useState } from "react";
import { Image, Row, Col } from "antd";

import axios from "axios";
import { useParams } from "react-router-dom";
import "./blogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/blog/${slug}`
      );
      setBlogDetails(data);
    };
    fetchData();
  }, [slug]);

  const { id, doc_key, author, desc, title } = blogDetails;
  console.log(title);
  console.log(desc);
  return (
    <div className="jumbotron">
      <div
        style={{
          backgroundColor: "#fff",
          margin: "0 15rem",
          padding: "2rem 0",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">
          <strong>{title}</strong>
        </h1>
        <p className="text-center">Author: [{author}]</p>
        <br />
        <Row>
          <Col
            md={{ span: 10, offset: 4 }}
            sm={{ span: 20, offset: 2 }}
            lg={{ span: 8, offset: 4 }}
            xl={{ span: 8, offset: 4 }}
          >
            <Image
              style={{
                cursor: "pointer",
                // marginLeft: "20rem",
              }}
              width="40vw"
              height="50vh"
              src={`https://businesseasy-blog.s3.us-east-2.amazonaws.com/${doc_key}`}
            />
          </Col>
          <Col
            md={{ span: 16, offset: 4 }}
            sm={{ span: 22, offset: 1 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <br />
            <br />

            <p>
              {" "}
              <div dangerouslySetInnerHTML={{ __html: desc }} />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogDetails;
