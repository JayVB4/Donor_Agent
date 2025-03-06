import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAccessToken, selectUserInfo } from '../../features/auth/authUserSlice';
import axiosInstance from '../../features/auth/axios';
import { AGENT_ORDER_API, FAILED, IDLE, LOADING, SUCCESS } from '../../apis';
import { toast } from 'react-toastify';
import { fetchOrders, getFetchOrdersError, getFetchOrdersStatus, setAgentOrders } from '../../features/agent/agentSlice';

const Agent = () => {

    const accessToken = useSelector(selectAccessToken);
    // const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch()

    useEffect(() => {
        fetchOrders()
    }, [])


// fetching orders, FIXME:the problem is its redundant
    const fetchOrders = async () => {
        await axiosInstance.get(AGENT_ORDER_API)
            .then((response) => {
                console.log("fetched order", response.data)
                dispatch(setAgentOrders(response.data))
                return response.data

            })
            .catch((err) => {
                console.log(err)
                toast.error('Cant fetch, Login with agent account, or contact custer care !')
                toast.error(err.message)
            })
    }

    return (
        <div id='agent' className='h-screen'>
            {accessToken ? (
                <Outlet />
            ) : (
                <div>
                    <p>-</p>
                    <p className="mt-10 text-red-600 p-10 font-bold">Not an agent, Please login with your agent account !</p>
                </div>
            )}
        </div>
    );
}

export default Agent