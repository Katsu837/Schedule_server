import React from 'react';
import {useSelector} from "react-redux";
import style from './profile&settings.module.css'
const Profile = () => {

    const {settingsWindowStatus} = useSelector(state => state.settings)
    return (
        <div className={style.profile} hidden={!settingsWindowStatus}>
            ПРОФИЛЬ
        </div>
    );
};

export default Profile;