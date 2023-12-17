import React from 'react';
import downArrow from '../../../image/downArrow.png'
import upArrow from '../../../image/upArrow.png'
import style from './notification.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actions} from '../../../store/notification/notification.slice'

const NotificationBlock = () => {

    const {notificationSlideStatus} = useSelector(state => state.notification)
    const dispatch = useDispatch()
    function notificationSlide () {
        dispatch(actions.changeStatus(!notificationSlideStatus))
    }

    return (
        <div className={style.notification + " " + (notificationSlideStatus ? style.big : style.small)}>
            <div className={style.nextEvent}>
                <h3 className={style.h3}>Ближайшее событие</h3>
                <p className={style.nextEvent}>Name  -  Time Date</p>
            </div>
            {/*<div className={style.notificationCounter}></div>*/}
            <div className={style.notificationContainer}>
                <p className={style.p}>notification</p>
                <p className={style.p}>notification</p>
                <p className={style.p}>notification</p>
                <p className={style.p}>notification</p>
                <p className={style.p}>notification</p>
                <p className={style.p}>notification</p>
                <p className={style.p}>notification</p>
            </div>
            <button className={style.button}><img className={style.arrow} src={notificationSlideStatus ? upArrow : downArrow} onClick={notificationSlide}/></button>
        </div>
    );
};

export default NotificationBlock;