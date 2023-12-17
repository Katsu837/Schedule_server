import React from 'react';
import {useSelector} from "react-redux";
import style from "./profile&settings.module.css";

const Settings = () => {

    const {settingsWindowStatus} = useSelector(state => state.settings)
    return (
        <div className={style.settings} hidden={!settingsWindowStatus}>
            НАСТРОЙКИ
        </div>
    );
};

export default Settings;