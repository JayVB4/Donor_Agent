import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../features/auth/axios';
import { DONATION_API } from '../../apis';
import { toast } from 'react-toastify';
import { setDonations } from '../../features/donar/donarSlice';
import { useDispatch } from 'react-redux';

const AddDonationModal = () => {
	const initialValues = {
		food_name: '',
		food_type: '',
		quantity: '',
		contact: '',
		address: '',
	};

	const dispatch = useDispatch();

	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [loading, setLoading] = useState(false);

	const onChangeInputFieldsHandler = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};

	const validate = (values) => {
		const errors = {};

		// FIXME: TODO:simply pass now
		// if (values.password.length < 6) {
		// 	errors.password = 'Password must be more than 5 character';
		// }
		// if (!(values.password === values.confirm_password)) {
		// 	errors.confirm_password = "Password doesn's match";
		// }

		// console.log(errors);
		return errors;
	};

	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log('fv', formValues);
			setLoading(true);
			// call function
			postDonationHandler();
		}
	}, [formErrors]);

	const postDonationHandler = async () => {
		axiosInstance
			.post(DONATION_API, formValues)
			.then((response) => {
				console.log('post donations', response.data);
				fetchDonations();
				toast.success('Successfully added', { hideProgressBar: true });
				document.getElementById('my-modal-5').click();
				formValues.address = '';
				formValues.contact = '';
				formValues.food_name = '';
				formValues.food_type = '';
				formValues.quantity = '';
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.data);
			});
	};

	// FIXME: same code used in diff component fix this later  with single code
	const fetchDonations = async () => {
		await axiosInstance
			.get(DONATION_API)
			.then((response) => {
				console.log('donation', response.data);
				dispatch(setDonations(response.data));
			})
			.catch((err) => {
				console.log(err);
				toast.error('Something went wrong!, cant fetch donation list');
			});
	};

	return (
		<div>
			{/* The button to open modal */}
			<label
				htmlFor="my-modal-5"
				className="btn mt-12 ml-5 z-40 fixed"
			>
				Donate Food
			</label>

			{/* Put this part before </body> tag */}
			<input
				type="checkbox"
				id="my-modal-5"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="modal-box w-11/12 max-w-5xl">
					<h3 className="font-bold text-lg">
						Donate Your Surplus Food: Make a Difference Today
					</h3>

					<form
						className="form  m-1 "
						onSubmit={onSubmitHandler}
					>
						<div className="form-control">
							<label
								className="label"
								htmlFor="food_name"
							>
								<span className="label-text">Food Name</span>
							</label>
							<input
								type="text"
								placeholder="food_name"
								className="input input-bordered input-primary"
								id="food_name"
								name="food_name"
								onChange={onChangeInputFieldsHandler}
								value={formValues.food_name}
								required
							/>
						</div>
						<div className="form-control">
							<label
								className="label"
								htmlFor="quantity"
							>
								<span className="label-text">Quantity</span>
							</label>
							<input
								type="number"
								min="1"
								placeholder="25"
								className="input input-bordered input-primary"
								id="quantity"
								name="quantity"
								onChange={onChangeInputFieldsHandler}
								value={formValues.quantity}
								required
							/>
						</div>
						<div className="form-control p-1 border m-1">
							<div className="form-control">
								<label className="label cursor-pointer">
									<span className="label-text">Non-Veg</span>
									<input
										type="radio"
										name="food_type"
										className="radio checked:bg-blue-500"
										onChange={onChangeInputFieldsHandler}
										value="N"
										required
									/>
								</label>
							</div>
							<div className="form-control">
								<label className="label cursor-pointer">
									<span className="label-text">Veg</span>
									<input
										type="radio"
										name="food_type"
										className="radio checked:bg-blue-500"
										onChange={onChangeInputFieldsHandler}
										value="V"
										required
									/>
								</label>
							</div>
						</div>
						<div className="form-control">
							<label
								className="label"
								htmlFor="address"
							>
								<span className="label-text">Address</span>
							</label>
							<textarea
								className="textarea textarea-primary"
								placeholder="Address"
								id="address"
								name="address"
								onChange={onChangeInputFieldsHandler}
								value={formValues.address}
								required
							/>
						</div>

						<div className="form-control">
							<label
								className="label"
								htmlFor="contact"
							>
								<span className="label-text">Contact</span>
							</label>
							<input
								type="tel"
								placeholder="phone"
								pattern="^[6-9]\d{9}$"
								className="input input-bordered input-primary"
								id="contact"
								name="contact"
								onChange={onChangeInputFieldsHandler}
								value={formValues.contact}
								required
							/>
						</div>

						<div className="modal-action">
							<input
								htmlFor="my-modal-5"
								className="btn btn-primary"
								value="Submit"
								type="submit"
								// onClick={onSubmitHandler}
							/>
							<label
								htmlFor="my-modal-5"
								className="btn"
							>
								Close
							</label>
						</div>
					</form>
					{/* <div className="modal-action">
						<label
							htmlFor="my-modal-5"
							className="btn"
						>
							<Link to="/donar/donation">Close</Link>
						</label>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default AddDonationModal;
