import React, {useState} from 'react';
import {actions} from '../../../store/settings/settings.slice'
import {useDispatch, useSelector} from "react-redux";
import style from './wondow.module.css'
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import settingPict from '../../../image/settings.png'

const Window = () => {
    const dispatch = useDispatch()
    const {settingsWindowStatus} = useSelector(state => state.settings)

    const openWindow = () => {
        dispatch(actions.changeStatus())
    }

    return (
        <div className={settingsWindowStatus ? style.windowOpen : style.windowClose}>
            <button className={settingsWindowStatus ? style.buttonOpen : style.buttonClose} onClick={() => openWindow()}></button>
            <Profile className={style.profile} />
            <Settings className={style.settings} />
        </div>
    );
};

export default Window;