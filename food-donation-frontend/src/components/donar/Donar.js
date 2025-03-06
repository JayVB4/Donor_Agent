import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
	fetchUserInfo,
	selectAccessToken,
	selectUserInfo,
} from '../../features/auth/authUserSlice';
import axiosInstance from '../../features/auth/axios';
import { DONATION_API } from '../../apis';
import { toast } from 'react-toastify';
import { setDonations } from '../../features/donar/donarSlice';

const Donar = () => {
	const accessToken = useSelector(selectAccessToken);
	const userInfo = useSelector(selectUserInfo);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchUserInfo())
		if (accessToken!==null){
			fetchDonations()
		}
	}, [])


	const fetchDonations = async () => {
		await axiosInstance.get(DONATION_API)
			.then((response) => {
				console.log("donation", response.data)
				dispatch(setDonations(response.data))
			})
			.catch((err) => {
				console.log(err)
				toast.error("Something went wrong!, cant fetch donation list")
			})
	}


	

	return (
		<div className='h-screen' >
			{accessToken ? (
				<Outlet />
			) : (
				<div>
					<p>-</p>
					<p className="mt-10 text-red-600 p-10 font-bold">Not a Donar, Please login with your donar account !</p>
				</div>
			)}
		</div>
	);
};

export default Donar;
