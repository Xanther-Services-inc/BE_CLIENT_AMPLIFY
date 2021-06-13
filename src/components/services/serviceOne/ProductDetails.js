import React, { useEffect, useState } from 'react';
import {Row, Col, Image} from 'antd';
import PropTypes from 'prop-types';
import Header1 from '../../Header1'
import Footer1 from '../../Footer1';
import Axios from 'axios';


const ProductDetails = ({ match }) => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
      useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
 
  const [product, setProduct] = useState({})
  useEffect(() => {
      const fetchData = async () => {
          const {data} = await Axios.get(`${process.env.REACT_APP_API}/api/v1/product?id=${match.params.id}`)
          console.log(data);
          setProduct(data)

      }
      fetchData()
  }, [])


  const {title, desc, doc_key, id, price} = product

  return (

    <div className="product-details-box__right pdbr">
        <Header1 />
        <br />
        <br />
        <br />
        <br />
        <br />
      <Row style={{margin: "2rem"}}>
        <Col md={10} sm={24} lg={8} xl={8}>
            <Image style={{cursor: 'pointer'}} width="30vw" height="40vh" src={`https://products-imgs.s3.us-east-2.amazonaws.com/${doc_key}`} /> 
          </Col>
          <Col offset={2} />
        <Col md={12} sm={24} lg={14} xl={14}>
        <h2>
        {title}
      </h2>     
      <h3>
        <p className="pdbr__currency">Price: {price} Rs.</p>
      </h3>
     
      <p className="pdbr__desc">Product Id: {id}</p>
      <p className="pdbr__desc">Description: {desc}</p>
     
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
