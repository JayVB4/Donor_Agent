import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchUserInfo,
	getFetchUserInfoError,
	getFetchUserInfoStatus,
	selectUserInfo,
} from '../../features/auth/authUserSlice';
import { FAILED, LOADING, SUCCESS } from '../../apis';
import { toast } from 'react-toastify';

const Profile = () => {
	const dispatch = useDispatch();
	const userInfoStatus = useSelector(getFetchUserInfoStatus);
	const userInfoError = useSelector(getFetchUserInfoError);
	const userInfo = useSelector(selectUserInfo);

	useEffect(() => {
		console.log('fetch-user-info');
		dispatch(fetchUserInfo());
	}, []);

	let content = '';

	switch (userInfoStatus) {
		case LOADING:
			content = (
				<progress className="progress progress-primary mt-0 mb-1"></progress>
			);
			break;
		case SUCCESS:
			// console.log("email",userInfo[0]?.email)
			content = (
				<div id='profile' className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://serudsindia.org/wp-content/uploads/2020/11/Donate-Money-For-Food-In-India-To-Special-Charity-Programs-1228x691.png")` }}>
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="card w-96 shadow-2xl bg-base-100">
							<div className="card-body">
								<p className="card-title mb-5 ">My Profile</p>
								<p className="text-blue-600">
									{userInfo[0]?.user_type === 'D' && 'Donar'}
								</p>
								<p className="text-blue-600">
									{userInfo[0]?.user_type === 'A' && 'Agent'}
								</p>
								<p className="text-blue-600">
									{userInfo[0]?.user_type === 'AD' && 'Admin'}
								</p>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Full Name</span>
									</label>
									<input
										type="text"
										placeholder="full_name"
										className="input input-bordered"
										value={userInfo[0]?.full_name}
										disabled
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="email"
										placeholder="email"
										className="input input-bordered"
										value={userInfo[0]?.email}
										disabled
									/>
								</div>

								{(userInfo[0]?.user_type === 'AD' || userInfo.is_staff) && (
									<div className="form-control mt-6 p-1">
										<p className="font-mono text-blue-900 m-1">
											You are an admin, You can use admin dashboard
										</p>

										<a
											href="http://localhost:8000/admin/"
											target="_blank"
											rel="noreferrer"
											className="btn btn-outline btn-primary"
										>
											GO TO ADMIN DASHBOARD
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			);

			break;

		case FAILED:
			toast.error(
				'cant load, please login again. Or Contact the customer care.'
			);
			break;
		default:
			break;
	}
	return <div className="mt-0 ">{content}</div>;
};

export default Profile;
