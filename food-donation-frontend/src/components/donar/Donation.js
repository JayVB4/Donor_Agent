import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { selectDonations } from '../../features/donar/donarSlice';
import AddDonationModal from './AddDonationModal';
import { selectUserInfo } from '../../features/auth/authUserSlice';

const Donation = () => {
	const donations = useSelector(selectDonations);
	const userInfo = useSelector(selectUserInfo);

	let content = '';

	const user_type = userInfo[0]?.user_type;

	if (donations.length !== 0) {
		content = donations.map((donation, index) => (
			<Card
				key={index}
				donation={donation}
			/>
		));
	}

	return (
		<div>
			<p>-</p>
			{
				user_type==='D' && <AddDonationModal />
			}
			
			<div id='donation' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-3 gap-y-3 mt-10">
				{content}
			</div>
		</div>
	);
};

export default Donation;
