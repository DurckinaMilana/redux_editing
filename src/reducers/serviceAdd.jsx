/* eslint-disable no-case-declarations */
import {CANCEL_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case EDIT_SERVICE: 
      const {n, price} = action.payload;
      return {name: n, price: price};
    case CANCEL_SERVICE:
      return {name: '', price: ''};
    default:
      return state;
  }
}