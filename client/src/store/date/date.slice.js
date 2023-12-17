import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    date: new Date().getDate(),
    dayOfWeek: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
}
export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
            setMonth: (state, {payload: num}) => {
                if(num > 0){
                    if(state.month === 11) {
                        state.month = 0
                        state.year += 1
                    }
                    else state.month += 1
                } else {
                    if(state.month === 0) {
                        state.month = 11
                        state.year -= 1
                    }
                    else state.month -= 1
                }
            }
        }
})

export const {actions, reducer} = dateSlice
