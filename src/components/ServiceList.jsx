/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editService, removeService } from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleChange = (name, price) => {
    dispatch(editService(name, price));
  }


  return (
    <ul>
      {items.map(o => (
        <li key={o.id} className={o.filter ? "item" : "hidden"}>
          {o.name} {o.price}
          <button className='change_btn' onClick={() => handleChange(o.name, o.price)}></button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList