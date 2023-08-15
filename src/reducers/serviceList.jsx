/* eslint-disable no-case-declarations */
import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE } from '../actions/actionTypes'

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000, filter: true},
  {id: nanoid(), name: 'Замена дисплея', price: 25000, filter: true},
  {id: nanoid(), name: 'Замена аккумулятора', price: 5000, filter: true},
  {id: nanoid(), name: 'Замена микрофона', price: 2500, filter: true}
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      if (state.find(i => i.name === name)) {
        return state.map((el, i) => {
          if (el.name === name) {
            state[i].price = price;
          }
           return el;
        })
      } else {
        return [...state, {id: nanoid(), name, price: Number(price), filter: true}];
    }
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case FILTER_SERVICE: {
      const { value } = action.payload;
      const filter_item = state.map((service) => {
      const name = service.name.toLowerCase();
        if (name.indexOf(value.toLowerCase()) !== -1) {
          return { ...service, filter: true };
        }
        return { ...service, filter: false };
      });
      return filter_item;
    }
    default:
      return state;
  }
}