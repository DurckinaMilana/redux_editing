/* eslint-disable no-unused-vars */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, cancelService, filterService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(addService(item.name, item.price));
	}

	const handleCancel = e => {
		e.preventDefault();
		dispatch(cancelService());
	}

	const handleFilter = (evt) => {
		const { value } = evt.target
		dispatch(filterService(value));
    }

	return (
		<>
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button onClick={handleCancel}>Cancel</button>
			<button type='submit'>Save</button>
		</form>
		<input name='value' onChange={handleFilter} />
		</>
	);
}

export default ServiceAdd;