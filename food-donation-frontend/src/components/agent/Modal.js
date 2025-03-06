import React, { useState } from 'react';
import axiosInstance from '../../features/auth/axios';
import { AGENT_ORDER_API } from '../../apis';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../../features/agent/agentSlice';
import AlertInfo from '../Utils/AlertInfo';

const Modal = ({ order_id = 0 }) => {
	const dispatch = useDispatch();
	const [refreshAlert, setRefreshAlert] = useState(false);


	const onClickCollected = async () => {
		await axiosInstance
			.put(`${AGENT_ORDER_API}${order_id}/`, {
				is_collected: true,
			})

			.then((response) => {
                setRefreshAlert(true);
				console.log(response.data);
				dispatch(fetchOrders());
				toast.success('updated,', { hideProgressBar: true });
			})
			.catch((err) => {
				console.log(err.data);
				toast.error("Can't update, retry or contact customer service!");
			});
	};

	return (
		<div>
            {/* show an alert dialog for suggest user to refresh the window if not updated in the status , but updated in backend,*/}
			{refreshAlert && <AlertInfo message={'If order updated status not changed, please refresh!'} />}
			<label
				htmlFor="my-modal"
				className="btn btn-sm btn-outline m-1"
			>
				Make Collected
			</label>

			{/* Put this part before </body> tag */}
			<input
				type="checkbox"
				id="my-modal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Confirm !</h3>
					<p className="py-4">Are you sure!, change status to collected?</p>
					<div className="modal-action">
						<label
							htmlFor="my-modal"
							className="btn"
							onClick={onClickCollected}
						>
							Confirm
						</label>
						<label
							htmlFor="my-modal"
							className="btn"
						>
							Cancel
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
