import React from 'react';
import Carousel from '../home/Carousel';

const Contact = () => {
	return (
		<div id='contact'>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<Carousel />
					<div>
						<div className="card  bg-base-100 shadow-xl">
							<div className="card-body">
								<h2 className="card-title ">Contact Us</h2>
								<div className="p-1 ml-2">
									{' '}
									<p>
										<a
											className="font-bold font-mono"
											href="tel:9876543210"
										>
											(+91) 9876543210
										</a>
									</p>
									<p>
										<a
											className="font-bold font-mono"
											href="mailto:aleenasuja2018@gmail.com"
										>
											aleenasuja2018@gmail.com
										</a>
									</p>
								</div>
								<iframe
									src="https://docs.google.com/forms/d/e/1FAIpQLScasORT-P3GG6iLlFeXgv9bChOsUCnHRIIhwx6MIn9tigseuQ/viewform?embedded=true"
									width="640"
									height="403"
									frameBorder="0"
									marginHeight="0"
									marginWidth="0"
								>
									Loading…
								</iframe>
								<div className="card-actions justify-end"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
