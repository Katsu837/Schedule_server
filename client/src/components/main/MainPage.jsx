import React from 'react';
import style from './mainPage.module.css'
import {useSelector} from "react-redux";
import NavCalendar from "./NavCalendar/NavCalendar.jsx";
import NotificationBlock from "./Notification/NotificationBlock.jsx";
import Window from "./Profile&Settings/Window.jsx";

const MainPage = () => {

    const {notificationSlideStatus} = useSelector(state => state.notification)
    const {settingsWindowStatus} = useSelector(state => state.settings)

    return (
        <div className={style.mainPage + ' ' + style.def}>
            <div className={style.div + ' ' + (notificationSlideStatus ? style.notificationsBig : style.notificationsSmall)}>
                <NotificationBlock/>
            </div>
            <div className={style.div + ' ' + (notificationSlideStatus ? style.navCalendarBig : style.navCalendarSmall)}>
                <NavCalendar/>
            </div>
            <div className={style.div + ' ' + (notificationSlideStatus ? style.chatBig : style.chatSmall)} hidden='hidden'></div>
            <div className={style.search}></div>
            <div className={style.settings + ' ' + (settingsWindowStatus ? style.settingsOpen : style.settingsClose)}>
                <Window/>
            </div>
            <div className={style.calendar}></div>
        </div>
    );
};

export default MainPage;