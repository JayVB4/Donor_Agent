import React, { useEffect, useState } from 'react';
import Modal from './Modal';

const Card = ({ order }) => {
	const booked_date = new Date(order?.booked_at).getDate();
	const booked_month = new Date(order?.booked_at).getMonth();
	const booked_year = new Date(order?.booked_at).getFullYear();
	const booked_hour = new Date(order?.booked_at).getHours();
	const booked_minute = new Date(order?.booked_at).getMinutes();

	const booked_at =
		booked_hour +
		':' +
		booked_minute +
		' (' +
		booked_date +
		'/' +
		booked_month +
		'/' +
		booked_year +
		')';

	return (
		<div className="card w-96 shadow-xl bg-base-100">
			<div className="card-body">
				{/* <h2 className="card-title">{order?.id}</h2> */}
				<div className="overflow-x-auto">
					<table className="table w-full">
						{/* <!-- head --> */}

						<tbody>
							<tr>
								<th>Order ID</th>
								<td>{order?.id}</td>
							</tr>

							<tr className="active">
								<th>Food Details</th>
								<td>{order?.food_details}</td>
							</tr>

							<tr>
								<th>Donar Details</th>
								<td>{order?.donar_details}</td>
							</tr>
							<tr className="active">
								<th>Donar Contact</th>
								<td>{order?.donar_contact}</td>
							</tr>
							<tr>
								<th>Booked at</th>
								<td>{booked_at}</td>
							</tr>
							{/* <tr>
								<th>Agent</th>
								<td>{order?.user}</td>
							</tr> */}
							<tr className='active'>
								<th>Is Collected</th>
								{order?.is_collected ? (
									<td className="text-blue-400">Collected</td>
								) : (
									<td className="text-red-400">Not collected</td>
								)}
							</tr>
						</tbody>
					</table>
				</div>

				<div className="form-control w-52">
					{!order?.is_collected && <Modal order_id={order?.id} />}
				</div>
			</div>
		</div>
	);
};

export default Card;
