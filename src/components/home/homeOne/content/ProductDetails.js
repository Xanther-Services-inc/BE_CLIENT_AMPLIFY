import React, { useEffect } from "react";
import { listProductDetails } from "../../../../Redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Loader from '../../../../helpers/Loader';
import Message from "../../../../helpers/Message";
import Header1 from "../../../Header1";
// import jwt_decode from "jwt-decode";
// import countries from '../../../data.json';
// import {createOrder} from '../../../../Redux/actions/orderAction';
import OrderCreate from "./OrderCreate";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: '5rem',
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductScreen = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const orderCreate = useSelector((state)=>state.orderCreate)


  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  // const { register, handleSubmit, errors } = useForm();
	// const onSubmit = (data) => {
	// 	//console.log(data);
	// 	let user_data = JSON.stringify(data);
	// 	window.localStorage.setItem("user_data", user_data);
	// 	window.location = "/signupsuccess";
	// 	//alert(JSON.stringify(data));
	// };

  // const onSubmit = (data,e) => {
  //   e.preventDefault();
	// 		dispatch(createOrder(data.firstName,
	// 			data.lastName,
	// 			data.gender,
	// 			data.pan,
	// 			data.phone,
  //       data.dob,
  //       data.country,
  //       data.image
			
	// 		))
	// 	}
	

  return (
    <>
      <Header1 />

      {loading ? (
        <Loader />
      ) : error ? (
        <h2><Message variant="danger">{error}</Message></h2>
      ) : (<div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={`https://products-imgs.s3.us-east-2.amazonaws.com/${product.doc_key}`}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.desc}
                </Typography>
                
              </Grid>
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price: {product.price} Rs</Typography>
              <Button variant="contained" color="primary">Order Now</Button>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
      <hr />
      {
        localStorage.getItem('userInfo') ? <OrderCreate productId={product.id} /> : null
      }
    </div>
      )}
      
    </>
  )
                                              };


export default ProductScreen;
