import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_SERVICE, FILTER_SERVICE } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function editService(n, price) {
  return {type: EDIT_SERVICE, payload: {n, price}};
}

export function cancelService() {
  return {type: CANCEL_SERVICE};
}

export function filterService(value) {
  return {type: FILTER_SERVICE, payload: {value}};
}