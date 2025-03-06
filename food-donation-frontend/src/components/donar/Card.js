import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from '../../features/auth/authUserSlice'
import axiosInstance from '../../features/auth/axios'
import { AGENT_ORDER_API, DONATION_API } from '../../apis'
import { toast } from 'react-toastify'
const Card = ({ donation }) => {

    const booked_date = new Date(donation.post_at).getDate();
    const booked_month = new Date(donation.post_at).getMonth();
    const booked_year = new Date(donation.post_at).getFullYear();
    const booked_hour = new Date(donation.post_at).getHours();
    const booked_minute = new Date(donation.post_at).getMinutes();

    const posted_at =
        booked_hour +
        ':' +
        booked_minute +
        ' (' +
        booked_date +
        '/' +
        booked_month +
        '/' +
        booked_year +
        ')';

    const userInfo = useSelector(selectUserInfo)
    const food_type = donation?.food_type
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    let food_t = ''
    if (food_type === 'N') {
        food_t = 'Non Veg'
    }
    else {
        food_t = 'Veg'
    }
    const food_details = donation?.food_name + ', ' + food_t
    // FIXME: fix this complex process in future
    // donation.user is email of user, don't change it, this email used to send email notification to donar after booked by an agent
    const donar_details = donation?.user + ', ' + donation.address
    const donar_contact = donation?.contact

    const onClickBook = async () => {
        setLoading(true)
        toast.info("It will take some time, please wait")
        await axiosInstance.post(AGENT_ORDER_API, {
            "food_details": food_details,
            "donar_details": donar_details,
            "donar_contact": donar_contact
        })

            .then((response) => {
                console.log('booking', response.data)
                toast.success('Successfully Booked')
                updateIsBookedStatus()
                // fetchDonations()

            })
            .catch((err) => {
                console.log('book error', err)
                toast.error('Booking failed')
                setLoading(false)

            })
    }

    const updateIsBookedStatus = async () => {
        await axiosInstance.put(`${DONATION_API}${donation.id}/`, {
            is_booked: true
        })
            .then((response) => {
                console.log('update is_booked', response.data)
                toast.success('is_booked Status updated', { hideProgressBar: true })


            })
            .catch((err) => {
                console.log("update status  book error", err)
                toast.err("Can't update the status, Please contact to admin!")
            })
    }

    // FIXME: same code used in diff component fix this later  with single code
    // const fetchDonations = async () => {
    //     await axiosInstance
    //         .get(DONATION_API)
    //         .then((response) => {
    //             console.log('donation', response.data);
    //             dispatch(setDonations(response.data));
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             toast.error('Something went wrong!, cant fetch donation list');
    //         });
    // };




    return (
        <div className="card w-96 shadow-xl bg-base-100">
            <div className="card-body">
                <h2 className="card-title">{donation?.food_name}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}

                        <tbody>
                            <tr>
                                <th>Donation ID</th>
                                <td>{donation?.id}</td>

                            </tr>
                            <tr className='active'>
                                <th>Food name</th>
                                <td>{donation?.food_name}</td>

                            </tr>


                            <tr >
                                <th>Food type</th>
                                {(donation?.food_type === 'V') && <td> Veg </td>}
                                {(donation?.food_type === 'N') && <td> Non-Veg </td>}
                            </tr>

                            <tr className='active'>
                                <th>Address</th>
                                <td>{donation.address}</td>

                            </tr>
                            <tr >
                                <th>Contact</th>
                                <td>{donation.contact}</td>

                            </tr>
                            <tr className='active'>
                                <th>Donar</th>
                                <td>{donation.user}</td>

                            </tr>
                            <tr >
                                <th>Posted at</th>
                                <td>{posted_at}</td>

                            </tr>
                            <tr className='active'>
                                <th>Is Booked</th>
                                {(donation?.is_booked) && <td> Booked </td>}
                                {(!donation?.is_booked) && <td> Not Booked </td>}

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div>
                    {
                        (userInfo[0]?.user_type === 'A' && !donation?.is_booked) && <button onClick={onClickBook} disabled={loading} className='btn btn-outline btn-primary m-1'>Book </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card