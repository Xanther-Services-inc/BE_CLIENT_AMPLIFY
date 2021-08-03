import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Progress, Spin } from "antd";
import { useHistory } from "react-router-dom";
import propTypes from "prop-types";
import { ProjectDetailsWrapper, TaskLists } from "../../project/style";
import { Main } from "../../project/styled";
import { Cards } from "../../project/cards/frame/cards-frame";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import axios from "axios";

const IssueDetails = ({ match }) => {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, isAuth, userInfo } = userLogin;
  const [issueDetails, setIssueDetails] = useState({});

  useEffect(() => {
    if (userInfo) {
      const fetchData = async () => {
        let { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/issue?id=${match.params.id}`,
          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        // console.log('order details');
        // console.log(data);
        setIssueDetails(data);
      };
      fetchData();
    } else {
      history.push("/");
    }
  }, []);

  const {
    employee,
    order_id,
    id,
    issue_details,
    user_email,
    issue_category,
    title,
  } = issueDetails;

  //     const [user, setUser] = useState({})

  //     useEffect(() => {
  //         const fetchUser = async () => {
  //             let {data} = await axios.get(`http://52.15.142.28:3001/api/v1/user?email=${user_email}`)
  //             setUser(data)
  //             console.log('user',data);
  //         }
  //         fetchUser()
  //     }, [])
  // console.log('user',user);
  //     const {firstName, lastName, email, country, phone, gender} = user

  return (
    <>
      <Header1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProjectDetailsWrapper>
        <Main>
          <div style={{ textAlign: "center" }}>
            <h1>
              <span>Issue Details</span>
            </h1>
          </div>
          <Row gutter={25}>
            <Col xxl={24} md={24} xl={24} xs={24} sm={24}>
              <div className="about-project-wrapper">
                <Cards title="">
                  <div className="about-content">
                    <p>
                      <strong>Issue Id: </strong>
                      {id}
                    </p>
                    <p>
                      <strong>Order Id: </strong>
                      {order_id}
                    </p>
                    <p>
                      <strong>Issue Title: </strong>
                      {title}
                    </p>
                    <p>
                      <strong>Issue Details: </strong>
                      {issue_details}
                    </p>
                  </div>
                  <div className="about-project">
                    <div>
                      <span>User</span>
                      <p>{user_email}</p>
                    </div>

                    <div>
                      <span>Issue Type</span>
                      <p>{issue_category}</p>
                    </div>
                    <div>
                      <span>Assigned Employee</span>
                      <p>{employee || "NA"}</p>
                    </div>
                  </div>
                </Cards>
                {/* <FileListCard doc_key={doc_key} /> */}
              </div>
            </Col>
          </Row>
        </Main>
      </ProjectDetailsWrapper>
      <Footer1 />
    </>
  );
};

IssueDetails.propTypes = {
  match: propTypes.object,
};

export default IssueDetails;
