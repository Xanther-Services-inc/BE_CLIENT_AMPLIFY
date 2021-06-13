import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Row, Col, Pagination, Skeleton } from 'antd';
import { useSelector } from 'react-redux';
// import Heading from '../../../components/heading/heading';
import { Cards } from '../cards/frame/cards-frame';
import { ProjectPagination } from '../style';
import Header1 from '../../Header1';
import { Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import Footer1 from '../../Footer1';
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom'


const GridCard = lazy(() => import('./GridCard'));


const ProGrid = () => {
  
  const history = useHistory()
  const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin
  // console.log(userInfo.token);

  const [orders, setOrders] = useState([])
  useEffect(() => {
    if(userInfo) {

      const fetchData = async () => {

        try{
          let {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/user/orders`,{ headers: {"Authorization" : `Bearer ${userInfo.token}`} })
          setOrders(data)

        } catch(err) {
          console.log(err);
        }
        
        
      }
      fetchData() 
    } else {
      history.push('/')
    }
    }, [])

    

    // const handleDetails = (id) => {
    //   history.push(id)
    // }

  return (
    
    <div>
    <Header1 />
    
   <br />
    <br />
   <br />
   <hr />
    


    <Jumbotron>
      <Container>
      <Row className="justify-content-md-center">
      <Col md="auto"><h1>My Orders</h1></Col>
      </Row>
      <Row gutter={25}>
      
      {orders.length !== 0 ? orders.map(order=>(
        <Col key={order.id} xl={8} md={12} xs={24}>
              <Suspense
                fallback={
                  <Cards style={{border:"2px solid red"}}>
                    <Skeleton active />
                  </Cards>
                }
              >
                <GridCard values={order} />
              </Suspense>
            </Col>
         
      
      
      
      )):null}    
            
    </Row>
    </Container>
    </Jumbotron>
    <Footer1 />
    
    </div>
  );
};

export default ProGrid;
