import React from 'react';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';
// import Carousel from './Carousel';
import About from '../aboutus/About';
import Contact from '../aboutus/Contact';

const Home = () => {
	const navigate = useNavigate()
	const onClickRegister = () => {
		navigate('/register')
	}

	return (
		<><p className='-'>-</p>
			{/* <div className='w-screen' ><Carousel /></div> */}
			<div id='home' className="hero min-h-screen mt-10 " style={{ backgroundImage: `url("https://serudsindia.org/wp-content/uploads/2020/11/Donate-Money-For-Food-In-India-To-Special-Charity-Programs-1228x691.png")` }}>
				
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold mt-12 p-2">Hello there</h1>
						<p className="mb-5">Welcome to Warm Hugs, Small effort make big change!</p>
						<p className="mb-5">Our web app is designed to make it easy for you to donate your excess food. Whether you have leftover food from your kitchen, events, or restaurants, we will ensure that it reaches those who need it the most. We work with local food banks, shelters, and community organizations to ensure that your donations reach those who need it the most.</p>
						<p className="mb-5">Join us today and help make a difference in someone's life. Every little bit counts, and every meal you donate can bring comfort, hope, and warmth to someone in need. Together, we can create a better community for all.</p>
						<p className="mb-5">Donate Now - Register for a Warm Hugs account today and start making a difference in your community!</p>
						<button className="btn btn-primary" onClick={onClickRegister}>Register</button>
					</div>
				</div>
			</div>
			<About/>
			<Contact/>
			<Footer/>
		</>
	);
};

export default Home;
