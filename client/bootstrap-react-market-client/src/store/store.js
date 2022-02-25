import { applyMiddleware, combineReducers, createStore } from "redux";
import sellerReducer from './reducers/sellerReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ sellerReducer })
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store