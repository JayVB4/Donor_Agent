import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	logout,
	selectAccessToken,
	selectUserInfo,
} from '../../features/auth/authUserSlice';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
// import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const accessToken = useSelector(selectAccessToken);
	const userInfo = useSelector(selectUserInfo);

	const onClickLogo = () => {
		navigate('/');
	};
	const onClickLogin = () => {
		navigate('/login');
	};
	const onClickLogout = () => {
		dispatch(logout());
	};
	const onClickAboutUs = () => {
		navigate('/about');
	};
	const onClickContactUs = () => {
		navigate('/contact');
	};
	const onClickProfile = () => {
		navigate('/user/profile');
	};
	const onClickRegister = () => {
		navigate('/register');
	};
	const onClickDonation = () => {
		navigate('/donar/donation');
	};
	const onClickAgent = () => {
		navigate('/agent/order');
	};
	const onClickTheme = (e) => {
		console.log(e.target.name);
		localStorage.setItem('theme', e.target.name);
		window.location.reload();
	};

	const themes = [
		'light',
		'night',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'coffee',
		'winter',
	];

	const menuItems = themes.map((theme, index) => (
		<li
			key={index}
			data-theme="dark"
		>
			<button
				id={theme}
				name={theme}
				onClick={onClickTheme}
			>
				{theme}
			</button>
		</li>
	));

	return (
		<>
			<div
				className="navbar bg-base-100v fixed z-50  shadow-md"
				data-theme={localStorage.getItem('theme', 'light')}
			>
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<button onClick={onClickProfile}>Profile</button>
							</li>
							<li>
								<button onClick={onClickDonation}>Donation</button>
							</li>
							<li>
								<button onClick={onClickAgent}>Agent</button>
							</li>
							<li>
								<button onClick={onClickAboutUs}>About Us</button>
							</li>

							<li>
								<button onClick={onClickContactUs}>Contact Us</button>
							</li>
							<li tabIndex={0}>
								<button>
									Theme
									<svg
										className="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</button>
								<ul className="p-2">{menuItems}</ul>
							</li>
						</ul>
					</div>

					<button
						className="btn btn-ghost normal-case text-xl"
						onClick={onClickLogo}
					>
						Warm Hugs
					</button>
					{/* <NavLink className="btn btn-ghost normal-case text-xl" href='/'>Warm Hugs</NavLink> */}
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						{/* show only for logged users */}
						{accessToken !== null && (
							<li>
								<button onClick={onClickProfile}>Profile</button>
							</li>
						)}

						{/* Agent */}
						{accessToken !== null && userInfo[0]?.user_type === 'A' && (
							<>
								<li>
									<button onClick={onClickDonation}>Donation</button>
								</li>
								<li>
									<button onClick={onClickAgent}>Agent</button>
								</li>
							</>
						)}
						{/* Donar */}
						{accessToken !== null && userInfo[0]?.user_type === 'D' && (
							<>
								<li>
									<button onClick={onClickDonation}>Donation</button>
								</li>
							</>
						)}

						<li>
							<button onClick={onClickAboutUs}>About Us</button>
							{/* <AnchorLink href="#about">About Us</AnchorLink> */}
						</li>

						<li>
							<button onClick={onClickContactUs}>Contact Us</button>
							{/* <a href="#contact">Contact Us</a> */}
							{/* <AnchorLink href="#contact">Contact Us</AnchorLink> */}
						</li>

						{/* theme */}
						<li tabIndex={0}>
							<button>
								Theme
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</button>
							<ul className="p-2">{menuItems}</ul>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					{!accessToken && (
						<button
							className="btn btn-primary"
							onClick={onClickRegister}
						>
							Register
						</button>
					)}

					{/* if access token available then display Logout button else display login button */}
					{accessToken ? (
						<button
							className="btn btn-primary mx-1"
							onClick={onClickLogout}
						>
							Logout
						</button>
					) : (
						<button
							className="btn btn-primary mx-1"
							onClick={onClickLogin}
						>
							Login
						</button>
					)}
					<a
						href="http://127.0.0.1:8000/admin/"
						// href="https://api.fooddonation.amalbabudev.in/admin/"
						target="_blank"
						rel="noreferrer"
						className="btn btn-outline btn-primary mx-1 hidden lg:flex"
					>
						GO TO ADMIN DASHBOARD
					</a>
				</div>
			</div>
		</>
	);
};

export default Navbar;
