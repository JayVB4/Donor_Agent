import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { VERIFY_EMAIL_API } from '../../apis';
import { toast } from 'react-toastify';

const EmailActivation = () => {
	const navigate = useNavigate();
	const { id, token } = useParams();
	const [loading, setLoading] = useState(false);

	const onClickHandler = async () => {
		setLoading(true)
		await axios
			.post(
				VERIFY_EMAIL_API,
				{
					uid: id,
					token: token,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((response) => {
				console.log(response);
				setLoading(false)
				toast.success('Successfully verified');
				navigate('/login');
			})
			.catch((err) => {
				setLoading(false)
				console.log(err);
				toast.error('Email not verified, Please try again');
			});
	};

	console.log('id', id, token);
	return (
		<div className="h-screen">
			<p className="">-</p>
			{loading && (
				<progress className="progress progress-primary mt-10 mb-1 fixed z-50"></progress>
			)}
			<div>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content text-center">
						<div
							className="max-w-md card bg-gray p-5"
							data-theme="dark"
						>
							{/* <h1 className="text-5xl font-bold">Ve</h1> */}
							<div className="form-control  ">
								<label className="label">
									<span className="label-text">ID</span>
								</label>
								<input
									type="text"
									className="input input-bordered"
									value={id}
									disabled
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Token</span>
								</label>
								<input
									type="text"
									className="input input-bordered"
									value={token}
									disabled
								/>
							</div>
							<p className="py-6"></p>
							<button
								className="btn btn-primary"
								onClick={onClickHandler}
								disabled={loading}
							>
								Verify Email ID
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmailActivation;
