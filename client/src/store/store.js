import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as dateReducer} from "./date/date.slice.js";
import {reducer as notificationReducer} from "./notification/notification.slice.js"
import {reducer as settingsReducer} from "./settings/settings.slice.js"


const rootReducer = combineReducers({
    date: dateReducer,
    notification: notificationReducer,
    settings: settingsReducer,
})
export const store = configureStore({
        reducer: rootReducer
})