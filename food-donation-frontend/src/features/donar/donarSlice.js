import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    donations: [],

}

const donarSlice = createSlice({
    name: 'donar',
    initialState,
    reducers: {
        setDonations: (state, action) => {
            state.donations=action.payload
        }
    }
});

export const { setDonations } = donarSlice.actions

export const selectDonations = (state) => state.donar.donations

export default donarSlice.reducer