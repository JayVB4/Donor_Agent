import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../auth/axios';
import { AGENT_ORDER_API, FAILED, LOADING, SUCCESS } from '../../apis';

export const fetchOrders = createAsyncThunk('agent/fetchOrders', async () => {
    const response = await axiosInstance.get(AGENT_ORDER_API)
    console.log('orders', response.data)
    return response.data
})

const initialState = {
    orders: [],
    fetchOrdersStatus: null,
    fetchOrdersError: null,


}

const agentSlice = createSlice({
    name: 'agent',
    initialState,
    reducers: {
        setAgentOrders: (state, action) => {
            state.orders = action.payload

        },
        setFetchOrderStatusToNull: (state, action) => {
            state.fetchOrdersStatus = null
            state.fetchOrdersError = null
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchOrders.pending, (state, action) => {
                state.fetchOrdersStatus = LOADING
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.fetchOrdersStatus = SUCCESS
                state.orders = action.payload
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.fetchOrdersStatus = FAILED
                state.fetchOrdersError = action.error.message
            })

    }
});

export const { setAgentOrders, setFetchOrderStatusToNull } = agentSlice.actions

export const getFetchOrdersStatus=(state)=>state.agent.fetchOrdersStatus
export const getFetchOrdersError=(state)=>state.agent.fetchOrdersError

export const selectAgentOrders = (state) => state.agent.orders

export default agentSlice.reducer