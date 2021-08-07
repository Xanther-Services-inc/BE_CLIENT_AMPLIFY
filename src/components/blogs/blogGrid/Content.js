import Axios from "axios";
import React, { useState, useEffect } from "react";
import dataBlogs from "../../data.json";
const URL = require("../../constants");

const Content = () => {
  let counter = 1;
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      const { data } = await Axios.get(
        `${process.env.REACT_APP_API}/api/v1/blogs`
      );
      setBlogs(data);
    };
    fetchBlog();
  }, []);
  console.log(blogs);
  return (
    <section>
      <div className="container">
        <div className="row">
          {blogs.map((post) => (
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5" key={post.id}>
              <div className="post">
                {/* {counter++ < 3 ? ( */}
                <div className="post-image" style={{ height: "50vh" }}>
                  <img
                    className="img-fluid h-100 w-100"
                    src={`https://businesseasy-blog.s3.us-east-2.amazonaws.com/${post.doc_key}`}
                    alt={post.title}
                  />{" "}
                  <a
                    className="post-categories"
                    href={`https://businesseasy-blog.s3.us-east-2.amazonaws.com/${post.doc_key}`}
                  >
                    Photo
                  </a>
                </div>
                {/* ) : null} */}
                <div className="post-desc">
                  <div className="post-meta">
                    <ul className="list-inline">
                      {/* <li>
                        <i className="la la-calendar mr-1"></i> {post["date"]}
                      </li> */}
                      <li>
                        <i className="la la-user mr-1"></i> {post["author"]}
                      </li>
                    </ul>
                  </div>
                  <div className="post-title">
                    <h4>
                      <a href={`/blogs/${post.slug}`}>{post["title"]}</a>
                    </h4>
                  </div>
                  {/* <p>{post["desc"]}</p> */}
                  <a className="icon-btn mt-4" href={`/blogs/${post.slug}`}>
                    {" "}
                    <i className="la la-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
