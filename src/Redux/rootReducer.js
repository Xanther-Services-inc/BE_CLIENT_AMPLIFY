import { combineReducers } from 'redux'
// import cakeReducer from './cake/cakeReducer'
// import iceCreamReducer from './iceCream/iceCreamReducer'
import productReducer from './products/productReducer';


const rootReducer = combineReducers({

  product: productReducer
})

export default rootReducer