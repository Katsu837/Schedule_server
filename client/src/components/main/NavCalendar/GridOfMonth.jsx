import React from "react";
import {useSelector} from "react-redux";
import style from './navCalendar.module.css'

const GridOfMonth = () => {
    
    const {date, month, year} = useSelector(state => state.date)
    
    let grid = []
    let checkDayIsToday = (new Date().toDateString() === new Date(year, month, date).toDateString())
        ? new Date().getDate()
        : null;
    let startDayOfWeek = new Date(year, month, 0).getDay()
    let countDaysInUseMonth = 33 - new Date(year, month, 33).getDate()
    let countDaysInPreviousMonth = 33 - new Date(year, month - 1, 33).getDate()

    /*
    // в зависимости от настроек (с какого дня начинается неделя) сдвигает значение
    if(startDayOfWeek === 0 && !(props.settings)) startDayOfWeek = 6;
    else if (!(props.settings)) startDayOfWeek--;
    */


    // создание сетки из 42 элементов и ее заполнение
    for (let i = 0; i < 42; i++) {
        let f = ""
        let value = 0;

        if(i < startDayOfWeek) {
            value = countDaysInPreviousMonth - startDayOfWeek + i + 1 //предыдущий месяц
            f += ' ' + style.alterMonth
        }
        else if(i >= startDayOfWeek + countDaysInUseMonth) {
            value = i - startDayOfWeek - countDaysInUseMonth + 1 // следующий месяц
            f += ' ' + style.alterMonth
        }
        else value = i - startDayOfWeek + 1 // текущий месяц

        if(checkDayIsToday !== null && i === startDayOfWeek + checkDayIsToday - 1) f += ' ' + style.today // установка флага текущего дня
        grid.push({id: i, flag: f, value: value})
    }

    return(
        <div className={style.gridOfMonth}>
            {grid.map(day => (
                <a className={style.days + " " + day.flag} key={day.id}>{day.value}</a>
            ))}
        </div>
    )
}

export default GridOfMonth;