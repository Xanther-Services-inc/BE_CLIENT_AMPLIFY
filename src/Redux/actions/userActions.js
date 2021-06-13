import axios from 'axios'
import swal from 'sweetalert'
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from '../constants/userConstants'

// user login action 

export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/login`,
        { email, password },
        config
      )
  
      if(data.token) {

        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        })
        
        localStorage.setItem('userInfo', JSON.stringify(data))
      } else {
        swal("Warning!", "Email or password Wrong!.", "warning")
        window.location.reload()
      }
      // localStorage.setItem('userInfo', JSON.stringify(data.token))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
// user logout action
  export const logout = () => (dispatch)=>{
      localStorage.removeItem('userInfo')
      dispatch({type:USER_LOGOUT})
  }

//   User register action
  export const registration = (email,country,gender,password,phone,firstName,lastName) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/register`,
        { email,country,gender,password,phone,firstName,lastName },
        config
      )
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
  
      // dispatch({
      //   type: USER_LOGIN_SUCCESS,
      //   payload: data,
      // })
  
      // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  