import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    language: "eng", // язык
    theme: "light", // тема
    notificationSlider: true, // возможность изменять размер блока уведомелений
    settingsWindowStatus: false // статус окна с настройками (открыто - true, закрыто - false)
}
export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeStatus: (state, {payload}) => {
            state.settingsWindowStatus = !state.settingsWindowStatus
        }
        // остальные редьюсеры
    }
})

export const {actions, reducer} = settingsSlice
