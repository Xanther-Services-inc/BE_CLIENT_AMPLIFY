import React, { useEffect } from "react";
import { listProductDetails } from "../../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../helpers/Loader";
import Message from "../../helpers/Message";
import countries from "../data.json";
import { useForm } from "react-hook-form";
import {Card, Button } from 'react-bootstrap';

const FormN = ({ match }) => {
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;
  
	useEffect(() => {
	  dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);


	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		//console.log(data);
		let user_data = JSON.stringify(data);
		window.localStorage.setItem("user_data", user_data);
		window.location = "/signupsuccess";
		//alert(JSON.stringify(data));
	};


	return (
		<>
		{loading ? (
        <Loader />
      ) : error ? (
        <h2><Message variant="danger">{error}</Message></h2>
      ) : (
        
		<Card className="text-center">
		<Card.Header>{product.title}</Card.Header>
		<Card.Body>
			<Card.Title>{product.desc}</Card.Title>
			<Card.Text>
			{product.price}
			</Card.Text>
			<Button variant="primary">Go somewhere</Button>
		</Card.Body>
		{/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
		</Card>
		
			
		
      )}
		
		</>
	);
};

export default FormN;
