
import  products from './ProductsReducer';
import {combineReducers} from 'redux';
import basket from './BasketReducer'


export default combineReducers({
    products,basket
})
