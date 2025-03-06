import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Contact from './components/aboutus/Contact';
import About from './components/aboutus/About';
  import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import EmailActivation from './components/auth/EmailActivation';
import User from './components/user/User';
import Profile from './components/user/Profile';
import Donation from './components/donar/Donation';
import Donar from './components/donar/Donar';
import Footer from './components/footer/Footer';
import Order from './components/agent/Order';
import Agent from './components/agent/Agent';


function App() {
	return (
		<div data-theme={localStorage.getItem('theme','light')}>
			<ToastContainer />
			<BrowserRouter>
				{/* public */}
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/activate/:id/:token/" element={<EmailActivation />} />


					{/* private routs */}
					<Route path="/user" element={<User />} >
						<Route path="/user/profile" element={<Profile />} />
						

					</Route>
					<Route path="/donar" element={<Donar />} >
						<Route path="/donar/donation" element={<Donation />} />

					</Route>
					<Route path="/agent" element={<Agent />} >
						<Route path="/agent/order" element={<Order />} />

					</Route>
				</Routes>
				
			</BrowserRouter>
		</div>
	);
}

export default App;
