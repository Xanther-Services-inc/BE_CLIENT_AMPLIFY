import axios from 'axios'
import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './productTypes';

export const fetchProducts = () =>{
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get("http://52.15.142.28:3001/api/v1/products")
            .then(response => {
                const products = response.data
                dispatch(fetchProductsSuccess(products))
            })
            .catch(error => {
                dispatch(fetchProductsFailure(error.message))
            })
    }
}
export const fetchProductsRequest = ()=>{
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}
export const fetchProductsSuccess = (products)=>{
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload:products
    }
}
export const fetchProductsFailure = error => {
    return {
      type: FETCH_PRODUCT_FAILURE,
      payload: error
    }
  }