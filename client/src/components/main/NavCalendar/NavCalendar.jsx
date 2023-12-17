import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../store/date/date.slice.js";
import style from './navCalendar.module.css'
import rightArrow from '../../../image/rightArrow.png'
import leftArrow from '../../../image/leftArrow.png'
import GridOfMonth from "./GridOfMonth.jsx";

const NavCalendar = () => {
    const listOfMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const listOfDaysOfWeek = [
        {id: 0, name: "Mo"},
        {id: 1, name: "Tu"},
        {id: 2, name: "We"},
        {id: 3, name: "Th"},
        {id: 4, name: "Fr"},
        {id: 5, name: "Sa"},
        {id: 6, name: "Su"}
    ]

    const {month, year} = useSelector(state => state.date)
    const dispatch = useDispatch()

    function setNextMonth() // функция переключения месяца на следующий
    {
        dispatch(actions.setMonth(1))
    }

    function setPreviousMonth() // функция переключения месяца на предыдущий
    {
        dispatch(actions.setMonth(-1))
    }


    return (
        <div className={style.navCalendar}>
            <div className={style.firstLine}>
                <button className={style.button} onClick={setPreviousMonth}><img className={style.arrow} src={leftArrow} alt="Previous"/></button>
                <a>{listOfMonths[month]} {year}</a>
                <button className={style.button} onClick={setNextMonth}><img className={style.arrow} src={rightArrow} alt="Next"/></button>
            </div>

            <div className={style.daysOfTheWeek}>
                {listOfDaysOfWeek.map(day => (
                    <a key={day.id}>{day.name}</a>
                ))}
            </div>

            <GridOfMonth/>
        </div>
    );
};

export default NavCalendar;