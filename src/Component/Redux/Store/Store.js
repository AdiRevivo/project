import {createStore,combineReducers, applyMiddleware} from 'redux'
import  userReducer  from '../Store/UserRsucer'
import  companyReducer  from '../Store/CompanyReducer'
import  add$ToName  from './middleWare';
const reducer=combineReducers({userReducer,companyReducer});
const store=createStore(reducer,applyMiddleware(add$ToName));
window.store=store;


export default store;