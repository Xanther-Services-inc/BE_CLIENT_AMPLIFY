import { createStore,combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { userLoginReducer,userRegisterReducer } from './reducers/userReducers'
import {productListReducers, productDetailsReducers } from './reducers/productReducers';
// import {orderCreateReducer} from './reducers/orderReducers'
import {reducer as formReducer} from 'redux-form'
// import rootReducer from './rootReducer'

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  form: formReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: {userInfo:userInfoFromStorage},
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store