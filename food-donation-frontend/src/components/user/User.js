import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAccessToken } from '../../features/auth/authUserSlice';

const User = () => {
	const accessToken = useSelector(selectAccessToken);

	return (
		<div>
			{accessToken ? (
				<Outlet />
			) : (
				<div>
					<p>-</p>
					<p className="mt-10 text-red-600 p-10 font-bold">Login required</p>
				</div>
			)}
		</div>
	);
};

export default User;
