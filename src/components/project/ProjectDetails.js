import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Form, Input, Button, Progress, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link, NavLink, Switch, Route, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { ProjectDetailsWrapper, TaskLists } from './style';
import FileListCard from './overview/FileListCard';
// import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from './styled'
// import Heading from '../../components/heading/heading';
import { Cards } from './cards/frame/cards-frame'
// import { Button } from './buttons/buttons';
import Header1 from '../Header1';
import Footer1 from '../Footer1'
import axios from 'axios'
import { Scrollbars } from 'react-custom-scrollbars';


const ProjectDetails = ({ match }) => {
  const history = useHistory()
  
  const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

  console.log('userInfo', userInfo.token);

  const [orderDetails, setOrderDetails] = useState({})

  useEffect(() => {
    if(userInfo) {
    const fetchData = async () => {

       let {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/order?id=${match.params.id}`, { headers: {"Authorization" : `Bearer ${userInfo.token}`} })
      console.log('order details');
      console.log(data);
      setOrderDetails(data)
      }
      fetchData() 
    } else {
      history.push('/')
    }
    }, [])

    const {firstName, lastName, zip, endDate, dueDate,payment_id, startDate, status, email, doc_key, country, payment, product_id, price, gender, state, city, emp_assigned, dob, id, phone, pan } = orderDetails

    const [messages, setMessages] = useState([])

    useEffect(() => {
      if(userInfo) {
      const fetchMessage = async () => {
        const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages?order_id=${match.params.id}`, { headers: {"Authorization" : `Bearer ${userInfo.token}`} })
        console.log('message',data);
        setMessages(data)
      }
      fetchMessage()
    } else {
      history.push('/')
    }
    },[])

    const [form] = Form.useForm();
    const [fileName, setFileName] = useState('')
    const onChangeFile = (e) => {
      setFileName(e.target.files[0])
      // console.log(e);
  }

  const handleSubmit = async (values) => {
    var fd = new FormData()
    fd.append('message', values.message)
    fd.append('order_id', id)
    fd.append('img', fileName)
    fd.append('user', userInfo.user)

    const config = {
      headers: {'content-type': 'multipart/form-data', "Authorization" : `Bearer ${userInfo.token}`}
  }

  const url = `${process.env.REACT_APP_API}/api/v1/message/send`;

  const {data} = await axios.post(url, fd, config)
  window.location.reload()
  }

  const rightMessage = {
    textAlign: "right",
    paddingRight: "10px"
  }

  const leftMessage = {
    textAlign: "left",
    marginLeft: "10px"
  }

  return (
    <ProjectDetailsWrapper>
      <Header1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Main>
      <div style={{textAlign: 'center'}}><h1>Order Details</h1></div>
        <Row gutter={25}>
          <Col xxl={6} xl={8} xs={24}>
            
            <Cards headless>
            <h3>Customer Details</h3>
            <hr />
              <div className="state-single">
              <div className="color-secondary">
                  
              <FeatherIcon icon="user" size={25} />
           
          </div>
                <div>
                  <h5><strong>{firstName + ' ' + lastName + ' [' + gender + ']' }</strong></h5>
                </div>
              </div>
              <div className="state-single">
                <div className="color-secondary">
                  
                    <FeatherIcon icon="map-pin" size={25} />
                 
                </div>
                
                <div>
                  <p>{city + ', ' + state + ', ' + zip + ', ' + country}</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-secondary">
                  
                    <FeatherIcon icon="credit-card" size={25} />
                 
                </div>
                
                <div>
                  <p>PAN: {pan}</p>
                </div>
              </div>
              <div className="state-single">
              <div className="color-warning">
                    <FeatherIcon icon="calendar" size={25} />
                  </div>
                <div>
                  <p>{dob}</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-warning">
                 
                    <FeatherIcon icon="at-sign" size={25} />
              
                </div>
                <div>
                  <p>{email}</p>
                </div>
              </div>
              <div className="state-single">
                <div className="color-warning">
                 
                    <FeatherIcon icon="phone" size={25} />
              
                </div>
                <div>
                  <p>{phone}</p>
                </div>
              </div>
            </Cards>
            
            {/* new */}
            <Cards headless>
            <h3>Make A Conversation</h3>
            <hr />
              <Form onFinish={handleSubmit} form={form} >
              <Row gutter={30}>
                <Col md={20} xs={20}>
                  <Form.Item name='message'>
                    <Input placeholder='Type your message..' />
                  </Form.Item>
                </Col>
                <Col md={20} xs={20}>
                <input fileName='image' name='img' onChange={onChangeFile} type='file' />
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
             
          </Col>
          <Col xxl={12} xl={16} xs={24}>
            <div className="about-project-wrapper">
              <Cards title="Order Details">
                <div className="about-content">
                <p>Order Id: {id}</p>
                  <p>Product: {product_id}</p>
                  <p>Price: 💰 {price}</p>
                  <p>Payment: {payment || 'NA'}</p>
                  <p>Payment Id: {payment_id || 'NA'}</p>
                </div>
                <div className="about-project">
                  <div>
                    <span>Ordered by</span>
                    <p>{firstName + ' ' + lastName}</p>
                  </div>
                  <div>
                    <span>Due Date</span>
                    <p>{dueDate || 'NA'}</p>
                  </div>
                  <div>
                    <span>Start Date</span>
                    <p className="color-primary">{startDate}</p>
                  </div>
                  <div>
                    <span>Deadline</span>
                    <p className="color-danger">{endDate || 'NA'}</p>
                  </div>
                  <div>
                    <span>Status</span>
                    <p className="color-danger">{status}</p>
                  </div>
                  <div>
                    <span>Assigned Employee</span>
                    <p className="color-danger">{emp_assigned || 'NA'}</p>
                  </div>
                  
                </div>
                </Cards>
                <div>
                  <h3>Attached Documents</h3>
                {console.log(doc_key)}
                  {
                    doc_key ? doc_key.map((doc) => (
                      <FileListCard key={doc} doc={doc} />

                    )) : []
                  }
                </div>

            
                {/* new */}
               <Cards title="Conversations">
               <Scrollbars style={{ width: 500, height: 300, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                {messages.map((message) => (
                
                <>
                <div style={ message.user === userInfo.user ? leftMessage : rightMessage}>
                  <p style={{color: '#0a8dff'}}>@{message.user}</p>
                  {message.message !== 'undefined' ? <h5>{message.message}</h5> : null}
                
                  {message.doc_key !== "sample.jpg" ? <Link to={{ pathname: `https://order-message.s3.us-east-2.amazonaws.com/${message.doc_key}`}} target='_blank'><img src={`https://order-message.s3.us-east-2.amazonaws.com/${message.doc_key}`} style={{height: "7rem", width: "60%"}}></img></Link> : null}
                  
                </div>
                  <br />  
                </>                
                ))}
                </Scrollbars>
               </Cards>
                {/* new */}

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
