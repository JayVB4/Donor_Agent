import React from 'react';
import {  useSelector } from 'react-redux';
import { selectAgentOrders } from '../../features/agent/agentSlice';
// import {
// 	fetchUserInfo,
// 	selectUserInfo,
// } from '../../features/auth/authUserSlice';
import Card from './Card';

const Order = () => {
	const orders = useSelector(selectAgentOrders);
	// const userInfo = useSelector(selectUserInfo);
	// const dispatch = useDispatch();

	let content = '';

	if (orders.length !== 0) {
		console.log('orders', orders);
		content = orders.map((order, index) => (
			<Card
				key={index}
				order={order}
			/>
		));
	}

	return (
		<div>
			<p>-</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-3 gap-y-3 mt-10">
				{content}
			</div>
		</div>
	);
};

export default Order;
