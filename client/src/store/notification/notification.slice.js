import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    notificationSlideStatus: false
}
export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        changeStatus: (state, {payload: status}) => {
            state.notificationSlideStatus = status
        }
    }
})

export const {actions, reducer} = notificationSlice
